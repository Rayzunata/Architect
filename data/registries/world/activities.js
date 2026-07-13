
export const activities = {
    
    mining:{
        name:"Mining",
        icon:"img/mining/mining.svg",
        type: "gathering",
        skill: "mining",
        baseXp: 5,
        requirements: {
            tool: "pickaxe"
        },

        rewards: {
            resources: ["stone", "ore"]
        },

        baseTime: 3
    },
    woodcutting:{
        name:"Woodcutting",
        icon:"img/woodcutting/woodcutting.svg",
    },
    herbalism:{
        name:"Herbalism",
        icon:"img/missing_artwork.png",
    },
    smelting:{
        name: "Schmelzen",
        icon:"img/missing_artwork.png",
    },
    fishing:{
        name: "Fischen",
        icon:"img/missing_artwork.png",
    },
    hunting:{
        name: "Jagen",
        icon:"img/missing_artwork.png",
    },
    farming:{
        name: "Landwirtschaft",
        icon:"img/missing_artwork.png",
    },
    scavenging:{
        name: "Plündern",
        icon:"img/missing_artwork.png",
    },
    quarrying:{
        name: "Steinbrucharbeit",
        icon:"img/missing_artwork.png",
    },
}




        

