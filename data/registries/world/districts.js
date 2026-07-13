import { createDistrict } from "../../factories/world/districtsFactory.js";

export const districts = {

    districtDefault: createDistrict({}),
    districtTradedist: createDistrict({

        id: "districtTradedist",
        settlement: "mainCity", //?
        name: "Handelsviertel",
        description: "Das Zentrum des Handels.",
        image: "tradeDistrict.svg",
        modifiers: [
            "tradeBonus"
        ],
        npcs: [
            "npcDefaultNpc"
        ],
        events: [
            "travelingMerchant"
        ],
        locations: [
           "locationMainforest",
        ]
    }),

    //----------------------------------------------
    //              TIGRIS
    //----------------------------------------------
    districtTigrisAdministration: createDistrict({
        id: "districtTigrisAdministration",
        settlement: null, //?
        name: "Tigris ~ Regierungsbezirk",
        description: "Der sitz der Regierung",
        image: null,
        modifiers: [
            "cold"
        ],
        npcs: [
             "npcDefaultNpc"
        ],
        events: [

        ],
        locations: [
                
        ]

    }),
    districtTigrisTrade: createDistrict({
        id: "districtTigrisTrade",
        settlement: null, //?
        name: "Tigris ~ Handelsbezirk",
        description: "Alles handelbetreffende in Tigris findest du hier",
        image: null,
        modifiers: [
            "cold"
        ],
        npcs: [
            "npcDefaultNpc"
        ],
        events: [

        ],
        locations: [
            "locationSmith",
            "locationGeneralstore",
        ]

    }),
    districtTigrisHousingHighclass: createDistrict({
        id: "districtTigrisHousingHighclass",
        settlement: null, //?
        name: "Tigris ~ Wohnbezirk",
        description: "Hier wohnt der Adel",
        image: null,
        modifiers: [
            "cold"
        ],
        npcs: [
             "npcDefaultNpc"
        ],
        events: [

        ],
        locations: [
                
        ]

    }),
    districtTigrisHousingMidclass: createDistrict({
        id: "districtTigrisHousingMidclass",
        settlement: null, //?
        name: "Tigris ~ Wohnbezirk",
        description: "Hier wohnt die Mittelschicht",
        image: null,
        modifiers: [
            "cold"
        ],
        npcs: [
             "npcDefaultNpc",
             "npcDefaultNpc",
             "npcDefaultNpc",
        ],
        events: [

        ],
        locations: [
                
        ]

    }),
    districtTigrisHousingPoorclass: createDistrict({
        id: "districtTigrisHousingPoorclass",
        settlement: null, //?
        name: "Tigris ~ Wohnbezirk",
        description: "Das Armenviertel",
        image: null,
        modifiers: [
            "cold"
        ],
        npcs: [
             "npcDefaultNpc",
             "npcDefaultNpc",
             "npcDefaultNpc",
             "npcDefaultNpc",
             "npcDefaultNpc",
             "npcDefaultNpc",
        ],
        events: [

        ],
        locations: [
                
        ]

    }),
    

};
