// 1) Ispisati brojeve od 1 do 20, sve u novom redu
/*console.log("Zdravo");

let i = 1; //brojac, interator
while (i <= 20) {
    console.log(i);
    i++; //3 nacina: i+=1; i = i + 1;
}

console.log("svete"); */

// 2) Ispisati brojeve od 1 do 20, sve u istom redu

/*let i = 1;
let rez = "";
while (i <= 20) {
    rez = rez + i + " "; //rez+= i + " ";
    i++;
}
console.log(rez);

// 3) Ispisati brojeve od 20 d 1

let j = 20; 
while (j >= 1) {
    console.log(j);
    j--;
}*/

// 4) Ispisati parne brojeve od 20 do 1

/*let j = 20; 
while (j >= 2) {
    console.log(j);
    j -= 2; //j = j-2
}
*/
// 4.1) Ispisati brojeve od 1 do 20 koji su deljivi sa 3
/*
let i = 1;
while (i <= 20) {
    if (i % 3 ==0  && i % 9 != 0) {
        console.log(i);
    }
    i++
}
*/
// 6) Odrediti sumu brojeva od 1 do 100
/*
let i = 1;
let suma = 0; // neutral za sabiranje, pocetna vrednost je uvek 0, uvek se stavlja pre petlje!
while (i <= 100) {
    suma = suma + i;
    i++;
} 
console.log(suma); */
/*
s=0; i=1;
s=1; i=2;
s=2; i=3;
s=3; i=4;
s=4; i=5;
*/

// 6.1) Suma parnih brojeva od 1 do 100

/*let s = 0;
let i = 1;

while (i <= 100) {
    if (i % 2 ==0) {
        s = s + i;
    }
    i = i + 1; 
}
console.log(s);*/

// 7) Odrediti sumu brojeva od 1 do n
/*
let i = 1;
let n = 10;
let s = 0;
 while (i <= n) {
     s = s + i;
     i = i + 1; //i++; i+=1
 }
 console.log(s);
 
 console.log(n*(n+1)/2); //suma brojeva od 1 do n u jednom redu
 */

 // 8) Odrediti sumu brojeva od n do m

 /*let n = 5;
 let m = 10;
 let s = 0;
 let i = n;
 while (i <= m) {
    s = s + i; //s+=n;
    i++; //i= i +1;
 }
 console.log("Suma brojeva od " + n + " do " + m + " je " + s);
 */
// 9) odrediti proizvod brojeva od n do m
/*let n = 1;
let m = 5;
let i = n;
let p = 1; //Neutral za mnozenje je 1
while (i<=m) {
    p *= i; //p=p*i;
    i++; //i=i+1;
}
console.log(p); */

// 9.1 Odrediti proizvod svakog drugog broja od n do m
/*let n = 1;
let m = 5;
let i = n;
let p = 1; //Neutral za mnozenje je 1
while (i<=m) {
    p *= i; //p=p*i;
    i = i + 2; //i+=2
}
console.log(p);*/

// 10. Odrediti sumu kvadrata brojeva od n do m
/*let n = 1;
let m = 5;
let i = n;
let s = 0;

while (i <= m) {
    s = s + i**2; //s = s + i*i; s+=i*i; s+=i**2;
    i++;
}
console.log(s); */
/*
s=0 i=1
s=1 i=2
s=5 i=3
s=14 i=4
s=30 i=5
s=55 i=6
*/ 
// 11. Odrediti sa koliko brojeva je deljv uneti broj k

let k = 15;
let i = 1;
let br = 0;
while (i<=k) {
    if (k % i ==0){
        br++; //br+=1; br=br+1;
    }
    i++;
}
console.log(br);

/*
15/1=true
15/2=false
15/3=true
15/4=false
15/5
15/15
*/

