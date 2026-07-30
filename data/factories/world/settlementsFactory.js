const defaultCity = {
    id: "defaultcity",
    name: "Defaultcity",
    description: "Die Stadt des Architekten, um die Welt zu testen",
    icon: "./img/icons/iconCity.svg",
    type: "metro",
    population: 1,
    img: "TESTIMG.png",
    wealth: 1,
    faction: "architekt",
    sicherheit: 100,
    npcs: ["npcDefaultNpc"],
    modifiers: [],
    districts: [
        "districtTradedist"
    ],
    locations: [
        "mainforest"
    ],
    quests: [],
};

export function createSettlement(data = {}) {
    return {
        ...defaultCity,
        ...data
    };
}