/**
 * @typedef {Object} WorldState
 * @property {number} year - The current year in the world
 * @property {string} season - The current season ('spring', 'summer', 'autumn', 'winter')
 */

/**
 * @typedef {Object} World
 * @property {string} id - Unique identifier for the world (camelCase)
 * @property {string} name - Display name of the world
 * @property {string} description - Description of the world
 * @property {string[]} regions - Array of region IDs belonging to this world
 * @property {Object[]} factions - Array of faction objects in the world
 * @property {Object[]} events - Array of historical/current events in the world
 * @property {WorldState} state - Current world state including year and season
 */

/**
 * Registry of all available worlds in the system
 * @type {Object.<string, World>}
 */
export const worlds = {
    architectsWorld: {
        id: "architectsWorld",
        name: "Die Welt des Architekten",
        description: "Hier ist alles verzaubert - nur der Zauberer nicht",

        regions: [
            // "defaultRegion",
            // "defaultMountain",
            // "defaultDesert",
            // "mainRegion",
            // "secRegion",
        ],

        factions: [],

        events: [],

        state: {
            year: 1312,
            season: "winter"
        }
    },
    midgard: {
        id: "midgard",
        name: "Midgard",
        description: "Eine Welt zwischen dem Innen und dem Aussen",

        regions: [
            "regionRashar",
        ],

        factions: [],

        events: [],

        state: {
            year: 1,
            season: "spring"
        }
    },
    
};
