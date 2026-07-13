
import { createBuildingLocation, createLocation } from "../../factories/world/locationsFactory.js"

export const locations = {

    locationDefaultLocation : createLocation({
        activities:["mining"],
        resources: {
        mining: [
                { id: "iron", chance: 50 }
            ],
    }
}),
    locationMainforest :createLocation( {
        id: "locationMainforest",
        name: "MainForest",
        description: "Wald der Mainregion",
        activities:[
            "mining",
            "woodcutting",
            "herbalism",
        ],
        resources:{
            mining: [
                { id: "iron", chance: 50 }
            ],
            woodcutting: [
                { id: "oak", chance: 70 }
            ]
        },
    }),
    locationSmith: createBuildingLocation({
        id: "locationSmith",
        //type: null, <- kommt durch funktionsdefault
        name: "Schmiede",
        description: "Schmiedebedarf und Werkstatt",
        activities: [

        ],
        npcs: ["npcDefaultNpc"],
        enemies: [

        ],
        quests: [

        ],
        resources:{

        },
        img : "/img/missing_artwork.png",
        modifiers: [

        ],
    }),
    locationGeneralstore: createBuildingLocation({
        id: "locationGeneralstore",
        //type: null, <- kommt durch funktionsdefault
        name: "Gemischtwaren",
        description: "Verschiedene Waren zu verkaufen",
        activities: [

        ],
        npcs: ["npcDefaultNpc"],
        enemies: [

        ],
        quests: [

        ],
        resources:{

        },
        img : "/img/missing_artwork.png",
        modifiers: [

        ],
    }),
    locationHouse: createBuildingLocation({
        name: "Haus",
        image: "img/missing_artwork.png",
    }),
    locationQuarry: createLocation({
        name: "Steinbruch",
            
        image: "img/ore/large_stone.png",
    }),       
    locationMine: createLocation({
        name: "Kupfermine",
        image: "img/mining/rock_copper.svg",
    }),        
    locationLoggingCamp: createLocation({
        name: "Normal",
        image: "img/woodcutting/normal_tree.svg",
    }),     
    locationFishPond: createLocation({
        name: "testFishPond",
    }),
    locationFoundry: createLocation({
        name: "Kupferschmelze",
        image: "img/smith/copper_bar.png"
    }),       
    locationLaboratory: createLocation({
        name:"Labor",
        image:"img/research/laboratory.png"
    }),
}          

