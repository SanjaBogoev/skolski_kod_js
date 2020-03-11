//Modul film.js

//Klasa Film

/*Kreirati klasu Film koja od polja sadrži naslov, reziser i
godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
Kreirati tri objekta klase Film.
Testirati metode klase. */

export default class Film {
    constructor (n, r, gi) {
        this.fNaslov = n;
        this.fReziser = r;
        this.fGodinaIzdanja = gi;
    }
    stampaj () {
        let naslovFilma = this.naslov
        console.log(`Film "${this.naslov}" rezirao je ${this.reziser}, ${this.godinaIzdanja} godine.`);
    }
    get fNaslov() {
        return this.naslov;
    }
    set fNaslov(n) {
        this.naslov = n;
    }
    get fReziser() {
        return this.reziser;
    }
    set fReziser(r) {
        this.reziser = r;
    }
    get fGodinaIzdanja() {
        return this.godinaIzdanja;
    }
    set fGodinaIzdanja(gi) {
        if (gi > 1800) {
            this.godinaIzdanja = gi;
        }
        else {
            gi = 1800;
            this.godinaIzdanja = gi;
        }
    }
}