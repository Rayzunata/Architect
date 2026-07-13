const locationDefault = {
    id: "locationDefault",
    type: null,
    name: "Defaultlocation",
    description: "Der Ursprung aller Locations",
    activities: [],
    npcs: ["npcDefaultNpc"],
    enemies: [],
    quests: [],
    resources:{},
    img : "/img/missing_artwork.png",
    modifiers: [],
};

export function createLocation(data = {}) {
    return {
        ...locationDefault,
        ...data,
        resources: {
            ...locationDefault.resources,
            ...(data.resources ?? {})
        }
    };
}

export function createBuildingLocation(data = {}) {
    return createLocation({
        type:"building",
        ...data,
    });
};




//noch spezialisierungen wie createMiningRegion() etc.