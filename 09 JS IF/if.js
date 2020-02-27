let a = 5;
let b = 3;
if (a > b)
{
    console.log("a je vece od b");
}
console.log("Komanda posle if");

a = 5;
b = 5;
if (a == b) {
    console.log(`${a} je jednako ${b}`); // == jednako po vrednosti
}
if (a != b) {
    console.log(`${a} nije jednako ${b}`); // != nije jednako po vrednosti
}

a = 5;
b = "5";
if (a === b) {
    console.log(`${a} je jednako ${b} po tipu i po vrednosti`); // === jednako po vrednosti i tipu
}
if (a !== b) {
    console.log(`${a} nije jednako ${b} po tipu i po vrednosti`); // !== nije jednako po vrednosti i tipu
}

    //IF-ELSE
a = 5;
b = 5;
if (a == b) {
    console.log(`${a} je jednako ${b}`);
}
else {
    console.log(`${a} nije jednako ${b}`); 
}

a = 5;
b = "5";
if (a === b) {
    console.log(`${a} je jednako ${b} po tipu i po vrednosti`); 
}
else {
    console.log(`${a} nije jednako ${b} po tipu i po vrednosti`);
}

a = 5;
b = 12;
if (a > b) {
    console.log(`${a} je vece od ${b}`);
}
else {
    console.log(`${a} je manje od ${b}`);
}
// Zadaci za vezbu
    // Drugi zadatak

let temp = -3;    
if (temp >= 0) {
    console.log("Temperatura je u plusu.")
}
else {
    console.log("Temperatura je u minusu.")
}    
     
    // Treci zadatak
let pol = "Z";
let div = document.getElementById('blabla');
if (pol == "M") {
    console.log("Prikazati muski avatar.");
    div.innerHTML = "<img src='male.png' alt='Muski'>";
}
else {
    console.log("Prikazati zenski avatar.")
    div.innerHTML = "<img src='female.png' alt='Zenski'>";
}

/*if ("M" != false) {
    console.log("ispunjen je uslov")''
    U USLOVU MORA DA SE STAVLJA ==, u suporotnom ce da dodeli novu vrednost promenljivoj
}*/

    // Cetvrti zadatak
let datum = new Date(); //objekat

let sati = datum.getHours(); //trenutno sati

if (sati < 12) {
    console.log("Prepodne.")
}
else {
    console.log("Popodne je.")
}

    // Peti zadatak
let godina = datum.getFullYear();
let godinaRodjenja = 2000;
if (godina - godinaRodjenja >= 18) {
    console.log("Osoba je punoletna.")
}
else {
    console.log("Osoba je maloletna.")
}

    // Sesti zadatak
let x = 1;
let y = 2;
let z = 3;
let max = x;

if (y > max) {
    max = y;
}
if (z > max) {
    max = z;
}
console.log(max);


x = 8;
y = 5;
z = 30;
let = max;

if (x > y) {    //ne daje uvek tacno resenje, vec samo u ovom slucaju
    max = x;
}
else if (y > z) {
    max = y;
}
else {
    max = z;
}
    
    

    


