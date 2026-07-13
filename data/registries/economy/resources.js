// =========================
// TODO - START
// =========================

    //Auf resourcefactory umstellen

// =========================
// TODO - END
// =========================
import resourceFactory from "../../factories/resourceFactory.js";

export const resources = {
    
            //TIER 1
            //MINING
            
            
            //TIER 2
            holzbrett: { name: "Holzbrett", tier: 2, type: "wood", building:"", cost: { kupfererz: 10, eichenholz: 5 }, amount: 0, base: 0.03, workers: 0, image: "img/ore/ore_copper.png" },
            kupferbarren: { name: "Kupferbarren", tier: 2, type: "copper", building:"schmelze", cost: { kupfererz: 10, eichenholz: 5 }, amount: 0, base: 0.03, workers: 0, image: "img/smith/copper_bar.png" },
            zinbarren: { name: "zinbarren", tier: 2, type: "tin", building:"schmelze", cost: { zinerz: 10, eichenholz: 5 }, amount: 0, base: 0.03, workers: 0, image: "img/ore/ore_copper.png" },
            kupferplatte: { name: "Kupferplatte", tier: 2, type: "copper",building:"schmelze", cost: { kupferbarren: 5}, amount: 0, base: 0.03, workers: 0, image: "img/ore/ore_copper.png" },
            eisenbarren: { name: "Eisenbarren", tier: 2, type: "iron", building:"schmelze", cost: { eisenerz: 10, eichenholz: 5 }, amount: 0, base: 0.02, workers: 0, image: "img/smith/iron_bar.png" },
            eisenplatte: { name: "Eisenplatte", tier: 2, type: "iron", building:"schmelze", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            
            
            //TIER 3
            //kuperAxtkopf: { name: "Kupferplatte", tier: 1, type: "parts", building:"", cost: { kupferbarren: 5}, amount: 0, base: 0.03, workers: 0, image: "img/ore/ore_copper.png" },
            kupferSpitzhackekopf: { name: "Spitzhackekopf (Kupfer)", tier: 3, type: "parts", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            kupferSchaufelblatt: { name: "Schaufelblatt (Kupfer)", tier: 3, type: "copper", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            kupferScherenblaetter: { name: "Scherenblätter (Kupfer)", tier: 3, type: "copper", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            kupferZahnrad: { name: "Kupferzahnrad", tier: 3, type: "copper", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            kupferDraht: { name: "Kupferdraht", tier: 3, type: "copper", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },

            eisenAxtkopf: { name: "Eisenplatte", tier: 3, type: "iron", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            eisenSpitzhackekopf: { name: "Spitzhackekopf (Eisen)", tier: 3, type: "iron", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            eisenSchaufelblatt: { name: "Schaufelblatt (Eisen)", tier: 3, type: "iron", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            eisenScherenblaetter: { name: "Scherenblätter (Eisen)", tier: 3, type: "iron", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            eisenZahnrad: { name: "Eisenzahnrad", tier: 3, type: "iron", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            eisenDraht: { name: "Eisendraht", tier: 3, type: "iron", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },


            //TIER 4
            kupferAxt: { name: "Kupferaxt", tier: 4, type: "copperTool", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
            eisenAxt: { name: "Eisenaxt", tier: 4, type: "ironTool", building:"", cost: { eisenbarren: 5}, amount: 0, base: 0.02, workers: 0, image: "img/ore/ore_copper.png" },
        
};