import { activities as activitiesRegistry } from "../registries/world/activities.js";

function getActivities(){

    return activitiesRegistry;
};

function getActivity(id){

    return activitiesRegistry[id];
};

function getCurrentActivity(game){

    return getActivity(game.state.world.currentActivity);
};