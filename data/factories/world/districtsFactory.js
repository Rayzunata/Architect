const defaultDistrict = {
    id: "defaultDistrict",
    settlement: null, //?
    name: "Defaultdiestrict",
    description: "Der erste aller Distrikte",
    image: null,
    icon: "img/icons/iconTrade.svg",
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