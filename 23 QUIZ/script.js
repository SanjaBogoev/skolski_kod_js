let form = document.querySelector('form');
let tacniOdgovori = ['B', 'A', 'B', 'B', 'B'];

let div = document.createElement('div');
div.classList.add('intro');
let text = document.createElement('div');
text.classList.add('text');
let h2 = document.createElement('h2');
text.appendChild(h2);
div.appendChild(text);

let whereChild = document.body.children[1];
console.log(whereChild); //div.quiz
document.body.insertBefore(div, whereChild);
div.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault(); //nema difoltnog ponasanja

    //Potrebno je odrediti koji radio je selektovan

    //Generalni nacin (koristimo van forme):
    /*
    let radios = document.querySelectorAll('.q1');
    radios.forEach(radio => {
        if (radio.checked) {
            console.log(radio.value);
        }
    });*/

    //Za formu:
    // 1) u JS kodu - objekat forme (promenljiva form)
    // 2) Svi elementi forme u HTML-u moraju da imaju NAME atribut

    let odg1 = form.q1.value; //forma.nameAtributElementaIzForme.value - value cekiranog radio button-a
    let odg2 = form.q2.value;
    let odg3 = form.q3.value;
    let odg4 = form.q4.value;
    let odg5 = form.q5.value.length;
    console.log(odg1, odg2, odg3, odg4, odg5);
    if (odg5 > 6) {
        odg5 = 'B';
    }
    else {
        odg5 = 'A';
    }
    console.log(odg1, odg2, odg3, odg4, odg5);
    let odgovori = [odg1, odg2, odg3, odg4, odg5];

    let score = 0;
    odgovori.forEach((odgovor, index) => {
        if (odgovor == tacniOdgovori[index]) {
            score += 20;
        }
    });
    console.log(score);

    //Ispisivanje score-a u h2
    div.style.display = 'block';
    scrollTo(0 , 0); //x, y koordinate (pocetak ekrana)
    //h2.textContent = `Vas odgovor je ${score}%`;
    let brojac = 0;
    let clock = setInterval(() => {
        h2.textContent = `Vas odgovor je: ${brojac}%`;
        if (brojac < score) {
            brojac++;
        }
        else {
            clearInterval(clock);
        }
    }, 10);

});

