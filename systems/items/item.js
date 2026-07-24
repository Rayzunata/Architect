//--------------------------------------------------------------------
//
//                          BESCHREIBUNG
//
// Enthält alle funktionen die items erzeugen, hinzufügen oder entnehmen
//--------------------------------------------------------------------

import {resourceForms} from "./../../data/registries/economy/items/resourceForms.js";
import {weaponForms} from "./../../data/registries/economy/items/weaponForms.js";
import {toolForms} from "./../../data/registries/economy/items/toolForms.js";
import {materials} from "./../../data/registries/economy/items/materials.js";
import {categories} from "./../../data/registries/economy/items/categories.js";
import {weaponMods} from "./../../data/registries/economy/items/weaponMods.js";
import {toolMods} from "./../../data/registries/economy/items/toolMods.js";
import {prefixes} from "./../../data/registries/economy/items/prefixes.js";
import {suffixes} from "./../../data/registries/economy/items/suffixes.js";
import {rarities} from "./../../data/registries/economy/items/rarities.js";

import {renderInventory} from "./../../ui/renderInventory.js"; //<-- SPÄTER ENTFERNEN


function randomKey(object) {
    const keys = Object.keys(object);
    return keys[Math.floor(Math.random() * keys.length)];
}

export const item = {

//##################################################################################################
    createRandomItem() {
    
        // Kategorie wählen
        const category = randomKey(categories);
    
        let materialGroup = "metal";
        let material = "iron";
        let form = "";
    
        if (category === "resource") {
    
            materialGroup = randomKey(materials);
            material = randomKey(materials[materialGroup].items);
            form = randomKey(resourceForms[materialGroup]);
    
        } else {
    
            // Werkzeug oder Waffe
            form = randomKey(categories[category].forms);
    
            // erstmal Metall als Standard
            materialGroup = "metal";
            material = randomKey(materials.metal.items);
        }
    
        // Seltenheit
        const rarity = randomKey(rarities);
    
        // Qualität
        const quality = Math.floor(Math.random() * 100) + 1;
    
        // Prä-/Suffix
        const prefix = Math.random() < 0.2 ? randomKey(prefixes) : "none";
        const suffix = Math.random() < 0.2 ? randomKey(suffixes) : "none";
    
        // Mods
        const mods = {};
    
        if (categories[category].hasMods) {
    
            const slots = categories[category].forms[form].modSlots;
    
            const modList =
                category === "weapon"
                    ? weaponMods
                    : toolMods;
    
            for (const slot of slots) {
    
                // 30% Chance auf einen Mod
                // if (Math.random() > 0.3)
                //     continue;
    
                const possibleMods = Object.keys(modList)
                    .filter(id => modList[id].slot === slot);
    
                if (possibleMods.length === 0)
                    continue;
    
                mods[slot] = possibleMods[
                    Math.floor(Math.random() * possibleMods.length)
                ];
            }
        }
    
        return item.createItem({
            category,
            materialGroup,
            material,
            form,
            prefix,
            suffix,
            rarity,
            quality,
            amount: 1,
            mods,
        });
    },
//##################################################################################################
    createItem({
            category = "resource",
            materialGroup = "metal",
            material = "iron",
            form = "bar",
            prefix = "none",
            suffix = "none",
            rarity = "common",
            quality = 1,
            amount = 1,
            mods = {},
        } = {}) {

            const item = {
                id: `${category}:${materialGroup}:${material}:${form}:${prefix}:${suffix}:${rarity}:${quality}`,
                category,
                materialGroup,
                material,
                form,
                prefix,
                suffix,
                rarity,
                quality,
                amount
            };

            // Nur Kategorien mit Mods bekommen Mod-Slots
            if (categories[category].hasMods) {

                item.mods = {};

                const formData = categories[category].forms[form];

                for (const slot of formData.modSlots) {
                    item.mods[slot] = null;
                }

                for (const slot in mods){
                    if(slot in item.mods){
                        item.mods[slot] = mods[slot];
                        //console.log(weaponMods[mods[slot]].name);
                    }
                }

            }

            return item;
        },
//##################################################################################################
        addItemToInventory(item, inventory){
                    console.log(item);
                    let existing = null;
                    
                        for (const i of inventory) {
                            if (i.id === item.id) {
                                existing = i;
                                break;
                            }
                        }
                        
                        if (existing) {
                            existing.amount += item.amount;
                            //addLogMessage(existing);
                            console.log("Anzahl ++");
                        } else {
                            inventory.push(item);
                            //addLogMessage(item);
                            console.log("items ++");
                        }
                    
                    
                    renderInventory(inventory); //<-- SPÄTER ENTFERNEN HIER NICHT SINVOLL!!
                }
//##################################################################################################
}