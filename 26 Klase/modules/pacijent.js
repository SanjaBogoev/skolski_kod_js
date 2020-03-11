// Modul pacijent.js

// Klasa Pacijent

/*Kreirati klasu Pacijent koja od polja sadrži ime, visina i tezina. Od
metoda sadrži:
- Stampaj() koja ispisuje sve podatke o pacijentu,
- Bmi(), koja vraća bmi vrednost pacijenta,
- Kritican(), koja vraća true ukoliko je bmi pacijenta manji od 15 ili
veći od 40, a u suprotnom vraća false.
Kreirati tri objekta ove klase i testirati metode. */

export default class Pacijent {
    constructor (i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    stampaj () {
        console.log(`Pacijent: ${this.ime}, visina: ${this.visina}, tezina: ${this.tezina}`);
    }
    bmi () {
        let bmi = this.tezina / (this.visina / 100) ** 2;
        return bmi;
    }
    kritican () {
        // let bmi = this.bmi();
        //if (bmi < 15 || bmi > 40){....}
        if (this.bmi() < 15 || this.bmi() > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}