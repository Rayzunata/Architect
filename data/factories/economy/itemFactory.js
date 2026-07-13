

const defaults = {

    id: "",
    name: "Unbekanntes Item",
    description: "",
    type: "misc",
    category: "misc",
    image: "img/missing_artwork.png",
    value: 0,
    weight: 0,
    stackSize: 1,
    rarity: "common",
    tags: [

    ],
    modifiers: [
        "default"
    ],
    properties: {

    }

};

function createItem(data = {}) {

    return {

        ...defaults,
        ...data,

        tags: [
            ...defaults.tags,
            ...(data.tags ?? [])
        ],
        modifiers: [
            ...defaults.modifiers,
            ...(data.modifiers ?? [])
        ],
        properties: {
            ...defaults.properties,
            ...(data.properties ?? {})
        }

    };
};

function createMaterial(data = {}) {

    return createItem({

        type: "material",
        stackSize: 999,
        ...data
    });

};

function createEquipment(data = {}) {

    return createItem({

        type: "equipment",
        stackSize: 1,
        ...data
    });

};

function createConsumable(data = {}) {

    return createItem({

        type: "consumable",
        stackSize: 20,
        ...data
    });

};

export const itemFactory = {

    createOre(data = {}){

        return createMaterial({
            category: "ore",
            image: "img/mining/mining.svg",
            description: "Erze können zu Barren geschmolzen werden",
            color: "#bab2ab",
            tags: [
                "mining",
                "crafting",
                "trade"
            ],
            ...data
        });
    },
    createWood(data = {}){

        return createMaterial({
            category: "wood",
            image: "img/woodcutting/woodcutting.svg",
            color: "#c97b3b",
            tags: [
                "woodcutting",
                "crafting",
                "trade"
            ],
            ...data
        });
    },
    createFish(data = {}){

        return createMaterial({
            category: "fish",
            image: "img/fishing/fishing.svg",
            color: "#549dbf",
            tags: [
                "fishing",
                "crafting",
                "trade"
            ],
            ...data
        });
    },
    createQuestItem(data = {}) {

        return createItem({

            type: "quest",
            stackSize: 1,
            ...data
        });

    }

};

export default itemFactory;