// =========================
// TODO - START
// =========================

    //Umstellen auf skills factory

// =========================
// TODO - END
// =========================

import skillsFactory from "../../factories/skillsFactory.js";

export const skills = {

    mining: skillsFactory.createMiningSkill({
        name: "Bergbau",
        image: "img/mining/mining.svg",

        gatheredResources: [
            "kupfererz",
            "zinerz",
            "eisenerz",
            "kohle",
            "silbererz",
            "golderz"
        ]
    }),

    smelting: skillsFactory.createSmeltingSkill({
        name: "Schmelzen",
        image: "img/smith/furnace.svg",

    }),

    woodcutting: skillsFactory.createWoodcuttingSkill({
        name: "Holzfällen",
        image: "img/woodcutting/woodcutting.svg"
    }),

    fishing: skillsFactory.createFishingSkill({
        name: "Fischen",
        image: "img/fishing/fishing.svg"
    }),

    hunting: skillsFactory.createHuntingSkill({
        name: "Jagen",
        image: "img/missing_artwork.png"
    }),

    farming: skillsFactory.createFarmingSkill({
        name: "Landwirtschaft",
        image: "img/missing_artwork.png"
    }),

    herbalism: skillsFactory.createHerbalismSkill({
        name: "Kräuterkunde",
        image: "img/missing_artwork.png"
    }),

    scavenge: skillsFactory.createScavengeSkill({
        name: "Plündern",
        image: "img/missing_artwork.png"
    }),

    quarrying: skillsFactory.createQuarryingSkill({
        name: "Steinbrucharbeit",
        image: "img/missing_artwork.png"
    })
};