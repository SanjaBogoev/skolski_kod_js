//Anonimna funkcija
let suma = function (a, b) {
    let s = a + b;
    return s;
}

console.log(suma(1, 4));
console.log(suma(9, 4));

// Arrow funkcija - skraceni zapis anonimne funkcije 
let suma2 = (a, b) => {
    return a + b;    
    }
    
console.log(suma2(1, 2));

let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

let echo = (s1, s2) => {
    let s = s1 + ", " + s2;
    console.log(s);
}
echo("Sanja", "Sanja");

/* 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je
neparan ili netačno ukoliko nije neparan. */

let neparan = (n) => {
    if (n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(neparan(5));

/* 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. */

let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(5, 10));

let maks4 = (a, b, c, d) => {
    /*let max1 = maks2(a, b);
    let max2 = maks2(c, d);
    let max3 = maks2(max1, max2); */
    let max1 = maks2(a, b);
    let max2 = maks2(max1, c);
    let max3 = maks2(max2, d);
    return max3;
}
console.log(maks4(5, 10, 26, 78));

/* 10. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi
sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m. */
let brojBrojeva = 0;
let deljivSaTri = (n, m) => {
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            brojBrojeva++;            
        } 
    }  
    return console.log(brojBrojeva);     
}
deljivSaTri(1, 10);

// 5. Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.

// obicna funkcija
function image(putanja) {
     return `<img src='${putanja}' alt='Blabla'>`;
}

//arrow funkcija

let image2 = (putanja) => {
    return `<img src='${putanja}' alt='Blabla'>`;
}
//SKRACENA SINTAKSA
// 1. Telo funkcije sa sastoji samo od return naredbe 
let image3 = (putanja) =>  `<img src='${putanja}' alt='Blabla'>`;

let slikaa = document.getElementById('slika');
slikaa.innerHTML += image3("brojevi.jpg");

/* 2. Kada postoji jedan parametar zagrada nije obavezna, a kada f-ja nema parametre 
ili ima vise od jednog, zagrada je obavezna */
let image4 = putanja =>  `<img src='${putanja}' alt='Blabla'>`;

let slikaaa = document.getElementById('slika');
slikaaa.innerHTML += image4("brojevi.jpg");

let sledbenik = n => n + 1;
console.log(sledbenik(10));
