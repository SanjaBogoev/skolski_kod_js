// Query selektor po imenu taga
let paragraf = document.querySelector('p');
console.log(paragraf);
let div = document.querySelector('div');
console.log(div);

// Query selektor po imenu klase
let klasaTest = document.querySelector('.test');
console.log(klasaTest);
let idTest = document.querySelector('#treci_paragraf');
console.log(idTest); 

// Query selektor po imenu klase
let klasaTestParagraf = document.querySelector('p.test');
console.log(klasaTestParagraf);

// Query selektor za sve <p> tagove
let sviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi);
console.log(typeof sviParagrafi);

// Pristupanje elementu Node liste
console.log(sviParagrafi[0]);

// Kretanje kroz Node listu
sviParagrafi.forEach(elem => {
    console.log(elem);
});

// getElementsByClassName
let klasaTestDoc = document.getElementsByClassName('test');
console.log(klasaTestDoc);

//Neuspelo kretanje forEach  petljom kroz HTML kolekciju
/*
klasaTestDoc.forEach(elem => {
    console.log(elem);
});
*/

// Kretanje HTML kolekcijom pomocu FOR petlje
console.log(klasaTestDoc[0]);
for (let i = 0; i < klasaTestDoc.length; i++) {
    console.log(klasaTestDoc[i]);
}

/*InnerText  - Dodavanje tekstualnog sadrzaja na stranicu*/
paragraf.innerText += ' Zdravo!';
// Dodavanje HTML sadrzaja
paragraf.innerHTML += ' Kako si? ';

// VEZBANJE
//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“
sviParagrafi.forEach(elem => {
    elem.innerHTML +=  '<span>VAZNO</span>';
});

//Svim divovima na stranici dodati po jedan naslov najveće veličine sa proizvoljnim tekstom
let svakiDiv = document.querySelectorAll('div');
svakiDiv.forEach(elem => {
    elem.innerHTML += '<h1>Naslov</h1>';
});

// Ispisati kvadrate brojeva od 1 do n, svaki u novom paragrafu
sviParagrafi.forEach((elem, index) => { // kako god da se nazove drugi parametar, podrazumeva se da je index
    let kv = (index+1)**2;
    elem.innerText += `${kv}`;
});

/*Napraviti niz od najmanje tri imena.
Proći nizom i imena ispisati:
    -Svako u novom paragrafu
 
     */

let imena = ['Jovana','Miljana','Milena'];
sviParagrafi.forEach((elem, index) => {
    elem.innerText += `${imena[index]}`;
});
//-U listi kao stavke liste
let lista = document.querySelector('ul');
imena.forEach(elem => {
    let item = `<li> ${elem} </li>`;
    lista.innerHTML += item;
});
//-U jednoj koloni tabele
    let tabela = document.querySelector('table');
    let sadrzaj = "";
    imena.forEach(ime => {
        let item = `<tr><td>${ime}</td></tr>`;
        sadrzaj += item;        
    });
    tabela.innerHTML += sadrzaj;
    
//SELEKTOVANJE SVE DECE JEDNOG RODITELJA
// Dohvatamo svu decu body taga
let potomci = document.body.children;
console.log(potomci);   

//Ideja: Konvertovati HTML kolekciju u niz i onda se njime kretati foreach petljom!
// HTML kolekcijom ne moze da se krece forEach petljom, pa moramo da je konvert u niz
let niz = Array.from(potomci);
niz.forEach(elem => {
    console.log(elem);
});

// Dohvatamo svu decu ul liste
//let lista = document.querySelector('ul');
let decaListe = lista.children;
let nizDecaListe = Array.from(decaListe);
nizDecaListe.forEach(element => {
    console.log(element);
});


