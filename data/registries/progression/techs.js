

kupferverarbeitung:{
                    name:"Kupferverarbeitung",
                    description:"Schaltet Kupferbarren frei.",
                    unlocked:false,
                    researched:false,
                    cost:50,
                    requires:[],
                },
                kupferwerkzeuge:{
                    name:"Kupferwerkzeuge",
                    description:"Schaltet Kupferwerkzeuge frei.",
                    unlocked:false,
                    researched:false,
                    cost:50,
                    requires:["kupferverarbeitung"],
                },
                eisenverarbeitung:{
                    name:"Eisenverarbeitung",
                    description:"Schaltet Eisenbarren frei.",
                    unlocked:false,
                    researched:false,
                    cost:100,
                    requires:["kupferverarbeitung"],
                },