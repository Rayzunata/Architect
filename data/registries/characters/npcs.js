export const npcs = {

    // ==========================================
    // 1. DEFAULT NPC
    // ==========================================

    npcDefaultNpc: {
        id: "npc_default",

        // IDENTITÄT
        name: "Default NPC",
        title: "Weltbewohner",
        icon: "img/icons/iconNpc.svg",

        description:
            "Ein mysteriöser NPC, der dem Architekten bei der Erstellung und Verwaltung der Welt hilft.",

        profession: "none",
        location: "unknown",

        // PERSÖNLICHKEIT
        personality: [
            "neutral",
            "hilfsbereit",
            "mysteriös"
        ],

        traits: {
            friendliness: 50,
            patience: 100,
            greed: 0,
            courage: 50
        },

        likes: [
            "Weltentwicklung",
            "neue Ideen",
            "Ordnung"
        ],

        dislikes: [],

        // DIALOG
        dialog: {
            greeting: [
                "Hey, ich bin der Default NPC.",
                "Schön, dass du da bist."
            ],

            default: [
                "Ich bin nur hier, um den Architekten bei der Erstellung der Welt zu unterstützen."
            ],

            farewell: [
                "Bis später, Architekt.",
                "Ich werde hier auf dich warten."
            ]
        },

        // FRAKTION
        faction: "",

        // SHOP
        shopinventory: "shopsGeneralStore",

        // QUESTS
        quests: [],

        // BEZIEHUNG
        relationship: {
            value: 0,
            min: -100,
            max: 100
        },

        // TAGESABLAUF
        schedule: {
            morning: "unknown",
            afternoon: "unknown",
            evening: "unknown",
            night: "unknown"
        },

        // FREISCHALTUNG
        unlock: {
            unlocked: true,
            condition: null
        }
    },


    // ==========================================
    // 2. BÜRGERMEISTER
    // ==========================================

    npcMayor: {
        id: "npc_mayor",

        // IDENTITÄT
        name: "Aldric",
        title: "Bürgermeister",
        icon: "img/icons/iconNpc.svg",

        description:
            "Der Bürgermeister der Stadt. Er kümmert sich um die Verwaltung, den Ausbau der Stadt und die Beziehungen zu anderen Orten.",

        age: 56,

        profession: "mayor",
        location: "town_hall",

        // PERSÖNLICHKEIT
        personality: [
            "diplomatisch",
            "pflichtbewusst",
            "ehrgeizig",
            "vorsichtig"
        ],

        traits: {
            friendliness: 60,
            patience: 70,
            greed: 35,
            courage: 55
        },

        likes: [
            "Ordnung",
            "Wohlstand",
            "Handel",
            "Stadtentwicklung"
        ],

        dislikes: [
            "Diebstahl",
            "Chaos",
            "Korruption",
            "Monster"
        ],

        // DIALOG
        dialog: {
            greeting: [
                "Willkommen. Wie kann ich dir helfen?",
                "Es gibt immer etwas in dieser Stadt zu erledigen."
            ],

            default: [
                "Eine Stadt wächst nicht von allein.",
                "Jede Verbesserung bringt uns einen Schritt weiter.",
                "Wenn unsere Wirtschaft wächst, können wir neue Gebäude errichten."
            ],

            farewell: [
                "Wir sehen uns später.",
                "Pass auf dich auf."
            ]
        },

        // FRAKTION
        faction: "town",

        // SHOP
        shopinventory: "",

        // QUESTS
        quests: [],

        // BEZIEHUNG
        relationship: {
            value: 0,
            min: -100,
            max: 100
        },

        // TAGESABLAUF
        schedule: {
            morning: "town_hall",
            afternoon: "town_hall",
            evening: "inn",
            night: "home"
        },

        // FREISCHALTUNG
        unlock: {
            unlocked: true,
            condition: null
        }
    },


    // ==========================================
    // 3. WACHE
    // ==========================================

    npcGuard: {
        id: "npc_guard",

        // IDENTITÄT
        name: "Marcus",
        title: "Stadtwache",
        icon: "img/icons/iconNpc.svg",

        description:
            "Eine erfahrene Stadtwache, die den Eingang der Stadt bewacht und für Ordnung sorgt.",

        age: 32,

        profession: "guard",
        location: "town_gate",

        // PERSÖNLICHKEIT
        personality: [
            "wachsam",
            "pflichtbewusst",
            "direkt",
            "misstrauisch"
        ],

        traits: {
            friendliness: 35,
            patience: 40,
            greed: 10,
            courage: 80
        },

        likes: [
            "Ordnung",
            "Disziplin",
            "Ruhe",
            "zuverlässige Bürger"
        ],

        dislikes: [
            "Diebe",
            "Betrüger",
            "Monster",
            "Unruhestifter"
        ],

        // DIALOG
        dialog: {
            greeting: [
                "Halt. Was willst du hier?",
                "Bleib stehen. Ich habe dich noch nie hier gesehen."
            ],

            default: [
                "Die Stadt ist sicher, solange jeder seinen Teil beiträgt.",
                "Wenn du Ärger suchst, bist du hier falsch.",
                "Hast du etwas zu melden?"
            ],

            farewell: [
                "Du kannst weitergehen.",
                "Pass auf dich auf."
            ]
        },

        // FRAKTION
        faction: "town_guard",

        // SHOP
        shopinventory: "",

        // QUESTS
        quests: [],

        // BEZIEHUNG
        relationship: {
            value: 0,
            min: -100,
            max: 100
        },

        // TAGESABLAUF
        schedule: {
            morning: "town_gate",
            afternoon: "town_gate",
            evening: "town_gate",
            night: "guard_barracks"
        },

        // FREISCHALTUNG
        unlock: {
            unlocked: true,
            condition: null
        }
    },


    // ==========================================
    // 4. HAUPTMANN
    // ==========================================

    npcGuardCaptain: {
        id: "npc_guard_captain",

        // IDENTITÄT
        name: "Garron",
        title: "Hauptmann der Stadtwache",
        icon: "img/icons/iconNpc.svg",

        description:
            "Der Hauptmann der Stadtwache. Er ist für die Sicherheit der gesamten Stadt und die Ausbildung der Wachen verantwortlich.",

        age: 48,

        profession: "guard_captain",
        location: "guard_barracks",

        // PERSÖNLICHKEIT
        personality: [
            "streng",
            "diszipliniert",
            "loyal",
            "strategisch"
        ],

        traits: {
            friendliness: 30,
            patience: 45,
            greed: 5,
            courage: 95
        },

        likes: [
            "Disziplin",
            "Mut",
            "Loyalität",
            "gute Soldaten"
        ],

        dislikes: [
            "Feigheit",
            "Korruption",
            "Diebstahl",
            "Verrat"
        ],

        // DIALOG
        dialog: {
            greeting: [
                "Was kann ich für dich tun?",
                "Wenn du hier bist, hast du hoffentlich einen guten Grund."
            ],

            default: [
                "Solange ich hier das Sagen habe, bleibt die Stadt sicher.",
                "Eine Stadt braucht mehr als Mauern. Sie braucht Menschen, die bereit sind, sie zu verteidigen.",
                "Unsere Wachen müssen jederzeit bereit sein."
            ],

            farewell: [
                "Möge dein Weg sicher sein.",
                "Und halte dich aus Schwierigkeiten heraus."
            ]
        },

        // FRAKTION
        faction: "town_guard",

        // SHOP
        shopinventory: "",

        // QUESTS
        quests: [],

        // BEZIEHUNG
        relationship: {
            value: 0,
            min: -100,
            max: 100
        },

        // TAGESABLAUF
        schedule: {
            morning: "guard_barracks",
            afternoon: "town_gate",
            evening: "guard_barracks",
            night: "guard_barracks"
        },

        // FREISCHALTUNG
        unlock: {
            unlocked: true,
            condition: null
        }
    },


    // ==========================================
    // 5. WIRT
    // ==========================================

    npcInnkeeper: {
        id: "npc_innkeeper",

        // IDENTITÄT
        name: "Mira",
        title: "Wirtin des Goldenen Hirsches",
        icon: "img/icons/iconNpc.svg",

        description:
            "Die Besitzerin des örtlichen Gasthauses. Sie kennt fast jeden in der Stadt und bekommt durch Reisende regelmäßig neue Informationen.",

        age: 41,

        profession: "innkeeper",
        location: "inn",

        // PERSÖNLICHKEIT
        personality: [
            "freundlich",
            "gesprächig",
            "aufmerksam",
            "geschäftstüchtig"
        ],

        traits: {
            friendliness: 85,
            patience: 75,
            greed: 45,
            courage: 50
        },

        likes: [
            "Reisende",
            "Geschichten",
            "gute Gäste",
            "Musik",
            "gutes Essen"
        ],

        dislikes: [
            "Streit",
            "Diebstahl",
            "betrunkene Gäste",
            "Zerstörung"
        ],

        // DIALOG
        dialog: {
            greeting: [
                "Willkommen im Goldenen Hirschen!",
                "Komm herein. Du siehst aus, als könntest du eine Pause gebrauchen."
            ],

            default: [
                "Ein warmes Bett und eine gute Mahlzeit können Wunder wirken.",
                "Reisende bringen immer interessante Geschichten mit.",
                "Wenn du etwas wissen willst, frag ruhig. Ich bekomme hier einiges mit."
            ],

            farewell: [
                "Bis zum nächsten Mal!",
                "Komm wieder, wenn du eine Pause brauchst."
            ]
        },

        // FRAKTION
        faction: "town",

        // SHOP
        shopinventory: "shopsInn",

        // QUESTS
        quests: [],

        // BEZIEHUNG
        relationship: {
            value: 0,
            min: -100,
            max: 100
        },

        // TAGESABLAUF
        schedule: {
            morning: "inn",
            afternoon: "inn",
            evening: "inn",
            night: "inn"
        },

        // FREISCHALTUNG
        unlock: {
            unlocked: true,
            condition: null
        }
    },

    // ==========================================
// 6. HÄNDLER
// ==========================================

npcMerchant: {
    id: "npc_merchant",

    // IDENTITÄT
    name: "Edwin",
    title: "Kaufmann",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein etablierter Kaufmann, der einen der wichtigsten Läden der Stadt betreibt. Er handelt mit alltäglichen Waren und kennt die Preise des regionalen Marktes.",

    age: 44,

    profession: "merchant",
    location: "general_store",

    // PERSÖNLICHKEIT
    personality: [
        "geschäftstüchtig",
        "freundlich",
        "selbstbewusst",
        "aufmerksam"
    ],

    traits: {
        friendliness: 65,
        patience: 55,
        greed: 65,
        courage: 35
    },

    likes: [
        "Gold",
        "gute Geschäfte",
        "seltene Waren",
        "zuverlässige Kunden",
        "Handel"
    ],

    dislikes: [
        "Diebe",
        "Schulden",
        "Feilschen ohne Kaufabsicht",
        "beschädigte Waren"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Willkommen! Suchst du etwas Bestimmtes?",
            "Ah, ein Kunde. Sieh dich ruhig um."
        ],

        default: [
            "Alles hat seinen Preis.",
            "Die Preise ändern sich ständig. Angebot und Nachfrage, verstehst du?",
            "Wenn du etwas Seltenes findest, bring es zu mir. Vielleicht machen wir ein gutes Geschäft."
        ],

        farewell: [
            "Komm bald wieder.",
            "Ich hoffe, du findest, wonach du suchst."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "shopsGeneralStore",

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "general_store",
        afternoon: "general_store",
        evening: "inn",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 7. BANKIER
// ==========================================

npcBanker: {
    id: "npc_banker",

    // IDENTITÄT
    name: "Oswin",
    title: "Bankier",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein vorsichtiger und äußerst gewissenhafter Bankier. Er verwaltet das Gold der Bürger und hält die finanziellen Angelegenheiten der Stadt im Blick.",

    age: 61,

    profession: "banker",
    location: "bank",

    // PERSÖNLICHKEIT
    personality: [
        "vorsichtig",
        "ordentlich",
        "analytisch",
        "zurückhaltend"
    ],

    traits: {
        friendliness: 45,
        patience: 90,
        greed: 60,
        courage: 20
    },

    likes: [
        "Gold",
        "Ordnung",
        "Zahlen",
        "Sicherheit",
        "zuverlässige Kunden"
    ],

    dislikes: [
        "Schulden",
        "Diebe",
        "Risiken",
        "unzuverlässige Geschäfte"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Guten Tag. Wie kann ich Ihnen behilflich sein?",
            "Ihr Vermögen ist bei mir sicher."
        ],

        default: [
            "Gold sicher aufzubewahren ist der erste Schritt zu einem größeren Vermögen.",
            "Geduld ist beim Vermögensaufbau wichtiger als Glück.",
            "Ich vertraue lieber auf Zahlen als auf Versprechen."
        ],

        farewell: [
            "Einen erfolgreichen Tag wünsche ich Ihnen.",
            "Denken Sie daran: Ein guter Händler kennt den Wert seines Goldes."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "",

    // QUESTS
    quests: [],

    // BANK-SYSTEM
    banking: {
        enabled: true,
        storage: true,
        interest: false,
        interestRate: 0
    },

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "bank",
        afternoon: "bank",
        evening: "bank",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 8. SCHMIED
// ==========================================

npcSmith: {
    id: "npc_smith",

    // IDENTITÄT
    name: "Garrik",
    title: "Schmied",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein kräftiger und erfahrener Schmied, der seit Jahrzehnten Werkzeuge, Waffen und Ausrüstung für die Bewohner der Stadt herstellt.",

    age: 47,

    profession: "smith",
    location: "blacksmith",

    // PERSÖNLICHKEIT
    personality: [
        "ruhig",
        "direkt",
        "zuverlässig",
        "handwerklich"
    ],

    traits: {
        friendliness: 45,
        patience: 40,
        greed: 25,
        courage: 75
    },

    likes: [
        "Metall",
        "gutes Handwerk",
        "Werkzeuge",
        "Feuer",
        "Bier"
    ],

    dislikes: [
        "schlechte Werkzeuge",
        "schlechtes Erz",
        "Diebe",
        "Zeitverschwendung"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Willkommen in meiner Schmiede.",
            "Was kann ich für dich herstellen?"
        ],

        default: [
            "Wenn du Metall hast, kann ich daraus etwas Nützliches machen.",
            "Ein gutes Werkzeug spart dir mehr Zeit, als du denkst.",
            "Das richtige Material entscheidet über die Qualität des Werkzeugs."
        ],

        farewell: [
            "Komm wieder, wenn du neues Material hast.",
            "Pass auf deine Werkzeuge auf."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "shopsSmith",

    // PRODUKTION
    production: {
        profession: "smith",
        recipes: [],
        efficiency: 1,
        quality: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "blacksmith",
        afternoon: "blacksmith",
        evening: "inn",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 9. SCHREINER
// ==========================================

npcCarpenter: {
    id: "npc_carpenter",

    // IDENTITÄT
    name: "Borin",
    title: "Schreiner",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein geduldiger Schreiner, der aus einfachem Holz Möbel, Werkzeuge und Bauteile für die Stadt herstellt.",

    age: 39,

    profession: "carpenter",
    location: "carpenter_workshop",

    // PERSÖNLICHKEIT
    personality: [
        "geduldig",
        "kreativ",
        "ruhig",
        "detailverliebt"
    ],

    traits: {
        friendliness: 70,
        patience: 85,
        greed: 20,
        courage: 30
    },

    likes: [
        "Holz",
        "Handwerk",
        "Natur",
        "saubere Arbeit",
        "Ruhe"
    ],

    dislikes: [
        "Holzverschwendung",
        "schlechte Arbeit",
        "Abholzung ohne Plan",
        "Hektik"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Ah, ein Besucher. Was darf ich für dich bauen?",
            "Willkommen. Hast du gutes Holz dabei?"
        ],

        default: [
            "Gutes Holz und das richtige Werkzeug können fast alles erschaffen.",
            "Man sollte einen Baum niemals verschwenden.",
            "Geduld ist beim Holzhandwerk wichtiger als Kraft."
        ],

        farewell: [
            "Pass gut auf deine Werkzeuge auf.",
            "Bring mir beim nächsten Mal gutes Holz."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "shopsCarpenter",

    // PRODUKTION
    production: {
        profession: "carpenter",
        recipes: [],
        efficiency: 1,
        quality: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "carpenter_workshop",
        afternoon: "carpenter_workshop",
        evening: "home",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 10. STEINMETZ
// ==========================================

npcMason: {
    id: "npc_mason",

    // IDENTITÄT
    name: "Hagen",
    title: "Steinmetz",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein kräftiger Steinmetz, der für den Bau und die Instandhaltung der Gebäude der Stadt verantwortlich ist.",

    age: 52,

    profession: "mason",
    location: "masonry",

    // PERSÖNLICHKEIT
    personality: [
        "wortkarg",
        "geduldig",
        "stark",
        "zuverlässig"
    ],

    traits: {
        friendliness: 40,
        patience: 80,
        greed: 25,
        courage: 65
    },

    likes: [
        "Stein",
        "stabile Gebäude",
        "harte Arbeit",
        "Ordnung",
        "Ruhe"
    ],

    dislikes: [
        "Pfusch",
        "instabile Gebäude",
        "Verschwendung",
        "unnötiges Gerede"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Was gibt es?",
            "Wenn du etwas bauen willst, bist du richtig."
        ],

        default: [
            "Stein ist schwer zu bearbeiten, aber ein gutes Fundament hält Jahrhunderte.",
            "Ein Gebäude ist nur so stark wie sein Fundament.",
            "Manchmal braucht man mehr Zeit, als einem lieb ist."
        ],

        farewell: [
            "Mach's gut.",
            "Und denk an ein gutes Fundament."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "shopsMason",

    // PRODUKTION
    production: {
        profession: "mason",
        recipes: [],
        efficiency: 1,
        quality: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "masonry",
        afternoon: "masonry",
        evening: "inn",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},

// ==========================================
// 11. HOLZFÄLLER
// ==========================================

npcWoodcutter: {
    id: "npc_woodcutter",

    // IDENTITÄT
    name: "Thorin",
    title: "Holzfäller",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein erfahrener Holzfäller, der die Wälder rund um die Stadt kennt und regelmäßig Holz für Handwerker und Bauleute liefert.",

    age: 43,

    profession: "woodcutter",
    location: "forest_camp",

    // PERSÖNLICHKEIT
    personality: [
        "ruhig",
        "naturverbunden",
        "ausdauernd",
        "zuverlässig"
    ],

    traits: {
        friendliness: 65,
        patience: 70,
        greed: 20,
        courage: 65
    },

    likes: [
        "Wälder",
        "Holz",
        "Ruhe",
        "gutes Werkzeug",
        "Natur"
    ],

    dislikes: [
        "Holzverschwendung",
        "Waldbrände",
        "unnötige Abholzung",
        "schlechte Werkzeuge"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Morgen. Die Bäume warten nicht.",
            "Du bist früh unterwegs."
        ],

        default: [
            "Holz ist die Grundlage für vieles.",
            "Ein guter Holzfäller kennt jeden Baum in seinem Gebiet.",
            "Man sollte immer mehr pflanzen, als man fällt."
        ],

        working: [
            "Noch ein paar Bäume, dann ist die heutige Arbeit geschafft.",
            "Die Axt könnte langsam wieder geschärft werden."
        ],

        farewell: [
            "Bis später.",
            "Pass auf, wenn du im Wald unterwegs bist."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "",

    // PRODUKTION
    production: {
        profession: "woodcutter",

        outputs: [
            {
                resource: "wood",
                amount: 1
            }
        ],

        efficiency: 1,
        speed: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "forest_camp",
        afternoon: "forest",
        evening: "forest_camp",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 12. BERGARBEITER
// ==========================================

npcMiner: {
    id: "npc_miner",

    // IDENTITÄT
    name: "Durgan",
    title: "Bergarbeiter",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein harter und erfahrener Bergarbeiter, der tief unter der Erde nach Erz und wertvollen Mineralien sucht.",

    age: 49,

    profession: "miner",
    location: "mine",

    // PERSÖNLICHKEIT
    personality: [
        "hartnäckig",
        "wortkarg",
        "mutig",
        "zuverlässig"
    ],

    traits: {
        friendliness: 40,
        patience: 80,
        greed: 30,
        courage: 85
    },

    likes: [
        "Erz",
        "Gold",
        "gute Spitzhacken",
        "Bier",
        "harte Arbeit"
    ],

    dislikes: [
        "einstürzende Stollen",
        "schlechte Werkzeuge",
        "Diebe",
        "Zeitverschwendung"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Was willst du? Ich hab zu arbeiten.",
            "Wenn du Erz suchst, bist du hier richtig."
        ],

        default: [
            "Tief unter der Erde findet man Dinge, die man an der Oberfläche niemals sehen würde.",
            "Je tiefer man gräbt, desto wertvoller wird das Erz.",
            "Ein guter Bergarbeiter hört, wenn der Berg sich verändert."
        ],

        working: [
            "Das Gestein wird hier härter.",
            "Ich glaube, dort unten liegt eine Erzader."
        ],

        farewell: [
            "Bis später.",
            "Und pass auf, wo du hintrittst."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "",

    // PRODUKTION
    production: {
        profession: "miner",

        outputs: [
            {
                resource: "stone",
                amount: 2
            },
            {
                resource: "iron_ore",
                amount: 1
            }
        ],

        rareOutputs: [
            {
                resource: "gold_ore",
                chance: 0.01,
                amount: 1
            }
        ],

        efficiency: 1,
        speed: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "mine",
        afternoon: "mine",
        evening: "mine_entrance",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 13. FISCHER
// ==========================================

npcFisher: {
    id: "npc_fisher",

    // IDENTITÄT
    name: "Finn",
    title: "Fischer",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein geduldiger Fischer, der täglich am Fluss seine Netze auswirft und die Stadt mit frischem Fisch versorgt.",

    age: 36,

    profession: "fisher",
    location: "river",

    // PERSÖNLICHKEIT
    personality: [
        "geduldig",
        "freundlich",
        "gelassen",
        "beobachtend"
    ],

    traits: {
        friendliness: 80,
        patience: 95,
        greed: 15,
        courage: 45
    },

    likes: [
        "Fischen",
        "Flüsse",
        "Ruhe",
        "gutes Wetter",
        "frischen Fisch"
    ],

    dislikes: [
        "verschmutztes Wasser",
        "Stürme",
        "Lärm",
        "leere Netze"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Ah, guten Morgen.",
            "Heute ist das Wasser ruhig."
        ],

        default: [
            "Der Fluss war heute ruhig. Perfektes Wetter zum Angeln.",
            "Manchmal muss man einfach warten.",
            "Das Wasser verrät einem mehr, als man denkt."
        ],

        working: [
            "Da! Ich glaube, da hat etwas angebissen.",
            "Heute scheint ein guter Tag zu werden."
        ],

        farewell: [
            "Bis später.",
            "Vielleicht sehen wir uns am Fluss."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "",

    // PRODUKTION
    production: {
        profession: "fisher",

        outputs: [
            {
                resource: "fish",
                amount: 1
            }
        ],

        rareOutputs: [
            {
                resource: "rare_fish",
                chance: 0.02,
                amount: 1
            }
        ],

        efficiency: 1,
        speed: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "river",
        afternoon: "river",
        evening: "fish_market",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 14. JÄGER
// ==========================================

npcHunter: {
    id: "npc_hunter",

    // IDENTITÄT
    name: "Ronan",
    title: "Jäger",
    icon: "img/icons/iconNpc.svg",

    description:
        "Ein erfahrener Jäger, der die Wildnis rund um die Stadt erkundet und Fleisch sowie Leder liefert.",

    age: 38,

    profession: "hunter",
    location: "forest",

    // PERSÖNLICHKEIT
    personality: [
        "aufmerksam",
        "unabhängig",
        "ruhig",
        "vorsichtig"
    ],

    traits: {
        friendliness: 50,
        patience: 75,
        greed: 25,
        courage: 90
    },

    likes: [
        "Wildnis",
        "Tiere",
        "gute Bögen",
        "Spurenlesen",
        "Abenteuer"
    ],

    dislikes: [
        "Wilderer",
        "unnötige Gewalt",
        "laute Menschen",
        "Monster"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Du solltest leiser sein.",
            "Was führt dich in den Wald?"
        ],

        default: [
            "Im Wald muss man aufmerksam sein. Nicht jedes Geräusch kommt von einem Tier.",
            "Spuren erzählen dir alles, wenn du weißt, wonach du suchen musst.",
            "Die Wildnis ist nicht gefährlich. Unvorsichtigkeit ist gefährlich."
        ],

        working: [
            "Da vorne war ein Reh.",
            "Ich habe frische Spuren gefunden."
        ],

        farewell: [
            "Bleib auf dem Weg.",
            "Wir sehen uns."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "",

    // PRODUKTION
    production: {
        profession: "hunter",

        outputs: [
            {
                resource: "meat",
                amount: 1
            },
            {
                resource: "leather",
                amount: 1
            }
        ],

        rareOutputs: [
            {
                resource: "rare_pelt",
                chance: 0.01,
                amount: 1
            }
        ],

        efficiency: 1,
        speed: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "forest",
        afternoon: "forest",
        evening: "town",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


// ==========================================
// 15. KRÄUTERKUNDIGE
// ==========================================

npcHerbalist: {
    id: "npc_herbalist",

    // IDENTITÄT
    name: "Elara",
    title: "Kräuterkundige",
    icon: "img/icons/iconNpc.svg",

    description:
        "Eine kundige Kräutersammlerin, die die Pflanzen und Heilkräuter der umliegenden Wälder kennt und daraus verschiedene Mittel herstellt.",

    age: 34,

    profession: "herbalist",
    location: "herbalist_hut",

    // PERSÖNLICHKEIT
    personality: [
        "freundlich",
        "ruhig",
        "wissbegierig",
        "naturverbunden"
    ],

    traits: {
        friendliness: 85,
        patience: 90,
        greed: 10,
        courage: 40
    },

    likes: [
        "Pflanzen",
        "Kräuter",
        "Natur",
        "Heilkunde",
        "Tiere"
    ],

    dislikes: [
        "Umweltverschmutzung",
        "unnötige Zerstörung",
        "Gift",
        "Pflanzenverschwendung"
    ],

    // DIALOG
    dialog: {
        greeting: [
            "Willkommen. Kann ich dir helfen?",
            "Du suchst etwas Bestimmtes?"
        ],

        default: [
            "Die Natur gibt uns alles, was wir brauchen. Man muss nur wissen, wo man suchen muss.",
            "Manche Pflanzen heilen, andere können töten.",
            "Ein gutes Heilmittel beginnt mit den richtigen Zutaten."
        ],

        working: [
            "Diese Pflanze ist heute besonders kräftig.",
            "Ich glaube, ich habe gefunden, wonach ich gesucht habe."
        ],

        farewell: [
            "Pass gut auf dich auf.",
            "Und vergiss nicht: Die Natur vergisst nichts."
        ]
    },

    // FRAKTION
    faction: "town",

    // SHOP
    shopinventory: "shopsHerbalist",

    // PRODUKTION
    production: {
        profession: "herbalist",

        outputs: [
            {
                resource: "herbs",
                amount: 1
            }
        ],

        rareOutputs: [
            {
                resource: "rare_herb",
                chance: 0.02,
                amount: 1
            }
        ],

        efficiency: 1,
        speed: 1
    },

    // QUESTS
    quests: [],

    // BEZIEHUNG
    relationship: {
        value: 0,
        min: -100,
        max: 100
    },

    // TAGESABLAUF
    schedule: {
        morning: "forest",
        afternoon: "herbalist_hut",
        evening: "herbalist_hut",
        night: "home"
    },

    // FREISCHALTUNG
    unlock: {
        unlocked: true,
        condition: null
    }
},


};
