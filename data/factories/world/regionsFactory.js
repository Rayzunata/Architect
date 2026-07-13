// =========================
// TODO - START
// =========================

// =========================
// TODO - END
// =========================

// const defaults = {
//     id: "regionDefault",
//     name: "default",
//     img:"REGIONIMG.png",
//     unlockLevel: 1,
//     description: "Defaultregion",
//     biome: "biomDefault",
//     climate: "climateCold",
//     size: "default",
//     difficulty: 1,
//     wealth: "default",
//     civilization: "default",
//     danger: "default",

//     modifiers: ["Architekt"],
//     settlements: ["defaultCity"],
//     locations: ["locationDefaultLocation"],
//     npcs: ["architekt"],
//     enemies: ["enemyTest"],
//     quests: ["defaultquest"]
// };

const defaults = {
    id: "regionDefault",
    name: "Defaultregion",
    img:"/img/missing_artwork.png",
    unlockLevel: 1,
    description: "Der Ursprung aller Regionen",
    biome: "biomDefault",
    climate: "climateCold",
    size: null,
    difficulty: 1,
    wealth: null,
    civilization: null,
    danger: null,
    //Array`s
    modifiers: [],
    settlements: ["defaultCity"],
    locations: ["locationDefaultLocation"],
    npcs: ["npcDefaultNpc","npcDefaultNpc","npcDefaultNpc"],
    enemies: [],
    quests: []
};


export function createRegion(data = {}) {
    return {
        ...defaults,
        ...data,
        modifiers: [
            ...defaults.modifiers, 
            ...(data.modifiers ?? []) //durch () wird array ergänz nicht überschrieben
        ]
    };
}

export function createMountainRegion(data = {}) {
    return createRegion({
        id: "regionDefaultMountain",
        biome: "biomMountain",
        climate: "climateCold",
        ...data
    });
}

export function createDesertRegion(data = {}) {
    return createRegion({
        id: "regionDefaultDesert",
        biome: "biomDesert",
        climate: "climateHot",
        wealth: "low",
        ...data
    });
}

