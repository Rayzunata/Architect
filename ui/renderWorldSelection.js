import { regions as regionRegistry }
    from "../data/registries/world/regions.js";

import { worlds as worldRegistry }
    from "../data/registries/world/worlds.js";

import { settlements as settlementRegistry }
    from "../data/registries/world/settlements.js";

import { locations as locationRegistry }
    from "../data/registries/world/locations.js";

import { districts as districtRegistry }
    from "../data/registries/world/districts.js";

import { npcs as npcRegistry }
    from "../data/registries/characters/npcs.js";

import { getCurrentViewPath }
    from "../systems/getCurrentViewPath.js";


// ============================================================
// HELPER
// ============================================================

function element(
    tag,
    {
        className,
        text,
        html,
        attrs = {}
    } = {},
    children = []
) {
    const e = document.createElement(tag);

    if (className) {
        e.className = className;
    }

    if (text !== undefined) {
        e.textContent = text;
    }

    if (html !== undefined) {
        e.innerHTML = html;
    }

    for (const [key, value] of Object.entries(attrs)) {
        e.setAttribute(key, value);
    }

    for (const child of children) {
        if (child) {
            e.appendChild(child);
        }
    }

    return e;
}


// ============================================================
// PANE ERSTELLEN
// ============================================================

function makePane(
    id,
    className,
    placeholder = ''
) {
    const node = element(
        'div',
        {
            className,
            attrs: {
                id
            }
        }
    );

    if (placeholder) {
        node.textContent = placeholder;
    }

    return node;
}


// ============================================================
// REGISTRY HELPER
// ============================================================

function getFromRegistry(
    registry,
    id
) {
    const item = registry?.[id];

    if (!item) {
        console.warn(
            `Missing registry item: ${id}`
        );
    }

    return item || null;
}


// ============================================================
// VIEW PATH
// ============================================================

function setViewPath(
    game,
    ids = []
) {
    game.ui.viewPath.length = 0;

    for (const id of ids) {
        game.ui.viewPath.push(id);
    }

    getCurrentViewPath(game);
}


// ============================================================
// WORLD STRUCTURE
// ============================================================

export function renderWorldStructure() {

    const entry =
        document.getElementById(
            'entryMidContainer'
        );

    if (!entry) {
        return;
    }

    entry.textContent = '';


    const worldContainer =
        element(
            'div',
            {
                className: 'worldContainer',
                attrs: {
                    id: 'worldContainer'
                }
            }
        );


    const worldListContainer =
        makePane(
            'worldListContainer',
            'worldListContainer'
        );


    const worldRegionContainer =
        makePane(
            'worldRegionContainer',
            'worldRegionContainer'
        );


    worldContainer.appendChild(
        worldListContainer
    );

    worldContainer.appendChild(
        worldRegionContainer
    );


    entry.appendChild(
        worldContainer
    );
}


// ============================================================
// WORLD AUSWAHL
// ============================================================

export function renderWorldSelection(game) {

    const worldListContainer =
        document.getElementById(
            'worldListContainer'
        );

    if (!worldListContainer) {
        return;
    }

    worldListContainer.textContent = '';


    const frag =
        document.createDocumentFragment();


    for (
        const world
        of Object.values(worldRegistry)
    ) {

        // ----------------------------------------------------
        // WORLD
        // ----------------------------------------------------

        const worldDetails =
            element(
                'details',
                {
                    className: 'worldEntry'
                }
            );


        const worldSummary =
            element(
                'summary',
                {
                    className: 'worldSummary',
                    text: world.name
                }
            );


        worldDetails.appendChild(
            worldSummary
        );


        // ----------------------------------------------------
        // WORLD BESCHREIBUNG
        // ----------------------------------------------------

        const worldOverview =
            element(
                'div',
                {
                    className: 'worldOverview'
                }
            );


        if (world.description) {

            worldOverview.appendChild(
                element(
                    'p',
                    {
                        text:
                            world.description
                    }
                )
            );
        }


        worldDetails.appendChild(
            worldOverview
        );


        // ----------------------------------------------------
        // REGIONEN
        // ----------------------------------------------------

        const regionsContainer =
            element(
                'div',
                {
                    className:
                        'worldRegionsContainer'
                }
            );


        const regionIDs =
            Array.isArray(world.regions)
                ? world.regions
                : [];


        for (
            const regionID
            of regionIDs
        ) {

            const region =
                getFromRegistry(
                    regionRegistry,
                    regionID
                );


            if (!region) {
                continue;
            }


            const regionEntry =
                element(
                    'div',
                    {
                        className:
                            'regionEntry',
                        text:
                            region.name
                    }
                );


            regionEntry.addEventListener(
                'click',
                () => {

                    setViewPath(
                        game,
                        [
                            world.id,
                            region.id
                        ]
                    );


                    renderRegionHierarchy(
                        game,
                        world,
                        region
                    );
                }
            );


            regionsContainer.appendChild(
                regionEntry
            );
        }


        worldDetails.appendChild(
            regionsContainer
        );


        frag.appendChild(
            worldDetails
        );
    }


    worldListContainer.appendChild(
        frag
    );
}


// ============================================================
// REGION HIERARCHIE
// ============================================================

export function renderRegionHierarchy(
    game,
    world,
    region
) {

    const worldRegionContainer =
        document.getElementById(
            'worldRegionContainer'
        );


    if (!worldRegionContainer) {
        return;
    }


    worldRegionContainer.textContent = '';


    // ========================================================
    // REGION HEADER
    // ========================================================

    const header =
        element(
            'div',
            {
                className: 'regionName'
            },
            [
                element(
                    'img',
                    {
                        className:
                            'regionIcon',

                        attrs: {
                            src:
                                region?.icon || '',

                            alt:
                                region?.name || ''
                        }
                    }
                ),

                element(
                    'span',
                    {
                        text:
                            region?.name || ''
                    }
                )
            ]
        );


    worldRegionContainer.appendChild(
        header
    );


    // ========================================================
    // REGION DETAILS
    // ========================================================

    const regionDetails =
        element(
            'div',
            {
                className:
                    'regionDetails'
            }
        );


    const infoPairs = [

        [
            'id',
            region?.id
        ],

        [
            'description',
            region?.description
        ],

        [
            'biome',
            region?.biome
        ],

        [
            'climate',
            region?.climate
        ],

        [
            'size',
            region?.size
        ],

        [
            'difficulty',
            region?.difficulty
        ],

        [
            'wealth',
            region?.wealth
        ],

        [
            'civilization',
            region?.civilization
        ],

        [
            'danger',
            region?.danger
        ]

    ];


    for (
        const [label, value]
        of infoPairs
    ) {

        regionDetails.appendChild(

            element(
                'p',
                {
                    text:
                        `${label}: ${
                            value !== undefined &&
                            value !== null
                                ? value
                                : ''
                        }`
                }
            )
        );
    }


    // ========================================================
    // REGION MODIFIERS
    // ========================================================

    const modifiersBox =
        element(
            'div',
            {
                className:
                    'regionDetailsModifiers'
            },
            [
                element(
                    'h4',
                    {
                        text:
                            'Modifiers'
                    }
                )
            ]
        );


    if (
        Array.isArray(region?.modifiers) &&
        region.modifiers.length
    ) {

        for (
            const modifier
            of region.modifiers
        ) {

            modifiersBox.appendChild(

                element(
                    'p',
                    {
                        text:
                            modifier,

                        className:
                            'modifierEntry'
                    }
                )
            );
        }

    } else {

        modifiersBox.appendChild(

            element(
                'p',
                {
                    text:
                        '—',

                    className:
                        'modifierEmpty'
                }
            )
        );
    }


    regionDetails.appendChild(
        modifiersBox
    );


    // ========================================================
    // SETTLEMENTS
    // ========================================================

    const settlementsBox =
        element(
            'div',
            {
                className:
                    'regionDetailsSettlements'
            },
            [
                element(
                    'h4',
                    {
                        text:
                            'Settlements'
                    }
                )
            ]
        );


    if (
        Array.isArray(region?.settlements) &&
        region.settlements.length
    ) {

        const settlementsFrag =
            document.createDocumentFragment();


        for (
            const settlementID
            of region.settlements
        ) {

            const settlement =
                getFromRegistry(
                    settlementRegistry,
                    settlementID
                );


            if (!settlement) {
                continue;
            }


            // =================================================
            // EINZELNE STADT
            // =================================================

            const settlementContainer =
                element(
                    'details',
                    {
                        className:
                            'settlementContainer'
                    }
                );


            // -------------------------------------------------
            // STADT HEADER / SUMMARY
            // -------------------------------------------------

            const settlementSummary =
                element(
                    'summary',
                    {
                        className:
                            'settlementEntry'
                    },
                    [

                        element(
                            'img',
                            {
                                className:
                                    'settlementIcon',

                                attrs: {
                                    src:
                                        settlement.icon ||
                                        '',

                                    alt:
                                        settlement.name ||
                                        ''
                                }
                            }
                        ),

                        element(
                            'span',
                            {
                                text:
                                    settlement.name ||
                                    'Unnamed Settlement',

                                className:
                                    'settlementName'
                            }
                        )

                    ]
                );


            settlementContainer.appendChild(
                settlementSummary
            );


            // =================================================
            // STADT DETAILS
            // =================================================

            const settlementDetails =
                element(
                    'div',
                    {
                        className:
                            'settlementDetails'
                    }
                );


            const settlementInfoPairs = [

                [
                    'id',
                    settlement?.id
                ],

                [
                    'description',
                    settlement?.description
                ],

                [
                    'type',
                    settlement?.type
                ],

                [
                    'population',
                    settlement?.population
                ],

                [
                    'wealth',
                    settlement?.wealth
                ],

                [
                    'faction',
                    settlement?.faction
                ],

                [
                    'sicherheit',
                    settlement?.sicherheit
                ]

            ];


            for (
                const [label, value]
                of settlementInfoPairs
            ) {

                settlementDetails.appendChild(

                    element(
                        'p',
                        {
                            text:
                                `${label}: ${
                                    value !== undefined &&
                                    value !== null
                                        ? value
                                        : ''
                                }`
                        }
                    )
                );
            }


            // =================================================
            // NPCs
            // =================================================

            const settlementNpcs =
                element(
                    'div',
                    {
                        className:
                            'settlementNpcs'
                    },
                    [
                        element(
                            'h4',
                            {
                                text:
                                    'NPCs'
                            }
                        )
                    ]
                );


            if (
                Array.isArray(
                    settlement?.npcs
                ) &&
                settlement.npcs.length
            ) {

                for (
                    const npcID
                    of settlement.npcs
                ) {

                    const npc =
                        getFromRegistry(
                            npcRegistry,
                            npcID
                        );


                    if (!npc) {
                        continue;
                    }


                    const npcRow =
                        element(
                            'div',
                            {
                                className:
                                    'npcRow'
                            },
                            [

                                element(
                                    'img',
                                    {
                                        className:
                                            'settlementNpcIcon',

                                        attrs: {
                                            src:
                                                npc.icon ||
                                                '',

                                            alt:
                                                npc.name ||
                                                ''
                                        }
                                    }
                                ),

                                element(
                                    'span',
                                    {
                                        text:
                                            npc.name,

                                        className:
                                            'npcEntry'
                                    }
                                )

                            ]
                        );


                    settlementNpcs.appendChild(
                        npcRow
                    );
                }

            } else {

                settlementNpcs.appendChild(

                    element(
                        'p',
                        {
                            text:
                                'No NPCs.'
                        }
                    )
                );
            }


            settlementDetails.appendChild(
                settlementNpcs
            );


            // =================================================
            // MODIFIERS
            // =================================================

            const settlementModifiers =
                element(
                    'div',
                    {
                        className:
                            'settlementModifiers'
                    },
                    [
                        element(
                            'h4',
                            {
                                text:
                                    'Modifiers'
                            }
                        )
                    ]
                );


            if (
                Array.isArray(
                    settlement?.modifiers
                ) &&
                settlement.modifiers.length
            ) {

                for (
                    const modifier
                    of settlement.modifiers
                ) {

                    settlementModifiers.appendChild(

                        element(
                            'p',
                            {
                                text:
                                    modifier,

                                className:
                                    'modifierEntry'
                            }
                        )
                    );
                }

            } else {

                settlementModifiers.appendChild(

                    element(
                        'p',
                        {
                            text:
                                '—'
                        }
                    )
                );
            }


            settlementDetails.appendChild(
                settlementModifiers
            );


            // =================================================
            // DISTRIKTE
            // =================================================

            const settlementDistricts =
                element(
                    'div',
                    {
                        className:
                            'settlementDistricts'
                    },
                    [
                        element(
                            'h4',
                            {
                                text:
                                    'Districts'
                            }
                        )
                    ]
                );


            if (
                Array.isArray(
                    settlement?.districts
                ) &&
                settlement.districts.length
            ) {

                for (
                    const districtID
                    of settlement.districts
                ) {

                    const district =
                        getFromRegistry(
                            districtRegistry,
                            districtID
                        );


                    if (!district) {
                        continue;
                    }


                    // -----------------------------------------
                    // DISTRICT CONTAINER
                    // -----------------------------------------

                    const districtContainer =
                        element(
                            'details',
                            {
                                className:
                                    'districtContainer'
                            }
                        );


                    // -----------------------------------------
                    // DISTRICT HEADER
                    // -----------------------------------------

                    const districtSummary =
                        element(
                            'summary',
                            {
                                className:
                                    'districtRow'
                            },
                            [

                                element(
                                    'img',
                                    {
                                        className:
                                            'districtIcon',

                                        attrs: {
                                            src:
                                                district.icon ||
                                                '',

                                            alt:
                                                district.name ||
                                                ''
                                        }
                                    }
                                ),

                                element(
                                    'span',
                                    {
                                        text:
                                            district.name,

                                        className:
                                            'districtEntry'
                                    }
                                )

                            ]
                        );


                    districtContainer.appendChild(
                        districtSummary
                    );


                    // -----------------------------------------
                    // DISTRICT DETAILS
                    // -----------------------------------------

                    const districtDetails =
                        element(
                            'div',
                            {
                                className:
                                    'districtDetails'
                            }
                        );


                    const districtInfoPairs = [

                        [
                            'id',
                            district?.id
                        ],

                        [
                            'type',
                            district?.type
                        ],

                        [
                            'population',
                            district?.population
                        ]

                    ];


                    for (
                        const [label, value]
                        of districtInfoPairs
                    ) {

                        districtDetails.appendChild(

                            element(
                                'p',
                                {
                                    text:
                                        `${label}: ${
                                            value !== undefined &&
                                            value !== null
                                                ? value
                                                : ''
                                        }`
                                }
                            )
                        );
                    }


                    // -----------------------------------------
                    // FEATURES
                    // -----------------------------------------

                    const featuresBox =
                        element(
                            'div',
                            {
                                className:
                                    'districtFeatures'
                            },
                            [
                                element(
                                    'h4',
                                    {
                                        text:
                                            'Features'
                                    }
                                )
                            ]
                        );


                    if (
                        Array.isArray(
                            district?.features
                        ) &&
                        district.features.length
                    ) {

                        for (
                            const feature
                            of district.features
                        ) {

                            featuresBox.appendChild(

                                element(
                                    'p',
                                    {
                                        text:
                                            feature
                                    }
                                )
                            );
                        }

                    } else {

                        featuresBox.appendChild(

                            element(
                                'p',
                                {
                                    text:
                                        '—'
                                }
                            )
                        );
                    }


                    districtDetails.appendChild(
                        featuresBox
                    );


                    // -----------------------------------------
                    // DISTRICT NPCs
                    // -----------------------------------------

                    const districtNpcs =
                        element(
                            'div',
                            {
                                className:
                                    'districtNpcs'
                            },
                            [
                                element(
                                    'h4',
                                    {
                                        text:
                                            'NPCs'
                                    }
                                )
                            ]
                        );


                    if (
                        Array.isArray(
                            district?.npcs
                        ) &&
                        district.npcs.length
                    ) {

                        for (
                            const npcID
                            of district.npcs
                        ) {

                            const npc =
                                getFromRegistry(
                                    npcRegistry,
                                    npcID
                                );


                            if (!npc) {
                                continue;
                            }


                            districtNpcs.appendChild(

                                element(
                                    'div',
                                    {
                                        className:
                                            'npcRow'
                                    },
                                    [

                                        element(
                                            'img',
                                            {
                                                className:
                                                    'settlementNpcIcon',

                                                attrs: {
                                                    src:
                                                        npc.icon ||
                                                        '',

                                                    alt:
                                                        npc.name ||
                                                        ''
                                                }
                                            }
                                        ),

                                        element(
                                            'span',
                                            {
                                                text:
                                                    npc.name,

                                                className:
                                                    'npcEntry'
                                            }
                                        )

                                    ]
                                )
                            );
                        }

                    } else {

                        districtNpcs.appendChild(

                            element(
                                'p',
                                {
                                    text:
                                        'No NPCs.'
                                }
                            )
                        );
                    }


                    districtDetails.appendChild(
                        districtNpcs
                    );


                    districtContainer.appendChild(
                        districtDetails
                    );


                    settlementDistricts.appendChild(
                        districtContainer
                    );
                }

            } else {

                settlementDistricts.appendChild(

                    element(
                        'p',
                        {
                            text:
                                'No districts.'
                        }
                    )
                );
            }


            settlementDetails.appendChild(
                settlementDistricts
            );


            // =================================================
            // LOCATIONS
            // =================================================

            const settlementLocations =
                element(
                    'div',
                    {
                        className:
                            'settlementLocations'
                    },
                    [
                        element(
                            'h4',
                            {
                                text:
                                    'Locations'
                            }
                        )
                    ]
                );


            const locations =
                Array.isArray(
                    settlement?.locations
                )
                    ? settlement.locations
                    : Object.values(
                        settlement?.locations ||
                        {}
                    );


            if (locations.length) {

                for (
                    const locItem
                    of locations
                ) {

                    const location =
                        getFromRegistry(
                            locationRegistry,
                            locItem
                        ) ||
                        (
                            typeof locItem ===
                            'object'
                                ? locItem
                                : null
                        );


                    if (location) {

                        const locationEntry =
                            element(
                                'div',
                                {
                                    className:
                                        'locationEntry'
                                },
                                [

                                    element(
                                        'img',
                                        {
                                            className:
                                                'locationIcon',

                                            attrs: {
                                                src:
                                                    location.icon ||
                                                    '',

                                                alt:
                                                    location.name ||
                                                    ''
                                            }
                                        }
                                    ),

                                    element(
                                        'span',
                                        {
                                            text:
                                                location.name ||
                                                String(locItem)
                                        }
                                    )

                                ]
                            );


                        settlementLocations.appendChild(
                            locationEntry
                        );

                    } else {

                        settlementLocations.appendChild(

                            element(
                                'p',
                                {
                                    text:
                                        String(locItem),

                                    className:
                                        'locationEntry'
                                }
                            )
                        );
                    }
                }

            } else {

                settlementLocations.appendChild(

                    element(
                        'p',
                        {
                            text:
                                'No locations.'
                        }
                    )
                );
            }


            settlementDetails.appendChild(
                settlementLocations
            );


            // =================================================
            // QUESTS
            // =================================================

            const settlementQuests =
                element(
                    'div',
                    {
                        className:
                            'settlementQuests'
                    },
                    [
                        element(
                            'h4',
                            {
                                text:
                                    'Quests'
                            }
                        )
                    ]
                );


            const quests =
                Array.isArray(
                    settlement?.quests
                )
                    ? settlement.quests
                    : Object.values(
                        settlement?.quests ||
                        {}
                    );


            if (quests.length) {

                for (
                    const quest
                    of quests
                ) {

                    settlementQuests.appendChild(

                        element(
                            'p',
                            {
                                text:
                                    String(quest),

                                className:
                                    'questEntry'
                            }
                        )
                    );
                }

            } else {

                settlementQuests.appendChild(

                    element(
                        'p',
                        {
                            text:
                                'No quests.'
                        }
                    )
                );
            }


            settlementDetails.appendChild(
                settlementQuests
            );


            // =================================================
            // STADT DETAILS IN DETAILS
            // =================================================

            settlementContainer.appendChild(
                settlementDetails
            );


            settlementsFrag.appendChild(
                settlementContainer
            );
        }


        settlementsBox.appendChild(
            settlementsFrag
        );

    } else {

        settlementsBox.appendChild(

            element(
                'p',
                {
                    text:
                        'No settlements.'
                }
            )
        );
    }


    regionDetails.appendChild(
        settlementsBox
    );


    // ========================================================
    // REGION LOCATIONS
    // ========================================================

    const locationsBox =
        element(
            'div',
            {
                className:
                    'regionDetailsLocations'
            },
            [
                element(
                    'h4',
                    {
                        text:
                            'Locations'
                    }
                )
            ]
        );


    if (
        Array.isArray(region?.locations) &&
        region.locations.length
    ) {

        for (
            const locationID
            of region.locations
        ) {

            const location =
                getFromRegistry(
                    locationRegistry,
                    locationID
                );


            if (!location) {
                continue;
            }


            const row =
                element(
                    'div',
                    {
                        className:
                            'locationEntry'
                    },
                    [

                        element(
                            'img',
                            {
                                className:
                                    'locationIcon',

                                attrs: {
                                    src:
                                        location.icon ||
                                        '',

                                    alt:
                                        location.name ||
                                        ''
                                }
                            }
                        ),

                        element(
                            'span',
                            {
                                text:
                                    location.name,

                                className:
                                    'locationName'
                            }
                        )

                    ]
                );


            locationsBox.appendChild(
                row
            );
        }

    } else {

        locationsBox.appendChild(

            element(
                'p',
                {
                    text:
                        'No locations.'
                }
            )
        );
    }


    regionDetails.appendChild(
        locationsBox
    );


    // ========================================================
    // REGION IN CONTAINER
    // ========================================================

    worldRegionContainer.appendChild(
        regionDetails
    );
}
