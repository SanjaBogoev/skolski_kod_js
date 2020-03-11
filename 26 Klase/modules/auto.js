//Modul auto.js

// Klasa Auto
export class Auto {
    // polja: marka, boja, imaKrov
    // konstruktor (posebna metoda koja se poziva samo jednom):
    constructor (m, b, ik) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = ik;
    }
    sviraj() {
        // this - objekat koji je pozvao metodu
        // unutar objekata i klasa metode se pisu kao OBICNE funkcije, NIKADA!!! kao arrow funkcije!
        let m = this.marka;
        console.log(`Auto marke ${m} svira Beep! Beep!`);
    }
    get aMarka () { //Geter - u klasi je metoda
        return this.marka;
    }
    set aMarka (m) { //Seter - u klasi je metoda
        if (m.includes("Citroen")) {
            console.log("Nije dozvoljena marka");
        }
        else {
            this.marka = m;
        }       
    }
    get aBoja() {
        return this.boja;
    }
    set aBoja(b) {
        this.boja = b;
    }
    get aImaKrov() {
        return this.imaKrov;
    }
    set aImaKrov(ik) {
        this.imaKrov = ik;
    }
}

