import {regions as regionsRegistry} from "../registries/world/regions.js"

export function getRegions(){

    return regionsRegistry;
};

export function getRegion(id){

    return regionsRegistry[id]
};

export function getCurrentRegion(game){

    return getRegion(game.state.world.currentRegion);
};