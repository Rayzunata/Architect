import {settlements as settlementsRegistry} from "../registries/world/settlements.js"

export function getSettlements(){
    return settlementsRegistry;
};

export function getSettlement(id){

    return settlementsRegistry[id];
};

export function getCurrentSettlement(game){
            
    return getSettlement(game.state.world.currentSettlement);

};