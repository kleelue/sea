//import config for localization
import { SEA } from '../config.js';
/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class ActorSheetSeaCharacter extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["sea", "sheet", "actor", "sea-character"],
            template: "systems/sea/templates/actors/character.html",
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

        for (let [key, attr] of Object.entries(data.data.attributes)) {
            console.log(CONFIG.SEA);
            console.log(CONFIG.SEA.attributes[key]);
            console.log(game.i18n.localize(CONFIG.SEA.attributes[key]));
            console.log(game.i18n.localize("SEA.AttributePanache"));
            //attr.label = game.i18n.localize(SEA.attributes[key]);
        }

        return data;
    }

    /* -------------------------------------------- */

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        html.find('.roll-img').click(this._Roll.bind(this));

        //Set, which attribute to Roll
        html.find('.roll-attr').click(ev => {
            const actor = this.actor;
            var key = $(ev.currentTarget).attr("data-key");
            var value = $(ev.currentTarget).attr("data-attr");
            actor.update({ "data.rollattr.value": value, "data.rollattr.key": key });
        });

        html.find(".roll-attr.resolve").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.attributes.resolve.cssClass": "rolling",
                "data.attributes.finesse.cssClass": "",
                "data.attributes.brawn.cssClass": "",
                "data.attributes.panache.cssClass": "",
                "data.attributes.wits.cssClass": ""
            });
        });

        html.find(".roll-attr.finesse").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.attributes.resolve.cssClass": "",
                "data.attributes.finesse.cssClass": "rolling",
                "data.attributes.brawn.cssClass": "",
                "data.attributes.panache.cssClass": "",
                "data.attributes.wits.cssClass": ""
            });
        });

        html.find(".roll-attr.brawn").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.attributes.resolve.cssClass": "",
                "data.attributes.finesse.cssClass": "",
                "data.attributes.brawn.cssClass": "rolling",
                "data.attributes.panache.cssClass": "",
                "data.attributes.wits.cssClass": ""
            });
        });

        html.find(".roll-attr.panache").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.attributes.resolve.cssClass": "",
                "data.attributes.finesse.cssClass": "",
                "data.attributes.brawn.cssClass": "",
                "data.attributes.panache.cssClass": "rolling",
                "data.attributes.wits.cssClass": ""
            });
        });

        html.find(".roll-attr.wits").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.attributes.resolve.cssClass": "",
                "data.attributes.finesse.cssClass": "",
                "data.attributes.brawn.cssClass": "",
                "data.attributes.panache.cssClass": "",
                "data.attributes.wits.cssClass": "rolling"
            });
        });

        //Set, which Skill to Roll
        html.find('.roll-skill').click(ev => {
            const actor = this.actor;
            var key = $(ev.currentTarget).attr("data-key");
            var value = $(ev.currentTarget).attr("data-skill");
            actor.update({ "data.rollskill.value": value, "data.rollskill.key": key });
        });

        html.find(".roll-skill.athletics").click(ev => {
            const actor = this.actor;
            if ($(ev.currentTarget))
                actor.update({
                    "data.skills.athletics.cssClass": "rolling",
                    "data.skills.tempt.cssClass": "",
                    "data.skills.perform.cssClass": "",
                    "data.skills.intimidate.cssClass": "",
                    "data.skills.empathy.cssClass": "",
                    "data.skills.scholarship.cssClass": "",
                    "data.skills.warfare.cssClass": "",
                    "data.skills.brawl.cssClass": "",
                    "data.skills.ride.cssClass": "",
                    "data.skills.sailing.cssClass": "",
                    "data.skills.theft.cssClass": "",
                    "data.skills.convince.cssClass": "",
                    "data.skills.hide.cssClass": "",
                    "data.skills.weaponry.cssClass": "",
                    "data.skills.notice.cssClass": "",
                    "data.skills.aim.cssClass": ""
                });
        });

        html.find(".roll-skill.tempt").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "rolling",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.perform").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "rolling",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.intimidate").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "rolling",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.empathy").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "rolling",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.scholarship").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "rolling",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.warfare").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "rolling",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.brawl").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "rolling",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.ride").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "rolling",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.sailing").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "rolling",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.theft").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "rolling",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.convince").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "rolling",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.hide").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "rolling",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.weaponry").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "rolling",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.notice").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "rolling",
                "data.skills.aim.cssClass": ""
            });
        });

        html.find(".roll-skill.aim").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": "rolling"
            });
        });

        html.find(".reset-roll").click(ev => {
            const actor = this.actor;
            actor.update({
                "data.skills.athletics.cssClass": "",
                "data.skills.tempt.cssClass": "",
                "data.skills.perform.cssClass": "",
                "data.skills.intimidate.cssClass": "",
                "data.skills.empathy.cssClass": "",
                "data.skills.scholarship.cssClass": "",
                "data.skills.warfare.cssClass": "",
                "data.skills.brawl.cssClass": "",
                "data.skills.ride.cssClass": "",
                "data.skills.sailing.cssClass": "",
                "data.skills.theft.cssClass": "",
                "data.skills.convince.cssClass": "",
                "data.skills.hide.cssClass": "",
                "data.skills.weaponry.cssClass": "",
                "data.skills.notice.cssClass": "",
                "data.skills.aim.cssClass": "",
                "data.attributes.resolve.cssClass": "",
                "data.attributes.finesse.cssClass": "",
                "data.attributes.brawn.cssClass": "",
                "data.attributes.panache.cssClass": "",
                "data.attributes.wits.cssClass": "",
                "data.rollattr.value": 0,
                "data.rollskill.value": 0
            });
        });

        html.find(".locked").click(ev => {
            const actor = this.actor;
            if ($(ev.currentTarget).text().search("Gesperrt") > 0) {
                actor.update({ "data.locked": "Editierbar" });
            } else {
                actor.update({ "data.locked": "Gesperrt" });
            }
        });

        //Set current health based on click on dot
        html.find('.setcurrent-wounds.wound').click(ev => {
            const actor = this.actor;
            var newValue = this._setCurrentLogic(this.actor.data.data.header.wounds.value, this.actor.data.data.header.wounds.min, this.actor.data.data.header.wounds.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
            actor.update({
                "data.header.wounds.value": newValue,
            });
            if (Math.trunc(newValue / 5) > actor.data.data.header.wounds.critvalue) {
                actor.update({
                    "data.header.wounds.critvalue": Math.trunc(newValue / 5),
                });
            }
        });

        //Set current health based on click on dot
        html.find('.setcurrent-wounds.crit').click(ev => {
            const actor = this.actor;
            var newValue = this._setCurrentLogic(this.actor.data.data.header.wounds.critvalue, 0, 4, Math.trunc(($(ev.currentTarget).attr("data-setvalue") * 1) / 5));
            actor.update({
                "data.header.wounds.critvalue": newValue
            });
        });

        //Set current corruption based on click on dot
        html.find('.setcurrent-corruption').click(ev => {
            const actor = this.actor;
            var newValue = this._setCurrentLogic(this.actor.data.data.header.corruption.value, this.actor.data.data.header.corruption.min, this.actor.data.data.header.corruption.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
            actor.update({
                "data.header.corruption.value": newValue
            });
        });
        //Set Attribute resolve based on click on dot
        html.find('.setattrib-resolve').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.attributes.resolve.value, this.actor.data.data.attributes.resolve.min, this.actor.data.data.attributes.resolve.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.attributes.resolve.value": newValue
                });
            }
        });
        //Set Attribute brawn based on click on dot
        html.find('.setattrib-brawn').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.attributes.brawn.value, this.actor.data.data.attributes.brawn.min, this.actor.data.data.attributes.brawn.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.attributes.brawn.value": newValue
                });
            }
        });
        //Set Attribute finesse based on click on dot
        html.find('.setattrib-finesse').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.attributes.finesse.value, this.actor.data.data.attributes.finesse.min, this.actor.data.data.attributes.finesse.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.attributes.finesse.value": newValue
                });
            }
        });
        //Set Attribute wits based on click on dot
        html.find('.setattrib-wits').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.attributes.wits.value, this.actor.data.data.attributes.wits.min, this.actor.data.data.attributes.wits.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.attributes.wits.value": newValue
                });
            }
        });
        //Set Attribute panache based on click on dot
        html.find('.setattrib-panache').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.attributes.panache.value, this.actor.data.data.attributes.panache.min, this.actor.data.data.attributes.panache.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.attributes.panache.value": newValue
                });
            }
        });
        //Set Skill aim based on click on dot
        html.find('.setskill-aim').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.aim.value, this.actor.data.data.skills.aim.min, this.actor.data.data.skills.aim.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.aim.value": newValue
                });
            }
        });
        //Set Skill athletics based on click on dot
        html.find('.setskill-athletics').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.athletics.value, this.actor.data.data.skills.athletics.min, this.actor.data.data.skills.athletics.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.athletics.value": newValue
                });
            }
        });
        //Set Skill brawl based on click on dot
        html.find('.setskill-brawl').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.brawl.value, this.actor.data.data.skills.brawl.min, this.actor.data.data.skills.brawl.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.brawl.value": newValue
                });
            }
        });
        //Set Skill convince based on click on dot
        html.find('.setskill-convince').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.convince.value, this.actor.data.data.skills.convince.min, this.actor.data.data.skills.convince.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.convince.value": newValue
                });
            }
        });
        //Set Skill empathy based on click on dot
        html.find('.setskill-empathy').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.empathy.value, this.actor.data.data.skills.empathy.min, this.actor.data.data.skills.empathy.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.empathy.value": newValue
                });
            }
        });
        //Set Skill hide based on click on dot
        html.find('.setskill-hide').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.hide.value, this.actor.data.data.skills.hide.min, this.actor.data.data.skills.hide.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.hide.value": newValue
                });
            }
        });
        //Set Skill intimidate based on click on dot
        html.find('.setskill-intimidate').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.intimidate.value, this.actor.data.data.skills.intimidate.min, this.actor.data.data.skills.intimidate.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.intimidate.value": newValue
                });
            }
        });
        //Set Skill notice based on click on dot
        html.find('.setskill-notice').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.notice.value, this.actor.data.data.skills.notice.min, this.actor.data.data.skills.notice.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.notice.value": newValue
                });
            }
        });
        //Set Skill perform based on click on dot
        html.find('.setskill-perform').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.perform.value, this.actor.data.data.skills.perform.min, this.actor.data.data.skills.perform.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.perform.value": newValue
                });
            }
        });
        //Set Skill ride based on click on dot
        html.find('.setskill-ride').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.ride.value, this.actor.data.data.skills.ride.min, this.actor.data.data.skills.ride.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.ride.value": newValue
                });
            }
        });
        //Set Skill sailing based on click on dot
        html.find('.setskill-sailing').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.sailing.value, this.actor.data.data.skills.sailing.min, this.actor.data.data.skills.sailing.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.sailing.value": newValue
                });
            }
        });
        //Set Skill scholarship based on click on dot
        html.find('.setskill-scholarship').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.scholarship.value, this.actor.data.data.skills.scholarship.min, this.actor.data.data.skills.scholarship.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.scholarship.value": newValue
                });
            }
        });
        //Set Skill tempt based on click on dot
        html.find('.setskill-tempt').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.tempt.value, this.actor.data.data.skills.tempt.min, this.actor.data.data.skills.tempt.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.tempt.value": newValue
                });
            }
        });
        //Set Skill theft based on click on dot
        html.find('.setskill-theft').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.theft.value, this.actor.data.data.skills.theft.min, this.actor.data.data.skills.theft.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.theft.value": newValue
                });
            }
        });
        //Set Skill warfare based on click on dot
        html.find('.setskill-warfare').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.warfare.value, this.actor.data.data.skills.warfare.min, this.actor.data.data.skills.warfare.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.warfare.value": newValue
                });
            }
        });
        //Set Skill weaponry based on click on dot
        html.find('.setskill-weaponry').click(ev => {
            const actor = this.actor;
            if (actor.data.data.locked.search("Editierbar") >= 0) {
                var newValue = this._setCurrentLogic(this.actor.data.data.skills.weaponry.value, this.actor.data.data.skills.weaponry.min, this.actor.data.data.skills.weaponry.max, ($(ev.currentTarget).attr("data-setvalue") * 1));
                actor.update({
                    "data.skills.weaponry.value": newValue
                });
            }
        });
    }

    _setCurrentLogic(value, min, max, setTo) {
        var newValue = 0;
        if (value == setTo) {
            newValue = value - 1;
        } else {
            newValue = setTo * 1;
        }
        if (newValue < min) {
            newValue = min;
        }
        if (newValue > max) {
            newValue = max;
        }
        return newValue;
    }

    _Roll(event) {
        const actor = this.actor;
        event.preventDefault();
        var attr = event.currentTarget.parentElement.querySelector(".bonus-attr").value * 1;
        var skill = event.currentTarget.parentElement.querySelector(".bonus-skill").value * 1;
        var bonus = event.currentTarget.parentElement.querySelector(".bonus-roll").value * 1;
        var value = attr + skill + bonus;
        this.rolling(value);
    }

    rolling(value) {
        const actor = this.actor;
        this.actor.data.data.roll = value;
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