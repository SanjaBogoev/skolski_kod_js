// 1. Ispisati brojeve od 1 do 20 pomocu FOR petlje
/*let i;
for (i=1; i<=10; i++)
{
    console.log(i);
} 
*/
// 2. Ispisati brojeve od 20 do 1
/*let i;
for (i=20; i>= 1; i--) {
    console.log(i);
} */

// 3. Ispisati parne brojeve od 1 do 20
    //prvi nacin
/*for (i=1; i<=20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} */
    //drugi nacin
   /* for (i=2; i<=20; i+=2) {
            console.log(i);
} */

// Kada moze WHILE, a ne moze FOR:
/*
Sabirati brojeve od 1 pa na dalje redom, tako da ne predjete unetu sumu s (<=)
let s = 15;
let i = 1;
let br = 0;
let pom_s = 0;
while (pom_s<=s) {
    pom_s +=i;
    i++;
    br++;
}
console.log(br);
*/ 
/*
Pomnoziti brojeve od 1 pa na dalje redom, tako da ne predjete uneti proizvod (p)
 */
/*let p = 15;
i = 1;
let br = 0;
let pom_p = 1;
while (pom_p<p) {
    pom_p *=i; //pom_p = pom_p * i;
    i++;
    br++;
}
console.log(br); */
// 4. Ispisati dvostruku vrednost brojeva od 5 do 15
/*
for (i=5; i<=15; i++) {
    console.log(i*2); //(i+i);
}
*/
// 5. Odrediti sumu brojeva od 1 do 100
/*
let s = 0;
for (i=1; i<=100; i++) {
    s = s + i;
}
console.log(s);
*/
// 6. Odrediti sumu brojeva od 1 do n
/*
let s = 0;
let i;
let n = 50;

for (i=1; i<=n; i++) {
    s = s + i;
}
console.log(s);
*/
// 7. Odrediti sumu brojeva od n do m
/*let s = 0;
let i;
let n = 50;
let m = 100;

for (i=n; i<=m; i++) {
    s = s + i;
}
console.log(s); */

// 8. Odredite proizvod brojeva od n do m

/*
let p = 1;
let i;
let n;
let m;

for (i=n; i<=m; i++) {
    p = p * i;
}
console.log(p);
*/

// 12. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100
/*let p = 1;
let i;
for (i=20; i<=100; i++) {
    if (i % 11 == 0) {
        p = p * i; //p*=i;
    }
}
console.log(p);
*/

// 12.1. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 i ispisati ih
/*
let p = 1;
let i;
for (i=20; i<=100; i++) {
    if (i % 11 == 0) {
        p = p * i; //p*=i;
        console.log(i);
    }
}
console.log(p);
*/

// 13. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 50
/*
let i;
let br = 0;
for (i=5; i<=150; i++) {
    if (i % 13 == 0) {
        br++;
    }
}
console.log(br);
*/
// 13.1. + i koliko nisu deljivi sa 13
/*
let i;
let br = 0; //deljivi
let br1 = 0; //nisu deljivi
for (i=5; i<=150; i++) {
    if (i % 13 == 0) {
        br++;
    }
    else {
        br1++;
    }
}
console.log(`U intervalu od 50 do 150 ima ${br} brojeva deljivih sa 13 i ${br1} brojeva koji to nisu`);
// ili let br1 = 150 - 5 + 1 - br
*/
// 14. Ispisati aritmeticku sredinu brojeva od n do m
//prvi nacin
/*
let n = 5;
let m = 10;
let i;
let s = 0;
let br = 0;
for (i=n; i<=m; i++) {
    s = s + i;
    br++;
}
let arsr = s / br;
console.log(arsr); */

//drugi nacin
/*
let n = 5;
let m = 10;
let i;
let s = 0;
let br = 0;
for (i=n; i<=m; i++) {
    s = s + i;
}
br = m - n + 1; // od do veci - manji + 1
let arsr = s / br;
console.log(arsr);
*/

// 15. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
/*
let n = -7;
let m = 13;
let i;
let poz = 0;
let neg = 0;

for (i = n; i <= m; i++) {
    if (i >= 0) {
        poz++; 
    }
    else {
        neg++; 
    }
}
console.log(poz);
console.log(neg);
*/
// 16. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
/*
let i;
let br = 0;
for (i = 5; i <= 50) {
    if (i % 3 == 0 || i % 5 == 0) {
        br = br++;
    }
}
console.log(br);
*/

// 17. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
/*
let n = 10;
let m = 45;
let br = 0;
let s = 0;
let cifra;
for (i=10; i<=45; i++) {
     cifra = i % 10;
    if (cifra == 4) {
        br++; //br+=1 br=br+1;
        s=s+i; //s+=i;
    }
}
console.log(cifra);
console.log(br);
console.log(s);
*/
// 21. Odrediti proizvod brojeva od n do m koji su deljivi brojem a
/*
let n = -11;
let m = 30;
let a = 10;
let i;
let p = 1;

for (i=n; i<=m; i++) {
    if (i % a == 0 && i != 0) {
        p*=i;
    }
}
console.log(p);
*/

// 10. Preuzeti sa interneta tri slike i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
/*
let div = document.getElementById("slika");

for (i=1; i<=13; i++) {
    div.innerHTML += "<img src=images/" + i + ".png>" + "<br>";
}
*/
// 10.1 Tri slicice naizmenicno
let div = document.getElementById("slika");

for (i=1; i<=16; i++) {
    if (i%3==1) {
        div.innerHTML +="<img src='images/1.png'>";
    }
    else if (i%3 == 2) {
        div.innerHTML +="<img src='images/2.png'>";
    }
    else div.innerHTML +="<img src='images/3.png'>";
}
