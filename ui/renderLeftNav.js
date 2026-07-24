
import { skills } from "../data/registries/progression/skills.js";
import {renderInventory} from "../ui/renderInventory.js"
import { renderPlayer } from "./renderPlayer.js";
import { renderBank } from "./renderBank.js";
import { renderShop } from "./renderShop.js";
import { renderWorld } from "./renderWorld.js";

export function renderLeftNav(game){

    const entry = document.getElementById("entryLeftContainer");

    const player = document.createElement("div");
    player.className = "button testEintrag";
    player.style.width = "270px";
        const playerTitle = document.createElement("div");
        playerTitle.innerText = "Playerdetails";

        player.appendChild(playerTitle);
        player.addEventListener("click", function () {
            game.ui.currentScreen = "player";
            renderPlayer();
        });

    const bank = document.createElement("div");
    bank.className = "button testEintrag";
    bank.style.width = "270px";
        const bankTitle = document.createElement("div");
        bankTitle.innerText = "Bank";

        bank.appendChild(bankTitle);
        bank.addEventListener("click", function () {
            game.ui.currentScreen = "bank";
            renderBank();
        });

    const inventory = document.createElement("div");
    inventory.className = "button testEintrag";
    inventory.style.width = "270px";
        const inventoryTitle = document.createElement("div");
        inventoryTitle.innerText = "Inventar";

        inventory.appendChild(inventoryTitle);
        inventory.addEventListener("click", function () {
            game.ui.currentScreen = "inventory";
      
            renderInventory(game.player.inventory);
       
        });

    const shop = document.createElement("div");
    shop.className = "button testEintrag";
    shop.style.width = "270px";
        const shopTitle = document.createElement("div");
        shopTitle.innerText = "Shop";

        shop.appendChild(shopTitle);
        shop.addEventListener("click", function () {
            game.ui.currentScreen = "shop";
            renderShop();
        });

    const world = document.createElement("div");
    world.className = "button testEintrag";
    world.style.width = "270px";
        const worldTitle = document.createElement("div");
        worldTitle.innerText = "Worlds";

        world.appendChild(worldTitle);
        world.addEventListener("click", function () {
            game.ui.currentScreen = "world";
            renderWorld();
        });

    entry.appendChild(player);
    entry.appendChild(bank);
    entry.appendChild(inventory);
    entry.appendChild(shop);

    //überschrift hinzufügen??
    entry.appendChild(world);

    const skillHeader = document.createElement("h3");
    skillHeader.innerText = "~ Skills ~"

    entry.appendChild(skillHeader);

    for (let skillId in skills){

        const skillObj = skills[skillId];
        const skill = document.createElement("div");
        skill.className = "button testEintrag";
        skill.style.width = "270px";
        const skillTitle = document.createElement("div");
        skillTitle.innerText = `${skillObj.name}`;

        skill.appendChild(skillTitle);

        const skillProgress = document.createElement("div");
        skillProgress.className = "leftNavSkillProgress";

        const skillProgressFill = document.createElement("div");
        skillProgressFill.className = "leftNavSkillProgressFill";

        skillProgress.appendChild(skillProgressFill);
        skill.appendChild(skillProgress);

        entry.appendChild(skill);

    }

}