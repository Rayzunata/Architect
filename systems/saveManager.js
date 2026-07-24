export const saveManager = {

    save(game){

        localStorage.setItem(
            "architectSave",
            JSON.stringify(game)
        );

    },

    load(game){

        const save = localStorage.getItem("architectSave");

        if(!save){
            return;
        }

        Object.assign(game, JSON.parse(save));

    },
    delete(){
        localStorage.removeItem("architectSave");
    }

};