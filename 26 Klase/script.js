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

let pacijent4 = new PacijentGS("Pera", -50, 1000);
console.log(pacijent4);

