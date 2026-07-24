

import {materials} from "./../data/registries/economy/items/materials.js";
import {resourceForms} from "./../data/registries/economy/items/resourceForms.js";
import {categories} from "./../data/registries/economy/items/categories.js";

export function renderInventory(inventory) {

            const container = document.getElementById("entryMidContainer");
            
            container.innerHTML = "";

            inventory.forEach(item => {

                const div = document.createElement("div");

                let name = "";

                if (item.category === "resource") {

                    name =
                        materials[item.materialGroup].items[item.material].name +
                        " " +
                        resourceForms[item.materialGroup][item.form].name;

                } else {

                    name =
                        materials[item.materialGroup].items[item.material].name +
                        " " +
                        categories[item.category].forms[item.form].name;
                }

                let modsHTML = "";

                if (item.mods) {

                    modsHTML += "<br><b>Mods:</b><br>";

                    for (const slot in item.mods) {

                        modsHTML += `${slot}: `;

                        if (item.mods[slot]) {
                            modsHTML += item.mods[slot];
                        } else {
                            modsHTML += "-";
                        }

                        modsHTML += "<br>";
                    }

                }

                div.className = "inventoryItem";

                div.innerHTML = `
                    <strong>${name}</strong><br>
                    Seltenheit: ${item.rarity}<br>
                    Qualität: ${item.quality}<br>
                    Anzahl: ${item.amount}
                    ${modsHTML}
                `;

                

                container.appendChild(div);

            });

        }