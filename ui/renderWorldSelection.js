import { regions as regionRegistry } from "../data/registries/world/regions.js";
import {worlds as worldRegistry} from "../data/registries/world/worlds.js";
import { settlements as settlementRegistry } from "../data/registries/world/settlements.js";
import { locations as locationRegistry} from "../data/registries/world/locations.js";

export function renderWorldSelection(){

    const entry = document.getElementById("entryMidContainer");
    entry.innerHTML = ``;

    const worldContainer = document.createElement("div");
    worldContainer.className = "worldContainer";
    
    //WELT und alle regionen in ihr aufbauen
    const worldListContainer = document.createElement("div");
    worldListContainer.className = "worldListContainer";

    for (const worldID in worldRegistry) {
        const world = worldRegistry[worldID];

        const details = document.createElement("details");

        const summary = document.createElement("summary");
        summary.textContent = world.name;

        const worldOverwiev = document.createElement("div");
        worldOverwiev.innerHTML = `
        <p>${world.description}</p>
        `;
        details.appendChild(worldOverwiev);

        details.appendChild(summary);

            for (const regionID of world.regions) {
                const region = regionRegistry[regionID];

                const regionEntry = document.createElement("div");
                regionEntry.textContent = region.name;
                regionEntry.className = "regionEntry";

                regionEntry.addEventListener("click", () => {
                    renderRegionDetails(world, region);
                });

                details.appendChild(regionEntry);
            }

        worldListContainer.appendChild(details);
    }


    //Detailscontainer der region bauen
    const worldDetailsContainer = document.createElement("div");
    worldDetailsContainer.className = "worldDetailsContainer";
    worldDetailsContainer.id = "worldDetailsContainer";

    worldContainer.appendChild(worldListContainer);
    worldContainer.appendChild(worldDetailsContainer);
    entry.appendChild(worldContainer);

}

//###########################################################################################################

export function renderRegionDetails(world, region){

    const worldDetailsContainer = document.getElementById("worldDetailsContainer");
    worldDetailsContainer.innerHTML = ``;

    const regionName = document.createElement("div");
    regionName.textContent = region.name;
    regionName.className = "regionName";

    const regionDetails = document.createElement("div");
        regionDetails.className = "regionDetails";
        regionDetails.innerHTML = `
            <p>id: ${region.id}</p>
            <p>description: ${region.description}</p>
            <p>biome: ${region.biome}</p>
            <p>climate: ${region.climate}</p>
            <p>size: ${region.size}</p>
            <p>difficulty: ${region.difficulty}</p>
            <p>wealth: ${region.wealth}</p>
            <p>civilization: ${region.civilization}</p>
            <p>danger: ${region.danger}</p>
        `;


    // ===== Modifier =====

    const regionDetailsModifiers = document.createElement("div");
    regionDetailsModifiers.className = "regionDetailsModifiers";

    const modifierTitle = document.createElement("h4");
    modifierTitle.textContent = "Modifier";
    regionDetailsModifiers.appendChild(modifierTitle);

    for (const modifier of region.modifiers) {

        const modifierEntry = document.createElement("p");
        modifierEntry.textContent = modifier;
        modifierEntry.className = "modifierEntry";

        regionDetailsModifiers.appendChild(modifierEntry);
    }

    regionDetails.appendChild(regionDetailsModifiers);


    // ===== Siedlungen =====

    const regionDetailsSettlements = document.createElement("div");
    regionDetailsSettlements.className = "regionDetailsSettlements";

    const settlementTitle = document.createElement("h4");
    settlementTitle.textContent = "Settlements";
    regionDetailsSettlements.appendChild(settlementTitle);

    for (const settlementID of region.settlements) {

        const settlement = settlementRegistry[settlementID];

        const settlementEntry = document.createElement("p");
        settlementEntry.textContent = settlement.name;
        settlementEntry.className = "settlementEntry";

        settlementEntry.addEventListener("click", () => {
                    console.log(settlement);
                });

        regionDetailsSettlements.appendChild(settlementEntry);
    }

regionDetails.appendChild(regionDetailsSettlements);


// ===== Locations =====

const regionDetailsLocations = document.createElement("div");
regionDetailsLocations.className = "regionDetailsLocations";

const locationTitle = document.createElement("h4");
locationTitle.textContent = "Locations";
regionDetailsLocations.appendChild(locationTitle);

    for (const locationID of region.locations) {

        const location = locationRegistry[locationID];

        const locationEntry = document.createElement("p");
        locationEntry.textContent = location.name;
        locationEntry.className = "locationEntry";

        locationEntry.addEventListener("click", () => {
                    console.log(location);
                });

        regionDetailsLocations.appendChild(locationEntry);
    }

regionDetails.appendChild(regionDetailsLocations);

    worldDetailsContainer.appendChild(regionName);
    worldDetailsContainer.appendChild(regionDetails);

}