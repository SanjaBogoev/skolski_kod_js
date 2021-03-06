import { Vozilo } from "./vozilo.js";

export class Kamion extends Vozilo{
    //tip, boja i nosivost
    constructor(t, b, n) {
        super(t, b);
        this.nosivost = n;
    }

    set nosivost(n){
        this._nosivost = n;
    }
    get nosivost() {
        return this._nosivost;
    }
    ispisiKamion() {
        console.log(`Kamion: ${this.tip} ${this.boja} ${this.nosivost}`);
    }

}