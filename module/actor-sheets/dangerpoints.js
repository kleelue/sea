/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class ActorSheetSeaDangerpoints extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["sea", "sheet", "actor", "sea-dangerpoints"],
            template: "systems/sea/templates/actors/dangerpoints.html",
            width: 450,
            height: 200,
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

        html.find('.inc').click(ev => {
            const actor = this.actor;
            var inc = $(ev.currentTarget).attr("data-inc") * 1;
            var value = $(ev.currentTarget).attr("data-value") * 1 + inc;
            actor.update({ "data.value": value });
        });

        html.find('.dec').click(ev => {
            const actor = this.actor;
            var dec = $(ev.currentTarget).attr("data-dec") * 1;
            var value = this._notNegative($(ev.currentTarget).attr("data-value") * 1 - dec);
            actor.update({ "data.value": value });
        });

    }

    _notNegative(value) {
        if (value < 0) {
            return 0;
        } else {
            return value;
        }
    }
}