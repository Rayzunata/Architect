import {districts as districtRegistry} from "../registries/world/districts.js"

export function getDistricts(){

    return districtRegistry;
};

export function getDistrict(id){

    return districtRegistry[id];
};

export function getCurrentDistrict(game){

    return getDistrict(game.state.world.currentDistrict);
};