import { locations as locationsRegistry } from "../registries/world/locations.js";

export function getLocations(){

    return locationsRegistry;
};

export function getLocation(id){

    return locationsRegistry[id];
};

export function getCurrentLocation(game){

    return getLocation(game.state.world.currentLocation);
};