let dugmeZdravo = document.getElementById('zdravo');
dugmeZdravo.addEventListener('click', () => {
    console.log("ZDRAVO Jelena!");
    let zdravoParagraf = document.getElementById('zdravoPara');
    zdravoParagraf.innerHTML = "ZDRAVO!!!!"; // (+= ako hocemo svaki put novo zdravo)
});

/*1. Napraviti dugme klikom na koje se u konzoli ispisuje  vrednost brojaca br. Brojac na pocetku ima vrednost 1,
a svaki put kada se klikne na dugme povecati vrednost brojaca za 1 */

let dugmeBrojac = document.getElementById('brojac');
let br = 1; //mora izvan addEventListener
dugmeBrojac.addEventListener('click', () => {
    br++;
    console.log(br);
    let zdravoParagraf = document.getElementById('zdravoPara');
    zdravoParagraf.innerHTML = `Vrednost brojaca je: ${br}`;
});

/*2. Napraviti paragraf i vrednost prethodne funkcije
ispisivati u paragrafu umesto u konzoli.*/


/*3. Napraviti dugme + i dugme -.
Kada se klikne na dugme +, na ekranu prikazati
vrednost brojača povećanu za 1.
Kada se klikne na dugme -, na ekranu prikazati
vrednost brojača smanjenu za 1. */
let r = 0;
let spanRezultat = document.getElementById('rezultat');
spanRezultat.innerText = r;

let dugmePlus = document.getElementById('plus');
let dugmeMinus = document.getElementById('minus');

dugmePlus.addEventListener('click', () => {
    r++;
    spanRezultat.innerText = r;
});

dugmeMinus.addEventListener('click', () => {
    r--;
    if (r < 0) {
        r = 0;
    }
    spanRezultat.innerText = r;
});

/*Dopuniti prethodni zadatak uslovima, tako da se na
ekranu prikazuju samo pozitivni brojevi. Ukoliko je
vrednost manja od nule, na ekranu nastaviti
prikazivanje broja 0.*/

/*Napraviti input polje i dugme.
U input polje treba da se unese ime neke osobe, a
na ekranu u paragrafu da se ispiše Zdravo i ime
osobe preuzeto iz input polja.*/
let bp = document.getElementById('buttonPozdrav');
bp.addEventListener('click', () => {
    let vrednost = document.getElementById('inputPozdrav').value; //preuzimanje vrednosi iz inputa
    let pp = document.getElementById('paragrafPozdrav');
    pp.innerText = `Zdravo ${vrednost}!`;
});

//Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.
let btnKv = document.querySelector('#buttonKv');
let rezRazunanja = document.querySelector('#rez');
btnKv.addEventListener('click', () =>{
    let broj = document.querySelector('#inputKv').value;
    let kv = broj*broj;
    rezRazunanja.innerHTML = `Rezultat je: ${kv}`;
});

let btnPola = document.querySelector('#buttonPola');
let rezRazunanja2 = document.querySelector('#rezPola');
btnPola.addEventListener('click', () => {
    let broj = document.querySelector('#inputPola').value;
    let polovina = broj / 2;
    rezRazunanja2.innerHTML = `Rezultat racunanja je: ${polovina}`;

});

let btnPovrsina = document.querySelector('#buttonPovrsina');
let rezRazunanja3 = document.querySelector('#rezPovrsina');
btnPovrsina.addEventListener('click', () => {
    let broj = document.querySelector('#inputPovrsina').value;
    let povrsinaKruga = broj * broj * Math.PI;
    rezRazunanja3.innerHTML = `Rezultat racunanja je: ${povrsinaKruga}`;

});
