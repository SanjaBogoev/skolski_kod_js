//Modul autobus.js

/*Kreirati kalsu Autobus koja ima podatke o registarskom broju autobusa i o
broju sedišta u autobusu.
-Napraviti konstruktor kome se prosleđujeu odgovarajuće vrednosti.
-Napraviti odgovarajuće getere i setere.
-Napraviti metodu koja ispisuje podatke o autobusu.
-Napraviti niz autobusa.
-Ispisati podatke o svakom autobusu iz niza autobusa */

export class Autobus {
    constructor(rb, bs) {
        this.regBr = rb;
        this.brSedista = bs;
    }
    //geteri i seteri
    set regBr(rb) {
        this._regBr = rb;
    }
    set brSedista(bs) {
        this._brSedista = bs;
    }
    get regBr() {
        return this._regBr;
    }
    get brSedista() {
        return this._brSedista;
    }
    stampaj() {
        console.log(`Autobus: ${this.regBr}, ${this.brSedista}`);
    }
}