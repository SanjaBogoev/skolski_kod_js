//komentar u jednoj liniji

/* komentar u vise
linija*/

//window.alert("Hello world"); // poruka u alert box-u
//document.write("Hello World"); //dodavanje sadrzaja
console.log("Hello World!"); //poruka u konzoli browsera
document.getElementById("par1").innerHTML = "Hello world"

console.log(55); //brojevi se pisu bez navodnika (celi, decimalni, negativni)
console.log(-3555);

console.log("pera"); // Stringovi se pisu izmedju "" ili '_'
console.log('mika');
console.log("zika09zikic");

console.log(true); //Logicke vrednosti, pisu se bez navodnika
console.log(false);

let x = 3; // promenljiva x, vrednost je 3
console.log(x);

let y; //uvede se samo promenjiva, a kasnije joj se dodeli vrednost (samo prvi put kad se uvodi se pise let)

y = -9;
x = 5

let $p, _p, p1, p2, p3, p4

console.log(x, y);

const z = 8.04; //konstanti vrednost mora odmah da se uvede i vise ne moze da se menja!
console.log(z);

/*z = 5           //Ne moze jer je z konstanta!
console.log(z);*/ 

x = "Utorak"; //jedna promenljiva moze da uzme vrednosti razlicitih tipova (broj, string, logicka vr)
//JavaScript je SLABO TIPIZIRAN jezik
console.log(x, y);

x = "Volvo XC60";
y = 'Volvo XC60';
console.log(x, y);

x = "It's all right" // mora da se stave dvostruki navodnici, jer string vec sadrzi jednostruki
y = 'He is called "Johnny"'//obrnuto
console.log(x, y);
x = 'It\'s all right, "Johnny"';
y = "It's all right, \"Johnny\""; // pre navodnika se stavi \
console.log(x, y);

x = true;
y = false;
console.log(x, y);

let m; // Undefined, promenljivoj jos nije zadata vrednost
console.log(m, m + 3); //udefined, Nan (Not a Number)

let n = null; //nije isto sto i 0
console.log(n, n + 3);

let firstName = 'Marko'; //firstName - svaka naredna rec velikim slovom, spojeno - CAMIL CASE - princip nazivanja, nije obavezno, ali je preporuka
let lastName = 'Markovic';
let fullName = firstName + " " +  lastName; //prazan string " ", da bi se dodao razmak
console.log(firstName, lastName, fullName); //KONKATENACIJA stringova, spajanje stringova (String + String)

//console.log(fullname); - nepostojeca promenljiva

console.log(fullName.length); //broj karaktera stringa

x = 8.7;
y = 3;
let t = x * y;
console.log(x, y, t);

x = 5;
y = 2;
t = x / y;
console.log(x, y, t);

x = 6;
y = 4;
console.log(x, y);
x = x + y; //x dobija vrednst x+y
console.log(x, y);

x = 8;
y = 4;
x *= y; //skraceni zapis menjanja vrednosti promenjljive x=x*y, x*=x+y = x=x*(x+y)
console.log(x, y);

x = 3;
y = 9;
x++; y--; //sledbenik i prethodnik x+1, y-1 
console.log(x, y);

x = 3;
y = 9;
console.log(y % x); //9 po modulu 3 = 0

x = 4;
y = 9;
console.log(y % x); //9 po modulu 4 = 1

x = 3;
y = 9;
console.log(y**x); //9 na 3
//Prvi zadatak
let Sati = 14;
let Minuti = 36;
let Min = Sati * 60 + Minuti;
console.log(Min);

//Drugi zadatak
let cenaRobe = 450;
let Novcanica = 500;
let Kusur = Novcanica - cenaRobe;
console.log(Kusur);

//Treci zadatak
let din = 12000;
const Kurs = 117.6;
let eur = din / Kurs;
console.log(eur);

let evri = 100;
let Dinari = evri * Kurs;
console.log(Dinari);

//Cetvrti zadatak
let dolar = 100;
const kursDolar = 110; 
let rsd = dolar * kursDolar;
console.log(rsd);
const kursEur = 117.6;
let Dolari = rsd / kursEur
Dolari = dolar * kursDolar / kursEur
console.log(Dolari);

//Peti zadatak
    //Celzijusi u Farenhajte
let C = 35;
let F = C * 1.8 + 32;
console.log(F);
    //Farenhajti u Celzijuse
F = 97;
C = (F - 32) / 1.8;
console.log(C);   
//Sesti zadatak
    //Celzijusi u Kelvine
C = 30;
let K = C + 273.15
console.log(K);   
    //Kelvini u Celzijuse
K = 150;
C = K - 273.15
console.log(C);
   
// 1) Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći.

let sati = 15;
let minuti = 33;
let ukupno = sati * 60 + minuti;
console.log("Ukupan broj minuta od ponoci je: ", ukupno);


// 2) Za unetu cenu robe i unetu novčanicu kojom kupac plaća račun ispisati koliki kusur kasirka treba da mu vrati.
let cena = 590;
let novcanica = 1000;
let kusur = novcanica - cena;
console.log("Kusur koji kasirka treba da vrati: ", kusur);

// 3) Konverzija valute iz evra u dinare (i obrnuto).
let euri, dinari;
let kurs = 117.61;

euri = 85;
dinari = euri * kurs;
console.log("Konverzija evra u dinare: ", dinari);

dinari = 7000;
euri = dinari / kurs;
console.log("Konverzija dinara u evre: ", euri);

// 4) Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 

let dolari;
let kursEurDin = 117.61;
let kursDolDin = 106.69;

euri = 390;
dolari = euri * kursEurDin / kursDolDin;
console.log("Konverzija eura u dolare: ", dolari);

dolari = 390;
euri = dolari * kursDolDin / kursEurDin;
console.log("Konverzija eura u dolare: ", euri);

// 5) Temperatura iz Celzijusa u Farenhajte i obrnuto.

let cel = 28.43;
let far = cel * 1.8 + 32;
console.log("Konverzija celzijusa u farenhajte: ", far);

far = 100;
cel = (far - 32) / 1.8;
console.log("Konverzija farenhajta u celzijuse: ", cel);


// 6) Temperatura iz Celzijusa u Kelvine i obrnuto.

cel = 27.4;
let kel = cel + 273.15;
console.log("Konverzija celzijusa u kelvine: ", kel);

kel = 200;
cel = kel - 273.15;
console.log("Konverzija kelvina u celzijuse: ", cel);