import { resources } from "./registries/resources.js";
import { buildings } from "./registries/buildings.js";
import { skills } from "./registries/skills.js";




import { createGame } from "../game/createGame.js";


let lastUpdate = Date.now();

// ---------------- GAME DATA ----------------

const uiDirty = {
    resources: true,
    stats: true,
    buildings: true,
    research: true,
    workers: true,
    skills: true,
};

//noch nötig?
const ui = {
    resources:{},
    buildings:{},
    research:{},
    settlement:{},
    skills:{}
};


//PRÜFEN OB NEUES SPIEL DANN nur createGame()
//SONST createGame + load
const game = createGame(); //Aufbauen alle defaults laden
//load/save -> mit game mergen (game + load -> spielen)

window.game = game;
// window.resources = resources;
// window.buildings = buildings;
// window.skills = skills;
// window.showTab = showTab;
// ---------------- NAVIGATION ----------------



function showTab(tabId, group, button = null) {

    const tabs =
        document.querySelectorAll(
            `.tab[data-tabGroup="${group}"]`
        );

    tabs.forEach(tab => {
        tab.style.display = "none";
    });

    const activeTab =
        document.getElementById(tabId);

    if (activeTab) {
        activeTab.style.display = "block";
    }

    if (button) {

        const buttons =
            document.querySelectorAll(
                `button[data-buttonGroup="${group}"]`
            );

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");
    }
}

//----------------------------------------------------
//                 UNDER CONSTRUCTION
//----------------------------------------------------

// import {renderRegion} from "../ui/regionView.js"
// renderRegion(game);


//----------------------------------------------------
//                 END CONSTRUCTION
//----------------------------------------------------


// ---------------- UPDATES ----------------

function updateAllUI() {
    // if (uiDirty.resources) {
        
    //     uiDirty.resources = false;
    // }
    // if (uiDirty.buildings) {
    // updateBuildingsUI();
    // uiDirty.buildings = false;
    // }
    // if (uiDirty.research) {
    //     updateResearchUI();
    //     uiDirty.research = false;
    // }
    // if (uiDirty.workers) {

    //     uiDirty.workers = false;
    // }
    // if (uiDirty.skills){
    //     updateSkillsUI();
    //     uiDirty.skills = false;
    // }
}

// ---------------- GAME LOOP ----------------
let uiTimer = 0;

function gameLoop() {

    const now = Date.now();
    const deltaTime = (now - lastUpdate) / 1000;
    lastUpdate = now;

    //updateBuildingProduction(deltaTime);

    uiTimer += deltaTime;

    if (uiTimer >= 0.2) {
        updateAllUI();

        //containerTopLeft();
        uiTimer = 0;
    }

    requestAnimationFrame(gameLoop);
}

// ---------------- INIT ----------------
    
    // document.getElementById("bergbau").addEventListener("click", add_building);
    gameLoop(); 

