//11. Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function suma (n ,m) {
    if (n > m) {
        return 0;
    }
    let s = 0;
    for (let i = n; i<=m; i++) {
        s += i;
    }
    return s;    
}
let p = suma (6, 12);
console.log(p);
p = suma (1, 9);
console.log(p);
console.log(suma(5, 18));
console.log(suma(7, 2));

// 12. Napraviti funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function mnozi (n ,m) {
    let p = 1;
    for (let i = n; i<=m; i++) {
        p *= i;
    }
    return p;
}
let rez = mnozi(1, 5);
console.log(rez);
console.log(mnozi(3,6));

// 13. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arsr (n, m) {
    let zbir = 0;
    let broj = 0;
    for (let i=n; i<=m; i++) {
        zbir = zbir + i; // zbir += i;
        broj = broj + 1; // broj++; broj += 1;
    }
    return zbir/broj;
}
console.log(arsr(5, 9));

// 14. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m.Brojeve n i m proslediti kao parametre funkciji.

function arsr3 (n, m) {
    let zbir = 0;
    let broj = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            zbir += i;
            broj++;    
        }
    }
    if (broj > 0) {
    return zbir/broj;
    }
    return 0;
}
console.log(arsr3(1,10));
console.log(arsr3(6,9)); // 0 / 0 = NaN; k / 0 = Infinity

/* 10. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi
sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m. */

function deljivSaTri (n , m) {
    let broj = 0;
    for (let i=n; i<=m; i++) {
        if (i % 3 == 0) {
            //console.log(i);
            broj++;
        }
    }
    return broj;
}

console.log(deljivSaTri(5,14));
console.log("Broj brojeva deljivih sa tri je: " + deljivSaTri(5, 14));
let rezz = deljivSaTri(5, 14);
console.log(`Broj brojeva deljivih sa tri je : ${rezz}`);
console.log(`Broj brojeva deljivih sa tri je: ${deljivSaTri(5, 14)}`);

/* 5. Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike. */

function slika(putanja) {
    //return "<img src='" + putanja + "' alt='Blabla'>";
    return `<img src='${putanja}' alt='Blabla'>`;
}

let elem = document.getElementById('blabla');
console.log(elem.innerHTML);
elem.innerHTML = slika('slike/oko.jpg');
console.log(elem.innerHTML);
elem.innerHTML += slika('slike/oko.jpg'); // dodajemo jos jednu sliku na vec postojeci sadrzaj +=, sa samo = bi stavilo sliku na sliku

/* 6. Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa
u tu boju.*/

function paragraf (boja) {
    return `<p style='color: ${boja}'> Tekst tekst... </p>`;
}
elem.innerHTML += paragraf('red');
elem.innerHTML += paragraf('blue');
elem.innerHTML += paragraf('green');



function paragraf2(boja, tekst) {
    return `<p style='color: ${boja}'> ${tekst} </p>`;
}
elem.innerHTML += paragraf2('green', 'Lorem ipsum...');
elem.innerHTML += paragraf2('yellow', 'Pera Peric');

/* 7. Napraviti funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima
prosleđenu veličinu fonta.*/ 

function paragraf3 (velicina, tekst) {
    return `<p style='font-size: ${velicina}px'> ${tekst} </p>`;
}

elem.innerHTML += paragraf3(50, 'Pera Peric');

/*Napraviti funkciju koja 5 puta ispisuje istu recenicu, a velicina fonta recenice treba da bude jednaka vrednosti iteratora */

function pisiPetParagrafa() {
    let res = ""; //prazan string, string duzine 0
    for (let i=1; i<=5; i++) {
        let j = i * 10;
        res = res + `<p style='font-size: ${j}px'>Neki tekst...</p>`;
    }
    return res;
}
elem.innerHTML += pisiPetParagrafa();