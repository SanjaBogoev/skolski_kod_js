let a = 5;
let b = 9;
let c = a; //uvodimo trecu promenljivu c, da bi a dobilo vrednost b, a b vrednost a
a = b;
b = c; 
console.log(a, b);

// Zadatak 7

let poeni = 77;

if (poeni > 90) {
    console.log("Student je dobio 10");
}
else if (poeni > 80) {
    console.log("Student je dobio 9");
}
else if (poeni > 70) {
    console.log("Student je dobio 8");
}
else if (poeni > 60) {
    console.log("Student je dobio 7");
}
else if (poeni > 50) {
    console.log("Student je dobio 6");
}
else {"Student nije polozio"}

    // Zadatak 8

let vreme = new Date();

let danUNedelji = vreme.getDay(); 
console.log(danUNedelji);   
    //0-Sundey, 1-Mondey,...,6-Saturday

    //prvi nacin
if (danUNedelji == 0) {
    console.log("Vikend je.");
}
else if (danUNedelji == 1) {
    console.log("Radni dan je.");
}
else if (danUNedelji == 2) {
    console.log("Radni dan je.");
}
else if (danUNedelji == 3) {
    console.log("Radni dan je.");
}
else if (danUNedelji == 4) {
    console.log("Radni dan je.");
}
else if (danUNedelji == 5) {
    console.log("Radni dan je.");
}
else if (danUNedelji == 6) {
    console.log("VIkend je.");
}

    //drugi nacin
if (danUNedelji == 0) {
    console.log("Vikend je.");
}
else if (danUNedelji == 6) {
    console.log("Vikend je.");
}
else console.log("Radni dan je.");   

// Zadatak 9
let sati = vreme.getHours(); 
    console.log(sati);       

if (sati >= 18) {
    console.log("Dobro vece.")
}
else if (sati >= 12) {
    console.log ("Dobar dan.")
}   
else {
    console.log("Dobro jutro.")
} 

// Zadatak 10
let dan1 = 7;
let mesec1 = 2;
let godina1 = 2020;
let dan2 = 5;
let mesec2 = 4;
let godina2 = 2020;

if (godina1 < godina2) {
    console.log("Prvi datum se prvi desio.");
}
else if (godina1 > godina2) {
    console.log("Drugi datum se prvi desioo.");
}
else if (mesec1 < mesec2) {
    console.log("Prvi datum se prvi desio.");
}
else if (mesec2 > mesec1) {
    console.log("Drugi datum se prvi desio.");
}
else if (dan1 < dan2) {
    console.log("Prvi datum se prvi desio.");
}
else if (dan1 > dan2){
    console.log("Drugi datum se prvi desio.");
}
else console.log("Datumi su isti.");


// Zadatak 11
if (sati >= 17) {
    console.log("Firma je zatvorena.");
}
else if (sati >= 9) {
    console.log("Firma je otvorena.");
}
else console.log("Firma je zatvorena.");

// Zadatak 12
let p1 = 9;
let k1 = 17;
let p2 = 12;
let k2 = 21;
    //prvi nacin - and
if ((p1 <= p2) && (p2 <=k1)) {
    console.log("Preklapaju se.");
}
else if ((p2<=p1) && (p1 <= k2 )) {
    console.log("Preklapaju se.");
}
else console.log("Ne preklapaju se.");

    //drugi nacin - and&or
if ((p1 <= p2 && p2 <= k1) || (p2 <= p1 && p1 <= k2)) {
    console.log("Smene se preklapaju.");
}
else console.log("Smene se ne preklapaju.");

// Zadatak 13
    //1 nacin
let broj = 7;
let paran;
if (broj % 2 == 0) {
    //let paran;  // promenljiva paran vazi samo u ovom delu koda izmedju viticastih zagrada, block, da bi bila globalna, umesto let, pisemo var
    paran = true;
    console.log("Broj je paran.");
}
else {
    paran = false;
    console.log("Broj je neparan.");
}
console.log(paran); //Izbacuje da je paran false, jer smo promenljivoj paran dodelili vrednost u okviru blocka, a ne u opstem scope-u

    // 2 nacin
broj = 8;
if (broj % 2 == 0) {
    paran = true;
}
else {
    paran = false;
}
console.log(paran);

// Zadatak 14
broj = 35;
if (broj % 3 != 0) {
    console.log("Broj nije deljiv sa 3.");
}
else console.log("Broj je deljiv sa 3.");

// Zadatak 15
a = 5;
b = 25;

if (a > b) {
    console.log(a - b);
}
else console.log(b - a);

// Zadatak 16
broj = 100
if (broj <= 0) {
    console.log(broj - 1);
}
else console.log(broj + 1);

// Zadatak 17
a = 5;
b = 10;
c = 15;






//SWITCH

let boja = "plava";
switch (boja) {
    case "plava":
        console.log("Odabrali ste plavu boju.");
        break;
    case "zelena":
    case "tirkizna":
        console.log("Odabrali ste nijansu zelene boju.");
        break;
    case "crvena":
        console.log("Odabrali ste crvenu boju.");
        break;
    default: 
        console.log("Niste odabrali plavu, zelenu i crvenu boju");    

}
// Prvi zadatak
danUNedelji;

switch (danUNedelji) {
    case 1: 
        console.log("Ponedeljak je.");
        break;
    case 2:
        console.log("Utorak je."); 
    break;
    case 3:
        console.log("Sreda je.");
    break;    
    case 4:
        console.log("Cetvrtak je.");
    break;
    case 5:
        console.log("Petak je.");
    break;
    case 6:
        console.log("Subota je.");
    break;
    case 0:
        console.log("Nedelja je.");
    break; 
}
// Drugi zadatak
let ocena = 4;

switch (ocena) {
    case 1: 
        console.log("Nedovoljan.");
        break;
    case 2:
        console.log("Dovoljan."); 
    break;
    case 3:
        console.log("Dobar.");
    break;    
    case 4:
        console.log("Vrlo dobar.");
    break;
    case 5:
        console.log("Odlican.");
    break;
}
// Treci zadatak
broj = 6;

switch (broj) {
    case 0: 
        console.log("Broj je 0.");
        break;
    case 2:
        console.log("Broj je 2."); 
    break;
    case 4:
        console.log("Broj je 4.");
    break;    
    case 6:
        console.log("Broj je 6.");
    break;
    case 8:
        console.log("Broj je 8.");
    break;
    default:
        console.log("Unos je pogresan.");
}

//Cetvrti zadatak
a = 5;
b = 10;
karakter = "m";

switch (karakter) {
    case "m":
        console.log(a * b);
    break;
    case "d":
        console.log(a / b);
    break;
    case "s":
        console.log(a + b);
    break;
    case "o":
        console.log(a - b);
    break;        
}

// Peti zadatak

switch (danUNedelji) {
    case 1 :
        console.log("Ostalo je 5 dana do vikenda.");
    break;
    case 2 :
        console.log("Ostalo je 4 dana do vikenda.");
    break;
    case 3 :
        console.log("Ostalo je 3 dana do vikenda.");
    break;
    case 4 :
        console.log("Ostalo je 2 dana do vikenda.");
    break;
    case 5 :
        console.log("Ostao je jos 1 dan do vikenda.");
    break;
    default: 
        console.log("Vikend je.");    
}

// Sesti zadatak
let trenMesec = vreme.getMonth();
console.log(trenMesec); // 0-jan, 1-feb...dec-11
switch (trenMesec) {
    case 0 :
        console.log("Januar.");
    break;
    case 1 :
        console.log("Februar.");
    break;
    case 2 :
        console.log("Mart.");
    break;
    case 3 :
        console.log("April.");
    break;
    case 4 :
        console.log("Maj.");
    break;
    case 5 :
        console.log("Jun.");
    break;
    case 6 :
        console.log("Jul.");
    break;
    case 7 :
        console.log("Avgust.");
    break;
    case 8 :
        console.log("Septembar.");
    break;
    case 9 :
        console.log("Oktobar.");
    break;
    case 10 :
        console.log("Novembar.");
    break;
    case 11 :
        console.log("Decembar.");
    break;
}

// Sedmi zadatak
let trenGodina = vreme.getFullYear();

switch (trenMesec) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log("Ovaj mesec ima 31 dan.");
    break;
    case 1: {
        if ((trenGodina % 4 == 0) && (trenGodina % 100 != 0 ) || (trenGodina % 400 == 0)) {
            console.log("Ovaj mesec ima 29 dana.");
        }
        else console.log("Ovaj mesec ima 28 dana.");
    }  
    break;
    default:
        console.log("Ovaj mesec ima 30 dana.");  
}
// Osmi zadatak
let bojaa = "blue";
let div = document.getElementById('drugi');
switch (bojaa) {
    case "red":
        div.innerHTML = "<p id='crvena'>Neki paragraf.</p> ";
    break;
    case "green":
        div.innerHTML = "<p id='zelena'>Neki paragraf.</p> ";
    break;
    case "blue":
        div.innerHTML = "<p id='plava'>Neki paragraf.</p> ";
    break;
    default:
        div.innerHTML = "<p id='zuta'>Neki paragraf.</p> ";
} 

// Proveriti da li je uneti broj ceo
function ceoBroj(parametar) {
    if (Number.isInteger(parametar)) {
        return ` ${parametar} je ceo broj`;
    }
    return `${parametar} nije ceo broj`;
}

let z = 10.5269;
let y = 50.20;

//console.log(ceoBroj(z));
//console.log(ceoBroj(y));

if (Number.isInteger(y)) {
    console.log(`${y} ceo broj`);
}
else {
    console.log(`${y} nije ceo broj`);
}









