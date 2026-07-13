
import { createSettlement } from "../../factories/world/settlementsFactory.js"

export const settlements = {
    defaultCity2:createSettlement({name:"def2"}),
    defaultCity: {
        id: "defaultcity",
        name: "Defaultcity",
        description: "Die stadt des Architekten um die Welt zu testen",
        type: "",
        population: 1,
        img:"TESTIMG.png",
        wealth: 1,
        faction: "architekt",
        sicherheit: 100,
        npcs:[

        ],
        modifiers:[

        ],
        districts: [
            "districtTradedist",
            "districtDefault",
            
        ],
        locations:[
            "locationMainforest"
        ]
    },
    mainCity: {
        id: "mainCity",
        name: "Maincity",
        description: "Die stadt des Architekten - MainCity",
        type: "",
        population: 1,
        img:"TESTIMG.png",
        wealth: 1,
        faction: "architekt",
        sicherheit: 100,
        npcs:[

        ],
        modifiers:[

        ],
        districts: [
            "districtTradedist"
        ],
        locations:[
            "locationMainforest"

        ]
    },
    testCity: {
        id: "testCity",
        name: "Testcity",
        description: "Die stadt des Architekten - MainCity",
        type: "",
        population: 1,
        img:"TESTIMG.png",
        wealth: 1,
        faction: "architekt",
        sicherheit: 100,
        npcs:[

        ],
        modifiers:[

        ],
        districts: [
            "districtTradedist"
        ],
        locations:[
            "locationMainforest"
        ]
    },

    settlementTigris: createSettlement({
        id: "settlementTigris",
        name: "Tigris ~ Hauptstadt",
        description: "Was es hier nicht gibt gibt es nirgendwo",
        type: "capital",
        population: 1000000,
        img: "TESTIMG.png",
        wealth: "rich",
        faction: "architekt",
        sicherheit: 100,
        npcs: ["npcDefaultNpc"],
        modifiers: ["cold"],
        districts: [
            "districtTigrisAdministration",
            "districtTigrisTrade",
            "districtTigrisHousingHighclass",
            "districtTigrisHousingMidclass",
            "districtTigrisHousingPoorclass",
         ],
        locations: [
                
        ],
        quests: [

        ],
    },),    
}

