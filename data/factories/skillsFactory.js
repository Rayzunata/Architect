import {SKILL_TYPES} from "../constants/skillConstants.js";


function createSkillBaseLayer(data = {}) {
    return {
        name: data.name ?? "generic",
        unlocked: data.unlocked ?? true,
        image: data.image ?? "img/missing_artwork.png",
        description: data.description ?? ""
    };
}

function createSkillProgressionLayer(data = {}) {
    return {
        ...createSkillBaseLayer(data),

        level: data.level ?? 1,
        xp: data.xp ?? 0,

        xpRequired: data.xpRequired ?? 100,
        maxLevel: data.maxLevel ?? 999
    };
}

function createSkillBonusLayer(data = {}) {
    return {
        ...createSkillProgressionLayer(data),

        // Sammelbonus
        gatherBonus: data.gatherBonus ?? 1.0,

        // Produktionsbonus
        speedBonus: data.speedBonus ?? 1.0,

        // Einfluss auf spätere Qualitätsberechnung
        qualityBonus: data.qualityBonus ?? 0,

        // Langfristige Quality-Mastery
        qualityMastery: data.qualityMastery ?? 0
    };
}

function createGatheringSkillLayer(data = {}) {
    return {
        ...createSkillBonusLayer(data),

        gatheredResources:
            data.gatheredResources ?? []
    };
}

function createCraftingSkillLayer(data = {}) {
    return {
        ...createSkillBonusLayer(data),

        craftedResources:
            data.craftedResources ?? [],

        craftingBonus:
            data.craftingBonus ?? 1.0,

        craftingQualityBonus:
            data.craftingQualityBonus ?? 0
    };
}


const skillsFactory = {
    // =========================
    // GATHERING
    // =========================

    createMiningSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.MINING
        };
    },

    createWoodcuttingSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.WOODCUTTING
        };
    },

    createFishingSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.FISHING
        };
    },

    createHuntingSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.HUNTING
        };
    },

    createFarmingSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.FARMING
        };
    },

    createHerbalismSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.HERBALISM
        };
    },

    createScavengeSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.SCAVENGE
        };
    },

    createQuarryingSkill(data = {}) {
        return {
            ...createGatheringSkillLayer(data),

            type: SKILL_TYPES.QUARRYING
        };
    },

    // =========================
    // CRAFTING
    // =========================

        createSmeltingSkill(data = {}) {
        return {
            ...createCraftingSkillLayer(data),

            type: SKILL_TYPES.SMELTING
        };
    },

    createSmithingSkill(data = {}) {
        return {
            ...createCraftingSkillLayer(data),

            type: SKILL_TYPES.SMITHING
        };
    },

    createCarpentrySkill(data = {}) {
        return {
            ...createCraftingSkillLayer(data),

            type: SKILL_TYPES.CARPENTRY
        };
    },

    createStonemasonrySkill(data = {}) {
        return {
            ...createCraftingSkillLayer(data),

            type: SKILL_TYPES.STONEMASONRY
        };
    },

    createAlchemySkill(data = {}) {
        return {
            ...createCraftingSkillLayer(data),

            type: SKILL_TYPES.ALCHEMY
        };
    },

    createCookingSkill(data = {}) {
        return {
            ...createCraftingSkillLayer(data),

            type: SKILL_TYPES.COOKING
        };
    },

}


export default skillsFactory;
