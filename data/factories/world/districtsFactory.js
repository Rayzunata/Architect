const defaultDistrict = {
    id: "defaultDistrict",
    settlement: null, //?
    name: "Defaultdiestrict",
    description: "Der erste aller Distrikte",
    image: null,
    modifiers: [

    ],
    npcs: [
        "npcDefaultNpc"
    ],
     events: [

    ],
    locations: [
        "locationDefaultLocation",
    ]
};

export function createDistrict(data={}){

    return{
        ...defaultDistrict,
        ...data,
    }
};