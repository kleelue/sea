/**
 * A simple and flexible system for world-building using an arbitrary collection of character and item attributes
 * Author: Atropos
 * Software License: GNU GPLv3
 */
// Import Modules
import { SEA } from './config.js'
// Import Applications
import { ActorSea } from "./actors/actor.js";
import { ActorSheetSeaCharacter } from "./actor-sheets/character.js";
import { ActorSheetSeaVillain } from "./actor-sheets/villain.js";
import { ActorSheetSeaDangerpoints } from "./actor-sheets/dangerpoints.js";


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function() {
    console.log(`Initializing 7th Sea System`);

    game.sea = {
        applications: {
            ActorSea
        },
        config: SEA
    }

    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    CONFIG.Combat.initiative = {
        formula: "1d20",
        decimals: 2
    };

    CONFIG.SEA = SEA;

    // Define custom Entity classes
    CONFIG.Actor.entityClass = ActorSea;

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("sea", ActorSheetSeaCharacter, { types: ["character"], makeDefault: true });
    Actors.registerSheet("sea", ActorSheetSeaVillain, { types: ["villain"], makeDefault: false });
    Actors.registerSheet("sea", ActorSheetSeaDangerpoints, { types: ["dangerpoints"], makeDefault: false });

    // Register system settings
    // game.settings.register("sea", "macroShorthand", {
    //     name: "Shortened Macro Syntax",
    //     hint: "Enable a shortened macro syntax which allows referencing attributes directly, for example @str instead of @attributes.str.value. Disable this setting if you need the ability to reference the full attribute model, for example @attributes.str.label.",
    //     scope: "world",
    //     type: Boolean,
    //     default: true,
    //     config: true
    // });

    //Setup helper for wounds description
    Handlebars.registerHelper('buildWoundDesc', function(current, desc) {
        var outStr = " ";
        if (current > 0) {
            var x = 0;
            for (x = 1; x <= current; x++) {
                outStr += "<div class=\"desc\">" + game.i18n.localize("SEA.stage") + " " + x + ": </div>";
                outStr += "<div class=\"item\">" + game.i18n.localize(SEA.WoundDesc[x]) + "</div>";
            }
        } else {
            outStr += "<div class=\"desc\">" + game.i18n.localize("SEA.stage") + " 0: </div>";
            outStr += "<div class=\"item\">" + game.i18n.localize(SEA.WoundDesc[0]) + "</div>";
        }
        return outStr;
    });

    //building clickable dot-rows depending on which value to reference
    Handlebars.registerHelper('buildDots', function(current, max, type, key) {
        var x = 1;
        var outStr = " ";
        switch (type) {
            //key for wounds -> critvalue
            case "wounds":
                for (x = 1; x <= max; x++) {
                    if (x <= current) {
                        if (x % 5 == 0) {
                            if (Math.trunc(x / 5) <= key) {
                                outStr += "<i data-setvalue=\"" + x + "\" class=\"crit fas fa-heart setcurrent-" + type + "\"></i>";
                            } else {
                                outStr += "<i data-setvalue=\"" + x + "\" class=\"crit far fa-heart setcurrent-" + type + "\"></i>";
                            }
                        } else {
                            outStr += "<i data-setvalue=\"" + x + "\" class=\"wound fas fa-heart setcurrent-" + type + "\"></i>";
                        }
                    } else {
                        if (x % 5 == 0) {
                            if (Math.trunc(x / 5) <= key) {
                                outStr += "<i data-setvalue=\"" + x + "\" class=\"crit fas fa-heart setcurrent-" + type + "\"></i>";
                            } else {
                                outStr += "<i data-setvalue=\"" + x + "\" class=\"crit far fa-heart setcurrent-" + type + "\"></i>";
                            }
                        } else {
                            outStr += "<i data-setvalue=\"" + x + "\" class=\"wound far fa-heart setcurrent-" + type + "\"></i>";
                        }
                    }
                    if (x % 5 == 0) {
                        outStr += " ";
                    }
                }
                break;
            case "corruption":
                for (x = 1; x <= max; x++) {
                    if (x <= current) {
                        outStr += "<span data-setvalue=\"" + x + "\" class=\"circle full setcurrent-" + type + "\"> </span>";
                    } else {
                        outStr += "<span data-setvalue=\"" + x + "\" class=\"circle empty setcurrent-" + type + "\"> </span>";
                    }
                    if (x % 5 == 0) {
                        outStr += " ";
                    }
                }
                break;
            case "attributes":
                for (x = 1; x <= max; x++) {
                    if (x <= current) {
                        outStr += "<span data-setvalue=\"" + x + "\" class=\"circle full setattrib-" + key + "\"> </span>";
                    } else {
                        outStr += "<span data-setvalue=\"" + x + "\" class=\"circle empty setattrib-" + key + "\"> </span>";
                    }
                }
                break;
            case "skills":
                for (x = 1; x <= max; x++) {
                    if (x <= current) {
                        outStr += "<span data-setvalue=\"" + x + "\" class=\"circle full setskill-" + key + "\"> </span>";
                    } else {
                        outStr += "<span data-setvalue=\"" + x + "\" class=\"circle empty setskill-" + key + "\"> </span>";
                    }
                }
                break;
        }
        return outStr;
    });

});
/**
 * This function runs after game data has been requested
 * and loaded from the servers, so entities exist
 */
// Hooks.once('setup', function() {
//     // Localize CONFIG objects once up-front
//     const toLocalize = [
//         'attributes'
//     ]

//     // Exclude some from sorting where the default order matters
//     const noSort = []

//     // Localize and sort CONFIG objects
//     for (const o of toLocalize) {
//         const localized = Object.entries(CONFIG.SEA[o]).map(e => {
//             return [e[0], game.i18n.localize(e[1])]
//         })
//         if (!noSort.includes(o)) localized.sort((a, b) => a[1].localeCompare(b[1]))
//         CONFIG.SEA[o] = localized.reduce((obj, e) => {
//             obj[e[0]] = e[1]
//             return obj
//         }, {})
//     }
// });

/**
 * Set the default name for an actor if none is given
 **/
Hooks.on('preCreateActor', function(entity, options, userId) {
    if (entity.name == "") {
        entity.name = "New " + (entity.type)[0].toUpperCase() + (entity.type).slice(1);
    }
});