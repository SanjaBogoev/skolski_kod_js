let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let timer;

//Primer: Klikom na dugme, prikazati poruku u konzoli nakon 2 sekunde.
btn1.addEventListener('click', () => {
    timer = window.setTimeout(()=> { //nije obavezno navoditi window objekat(setTimeout je metoda window objekta)
        console.log("Zdravo!");
    }, 1000 * 2);
    /*setTimeout(()=> {
        console.log("Zdravo ranije!");
    }, 500);*/
});


//U prethodnom primeru dodati još jedno dugme i klikom na to dugme, prekinuti ispis poruke u konzoli.
btn2.addEventListener('click', () => {
    clearTimeout(timer);
});

//STOPERICA
let div = document.querySelector('#result');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

let brojac = 0;
let clock;
let clockIsSet = false; //uvodi se da ne bi mogla vise puta da se aktivira f-ja i da brojac ne pocne da se povecava velikom brzinom

btn3.addEventListener('click', () => {
    if (!clockIsSet) { //(clockIsSet == false / clockIsSet != true)
        clockIsSet = true;
         clock = setInterval(() => {
            brojac++;
            div.innerHTML = brojac;
        }, 1000);
    }    
});

btn4.addEventListener('click', () => {
    clearInterval(clock);
    clockIsSet = false;
});

//Napraviti DIGITALNI SAT na stranici koji pokazuje trenutno vreme.
let sat = document.querySelector('#sat');
setInterval(function() {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if (sati < 10) { //vodeca nula
        sati = "0" + sati;
    }
    if (minuti < 10) { 
        minuti = "0" + minuti;
    }
    if (sekunde < 10) { 
        sekunde = "0" + sekunde;
    }
    sat.innerHTML = `${sati}:${minuti}:${sekunde}`; 
}, 1000);

