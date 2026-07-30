
export function getCurrentViewPath(game){

    for(const viewPathID in game.ui.viewPath){
        const pathEntry = game.ui.viewPath[viewPathID];
        console.log(pathEntry);
    };

}