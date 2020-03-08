let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let btnDodaj = document.querySelector('button');
let inputUnos = document.querySelector('#unesi');


//ulZadaci.prepend(noviItem);//dodaje na pocetak liste //ulZadaci.appendChild(noviItem); //dodaje na kraj liste (moze da se pise i samo append)
/*
liZadaci.forEach(elem => {
    elem.addEventListener('click', (e) => { 
        e.target.remove();  // kada se klinke na element, brise se
        //elem.remove();  //isto kao i linija iznad 
        console.log("Kliknuto na LI");
        e.stopPropagation(); // Ne poziva dalje roditeljski element      
    });
});
*/
ulZadaci.addEventListener('click', (e) => {
    //console.log("Kliknuto na UL");
    //console.log(e.target.tagName); // e.targer vraca element sa tagovima <li>Nova obaveza </li>, a e.target.tagName daje samo ime taga
    if (e.target.tagName == 'LI') {
        e.target.remove();
    }
});

let dodavanjeItema = () => {
    let noviZadatak = document.querySelector('input').value;
    let rbDodajNaPoc = document.querySelector('#dodajNaPocetak');
    
    if (noviZadatak == "") {
        //izbaci alert
        alert('Morate uneti neki tekst');
    }
    else {
        //Kreiraje novog zadatka
        let noviItem = document.createElement('li');
        noviItem.textContent = noviZadatak;
        // Da li dodati na pocetak ili na kraj
        if (rbDodajNaPoc.checked) {
            ulZadaci.prepend(noviItem);
        }
        else {
            ulZadaci.appendChild(noviItem);
        }         
    }
    //brisanje iz input polja
    document.querySelector('input').value = "";
};

btnDodaj.addEventListener('click', () => {
    dodavanjeItema();      
});

inputUnos.addEventListener('keyup', (e) => {
    // Za Enter je "kljuc" broj 13
    if (e.keyCode == 13) {
        dodavanjeItema();
    }
});