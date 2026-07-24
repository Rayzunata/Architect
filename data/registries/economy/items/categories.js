
import {resourceForms} from "./resourceForms.js";
import {weaponForms} from "./weaponForms.js";
import {toolForms} from "./toolForms.js";


export const categories = {
            resource: {
                hasMods: false,
                forms: resourceForms,
            },
            weapon: {
                hasMods: true,
                forms: weaponForms,
            },
            tool: {
                hasMods: true,
                forms: toolForms,
            },
            // consumable: {
            //     hasMods: false,
            //     forms: consumableForms,
            // }
        };

export default categories;