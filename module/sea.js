/**
 * A simple and flexible system for world-building using an arbitrary collection of character and item attributes
 * Author: Atropos
 * Software License: GNU GPLv3
 */

// Import Modules
import { ActorSea } from "./actors/actor.js";
import { ActorSheetSeaCharacter } from "./actor-sheets/character.js";
import { ActorSheetSeaVillain } from "./actor-sheets/villain.js";
import { ActorSheetSeaDangerpoints } from "./actor-sheets/dangerpoints.js";


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function() {
    console.log(`Initializing 7th Sea System`);

    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    CONFIG.Combat.initiative = {
        formula: "1d20",
        decimals: 2
    };

    // Define custom Entity classes
    CONFIG.Actor.entityClass = ActorSea;

    // Register sheet application classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("sea", ActorSheetSeaCharacter, { types: ["character"], makeDefault: true });
    Actors.registerSheet("sea", ActorSheetSeaVillain, { types: ["villain"], makeDefault: false });
    Actors.registerSheet("sea", ActorSheetSeaDangerpoints, { types: ["dangerpoints"], makeDefault: false });

    // Register system settings
    game.settings.register("sea", "macroShorthand", {
        name: "Shortened Macro Syntax",
        hint: "Enable a shortened macro syntax which allows referencing attributes directly, for example @str instead of @attributes.str.value. Disable this setting if you need the ability to reference the full attribute model, for example @attributes.str.label.",
        scope: "world",
        type: Boolean,
        default: true,
        config: true
    });

    //Setup helper for wounds description
    Handlebars.registerHelper('buildWoundDesc', function(current, desc) {
        var outStr = " ";
        if (current > 0) {
            var x = 0;
            for (x = 1; x <= current; x++) {
                outStr += "<div class=\"desc\">Stufe " + x + ": </div>";
                outStr += "<div class=\"item\">" + desc[x] + "</div>";
            }
        } else {
            outStr += "<div class=\"desc\">Stufe 0: </div>";
            outStr += "<div class=\"item\">Keine Auswirkungen</div>";
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