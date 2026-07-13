//REGION BESCHREIBT NUR DIE UMWELT ALSO DAS "WIE IST ES DORT WELCHE LOCATIONS GIBT ES"

import { createDesertRegion } from "../../factories/world/regionsFactory.js"
import { createMountainRegion } from "../../factories/world/regionsFactory.js"
import { createRegion } from "../../factories/world/regionsFactory.js"
import { settlements } from "./settlements.js"

export const regions = {
    defaultRegion : createRegion({settlements:["defaultCity2"]}),
    defaultMountain : createMountainRegion({description:"Defaultmountainregion",name:"Defaultmountain",npcs:["npcDefaultNpc"]}),
    defaultDesert : createDesertRegion({description:"Defaultdesertregion",name: "Defaultdesert"}),

    mainRegion: createRegion ({
        id: "mainregion",
        name: "Hauptregion",
        unlockLevel: 1,
        description: "Die Hauptregion des Architekten - Hier entsteht die Welt",
        biome: "biomForest",
        climate: "climateCold",
        size: "medium",
        difficulty: 1,
        wealth: "poor",
        civilization: "frontier",
        danger: "low",
        modifiers: [
            "cold",
            "highAltitude"
        ],
        settlements: [
            "mainCity",
            "testCity",
        ],
        locations: [
            "locationMainforest",
            
        ],
    }),
    secRegion: createRegion( {
        id: "secregion",
        name: "Secregion",
        unlockLevel: 1,
        description: "Die Secregion des Architekten - Hier vergleicht die Welt",
        biome: "biomForest",
        climate: "climateHot",
        size: "medium",
        difficulty: 1,
        wealth: "poor",
        civilization: "frontier",
        danger: "low",
        modifiers: [
            "cold",
            "highAltitude"
        ],
        settlements: [
            "mainCity",
            "testCity"
        ],
        locations: [
            "locationMainforest",
            
        ],
    }),

    regionRashar: createRegion({
        id: "regionRashar",
        name: "Rashar",
        img:"/img/missing_artwork.png",
        unlockLevel: 1,
        description: "Weite Lande Reiche Städte",
        biome: "biomPlains",
        climate: "climateCold",
        size: null,
        difficulty: 1,
        wealth: "rich",
        civilization: null,
        danger: null,
        //Array`s
        modifiers: [],
        settlements: ["settlementTigris"],
        locations: ["locationMainforest"],
        npcs: ["npcDefaultNpc","npcDefaultNpc","npcDefaultNpc"],
        enemies: [],
        quests: []
    })

    
}