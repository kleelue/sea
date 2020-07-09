/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class ActorSheetSeaVillain extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["sea", "sheet", "actor", "sea-villain"],
            template: "systems/sea/templates/actors/villain.html",
            width: 600,
            height: 700,
            tabs: [{ navSelector: ".nav", contentSelector: ".body", initial: "skills" }]
        });
    }

    /* -------------------------------------------- */

    /** @override */
    getData() {
        const data = super.getData();
        data.actor = data.entity;
        data.data = data.entity.data;
        return data;
    }

    /* -------------------------------------------- */

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        html.find('.rollable').click(ev => {
            var value = $(ev.currentTarget).attr("data-value") * 1;
            this.rolling(value);
        });
    }

    rolling(value) {
        const actor = this.actor;
        let roll = new Roll(value + "d10").roll();
        // Flag d10 options for crit & fumble
        for (let d of roll.dice) {
            if (d.faces === 10) {
                d.options.critical = 10;
                d.options.fumble = 1;
            }
        }

        // Convert the roll to a chat message and return the roll
        //let mySpeaker = ChatMessage.getSpeaker();
        //roll.toMessage({ speaker: mySpeaker });
        roll.toMessage({ speaker: { alias: game.user.name + " würfelt für " + actor.data.name } });
        console.log(roll.dice);
        return roll;
    }
}