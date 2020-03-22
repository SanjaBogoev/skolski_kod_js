import {Auto} from "./modules/auto.js";
import Film from "./modules/film.js";
import Pacijent from "./modules/pacijent.js";
import {Pacijent as PacijentGS}  from "./modules/pacijent_gs.js";

let datum = new Date();
    // Date - ime klase (Date je ugradjenja klasa)
    // new Date(); - kreira objekat klase Date (new kljucna rec)
    // let datum = new Date(); - promenljiva datum cuva objekat klase Date 
console.log(datum.getDay());

let niz1 = [1, 2 ,3];
let niz2 = new Array(1, 2, 3);
console.log(niz1);
console.log(niz2);
console.log(niz1.length)

let o1 = {
    ime: 'Pera',
    godine: 25
};
let o2 = new Object();
o2.ime = 'Pera';
o2.godine = 25;
console.log(o1);
console.log(o2);

let s1 = "Pera";
let s2 = new String("Pera");
console.log(s1);
console.log(s2);

// KLASE - sintaksa

let auto1 = new Auto("Peugeot 208", "bela", false);
    // constructor("Peugeot 208", "bela", false)
    // auto1.marka = "Peugeot 208"
    // auto1.boja = "bela"
    // auto1.imaKrov = false
let auto2 = new Auto("Mazda CX-30", "crvena", true);
    // constructor("Mazda CX-30", "crvena", true)
    // auto2.marka = "Mazda CX-30"
    // auto2.boja = "crvena"
    // auto2.imaKrov = true
    console.log(auto1, auto2);
auto1.sviraj();
auto2.sviraj(); 
auto1.sviraj(); 

//console.log(auto1.marka);
console.log(auto1.aMarka); //geter (iako je geter po prirodi metoda, pristupa mu se kao polju! - bez zagrada)
console.log(auto1.boja);
//auto1.marka = "Citroen C5";
auto1.aMarka = "Citroen C5"; // seter - pristupa mu se kao polju, a ne kao metodi!
console.log(auto1.aMarka); //seter je zabranio da postavimo Citroen, tako da opet ispisuje Peugeot 28
auto1.aBoja = "plava";
console.log(auto1);



let film1 = new Film("Naslov1", "Reziser1", 2001);
let film2 = new Film("Naslov2", "Reziser2", 2002);
let film3 = new Film("Naslov3", "Reziser3", 2003);

console.log(film1);
console.log(film2);
console.log(film3);
film1.stampaj();
film2.stampaj();
film3.stampaj();

film1.fNaslov = "NOVI NASLOV";
console.log(film1);

film3.fGodinaIzdanja = 1500;
console.log(film3);

let film4 = new Film("Naked Gun", "David Zucker", 1500);
//film4.fGodinaIzdanja = 1599;
console.log(film4);

let f1 = new Film("Naked Gun", "David Zucker", 1500, [10, 8, 7, 9]);
let f2 = new Film("Avatar", "Dzejms Kamerun", 2009, [3, 8.5, 9, 10, 6]);
let f3 = new Film("Ambis", "Dzejms Kamerun", 1989, [10, 7, 9, 10, 9]);

let pacijent1 = new Pacijent("Pera", 184, 95);
let pacijent2 = new Pacijent("Mika", 170, 125);
let pacijent3 = new Pacijent("Zika", 176, 77);

pacijent1.stampaj();
pacijent2.stampaj();
pacijent3.stampaj();
console.log(pacijent1.bmi());
console.log(pacijent2.bmi());
console.log(pacijent3.bmi());
console.log(pacijent1.kritican());
console.log(pacijent2.kritican());
console.log(pacijent3.kritican());

//Pacijenti
    // Kreirati niz od barem tri pacijenta.
let p1 = new PacijentGS("Mila", 176, 65);
console.log(p1);
let p2 = new PacijentGS("Ana", 173, 70);
console.log(p2);
let p3 = new PacijentGS("Sale", 165, 55);
console.log(p3);

let pacijenti = [p1, p2, p3];

    // Ispisati podatke o pacijentu sa najmanjom tezinom
let minPac = pacijenti[0]; // cuva cao objekat, celog pacijenta
let minTez = pacijenti[0].pTezina; // minPac.pTezina;
pacijenti.forEach(elem => {
    if (minTez > elem.pTezina) {
        minPac = elem;
        minTez = elem.pTezina;
    }
});
minPac.stampaj(); //minPac je objekat, neki pacijent iz niza

    // Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let maksPac = pacijenti[0];
//let maksBmi = pacijenti[0].bmi();
pacijenti.forEach(elem => {
    if(maksPac.bmi() < elem.bmi()) {
        maksPac = elem;
        //maksBmi = elem.bmi();
    }
});    
console.log(`Pacijent sa najvecim BMI je: `);
maksPac.stampaj();

//Niz FILMOVA

let filmovi = [f1, f2, f3];
//Ispis ocena ovih filmova
filmovi.forEach(elem => {
    let ocene = elem.fOcene;
    ocene.forEach(o => {
        console.log(o);
    });
});
console.log(`Prosecna ocena je:`);
console.log(f1.prosecna());

/* Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj
(vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom
veku*/

let filmVek = (niz, odGod, doGod) => {
    niz.forEach(elem => {
        if(elem.fGodinaIzdanja >= odGod && elem.fGodinaIzdanja <= doGod) {
            elem.stampaj();
        }
    });
}; 
filmVek(filmovi, 1999, 2020);

/*Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja
određuje i vraća prosečnu ocenu svih filmova. */

let prosecnaOcena = niz => {
    let sumaOcena = 0;
    let brojOcena = 0;
    niz.forEach(film => {
        let ocene = film.fOcene;
        //brojOcena += ocene.length; (umesto brojOcena++;)
        ocene.forEach(o => {
            sumaOcena += o;
            brojOcena++;
        });
    });
    let arsr = sumaOcena / brojOcena;
    return arsr;
};
console.log(`Prosecna ocena svih filmova je ${prosecnaOcena(filmovi)}`);

/*Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film. */

let najboljeOcenjeni = niz => {
    let naj = niz[0]; // u naj cuvamo ceo objekat, da bi mogli da vratimo naj

    niz.forEach(film => {
        let p = film.prosecna();
        if(p > naj.prosecna()) {
            naj = film;
        }
    });
    return naj;
};

console.log(`Najbolje ocenjeni film je: `);
najboljeOcenjeni(filmovi).stampaj();

/*Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film
koji je najbliži prosečnoj oceni svih filmova. */

let osrednjiFilm = niz => {
    let globalniProsek = prosecnaOcena(niz);
    //gp = 6.2
    //f1 = 4.5
    //f2 = 7
    let najbliziElem = niz[0];
    let najbliziProsek = Math.abs(niz[0].prosecna() - globalniProsek);

    niz.forEach(elem => {
        let pom = Math.abs(elem.prosecna() - globalniProsek);
        if(pom < najbliziProsek) {
            najbliziElem = elem;
            najbliziProsek = pom;
        }
    });
    return najbliziElem;
};

let osr = osrednjiFilm(filmovi);
console.log("**********");
osr.stampaj();

/*Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća
ocenu koju su filmovi najčešće dobijali. */

let oc = [1, 5, 7, 8.3, 4.001, 10, 1, 9, 9, 5, 5, 5];

let najcesca = oc[0];
let ponavljanje = 0;
let maxPonavljanja = 0;

/*for (let i = 0; i < oc.length; i++) {
    for(let j = 0; j < oc.length; i++) {
        if(oc[i] == oc[j]) {
            ponavljanje++;
        }
    }
    if(ponavljanje > maxPonavljanja) {
        maxPonavljanja = ponavljanje;
        najcesca = oc[i];
    }
    ponavljanje = 0;
}
*/
console.log(`Najfrekventnija ocena je: ${najcesca}`);

/*Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova
a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji
zadovoljava prosleđenu ocenu */