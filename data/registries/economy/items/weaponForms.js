export const weaponForms = {
            pistol: {
                name: "Pistole",
        
                icon: "iconPistol.svg",
        
                baseStats: {
                    damage: 20,
                    accuracy: 65,
                    fireRate: 4
                },
        
                crafting: {
                    station: "gunsmith",
        
                    components: [
                        {
                            slot: "frame",
                            type: "metal",
                            form: "bar",
                            amount: 2
                        },
                        {
                            slot: "barrel",
                            type: "metal",
                            form: "bar",
                            amount: 1
                        },
                        {
                            slot: "grip",
                            type: "wood",
                            form: "plank",
                            amount: 1
                        }
                    ]
                },
        
                modSlots: [
                    "barrel",
                    "sight",
                    "underbarrel",
                    "magazine"
                ]
            }
        };

export default weaponForms;