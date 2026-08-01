import { regions as regionRegistry } from "../data/registries/world/regions.js";
import {worlds as worldRegistry} from "../data/registries/world/worlds.js";
import { settlements as settlementRegistry } from "../data/registries/world/settlements.js";
import { locations as locationRegistry} from "../data/registries/world/locations.js";
import { districts as districtRegistry  } from "../data/registries/world/districts.js";
import { npcs as npcRegistry  } from "../data/registries/characters/npcs.js";

import { getCurrentViewPath } from "../systems/getCurrentViewPath.js";


export function renderWorldStructure(){

    const entry = document.getElementById("entryMidContainer");
    entry.innerHTML = ``;

    const worldContainer = document.createElement("div");
    worldContainer.className = "worldContainer";
    worldContainer.id = "worldContainer";

    const worldListContainer = document.createElement("div");
    worldListContainer.className = "worldListContainer";
    worldListContainer.id = "worldListContainer";
    worldListContainer.textContent = "test";

    const worldRegionContainer = document.createElement("div");
    worldRegionContainer.className = "worldRegionContainer";
    worldRegionContainer.id = "worldRegionContainer";
    worldRegionContainer.textContent = "test";

    const worldRegionDetailsContainer = document.createElement("div");
    worldRegionDetailsContainer.className = "worldRegionDetailsContainer";
    worldRegionDetailsContainer.id = "worldRegionDetailsContainer";
    worldRegionDetailsContainer.textContent = "test";

    const worldRegionDistrictContainer = document.createElement("div");
    worldRegionDistrictContainer.className = "worldRegionDistrictContainer";
    worldRegionDistrictContainer.id = "worldRegionDistrictContainer";
    worldRegionDistrictContainer.textContent = "test";

    worldContainer.appendChild(worldListContainer);
    worldContainer.appendChild(worldRegionContainer);
    worldContainer.appendChild(worldRegionDetailsContainer);
    worldContainer.appendChild(worldRegionDistrictContainer);

    entry.appendChild(worldContainer);
}

export function renderWorldSelection(game){

    const worldListContainer = document.getElementById("worldListContainer");

    worldListContainer.innerHTML = ``;

    for (const worldID in worldRegistry) {

        const world = worldRegistry[worldID];

        const details = document.createElement("details");

        const summary = document.createElement("summary");
        summary.textContent = world.name;

        const worldOverview = document.createElement("div");
        worldOverview.innerHTML = `
            <p>${world.description}</p>
        `;

        details.appendChild(summary);
        details.appendChild(worldOverview);

        for (const regionID of world.regions) {

            const region = regionRegistry[regionID];

            const regionEntry = document.createElement("div");
            regionEntry.textContent = region.name;
            regionEntry.className = "regionEntry";

            regionEntry.addEventListener("click", () => {

                game.ui.viewPath.length = 0;

                game.ui.viewPath.push(world.id);
                game.ui.viewPath.push(region.id);

                getCurrentViewPath(game);

                renderRegionDetails(game, world, region);
            });

            details.appendChild(regionEntry);
        }

        worldListContainer.appendChild(details);
    }
}

//###########################################################################################################

export function renderRegionDetails(game, world, region){

    const worldRegionContainer = document.getElementById("worldRegionContainer");
    worldRegionContainer.innerHTML = "";

    const regionName = document.createElement("div");
    regionName.className = "regionName";

    const regionIcon = document.createElement("img");
    regionIcon.src = region.icon;
    regionIcon.alt = region.name;
    regionIcon.className = "regionIcon";

    const regionTitle = document.createElement("span");
    regionTitle.textContent = region.name;

    regionName.appendChild(regionIcon);
    regionName.appendChild(regionTitle);


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

        const settlementEntry = document.createElement("div");
        settlementEntry.className = "settlementEntry";

        const settlementIcon = document.createElement("img");
        settlementIcon.src = settlement.icon;
        settlementIcon.alt = settlement.name;
        settlementIcon.className = "settlementIcon";

        const settlementName = document.createElement("span");
        settlementName.textContent = settlement.name;
        settlementName.className = "settlementName";

        settlementEntry.appendChild(settlementIcon);
        settlementEntry.appendChild(settlementName);

        settlementEntry.addEventListener("click", () => {

            game.ui.viewPath.splice(2);
            game.ui.viewPath.push(settlement.id);
            getCurrentViewPath(game);

            renderSettlementDetails(game,world,region,settlement);

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

        const locationEntry = document.createElement("div");
        locationEntry.className = "locationEntry";

        const locationIcon = document.createElement("img");
        locationIcon.src = location.icon;
        locationIcon.alt = location.name;
        locationIcon.className = "locationIcon";

        const locationName = document.createElement("span");
        locationName.textContent = location.name;
        locationName.className = "locationName";

        locationEntry.appendChild(locationIcon);
        locationEntry.appendChild(locationName);

        locationEntry.addEventListener("click", () => {

            game.ui.viewPath.splice(2);
            game.ui.viewPath.push(location.id);
            getCurrentViewPath(game);

            renderLocationDetails(game,world,region,location);

        });

        regionDetailsLocations.appendChild(locationEntry);
    }

    regionDetails.appendChild(regionDetailsLocations);

    // Einfügen in mittleren Container

    worldRegionContainer.appendChild(regionName);
    worldRegionContainer.appendChild(regionDetails);

    const worldRegionDetailsContainer = document.getElementById(
        "worldRegionDetailsContainer"
    );

    worldRegionDetailsContainer.innerHTML = "";

}

export function renderSettlementDetails(game, world, region, settlement){
    const entry = document.getElementById("worldRegionDetailsContainer");
    entry.innerHTML = ``;
    
    const settlementnName = document.createElement("div");
    settlementnName.className = "settlementnName";

    const settlementIcon = document.createElement("img");
    settlementIcon.src = settlement.icon;
    settlementIcon.alt = settlement.name;
    settlementIcon.className = "settlementDetailsIcon";

    const settlementTitle = document.createElement("span");
    settlementTitle.textContent = settlement.name;

    settlementnName.appendChild(settlementIcon);
    settlementnName.appendChild(settlementTitle);


    const settlementDetails = document.createElement("div");
    settlementDetails.className = "settlementDetails";
    settlementDetails.innerHTML = `
        <p>id: ${settlement.id}</p>
        <p>description: ${settlement.description}</p>
        
        <p>type: ${settlement.type}</p>
        <p>population: ${settlement.population}</p>
        
        <p>wealth: ${settlement.wealth}</p>
        <p>faction: ${settlement.faction}</p>
        <p>sicherheit: ${settlement.sicherheit}</p>
    
    `;

    //NPC´s SETTLEMENT
    const settlementNpcs = document.createElement("div");
    settlementNpcs.className = "settlementNpcs";

    const npcsTitle = document.createElement("h4");
    npcsTitle.textContent = "NPC´s";

    settlementNpcs.appendChild(npcsTitle);

        for (const npcID of settlement.npcs) {

            const npc = npcRegistry[npcID];

            const npcRow = document.createElement("div");
            npcRow.className = "npcRow";

            const settlementNpcIcon = document.createElement("img");
            settlementNpcIcon.src = npc.icon;
            settlementNpcIcon.alt = npc.name;
            settlementNpcIcon.className = "settlementNpcIcon";

            const npcEntry = document.createElement("span");
            npcEntry.textContent = npc.name;
            npcEntry.className = "npcEntry";

            npcRow.appendChild(settlementNpcIcon);
            npcRow.appendChild(npcEntry);

            settlementNpcs.appendChild(npcRow);
        }

settlementDetails.appendChild(settlementNpcs);

    //MODIFIERS SETTLEMENT
    const settlementModifiers = document.createElement("div");
    settlementModifiers.className = "settlementModifiers";

    const modifierTitle = document.createElement("h4");
    modifierTitle.textContent = "Modifiers";

    settlementModifiers.appendChild(modifierTitle);

        for (const modifierID in settlement.modifiers) {

            const modifier = settlement.modifiers[modifierID];

            const modifierEntry = document.createElement("p");
            modifierEntry.textContent = modifier;
            modifierEntry.className = "modifierEntry";

            settlementModifiers.appendChild(modifierEntry);
        }

    settlementDetails.appendChild(settlementModifiers);

    //DISTRICTS SETTLEMENT
const settlementDistricts = document.createElement("div");
settlementDistricts.className = "settlementDistricts";

const districtTitle = document.createElement("h4");
districtTitle.textContent = "Distrikte";

settlementDistricts.appendChild(districtTitle);

for (const districtID of settlement.districts) {

    const district = districtRegistry[districtID];

    const districtRow = document.createElement("div");
    districtRow.className = "districtRow";

    const districtIcon = document.createElement("img");
    districtIcon.src = district.icon;
    districtIcon.alt = district.name;
    districtIcon.className = "districtIcon";

    const districtEntry = document.createElement("span");
    districtEntry.textContent = district.name;
    districtEntry.className = "districtEntry";

    districtRow.appendChild(districtIcon);
    districtRow.appendChild(districtEntry);

    districtRow.addEventListener("click", () => {

            // game.ui.viewPath.splice(2);
            // game.ui.viewPath.push(settlement.id);
            // getCurrentViewPath(game);

            renderDistrictDetails(game, world, region, settlement, district);

        });

    settlementDistricts.appendChild(districtRow);

}

settlementDetails.appendChild(settlementDistricts);

    //LOCATIONS SETTLEMENT
    const settlementLocations = document.createElement("div");
    settlementLocations.className = "settlementLocations";

    const locationTitle = document.createElement("h4");
    locationTitle.textContent = "Locations";

    settlementLocations.appendChild(locationTitle);

        for (const locationID in settlement.locations) {

            const location = settlement.locations[locationID];

            const locationEntry = document.createElement("p");
            locationEntry.textContent = location;
            locationEntry.className = "locationEntry";

            settlementLocations.appendChild(locationEntry);

            //SOMETHING IN LOCATIONS??? ACTIVITIES?? NPCS ??
        }

    settlementDetails.appendChild(settlementLocations);
    
    //QUEST´s SETTLEMENT
    const settlementQuests = document.createElement("div");
    settlementQuests.className = "settlementQuests";

    const questTitle = document.createElement("h4");
    questTitle.textContent = "Quests";

    settlementQuests.appendChild(questTitle);

        for (const questID in settlement.quests) {

            const quest = settlement.quests[questID];

            const questEntry = document.createElement("p");
            questEntry.textContent = quest;
            questEntry.className = "questEntry";

            settlementQuests.appendChild(questEntry);

            //SOMETHING IN LOCATIONS??? ACTIVITIES?? NPCS ??
        }

    settlementDetails.appendChild(settlementQuests);

    entry.appendChild(settlementnName);
    entry.appendChild(settlementDetails);

}

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

export function renderDistrictDetails(game, world, region, settlement, district){

    const entry = document.getElementById("worldRegionDistrictContainer");
    entry.innerHTML = ``;
    
    const districtName = document.createElement("div");
    districtName.className = "districtName";

    const districtIcon = document.createElement("img");
    districtIcon.src = district.icon;
    districtIcon.alt = district.name;
    districtIcon.className = "districtIcon";

    const districtTitle = document.createElement("span");
    districtTitle.textContent = district.name;

    districtName.appendChild(districtIcon);
    districtName.appendChild(districtTitle);


    // const settlementDetails = document.createElement("div");
    // settlementDetails.className = "settlementDetails";
    // settlementDetails.innerHTML = `
    //     <p>id: ${settlement.id}</p>
    //     <p>description: ${settlement.description}</p>
        
    //     <p>type: ${settlement.type}</p>
    //     <p>population: ${settlement.population}</p>
        
    //     <p>wealth: ${settlement.wealth}</p>
    //     <p>faction: ${settlement.faction}</p>
    //     <p>sicherheit: ${settlement.sicherheit}</p>
    
    // `;const entry = document.getElementById("worldRegionDetailsContainer");
    // entry.innerHTML = ``;
    
    // const settlementnName = document.createElement("div");
    // settlementnName.className = "settlementnName";

    // const settlementIcon = document.createElement("img");
    // settlementIcon.src = settlement.icon;
    // settlementIcon.alt = settlement.name;
    // settlementIcon.className = "settlementDetailsIcon";

    // const settlementTitle = document.createElement("span");
    // settlementTitle.textContent = settlement.name;

    // settlementnName.appendChild(settlementIcon);
    // settlementnName.appendChild(settlementTitle);


    // const settlementDetails = document.createElement("div");
    // settlementDetails.className = "settlementDetails";
    // settlementDetails.innerHTML = `
    //     <p>id: ${settlement.id}</p>
    //     <p>description: ${settlement.description}</p>
        
    //     <p>type: ${settlement.type}</p>
    //     <p>population: ${settlement.population}</p>
        
    //     <p>wealth: ${settlement.wealth}</p>
    //     <p>faction: ${settlement.faction}</p>
    //     <p>sicherheit: ${settlement.sicherheit}</p>
    
    // `;
    
    entry.appendChild(districtName);

}