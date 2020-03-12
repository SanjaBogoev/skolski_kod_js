import {Autobus} from "./autobus.js";

let a1 = new Autobus('NI-111AA', 64);
let a2 = new Autobus('BG -222BB', 32);
let a3 = new Autobus('KG-333CC', 60);
a1.stampaj();

let nizAutobusa = [a1, a2, a3];

    // Ispisati podatke o svakom autobusu iz niza autobusa
let ispisAutobusa = niz => {
    niz.forEach(elem => {
        elem.stampaj();
    });
};    
ispisAutobusa(nizAutobusa);

/*Napraviti funkciju ukupnoSedista kojoj se prosleđuje niz autobusa a koja
određuje i vraća koliko ukupno sedišta sadrže svi autobusi koji se nalaze u
nizu autobusa.*/

let ukupnoSedista = niz => {
    let ukupno = 0;
    niz.forEach(elem => {
        ukupno += elem.brSedista;        
    })
    return ukupno;
};
console.log(`Ukupan broj sedista je: ${ukupnoSedista(nizAutobusa)}`);

/*Napraviti funkciju maksSedista koja ispisuje podatke o autobusu koji ima
najveći broj sedišta. */

let maksSedista = niz => {
    let maksAutobus = nizAutobusa[0];
    niz.forEach(elem => {
        if(elem.brSedista > maksAutobus.brSedista) {
            maksSedista = elem;
        }
    });
    return maksSedista;
};

/*Napraviti funkciju ljudi kojoj se prosleđuje broj ljudi i niz autobusa a
funkcija vraća true ukoliko je moguće toliko ljudi smestiti u autobuse, u
suprotnom vraća false. */
 let ljudi = (brLjudi, niz) => {
     let uk = ukupnoSedista(niz);
     if(uk >= brLjudi) {
         return true;
     }
     else {
         return false;
     }
 };
console.log(ljudi(160, nizAutobusa));
console.log(ljudi(156, nizAutobusa));