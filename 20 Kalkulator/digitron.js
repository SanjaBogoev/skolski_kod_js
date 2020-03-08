let btn = document.querySelectorAll('.broj');
let btnOperacije = document.querySelectorAll('.operacija');

let x = 0; //prvi broj
let y = 0; //drugi broj
let op = ''; //operacija
let rez = 0; //rezultat

btn.forEach(element => {
    element.addEventListener('click', () => {
        //console.log(element.textContent); //1,2,3...
        if (x == 0) {
            x = element.textContent;
            //console.log(x);
        }
        else {
            y = element.textContent;
            //console.log(y);
        }
    });    
});

btnOperacije.forEach(element => {
    element.addEventListener('click', () => {
        op = element.textContent;
    });
});



/*let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');
let b9 = document.getElementById('b9');*/


/*b1.addEventListener('click', () => {
    if (x == 0) {
        x = 1;
    }
    else {
        y = 1;
    }
});

b2.addEventListener('click', () => {
    if (x == 0) {
        x = 2;
    }
    else {
        y = 2;
    }
});

b3.addEventListener('click', () => {
    if (x == 0) {
        x = 3;
    }
    else {
        y = 3;
    }
});

b4.addEventListener('click', () => {
    if (x == 0) {
        x = 4;
    }
    else {
        y = 4;
    }
});

b5.addEventListener('click', () => {
    if (x == 0) {
        x = 5;
    }
    else {
        y = 5;
    }
});

b6.addEventListener('click', () => {
    if (x == 0) {
        x = 6;
    }
    else {
        y = 6;
    }
});

b7.addEventListener('click', () => {
    if (x == 0) {
        x = 7;
    }
    else {
        y = 7;
    }
});

b8.addEventListener('click', () => {
    if (x == 0) {
        x = 8;
    }
    else {
        y = 8;
    }
});

b9.addEventListener('click', () => {
    if (x == 0) {
        x = 9;
    }
    else {
        y = 9;
    }
});
*/


/*let sabiranje = document.getElementById('plus'); 
sabiranje.addEventListener('click', () => {
    op = "+";
});

let oduzimanje = document.getElementById('minus'); 
oduzimanje.addEventListener('click', () => {
    op = "-";
});
let mnozenje = document.getElementById('puta'); 
mnozenje.addEventListener('click', () => {
    op = "*";
});
let deljenje = document.getElementById('podeljeno'); 
deljenje.addEventListener('click', () => {
    op = "/";
});
*/

let jednako = document.getElementById('jednako');
jednako.addEventListener('click', () => {
    x = parseInt(x);
    y = parseInt(y);
    switch (op) {
        case "+":
            rez = x + y;
            break;
        case "-":
            rez = x - y;
            break;
        case "*":
            rez = x * y;
            break;
        case "/":
            rez = x / y;
            break;        
    }

    let paragraf = document.getElementById('rezultat');
    paragraf.innerText = rez;
    x = 0;
    y = 0;
    rez = 0;
});


