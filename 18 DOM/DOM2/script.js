// Roditelj element
let par = document.querySelector('p');
console.log(par.parentElement); // div
console.log(par.parentElement.parentElement); //body

// Kolekcija svih deteta roditelja paragrafa
console.log(par.parentElement.children);

//Braca/sestre elementi
console.log(par.nextElementSibling); //img
console.log(par.previousElementSibling); //null
console.log(par.parentElement.nextElementSibling.children[1]); // HTML Collection <li>
console.log(par.parentElement.parentElement.previousElementSibling); //head

//par.children - Kolekcija HTML tagova (deca paragrafa)
//par.children[0] - Jedan tag  - prvo dete paragrafa
//par.children[1] - Jedan tag - drugo dete paragrafa
//Za kolekciju je moguce koristiti for petlju:
let div = par.parentElement;
let decaDiva = div.children; // HTML kolekcija
for(let i = 0; i < decaDiva.length; i++) {
    console.log(decaDiva[i]);
}
console.log("***********");
//Bez pomocnih promenljivih - skraceno
for (let i = 0; i < par.parentElement.children.length; i++) {
    console.log(par.parentElement.children[i]);
}
console.log("***********");
// Kod HTML kolekcija ne radi forEach petlja
//sledeci kod ne radi!!!
/*par.parentElement.children.forEach(d => {
    console.log(d);    
});
*/

// Ukoliko zelimo forEach petlju kod kolekcija moramo kolekciju da konvertujemo u niz:
let niz = Array.from(par.parentElement.children);
niz.forEach(element => {
    console.log(element);
});
console.log("***********");

//DOHVATANJE I POSTAVLJANJE ATRIBUTA
let link = document.querySelector('a');
console.log(link.getAttribute('href')); //citanje atributa
// Ako vrednost atributa vec postoji, ona se menja
link.setAttribute('href','https://online.mobibanka.rs/Identity');
link.innerText = 'MobiBanka';
// Ako ne postoji, ona se postavlja
link.setAttribute('id', 'link1');
console.log(link);


//Svim linkovima na stranici postaviti da se otvaraju u novom tabu.
let linkovi = document.querySelectorAll('a');
// querySelectorAll vraca Node liste, tako da moze forEach
linkovi.forEach(elem => {
    elem.setAttribute('target', '_blank'); // <a target =' _blank'>
});


//Svim slikama dodati alternativni tekst.
let slike = document.querySelectorAll('img');
slike.forEach(slika => {
    slika.setAttribute('alt','alternativni tekst');
});

//Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.
let paragrafi = document.querySelectorAll('p');
paragrafi.forEach(element => {
    element.setAttribute('style', 'color: purple');
});

// Sve parne paragrafe na stranici obojiti zelenom bojom, a sve neparne paragrafe obojiti crvenom bojom.

paragrafi.forEach((par, i) => {
    if (i % 2 == 0) {
        //par.setAttribute('style', 'color: green');
        //par.setAttribute('style', 'background-color: blue'); // prelepilo bi prethodni stajl
        par.style.color = 'green';
        par.style.padding = '5px';
        par.style.backgroundColor = 'lightblue'; // umesto background-color pise se backgroundColor!!
        par.style.fontSize = '25px';
        console.log(par.style);
    }
    else {
        par.setAttribute('style', 'color: red');
        par.style.backgroundColor = 'lightgreen';
        par.style.padding = '15px';
        //par.style = link.style - ceo stil jednog elementa se primenjuje na drugi
    }
});

/* MENJANJE CSS STILOVA

naslov.style.fontSize = ’ ’;

Ukoliko želimo da poništimo neki atribut i postavimo ga na 0, onda za vrednost atributa postavimo prazan
string*/ 


// VEZBANJE
/*Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i
ljubicastu boju teksta, a neparnim linkovima plavu
pozadinsku boju i belu boju teksta. */

linkovi.forEach((link, i) => {
    link.style.padding = '5px';
    link.style.fontSize = '18px';
    link.style.textDecoration = 'none';
    if (i % 2 == 0) {        
        link.style.color = 'purple';
        link.style.backgroundColor = 'green'; 
    }
    else {
        link.style.backgroundColor = 'blue';
        link.style.color = 'white';
    }
});

paragrafi.forEach((par, i) => {
    par.style.padding = '5px';
    par.style.fontSize = '24px';
    par.style.textDecoration = 'underline';
    par.style.textAlign = 'center';
    if (i % 2 == 0) {        
        par.style.color = 'purple';
        par.style.backgroundColor = 'pink'; 
    }
    else {
        par.style.backgroundColor = 'lightblue';
        par.style.color = 'blue';
    }
});

// DODAVANJE I BRISANJE KLASA
par.classList.add('error'); //Dodavanje klase elementu
console.log(par.classList);
par.classList.remove('error'); //Brisanje klase elementu
par.classList.toggle('error'); // Switch za klase - ukljucuje klasu ako ne postoji, iskljucuje ako postoji


//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
paragrafi.forEach((elem, index) => {
    if (index % 3 == 0) {
        elem.style.fontSize = '15px';        
    }
    else if (index % 3 == 1) {
        elem.style.fontSize = '20px';
    }
    else {
        elem.style.fontSize = '25px';
    }
});

/*Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst
sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.*/

//if(p.textContent.includes(’success’))

paragrafi.forEach(elem => {
    if (elem.textContent.includes('Success')) {
        elem.classList.add('success');
    }
    else if (elem.textContent.includes('Error')) {
        elem.classList.add('error');
    }
});

/*Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu */

//Dodati novi div tag dokumentu
div = document.createElement('div');
div.innerText = 'Pridodati div';
document.body.appendChild(div);

/*Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu. */

let lista1 = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'Prvi item';

let li2 = document.createElement('li');
li2.innerText = 'Drugi item';

let li3 = document.createElement('li');
li3.innerText = 'Treci item';

let divLista = document.getElementById('lista');
divLista.appendChild(lista1);
lista1.appendChild(li1);
lista1.appendChild(li2);
lista1.appendChild(li3);

// Iz ul liste izbaciti prvu stavku.
//prvi nacin
//lista1.removeChild(lista1.firstChild);
// drugi nacin
//lista1.removeChild(lista1.childNodes[0]);
//lista1.removeChild(lista1.lastChild);

// U ul listi zameniti drugu stavku liste.
let liPom = document.createElement('li');
liPom.innerText = '***';

lista1.replaceChild(liPom, lista1.childNodes[1]);