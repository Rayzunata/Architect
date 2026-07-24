
// game
// │
// ├── player
// ├── inventory
// ├── economy
// ├── crafting
// ├── combat
// ├── world
// ├── automation
// ├── statistics
// ├── ui
// └── settings

//--------------------------------------------------------
//
//                      Beschreibung
//
// Momentan erster entwurf des default gameobjektes.
// Wenn Spielstand vorhanden wird es per load() 
// oder save() überschrieben

import { createPlayer } from "./createPlayer.js";

export function createGame(){

    const game = {

    version: "0.1.0",
    state: "playing", // playing, paused, menu

    time: {
        totalTicks: 0,
        playTime: 0,
        deltaTime: 0,
        lastUpdate: 0
    },

    player: createPlayer(),

    world: {

        seed: 0,
        biome: "",
        region: "",
        enemies: [],
        structures: []
    },

    crafting: {

        unlockedRecipes: [],
        queue: []
    },

    production: {

        workers: [],
        machines: [],
        automation: {}
    },

    quests: {

        active: [],
        completed: []
    },

    research: {

        unlocked: [],
        progress: {}
    },

    achievements: {

        unlocked: []
    },

    settings: {

        autoSave: true,
        language: "de",
        fps: 60
    },

    statistics: {

        itemsCrafted: 0,
        itemsCollected: 0,
        monstersKilled: 0,
        playTime: 0
    },

    ui: {

        currentScreen: "player",

        dirty: {
            
            inventory: false,
            crafting: false,
            player: false,
            world: false,
            shop: false,
            quests: false
        }

    }

};

    return game;
}