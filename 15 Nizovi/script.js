let cars = ["Toyota", "BMW", "Opel"];
console.log(cars);
console.log(cars[0]); // 0, 1, 2... - indexi
console.log(cars[1]);
console.log(cars[2]);

// Niz od n elemenata
//Indeksi su: 0, 1, 2 , 3,..., n-1

//Menjanje elemenata niza
cars[1] = "Ford";
console.log(cars);

let test = [6.07, "Sreda", -9, false];
console.log(test);

// Ispis svih elemenata niza
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let i = 0; i <= cars.length - 1; i++) { // i = 0, 1, 2
    console.log(cars[i]);
}

// Ispis svih elemenata u obrnutom nizu
for (let i = cars.length - 1; i >= 0; i--) { // i = 2, 1, 0
    console.log(cars[i]);
}

// Zadaci za vezbanje

// 2. Odrediti zbir elemenata celobrojnog niza.

let niz = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
console.log(suma);

// 3. Odrediti proizvod elemenata celobrojnog niza.

let p = 1;
for (let i = 0; i < niz.length; i++) {
    p *= niz[i];
}
console.log(p);

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
suma = 0;
for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
}
let srvr;
if (niz.length == 0) {
    srvr = 0;
}
else {
    srvr = suma / niz.length;
}
console.log(srvr);

// 5. Odrediti MAKSIMALNU VREDNOST u celobrojnom nizu.

niz = [5, -9, 6, -4, -5, 5, 9, 9, 8, 0, -2];
let max = niz[0];   // GRESKA: max = 0 !
for (let i = 1; i < niz.length; i++) { // i=1, a ne i=0
    if (niz[i] > max) {
        max = niz[i];
    }
}
console.log(max);

// 6. Odrediti MINIMALNU VREDNOST u celobrojnom nizu.

let min = niz[0];  
for (let i = 1; i < niz.length; i++) {
    if (niz[i] < min) {
        min = niz[i];
    }
}
console.log(min);

// 6.1. Napisati arrow funkciju koja vraca minimalni element niza.

let minArrow = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}
console.log(minArrow(niz));
console.log(minArrow([1, 8, -15, 6, 18, -24, 56]));

// 7. Odrediti INDEX MAKSIMALNOG ELEMENTA celobrojnog niza.

let maxIndex = niz => {
    let max = niz[0]; // vrednost maksimalnog elementa niza
    let index = 0;  // indeks maksimalnog elementa niza
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(maxIndex(niz));
console.log(maxIndex([1, 8, -15, 6, 88, -24, 56]));


// 8. Odrediti INDEX MINIMALNOG ELEMENTA celobrojnog niza.

let minIndex = niz => {
    let min = niz[0];
    index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(minIndex(niz));
console.log(minIndex([1, 8, -15, 6, 88, -24, 56]));

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
// 9.1. Napisati arrow f-ju koja vraca broj elemenata celobrojnog niza koji su veci od srednje vrednosti

let arSr = niz => { //posebna funkcija koja vraca aritmeticku sredinu
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma / niz.length;
}

let brojSrVr = niz => {
    let srvr = arSr(niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > srvr) {
            broj++;
        }
    }
    return broj;
}
console.log(brojSrVr(niz));
console.log(brojSrVr([1, 2, 3, 4, 5])); // srvr = 3; broj = 2; (4 i 5)

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPoz = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPoz(niz));

// 11. Odrediti broj parnih elemenata u celobrojnom nizu.

let parni = niz => {
    let brojParnih = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            brojParnih++;
        }
    }
    return brojParnih;
}
console.log(parni(niz)); // 0 je paran broj

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.

let  brojParnih = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0 && i != 0) {
            broj++;
        }
    }
    return broj;
}
console.log(brojParnih(niz));

// 14. Promeniti znak svakom elementu celobrojnog niza.
let promeniZnak = niz => {
    for (let i = 0; i < niz.length; i++) {
        niz[i] *= -1;
    }    
}
promeniZnak(niz);
console.log(niz);

//ISPIS U HTML-u
/* 16. Dat je niz stavki za kupovinu (članovi niza su stringovi).
Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
html dokument. */
//Formirati ul listu

let lista = niz => {
    //Elementi niza su stringovi
    let result = ""; // Neutral za stringove (kod konkatenacije stringova)
    result += "<ul>";
    for (let i = 0; i < niz.length; i++) {
        result += `<li> ${niz[i]} </li>`;
    }
    result += "</ul>"
    return result;
}

let div = document.getElementById('blabla');
div.innerHTML = lista(['Jaja', 'Mleko', 'Jogurt']);

/* 17.  Dat je niz imena košarkaškog tima. Prolaskom kroz niz
formirati tabelu u čijim su redovima imena tima, i tabelu
ispisati u html dokument. */

let nizTimova = ["Tim A", "Tim BB", "Tim CCC"];
let tabela = "<table>";
for (let i = 0; i < nizTimova.length; i++) {
    tabela += `<tr><td> ${nizTimova[i]} </td></tr>`;
}
tabela += "</table>";

/*
<table>
    <tr><td> Tim A </td></tr>
    <tr><td> Tim B </td></tr>
    <tr><td> Tim C </td></tr>
</table>
 */

 let divTabela = document.getElementById('tabela');
 divTabela.innerHTML = tabela;

// U tabeli u istom redu

/*
<table>
    <tr>
        <td> Tim A </td>
        <td> Tim B </td>
        <td> Tim C </td>    
    </tr>    
</table>
 */
tabela = "<table><tr>";
for (let i = 0; i < nizTimova.length; i++) {
    tabela += `<td> ${nizTimova[i]} </td>`;
}
tabela += "</tr></table>";
divTabela = document.getElementById('tabela2');
divTabela.innerHTML = tabela;

/* 18. Dat je niz stringova čiji su članovi putanje do slika.
Prikazati sve slike u html dokumentu sa putanjama
navedenim u nizu. */
/*
    <img src="...">
    <img src="...">
    ...
*/
let nizSlika = ['nula.png', 'jedan.png', 'dva.png'];

let slike = "";
for (let i = 0; i < nizSlika.length; i++) {
    slike += `<img src=${nizSlika[i]} ><br>`;
}

div = document.getElementById('slike');
div.innerHTML = slike;

// ******************************* STRINGOVI I NJIHOVI METODI ************************************************
let str = 'Zdravo svete!';

//Duzina stringa 
console.log(str.length);

//Da li string sadrzi neki karakter - INCLUDES
console.log(str.includes('v'));

if (str.includes('o')) {
    console.log('String sadrzi slovo o.');
}
else {
    console.log('String ne sadrzi slovo o.');
}

//Da li sadrzi karakter na specificiranoj poziciji
console.log(str.includes('Z', 0));
console.log(str.includes('Z', 2));

//Prvi index unetog slova - indexOf
console.log(str.indexOf('e'));

//Poslednji index unetog slova - lastIndexOf
console.log(str.lastIndexOf('e'));

//Prvo slovo reci - startsWith
console.log(str.startsWith('Z'));
console.log(str.startsWith('z'));

//Zadnje slovo reci - endsWith
console.log(str.endsWith('?'));

//SLICE - odakle poceti (od koje pozicije) podstring , gde zavrsiti (do koje pozicije)podstring
console.log(str.slice(0, 6));
console.log(str.slice(3, 5));

// SUBSTR - odakle poceti (od koje pozicije) podstring , koliko elemenata od te pozicije dalje uzeti
console.log(str.substr(3, 5));

//REPLACE 
console.log(str.replace('e', 'w'));
console.log(str.replace('svete', 'Sanja'));

/* 19. Ispisati dužinu svakog elementa u nizu stringova. */

for (let i = 0; i < nizTimova.length; i++) {
    let duzReci = nizTimova[i].length;   
    console.log(duzReci);
    //console.log(nizTimova[i].length);
}
/* ***** 20. Odrediti element u nizu stringova sa najvećom dužinom.*******  */
nizTimova = ["Tim A", "Tim BB", "Tim CCC"];
let najduzaRec = nizTimova => {
        let maks = nizTimova[0].length;
        let maksRec = nizTimova[0];
    for (let i = 1; i < nizTimova.length; i++) {
        if (maks < nizTimova[i].length) {
            maks = nizTimova[i].length;
            maksRec = nizTimova[i];
        }
    }
    return maksRec;
}
console.log(najduzaRec(nizTimova));

//20.1. Prosecan broj slova  u nizu reci
nizTimova = ["Tim A", "Tim BB", "Tim CCC", 'Tim DDDD'];

let prosecanBrSlovaReci = nizTimova => {
    let suma = 0;
    for (let i = 0; i < nizTimova.length; i++) {
        suma += nizTimova[i].length;
    }
    arsr = suma / nizTimova.length;
    return arsr;
}
console.log(prosecanBrSlovaReci(nizTimova));

 //20.2. Ispisati natprosecno dugacke reci
 let natprosecnoDugacke = niz => {
     let ar = prosecanBrSlovaReci(niz);
     for (let i = 0; i < niz.length; i++) {
        if (ar < niz[i].length) {
            console.log(niz[i]);
        }       
     }
 }
 natprosecnoDugacke(nizTimova);


/* 21. Odrediti broj elemenata u nizu stringova čija je dužina
veća od prosečne dužine svih stringova u nizu. */

let brojNatprosecnodugih = niz => {
    let ar = prosecanBrSlovaReci(niz);
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
       if (ar < niz[i].length) {
           br++;        
       }       
    }
    return br;
}
console.log(brojNatprosecnodugih(nizTimova));

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a'.

let brojElemenataSaKarakterom = (niz, slovo) => {
    br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes(slovo)) {
            br++;
        }
    }
    return br;
}
console.log(brojElemenataSaKarakterom(nizTimova, "a"));
console.log(brojElemenataSaKarakterom(nizTimova, "i"));
console.log(brojElemenataSaKarakterom(nizTimova, "D"));

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.


//slovo.toUpperCase() - za pretvaranje malog slova u veliko slovo

//slovo.toLowerCase() - za pretvaranjeg velikog slova u malo slovo

let brojElemenataKojiPocinjuSlovom = (niz, slovo) => {
    br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].startsWith(slovo.toLowerCase()) || niz[i].startsWith(slovo.toUpperCase())) {
            br++;
        }
    }
    return br;
}
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 't'));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'T'));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'y'));

// ******************************** PUSH i POP **********
// 24. 
let a = [2, 5, 7];
let b = [-7, -5, -9];
let c = [];
for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
    c.push(b[i]);
} 
console.log(c);
console.log(c.pop());
c.pop(); // POP izbacuje posledji element iz niza
console.log(c);

// 25. 
let proizvodElemenata = (a, b) => {
    let c = [];
    for (let i = 0; i < b.length; i++) {
        c.push(a[i] * b[i]);
    }
    return c;
}
console.log(proizvodElemenata(a,b));

// 26. 

a = [2, 4, 6, 12, 10, 14];
//   0  1  2  3    4    5
b = [];
let n = a.length / 2;
for (let i = 0; i < n; i++) {
    i_pom = a.length - i - 1;
    b.push((a[i] + a[i_pom]) / 2);
}
console.log(b);

