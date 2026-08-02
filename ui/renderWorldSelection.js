import { regions as regionRegistry } from "../data/registries/world/regions.js";
import {worlds as worldRegistry} from "../data/registries/world/worlds.js";
import { settlements as settlementRegistry } from "../data/registries/world/settlements.js";
import { locations as locationRegistry} from "../data/registries/world/locations.js";
import { districts as districtRegistry  } from "../data/registries/world/districts.js";
import { npcs as npcRegistry  } from "../data/registries/characters/npcs.js";

import { getCurrentViewPath } from "../systems/getCurrentViewPath.js";

/**
 * Creates a DOM element with optional className, text content, HTML content, attributes, and children.
 * 
 * @param {string} tag - The HTML tag name (e.g., 'div', 'span', 'button')
 * @param {Object} options - Configuration object
 * @param {string} [options.className] - CSS class name(s) to apply
 * @param {string} [options.text] - Text content for the element
 * @param {string} [options.html] - HTML content for the element
 * @param {Object} [options.attrs={}] - Key-value pairs of HTML attributes
 * @param {Array<HTMLElement>} [children=[]] - Array of child elements to append
 * @returns {HTMLElement} The created DOM element
 * 
 * @example
 * // Create a simple div with class and text
 * const div = element('div', { className: 'container', text: 'Hello World' });
 * 
 * @example
 * // Create a link with attributes and children
 * const link = element('a', 
 *   { text: 'Click me', attrs: { href: '/page', target: '_blank' } },
 *   [element('span', { className: 'icon' })]
 * );
 */
function element(tag, { className, text, html, attrs = {} } = {}, children = []) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  if (html !== undefined) e.innerHTML = html;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  for (const child of children) if (child) e.appendChild(child);
  return e;
}

/**
 * Creates a pane (div container) with optional placeholder text.
 * 
 * @param {string} id - The unique ID for the pane
 * @param {string} className - CSS class name for styling
 * @param {string} [placeholder=''] - Placeholder text to display initially
 * @returns {HTMLElement} A div element configured as a pane
 * 
 * @example
 * const pane = makePane('mainPanel', 'panel-style', 'Loading...');
 * document.body.appendChild(pane);
 */
function makePane(id, className, placeholder = '') {
  const node = element('div', { className, attrs: { id } });
  if (placeholder) node.textContent = placeholder;
  return node;
}

/**
 * Retrieves an item from a registry by ID.
 * Logs a warning if the item is not found.
 * 
 * @param {Object} registry - The registry object containing items by ID
 * @param {string|number} id - The ID of the item to retrieve
 * @returns {Object|null} The registry item or null if not found
 * 
 * @example
 * const region = getFromRegistry(regionRegistry, 'forest_01');
 * if (region) {
 *   console.log(region.name); // 'Enchanted Forest'
 * }
 */
function getFromRegistry(registry, id) {
  const item = registry?.[id];
  if (!item) console.warn(`Missing registry item: ${id}`);
  return item || null;
}

/**
 * Updates the game's view path (breadcrumb navigation) and triggers path calculation.
 * 
 * @param {Object} game - The game state object
 * @param {string} game.ui - The UI state container
 * @param {Array<string>} game.ui.viewPath - The current navigation path
 * @param {Array<string>} [ids=[]] - Array of IDs representing the navigation path
 * @returns {void}
 * 
 * @example
 * // Navigate to: World -> Region -> Settlement
 * setViewPath(game, ['world_01', 'region_forest', 'settlement_village']);
 * 
 * @example
 * // Reset to root
 * setViewPath(game, []);
 */
function setViewPath(game, ids = []) {
  game.ui.viewPath.length = 0;
  for (const id of ids) game.ui.viewPath.push(id);

  getCurrentViewPath(game);
}

/**
 * Initializes the main world view structure with four container panes.
 * Creates the base layout for world/region/settlement/district navigation.
 * 
 * @returns {void}
 * 
 * @example
 * // Call once during app initialization
 * renderWorldStructure();
 * 
 * // This creates a structure like:
 * // entryMidContainer
 * // └── worldContainer
 * //     ├── worldListContainer (worlds list)
 * //     ├── worldRegionContainer (region details)
 * //     ├── worldRegionDetailsContainer (settlement details)
 * //     └── worldRegionDistrictContainer (district details)
 */
export function renderWorldStructure() {
    const entry = document.getElementById('entryMidContainer');
    if (!entry) return;
    entry.textContent = '';

    const worldContainer = element('div', { className: 'worldContainer', attrs: { id: 'worldContainer' } });

    const worldListContainer = makePane('worldListContainer', 'worldListContainer', 'test');
    const worldRegionContainer = makePane('worldRegionContainer', 'worldRegionContainer', 'test');
    const worldRegionDetailsContainer = makePane('worldRegionDetailsContainer', 'worldRegionDetailsContainer', 'test');
    const worldRegionDistrictContainer = makePane('worldRegionDistrictContainer', 'worldRegionDistrictContainer', 'test');

    worldContainer.appendChild(worldListContainer);
    worldContainer.appendChild(worldRegionContainer);
    worldContainer.appendChild(worldRegionDetailsContainer);
    worldContainer.appendChild(worldRegionDistrictContainer);

    entry.appendChild(worldContainer);
}

/**
 * Renders a clickable list of all worlds with collapsible region details.
 * Populates the worldListContainer with expandable world entries.
 * 
 * @param {Object} game - The game state object
 * @returns {void}
 * 
 * @example
 * // Initialize game structure first
 * renderWorldStructure();
 * 
 * // Then render the worlds list
 * renderWorldSelection(game);
 * 
 * // User can now:
 * // 1. Click on a world name to expand/collapse regions
 * // 2. Click on a region to view region details
 */
export function renderWorldSelection(game) {
  const worldListContainer = document.getElementById('worldListContainer');
  if (!worldListContainer) return;

  worldListContainer.textContent = '';

  const frag = document.createDocumentFragment();

  for (const world of Object.values(worldRegistry)) {

    const details = element('details');
    const summary = element('summary', { text: world.name });
    details.appendChild(summary);

    // overview using safe DOM (avoid innerHTML)
    const worldOverview = element('div', { className: 'worldOverview' });
    if (world.description) {
      worldOverview.appendChild(element('p', { text: world.description }));
    }
    details.appendChild(worldOverview);

    // region list (build sub-fragment)
    const regionsFrag = document.createDocumentFragment();
    const regionsContainer = element('div', { className: 'worldRegionsContainer' });

    // ensure world.regions is iterable
    const regionIDs = Array.isArray(world.regions) ? world.regions : [];
    for (const regionID of regionIDs) {
      const region = getFromRegistry(regionRegistry, regionID);
      if (!region) continue;

      const regionEntry = element('div', { className: 'regionEntry', text: region.name });

      // click handler: centralize viewPath changes
      regionEntry.addEventListener('click', () => {
        setViewPath(game, [world.id, region.id]);
        
        renderRegionDetails(game, world, region);
      });

      regionsFrag.appendChild(regionEntry);
    }

    regionsContainer.appendChild(regionsFrag);
    details.appendChild(regionsContainer);

    frag.appendChild(details);
  }

  worldListContainer.appendChild(frag);
}

/**
 * Renders detailed information about a selected region.
 * Displays region stats, modifiers, settlements, and locations in the worldRegionContainer.
 * 
 * @param {Object} game - The game state object
 * @param {Object} world - The world object (parent context)
 * @param {string} world.id - Unique world identifier
 * @param {Object} region - The region object to display
 * @param {string} region.id - Unique region identifier
 * @param {string} region.name - Region display name
 * @param {string} [region.icon] - URL to region icon image
 * @param {string} [region.description] - Region description text
 * @param {string} [region.biome] - Biome type (e.g., 'Forest', 'Desert')
 * @param {Array<string>} [region.modifiers] - List of region modifiers
 * @param {Array<string>} [region.settlements] - Array of settlement IDs
 * @param {Array<string>} [region.locations] - Array of location IDs
 * @returns {void}
 * 
 * @example
 * // After user clicks a region in renderWorldSelection
 * const world = worldRegistry['world_main'];
 * const region = regionRegistry['region_forest'];
 * renderRegionDetails(game, world, region);
 * 
 * // This displays:
 * // - Region header with icon and name
 * // - Region properties (biome, climate, difficulty, etc.)
 * // - Modifiers list
 * // - Clickable settlements
 * // - Clickable locations
 */
export function renderRegionDetails(game, world, region) {
    const worldRegionContainer = document.getElementById('worldRegionContainer');
    if (!worldRegionContainer) return;
    worldRegionContainer.textContent = '';

    // Header: icon + title
    const header = element('div', { className: 'regionName' }, [
        element('img', { attrs: { src: region?.icon || '', alt: region?.name || '' }, className: 'regionIcon' }),
        element('span', { text: region?.name || '' })
    ]);

    // Info list
    const regionDetails = element('div', { className: 'regionDetails' });
    const infoPairs = [
        ['id', region?.id],
        ['description', region?.description],
        ['biome', region?.biome],
        ['climate', region?.climate],
        ['size', region?.size],
        ['difficulty', region?.difficulty],
        ['wealth', region?.wealth],
        ['civilization', region?.civilization],
        ['danger', region?.danger]
    ];
    for (const [label, value] of infoPairs) {
        regionDetails.appendChild(element('p', { text: `${label}: ${value !== undefined && value !== null ? value : ''}` }));
    }

    // Modifiers
    const modifiersBox = element('div', { className: 'regionDetailsModifiers' }, [
        element('h4', { text: 'Modifiers' })
    ]);
    if (Array.isArray(region?.modifiers) && region.modifiers.length) {
        for (const mod of region.modifiers) {
            modifiersBox.appendChild(element('p', { text: mod, className: 'modifierEntry' }));
        }
    } else {
        modifiersBox.appendChild(element('p', { text: '—', className: 'modifierEmpty' }));
    }
    regionDetails.appendChild(modifiersBox);

    // Settlements
    const settlementsBox = element('div', { className: 'regionDetailsSettlements' }, [
        element('h4', { text: 'Settlements' })
    ]);

    if (Array.isArray(region?.settlements) && region.settlements.length) {
        const sFrag = document.createDocumentFragment();
        for (const settlementID of region.settlements) {
        const settlement = getFromRegistry(settlementRegistry, settlementID);
        if (!settlement) continue;

        const row = element('div', { className: 'settlementEntry' });
        row.appendChild(element('img', { attrs: { src: settlement.icon || '', alt: settlement.name || '' }, className: 'settlementIcon' }));
        row.appendChild(element('span', { text: settlement.name, className: 'settlementName' }));

        row.addEventListener('click', () => {
            setViewPath(game, [world.id, region.id, settlement.id]);
            renderSettlementDetails(game, world, region, settlement);
        });

        sFrag.appendChild(row);
        }
        settlementsBox.appendChild(sFrag);
    } else {
        settlementsBox.appendChild(element('p', { text: 'No settlements.' }));
    }
    regionDetails.appendChild(settlementsBox);

    // Locations
    const locationsBox = element('div', { className: 'regionDetailsLocations' }, [
        element('h4', { text: 'Locations' })
    ]);
    if (Array.isArray(region?.locations) && region.locations.length) {
        const lFrag = document.createDocumentFragment();
        for (const locationID of region.locations) {
        const location = getFromRegistry(locationRegistry, locationID);
        if (!location) continue;

        const row = element('div', { className: 'locationEntry' });
        row.appendChild(element('img', { attrs: { src: location.icon || '', alt: location.name || '' }, className: 'locationIcon' }));
        row.appendChild(element('span', { text: location.name, className: 'locationName' }));

        row.addEventListener('click', () => {
            setViewPath(game, [world.id, region.id, location.id]);
            renderLocationDetails(game, world, region, location);
        });

        lFrag.appendChild(row);
        }
        locationsBox.appendChild(lFrag);
    } else {
        locationsBox.appendChild(element('p', { text: 'No locations.' }));
    }
    regionDetails.appendChild(locationsBox);

    // Append to container
    worldRegionContainer.appendChild(header);
    worldRegionContainer.appendChild(regionDetails);

    // Clear the details panel to avoid stale content
    const worldRegionDetailsContainer = document.getElementById('worldRegionDetailsContainer');
    if (worldRegionDetailsContainer) worldRegionDetailsContainer.textContent = '';
}

/**
 * Renders detailed information about a selected settlement.
 * Displays settlement stats, NPCs, districts, locations, quests, and modifiers.
 * 
 * @param {Object} game - The game state object
 * @param {Object} world - The world object (parent context)
 * @param {string} world.id - Unique world identifier
 * @param {Object} region - The region object (parent context)
 * @param {string} region.id - Unique region identifier
 * @param {Object} settlement - The settlement object to display
 * @param {string} settlement.id - Unique settlement identifier
 * @param {string} settlement.name - Settlement display name
 * @param {string} [settlement.icon] - URL to settlement icon
 * @param {string} [settlement.description] - Settlement description
 * @param {string} [settlement.type] - Settlement type (e.g., 'village', 'city')
 * @param {number} [settlement.population] - Population count
 * @param {Array<string>} [settlement.npcs] - Array of NPC IDs
 * @param {Array<string>} [settlement.districts] - Array of district IDs
 * @param {Array<string>} [settlement.locations] - Array of location IDs or objects
 * @param {Array<string|Object>} [settlement.quests] - Array of quest IDs or quest objects
 * @param {Array<string>} [settlement.modifiers] - List of settlement modifiers
 * @returns {void}
 * 
 * @example
 * // After user clicks a settlement in renderRegionDetails
 * const settlement = settlementRegistry['settlement_village_01'];
 * renderSettlementDetails(game, world, region, settlement);
 * 
 * // This displays in worldRegionDetailsContainer:
 * // - Settlement header with icon and name
 * // - Settlement properties
 * // - NPCs list with icons
 * // - Districts (clickable)
 * // - Locations
 * // - Quests
 * // - Modifiers
 */
export function renderSettlementDetails(game, world, region, settlement) {
    const entry = document.getElementById('worldRegionDetailsContainer');
    if (!entry) return;
    entry.textContent = '';

    // Header: icon + name
    const header = element('div', { className: 'settlementName' }, [
        element('img', { className: 'settlementDetailsIcon', attrs: { src: settlement?.icon || '', alt: settlement?.name || '' } }),
        element('span', { text: settlement?.name || '' })
    ]);

    // Details
    const details = element('div', { className: 'settlementDetails' });
    const infoPairs = [
        ['id', settlement?.id],
        ['description', settlement?.description],
        ['type', settlement?.type],
        ['population', settlement?.population],
        ['wealth', settlement?.wealth],
        ['faction', settlement?.faction],
        ['sicherheit', settlement?.sicherheit]
    ];
    for (const [label, value] of infoPairs) {
        details.appendChild(element('p', { text: `${label}: ${value !== undefined && value !== null ? value : ''}` }));
    }

    // NPCs
    const settlementNpcs = element('div', { className: 'settlementNpcs' }, [element('h4', { text: "NPCs" })]);
    if (Array.isArray(settlement?.npcs) && settlement.npcs.length) {
        const nFrag = document.createDocumentFragment();

            for (const npcID of settlement.npcs) {
                const npc = getFromRegistry(npcRegistry, npcID);
                if (!npc) continue;
                const npcRow = element('div', { className: 'npcRow' }, [
                    element('img', { className: 'settlementNpcIcon', attrs: { src: npc.icon || '', alt: npc.name || '' } }),
                    element('span', { text: npc.name, className: 'npcEntry' })
                ]);
                // attach click if you plan to show NPC details in the future
                nFrag.appendChild(npcRow);
            }

        settlementNpcs.appendChild(nFrag);
    } else {
        settlementNpcs.appendChild(element('p', { text: 'No NPCs.' }));
    }
    details.appendChild(settlementNpcs);

    // Modifiers
    const settlementModifiers = element('div', { className: 'settlementModifiers' }, [element('h4', { text: 'Modifiers' })]);
    if (Array.isArray(settlement?.modifiers) && settlement.modifiers.length) {
        for (const mod of settlement.modifiers) {
        settlementModifiers.appendChild(element('p', { text: mod, className: 'modifierEntry' }));
        }
    } else {
        settlementModifiers.appendChild(element('p', { text: '—' }));
    }
    details.appendChild(settlementModifiers);

    // Districts
    const settlementDistricts = element('div', { className: 'settlementDistricts' }, [element('h4', { text: 'Districts' })]);
    if (Array.isArray(settlement?.districts) && settlement.districts.length) {
        const dFrag = document.createDocumentFragment();
        for (const districtID of settlement.districts) {
        const district = getFromRegistry(districtRegistry, districtID);
        if (!district) continue;

        const districtRow = element('div', { className: 'districtRow' }, [
            element('img', { className: 'districtIcon', attrs: { src: district.icon || '', alt: district.name || '' } }),
            element('span', { text: district.name, className: 'districtEntry' })
        ]);

        districtRow.addEventListener('click', () => {
            setViewPath(game, [world.id, region.id, settlement.id, district.id]);
            renderDistrictDetails(game, world, region, settlement, district);
        });

        dFrag.appendChild(districtRow);
        }
        settlementDistricts.appendChild(dFrag);
    } else {
        settlementDistricts.appendChild(element('p', { text: 'No districts.' }));
    }
    details.appendChild(settlementDistricts);

    // Locations (settlement.locations might be IDs or simple names)
    const settlementLocations = element('div', { className: 'settlementLocations' }, [element('h4', { text: 'Locations' })]);
    const locations = Array.isArray(settlement?.locations) ? settlement.locations : Object.values(settlement?.locations || {});
    if (locations.length) {
        const lFrag = document.createDocumentFragment();
        for (const locItem of locations) {
        // if it's an ID pointing to locationRegistry, resolve it
        const location = getFromRegistry(locationRegistry, locItem) || (typeof locItem === 'object' ? locItem : null);
        if (location) {
            const locationEntry = element('div', { className: 'locationEntry' }, [
            element('img', { className: 'locationIcon', attrs: { src: location.icon || '', alt: location.name || '' } }),
            element('span', { text: location.name || String(locItem) })
            ]);
            locationEntry.addEventListener('click', () => {
            setViewPath(game, [world.id, region.id, settlement.id, location.id || locItem]);
            renderLocationDetails(game, world, region, location);
            });
            lFrag.appendChild(locationEntry);
        } else {
            // fallback: show raw string value
            lFrag.appendChild(element('p', { text: String(locItem), className: 'locationEntry' }));
        }
        }
        settlementLocations.appendChild(lFrag);
    } else {
        settlementLocations.appendChild(element('p', { text: 'No locations.' }));
    }
    details.appendChild(settlementLocations);

    // Quests (display raw entries if not registry-backed)
    const settlementQuests = element('div', { className: 'settlementQuests' }, [element('h4', { text: 'Quests' })]);
    const quests = Array.isArray(settlement?.quests) ? settlement.quests : Object.values(settlement?.quests || {});
    if (quests.length) {
        const qFrag = document.createDocumentFragment();
            for (const q of quests) {
                qFrag.appendChild(element('p', { text: String(q), className: 'questEntry' }));
            }
        settlementQuests.appendChild(qFrag);
    } else {
        settlementQuests.appendChild(element('p', { text: 'No quests.' }));
    }
    details.appendChild(settlementQuests);

  // Append header + details
  entry.appendChild(header);
  entry.appendChild(details);
}

/**
 * Renders detailed information about a selected district.
 * Displays district stats, features, and NPCs in the worldRegionDistrictContainer.
 * 
 * @param {Object} game - The game state object
 * @param {Object} world - The world object (parent context)
 * @param {string} world.id - Unique world identifier
 * @param {Object} region - The region object (parent context)
 * @param {string} region.id - Unique region identifier
 * @param {Object} settlement - The settlement object (parent context)
 * @param {string} settlement.id - Unique settlement identifier
 * @param {Object} district - The district object to display
 * @param {string} district.id - Unique district identifier
 * @param {string} district.name - District display name
 * @param {string} [district.icon] - URL to district icon
 * @param {string} [district.description] - District description
 * @param {string} [district.type] - District type (e.g., 'market', 'residential')
 * @param {number} [district.population] - Population count
 * @param {Array<string>} [district.features] - List of district features
 * @param {Array<string>} [district.npcs] - Array of NPC IDs
 * @returns {void}
 * 
 * @example
 * // After user clicks a district in renderSettlementDetails
 * const district = districtRegistry['district_market_01'];
 * renderDistrictDetails(game, world, region, settlement, district);
 * 
 * // This displays in worldRegionDistrictContainer:
 * // - District header with icon and name
 * // - District properties (type, population)
 * // - Features list
 * // - NPCs in district
 */
export function renderDistrictDetails(game, world, region, settlement, district) {
  const entry = document.getElementById('worldRegionDistrictContainer');
  if (!entry) return;
  entry.textContent = '';

  // Header
  const header = element('div', { className: 'districtName' }, [
    element('img', { className: 'districtIcon', attrs: { src: district?.icon || '', alt: district?.name || '' } }),
    element('span', { text: district?.name || '' })
  ]);

  const details = element('div', { className: 'districtDetails' });
  // Basic known fields
  const infoPairs = [
    ['id', district?.id],
    ['description', district?.description],
    ['type', district?.type],
    ['population', district?.population]
  ];
  for (const [label, value] of infoPairs) {
    details.appendChild(element('p', { text: `${label}: ${value !== undefined && value !== null ? value : ''}` }));
  }

  // District modifiers / features (if any)
  const featuresBox = element('div', { className: 'districtFeatures' }, [element('h4', { text: 'Features' })]);
  if (Array.isArray(district?.features) && district.features.length) {
    for (const f of district.features) {
      featuresBox.appendChild(element('p', { text: f }));
    }
  } else {
    featuresBox.appendChild(element('p', { text: '—' }));
  }
  details.appendChild(featuresBox);

  // District NPCs
  const districtNpcs = element('div', { className: 'districtNpcs' }, [element('h4', { text: 'NPCs' })]);
  if (Array.isArray(district?.npcs) && district.npcs.length) {
    const nFrag = document.createDocumentFragment();
    for (const npcID of district.npcs) {
      const npc = getFromRegistry(npcRegistry, npcID);
      if (!npc) continue;
      nFrag.appendChild(element('div', { className: 'npcRow' }, [
        element('img', { className: 'settlementNpcIcon', attrs: { src: npc.icon || '', alt: npc.name || '' } }),
        element('span', { text: npc.name, className: 'npcEntry' })
      ]));
    }
    districtNpcs.appendChild(nFrag);
  } else {
    districtNpcs.appendChild(element('p', { text: 'No NPCs.' }));
  }
  details.appendChild(districtNpcs);

  // Append
  entry.appendChild(header);
  entry.appendChild(details);
}

/**
 * Renders detailed information about a selected location.
 * Currently displays location name; can be extended with additional details.
 * 
 * @param {Object} game - The game state object
 * @param {Object} world - The world object (parent context)
 * @param {string} world.id - Unique world identifier
 * @param {Object} region - The region object (parent context)
 * @param {string} region.id - Unique region identifier
 * @param {Object} location - The location object to display
 * @param {string} location.name - Location display name
 * @param {string} [location.id] - Unique location identifier
 * @param {string} [location.description] - Location description
 * @returns {void}
 * 
 * @example
 * // After user clicks a location
 * const location = locationRegistry['location_temple_01'];
 * renderLocationDetails(game, world, region, location);
 * 
 * // This displays in worldRegionDetailsContainer:
 * // - Location name as a heading
 * // TODO: Extend with more location details (description, NPCs, items, etc.)
 */
export function renderLocationDetails(game, world, region, location){
    const entry = document.getElementById("worldRegionDetailsContainer");
    entry.innerHTML = ``;
    
    const locationDetails = document.createElement("div");
    locationDetails.className = "locationDetails";
    
    const locationTitle = document.createElement("h4");
    locationTitle.textContent = location.name;

    locationDetails.appendChild(locationTitle);

    entry.appendChild(locationDetails);
}
