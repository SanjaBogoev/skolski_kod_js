import {Knjiga} from './knjiga.js';

//Polja: naslov, autor, godIzdanja, brojStrana i cena

let k1 = new Knjiga('Na Drini cuprija', 'Ivo ANdric', 2003, 1300, 44430);
k1.stampaj();
console.log(k1.obimna());
if(k1.obimna()) {
    console.log('Knjiga je obimna');
}
else {
    console.log(`Knjiga nije obimna`);
}
console.log(k1.skupa());
k1.dugackoIme();

let k2 = new Knjiga ('Orlovi rano lete', 'Branko Copic', 2006, -185, -340);
k2.stampaj();
console.log(k2.obimna());
console.log(k2.skupa());

/*

Ispisati sve autore kojima je ime dugačko






 */

//Napraviti niz od barem tri knjige
let k3 = new Knjiga('Ana Karenjina', "Lav Tolstoj", 1996, 1200, 8300);

let nizKnjiga = [k1, k2, k3];

nizKnjiga.forEach(elem => {
    elem.stampaj();
});

//Ispisati sve one knjige koje su istovremeno i skupe i obimne
console.log("Skupe i obimne knjige:");
nizKnjiga.forEach(elem => {
    if(elem.skupa() && elem.obimna()) {
        elem.stampaj();
    }
});

//Napraviti funkicju kojoj se prosleđuje niz knjiga a ona određuje:
    // - ukupnaCena - Koliko ukupno koštaju sve knjge u nizu knjiga
let ukupnaCena = niz => {
    let ukupno = 0;
    niz.forEach(elem => {
        ukupno += elem.cena;
    });
    return ukupno;
};    
console.log(`Ukupna cena knjiga je: ${ukupnaCena(nizKnjiga)}.`);

    // prosecnaCena - Kolika je prosečna cena knjige

let prosecnaCena = niz => {
    let prosek = ukupnaCena(niz) / niz.length;
    return prosek;
};    
console.log(`Prosecna cena knjiga je: ${prosecnaCena(nizKnjiga)}.`);

    // ukupnoStranica
let ukupnoStranica = niz => {
    let ukupno = 0; 
    niz.forEach(elem => {
        ukupno += elem.brojStrana;
    });
    return ukupno;
};    

    // prosecnaStranica - Kolika je prosečna cena stranice knjige

let prosecnaStranica = niz => ukupnaCena(niz) / ukupnoStranica(niz);
/*{
    let cena = ukupnaCena(niz);
    let str = ukupnoStranica(niz);
    let avg = cena / str;
    return avg;
};    */
console.log(`Prosecna cena po stranici svih knjiga je: ${prosecnaStranica(nizKnjiga)}.`);

