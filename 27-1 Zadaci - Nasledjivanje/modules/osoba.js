export class Osoba {
    constructor(i, p, gr) {
        this.ime = i;
        this.prezime = p;
        this.godRodjenja = gr;
    }
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    set prezime(p) {
        this._prezime = p;
    }
    get prezime() {
        return this._prezime;
    }
    set godRodjenja(gr) {
        if(gr < 0) {
            this._godRodjenja = 0;
        }
        else {
            this._godRodjenja = gr;
        }
    }
    get godRodjenja() {
        return this._godRodjenja;
    }    
    
    ispisiOsobu() {
        console.log(`Osoba: ${this.ime}, ${this.prezime} (${this.godRodjenja})`);
    }
}