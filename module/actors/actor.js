/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class ActorSea extends Actor {

    prepareData() {
        super.prepareData();
        const actorData = this.data;
        const data = actorData.data;
        if (actorData.type === "character") {

            //Wundenlevel
            data.derived.woundlevel.value = Math.trunc(data.header.wounds.value / 5);

        }

        if (actorData.type === "villain") {

        }
    }

}