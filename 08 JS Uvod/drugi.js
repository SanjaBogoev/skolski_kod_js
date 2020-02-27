// Dohvatamo trenutno vreme
// 1) Kreiramo objekat Date
let datum = new Date();

let sati = datum.getHours(); //trenutno sati
let minuti = datum.getMinutes(); //trenutno minuta
console.log(sati, minuti);

let minutaOdPonoci = sati * 60 + minuti;
console.log(minutaOdPonoci);

let a = 3;
let b = 5;
console.log(a + b);

a = "3";
b = "5";
console.log(a + b); //konkatenacija strigova

a = 3;
b = "5";
console.log(a + b); // Izbacuje string, JS broj prebacuje u string

let c;
a = "5";
b = 3;
c = 9;
console.log(a + b + c); // Izbacuje string
console.log(b + c + a); // Sabrao je brojeve 3+9=12, pa je tome dodao string i izbacuje string (string ima prioritet)

console.log("Prvi broj je: " + b + ", a drugi je: " + c); // Izbacuje string

// Template String ide izmedju `` (backticks - pre 1)
    //Obican string ide izmedj '' ili ""
console.log(`Prvi broj je: ${b}, a drugi je: ${c}`); // ${} da bi se ubacila vrednost promenljive

console.log(5 / "hello"); // Izbacuje NaN, stringovi mogu samo da se sabiraju