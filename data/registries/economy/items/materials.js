
import { itemFactory } from "../../../factories/economy/itemFactory.js"

export const materials ={

    //-----------------------------------------------
    //                   ORE
    //-----------------------------------------------
    stoneOre: itemFactory.createOre({
        id: "stoneOre",
        name: "Stein",
        properties: {

            smeltingResult: ""
        }
    }),
    copperOre: itemFactory.createOre({
        id: "copperOre",
        name: "Kupfererz",       
        properties: {

            smeltingResult: ""
        }
    }),
    tinOre:  itemFactory.createOre({
        id: "tinOre",
        name: "Zinerz",       
        properties: {

            smeltingResult: ""
        }
    }),
    ironOre: itemFactory.createOre({

        id: "ironOre",
        name: "Eisenerz",        
        properties: {

            smeltingResult: "ironBar",
        
        }

    }),
    coalOre:  itemFactory.createOre({
        id: "coalOre",
        name: "Kohle",       
        properties: {

            smeltingResult: ""
        }
    }),
    silverOre:  itemFactory.createOre({
        id: "silverOre",
        name: "Silbererz",        
        properties: {

            smeltingResult: ""
        }
    }),
    goldOre:  itemFactory.createOre({
        id: "goldOre",
        name: "Golderz",       
        properties: {

            smeltingResult: ""
        }
    }),
    mithrilOre:  itemFactory.createOre({
        id: "mithrilOre",
        name: "mithrilerz",
        properties: {

            smeltingResult: ""
        }
    }),
    adamantitOre:  itemFactory.createOre({
        id: "adamantitOre",
        name: "adamantiterz",
        properties: {

            smeltingResult: ""
        }
    }),
    runitOre:  itemFactory.createOre({
        id: "runitOre",
        name: "runiterz",
        properties: {

            smeltingResult: ""
        }
    }),
    dragonitOre:  itemFactory.createOre({
        id: "dragonitOre",
        name: "dragoniterz",
        properties: {

            smeltingResult: ""
        }
    }),
    corundumitOre:  itemFactory.createOre({
        id: "corundumitOre",
        name: "corundumiterz",
        properties: {

            smeltingResult: ""
        }
    }),
    iridiumOre:  itemFactory.createOre({
        id: "iridiumOre",
        name: "iridiumerz",
        properties: {

            smeltingResult: ""
        }
    }),
    paladiumOre:  itemFactory.createOre({
        id: "paladiumOre",
        name: "paladiumerz",
        properties: {

            smeltingResult: ""
        }
    }),
    augitOre:  itemFactory.createOre({
        id: "augitOre",
        name: "augiterz",
        properties: {

            smeltingResult: ""
        }
    }),
    meteoritOre:  itemFactory.createOre({
        id: "meteoritOre",
        name: "meteoriterz",
        properties: {

            smeltingResult: ""
        }
    }),
    divinitOre:  itemFactory.createOre({
        id: "divinitOre",
        name: "diviniterz",
        properties: {

            smeltingResult: ""
        }
    }),

    // WOOD
    defaultWood: itemFactory.createWood({
        id: "defaultWood",
        name: "defaultWood",
        
        properties: {

            sawingResult: ""
        }
    }),
    eichenWood: itemFactory.createWood({
        id: "eichenWood",
        name: "eichenholz",
        properties: {

            sawingResult: ""
        }
    }),
    weidenWood: itemFactory.createWood({
        id: "weidenWood",
        name: "weidenholz",
        properties: {

            sawingResult: ""
        }
    }),
    teakWood: itemFactory.createWood({
        id: "teakWood",
        name: "teakholz",
        properties: {

            sawingResult: ""
        }
    }),
    ahornWood: itemFactory.createWood({
        id: "ahornWood",
        name: "ahornholz",
        properties: {

            sawingResult: ""
        }
    }),
    mahagonyWood: itemFactory.createWood({
        id: "mahagonyWood",
        name: "mahagonyholz",
        properties: {

            sawingResult: ""
        }
    }),
    eibenWood: itemFactory.createWood({
        id: "eibenWood",
        name: "eibenholz",
        properties: {

            sawingResult: ""
        }
    }),
    magieWood: itemFactory.createWood({
        id: "magieWood",
        name: "magieholz",
        properties: {

            sawingResult: ""
        }
    }),
    mammutbaumWood: itemFactory.createWood({
        id: "mammutbaumWood",
        name: "mammutbaumholz",
        properties: {

            sawingResult: ""
        }
    }),
    fichtenWood: itemFactory.createWood({
        id: "fichtenWood",
        name: "fichtenholz",
        properties: {

            sawingResult: ""
        }
    }),
    hainbuchenWood: itemFactory.createWood({
        id: "hainbuchenWood",
        name: "hainbuchenholz",
        properties: {

            sawingResult: ""
        }
    }),
    hainWood: itemFactory.createWood({
        id: "hainWood",
        name: "hainholz",
        properties: {

            sawingResult: ""
        }
    ,}),
    lindenWood: itemFactory.createWood({
        id: "lindenWood",
        name: "lindenholz",
        properties: {

            sawingResult: ""
        }
    }),
    elderWood: itemFactory.createWood({
        id: "elderWood",
        name: "elderholz",
        properties: {

            sawingResult: ""
        }
    }),
    roteichenWood: itemFactory.createWood({
        id: "roteichenWood",
        name: "roteichenholz",
        properties: {

            sawingResult: ""
        }
    }),
    revenantWood: itemFactory.createWood({
        id: "revenantWood",
        name: "revenantholz",
        properties: {

            sawingResult: ""
        }
    }),
    mystischWood: itemFactory.createWood({
        id: "mystischWood",
        name: "mystischholz",
        properties: {

            sawingResult: ""
        }
    }),
    aasWood: itemFactory.createWood({
        id: "aasWood",
        name: "aasholz",
        properties: {

            sawingResult: ""
        }
    }),

    //-----------------------------------------------
    //                   FISH
    //-----------------------------------------------
    rawShrimp:  itemFactory.createFish({ 
        id: "rawShrimp",
        properties: {

            sawingResult: ""
        },
        name: "Roh Shrimp", 
         
    }),
    rawSardine: itemFactory.createFish({ 
        id: "rawSardine",
        properties: {

            sawingResult: ""
        },
        name: "Roh Sardine",  
         
    }),
    rawBlowfish: itemFactory.createFish({ 
        id: "rawBlowfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Kugelfisch",  
         
    }),
    rawHerring: itemFactory.createFish({ 
        id: "rawHerring",
        properties: {

            sawingResult: ""
        },
        name: "Roh Hering",  
         
    }),
    rawSeahorse: itemFactory.createFish({ 
        id: "rawSeahorse",
        properties: {

            sawingResult: ""
        },
        name: "Roh Seepferdchen",  
         
    }),
    leapingTrout: itemFactory.createFish({ 
        id: "leapingTrout",
        properties: {

            sawingResult: ""
        },
        name: "Roh Trout",  
         
    }),
    rawMackerel: itemFactory.createFish({ 
        id: "rawMackerel",
        properties: {

            sawingResult: ""
        },
        name: "Roh Makrele",  
         
    }),
    rawPoisonFish: itemFactory.createFish({ 
        id: "rawPoisonFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Giftfisch",  
         
    }),
    rawSalmon: itemFactory.createFish({ 
        id: "rawSalmon",
        properties: {

            sawingResult: ""
        },
        name: "Roh Salmon",  
         
    }),
    leapingSalmon: itemFactory.createFish({ 
        id: "leapingSalmon",
        properties: {

            sawingResult: ""
        },
        name: "Roh Leaping Salmon",  
         
    }),
    rawLobster: itemFactory.createFish({ 
        id: "rawLobster",
        properties: {

            sawingResult: ""
        },
        name: "Roh Hummer",  
         
    }),
    rawHalibut: itemFactory.createFish({ 
        id: "rawHalibut",
        properties: {

            sawingResult: ""
        },
        name: "Roh Hailbut",  
         
    }),
    rawSkeletonFish: itemFactory.createFish({ 
        id: "rawSkeletonFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Skeletfisch",  
         
    }),
    rawSwordfish: itemFactory.createFish({ 
        id: "rawSwordfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Schwertfisch",  
         
    }),
    rawAnglerfish: itemFactory.createFish({ 
       id: "rawAnglerfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Anglerfisch",  
         
    }),
    rawFanfish: itemFactory.createFish({ 
        id: "rawFanfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Fanfisch", 
         
    }),
    rawCrab: itemFactory.createFish({ 
        id: "rawCrab",
        properties: {

            sawingResult: ""
        },
        name: "Roh Krabbe",  
         
    }),
    rawCarp: itemFactory.createFish({ 
        id: "rawCarp",
        properties: {

            sawingResult: ""
        },
        name: "Roh Karpfen",  
         
    }),
    rawShark: itemFactory.createFish({ 
        id: "rawShark",
        properties: {

            sawingResult: ""
        },
        name: "Roh Hai",  
         
    }),
    leapingBroadFish: itemFactory.createFish({ 
        id: "leapingBroadFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Leaping Broadfisch",  
         
    }),
    rawCaveFish: itemFactory.createFish({ 
        id: "rawCaveFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Höhlenfisch",  
         
    }),
    rawTilapia: itemFactory.createFish({ 
        id: "rawTilapia",
        properties: {

            sawingResult: ""
        },
        name: "Roh Tilapia",  
         
    }),
    rawMagicFish: itemFactory.createFish({ 
        id: "rawMagicFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Magiefisch",  
         
    }),
    rawMantaRay: itemFactory.createFish({ 
        id: "rawMantaRay",
        properties: {

            sawingResult: ""
        },
        name: "Roh Manta",  
         
    }),
    rawWhale: itemFactory.createFish({ 
        id: "rawWhale",
        properties: {

            sawingResult: ""
        },
        name: "Roh Wal",  
         
    }),
    rawLavaFish: itemFactory.createFish({ 
        id: "rawLavaFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Lavafisch",  
         
    }),
    rawSpikeFish: itemFactory.createFish({ 
        id: "rawSpikeFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Stachelfisch",  
         
    }),
    rawRockfish: itemFactory.createFish({ 
        id: "rawRockfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Steinfisch",  
         
    }),
    rawBlueCrab: itemFactory.createFish({ 
        id: "rawBlueCrab",
        properties: {

            sawingResult: ""
        },
        name: "Roh Blaukrabbe",  
         
    }),
    rawMagmaFish: itemFactory.createFish({ 
        id: "rawMagmaFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Magmafisch",  
         
    }),
    rawLargeBlowfish: itemFactory.createFish({ 
        id: "rawLargeBlowfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Großer Kugelfisch",  
         
    }),
    rawStaticJellyfish: itemFactory.createFish({ 
        id: "rawStaticJellyfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Qualle",  
         
    }),
    rawFrostCrab: itemFactory.createFish({ 
        id: "rawFrostCrab",
        properties: {

            sawingResult: ""
        },
        name: "Roh Frostkrabbe",  
         
    }),
    rawMagmaEel: itemFactory.createFish({ 
        id: "rawMagmaEel",
        properties: {

            sawingResult: ""
        },
        name: "Roh Magmaaal",  
         
    }),
    rawFrozenMantaRay: itemFactory.createFish({ 
        id: "rawFrozenMantaRay",
        properties: {

            sawingResult: ""
        },
        name: "Roh Eismanta",  
         
    }),
    rawGhostFish: itemFactory.createFish({ 
        id: "rawGhostFish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Geisterfisch",  
         
    }),
    rawMysticSeahorse: itemFactory.createFish({ 
        id: "rawMysticSeahorse",
        properties: {

            sawingResult: ""
        },
        name: "Roh Mystisches Seepferdchen",  
         
    }),
    rawTerrorfish: itemFactory.createFish({ 
        id: "rawTerrorfish",
        properties: {

            sawingResult: ""
        },
        name: "Roh Terrorfisch",  
         
    }),
    rawMysticShark: itemFactory.createFish({ 
        id: "rawMysticShark",
        properties: {

            sawingResult: ""
        },
        name: "Roh Mystischer Hai",  
         
    }),
}