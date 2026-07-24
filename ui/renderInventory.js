

import {materials} from "./../data/registries/economy/items/materials.js";
import {resourceForms} from "./../data/registries/economy/items/resourceForms.js";
import {categories} from "./../data/registries/economy/items/categories.js";
import {prefixes} from "./../data/registries/economy/items/prefixes.js";
import {suffixes} from "./../data/registries/economy/items/suffixes.js";
import {rarities} from "./../data/registries/economy/items/rarities.js";
import { icons } from "../data/constants/iconConstants.js";

export function renderInventory(inventory) {

            // const container = document.getElementById("entryMidContainer");
            
            // container.innerHTML = "";

            // inventory.forEach(item => {

            //     const div = document.createElement("div");

            //     let name = "";

            //     if (item.category === "resource") {

            //         name =
            //             materials[item.materialGroup].items[item.material].name +
            //             " " +
            //             resourceForms[item.materialGroup][item.form].name;

            //     } else {

            //         name =
            //             materials[item.materialGroup].items[item.material].name +
            //             " " +
            //             categories[item.category].forms[item.form].name;
            //     }

            //     div.className = "inventorySlot";

            //     div.innerHTML = `
            //         <strong>${name}</strong><br>
            //         ${item.rarity}<br>
            //         Anzahl: ${item.amount}
            //     `;

                

            //     container.appendChild(div);

            // });

            const entry = document.getElementById("entryMidContainer");
            entry.innerHTML = '';
            
            for(const inventoryID in inventory){
                const inventorySlot = document.createElement("div");
                inventorySlot.className = "inventorySlot";

                inventorySlot.addEventListener("click", () => {
                    // Alte Auswahl entfernen
                    document.querySelectorAll(".inventorySlot.selected")
                        .forEach(slot => slot.classList.remove("selected"));
                
                    // Diesen Slot auswählen
                    inventorySlot.classList.add("selected");
                
                    renderItemDetails(inventoryID);
                });
                
                const item = inventory[inventoryID];
                let itemName = "";

                if (item.category === "resource") {

                    itemName =
                        materials[item.materialGroup].items[item.material].name +
                        " " +
                        resourceForms[item.materialGroup][item.form].name;

                        } else {

                            itemName =
                                materials[item.materialGroup].items[item.material].name +
                                " " +
                                categories[item.category].forms[item.form].name;
                }
                

                const nameTag = document.createElement("span");
                nameTag.className = "nameTag";
                //nameTag.style.color = types[item.type].color;
                nameTag.innerHTML = `${prefixes[item.prefix].name} ${itemName} ${suffixes[item.suffix].name} ` ;
                
                const rarityTag = document.createElement("span");
                rarityTag.className = "rarityTag";
                rarityTag.style.color = rarities[item.rarity].color;
                rarityTag.innerHTML = `(${item.rarity}) x ${item.amount}`;

                const iconTag = document.createElement("img");
                iconTag.className = "iconTag";
                iconTag.src = icons[materials[item.materialGroup].icon]
                //console.log(icons[materials[item.materialGroup].icon]);

                const titleDiv = document.createElement("div");
                titleDiv.className = "titleDiv";

                const titleSpan = document.createElement("div");
                titleSpan.className = "titleSpan";

                titleSpan.appendChild(iconTag);
                titleSpan.appendChild(nameTag);
                titleDiv.appendChild(titleSpan);
                
                titleDiv.appendChild(rarityTag);
                
                inventorySlot.appendChild(titleDiv);
                
                //inventorySlot.appendChild(detailsTag);

                entry.appendChild(inventorySlot);
                
            }

        

        }