// Kreiranje objekta BLOG
// objekat - slozen tip podataka
let blog = {
    title: 'Moj prvi blog',
    content: 'Neki tekst...',
    author: 'SB'
};
console.log(blog);
console.log(typeof 5); // number
console.log(typeof 'Sanja'); // string
console.log(typeof true); // boolean
console.log(typeof blog); // object

//Pristup jednoj osobini:
// 1. nacin
console.log(blog.title);
// 2. nacin
console.log(blog['title']);

//Izmene jedne osobine
// 1. nacin
blog.title = 'Izmena naslova na prvi nacin';
console.log(blog);
// 2. nacin 
blog['title'] = 'Izmena naslova na drugi nacin';
console.log(blog);

let blog1 = {
    title: 'Blog 1!',
    content: 'Tekst 1',
    likes: 45,
    dislikes: 50
};
console.log(blog1);

let blog2 = {
    title: 'Blog 2!!',
    content: 'Tekst 2',
    likes: 60,
    dislikes: 20
};
console.log(blog2);

let blog3 = {
    title: 'Blog 3!!?',
    content: 'Tekst 3',
    likes: 35,
    dislikes: 50
};
console.log(blog3);

let user = {
    username: 'SanjaBogoev',
    age: 30,
    blogs: ['Title1', 'Title2', 'Title3'],
    login: function() {
        console.log("Ulogovani ste!");
    },
    logBlogs: function() {
       // console.log(this.blogs); // ukoliko unutar metoda zelimo da pristupamo propertijima iz tog objekta pre naziva propertija pisemo this.naziv propertija!!!
        this.blogs.forEach(b => {
            console.log(b);
        });            
    }
};

console.log(user.username);
let arrBlogs = user.blogs;

//Ispis niza blogova
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(`Naslov bloga je: ${arrBlogs[i]}`);
}

//Ispis niza blogova FOREACH metodom

arrBlogs.forEach(blog => {
    console.log(`Naslov bloga je ${blog}`);
});

//Poziv metoda
user.login();
//Poziv unutar metoda
user.logBlogs(); 


console.log(this);

// Niz objekata
let blogs = [blog1, blog2, blog3];

//Iteracija FOR petljom
for (i = 0; i < blogs.length; i++) {
    console.log(blogs[i].title);
    console.log(blogs[i]['content']);
}

//Iteracija foreach nizom objekata - ispisivanje celih objekata
blogs.forEach(blog => {
    console.log(blog);
});

// Iteracija foreach nizom objekata - ispisivanje naslova
console.log(blog1.title);
//blog = blog1;
//blog = blog2;
//blog = blog3;
blogs.forEach(blog => {
    console.log(blog.title);
});

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let ukupnoLajkova = blogs => { 
    let ukupno = 0;   
    blogs.forEach(elem => {
        ukupno += elem.likes;
    });
    return ukupno;
};
console.log(ukupnoLajkova(blogs));

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosecanBrojLajkova = blogs => {
    let ukupno = 0;
    blogs.forEach(blog => {
        ukupno += blog.likes;
    });
    return ukupno / blogs.length;
};
console.log(prosecanBrojLajkova(blogs));

let prosecnoLajkova = niz => {
    let ukupno = ukupnoLajkova(niz);
    let broj = niz.length;
    let avg = ukupno / broj;
    return avg;
};
console.log(prosecnoLajkova(blogs));

//prosecno dislajkova

let prosecnoDislajkova = niz => {
    let ukupno = 0;
    niz.forEach(x => {
        ukupno += x.dislikes;
    });
    let broj = niz.length;
    let avg = ukupno / broj;
    return avg;
};
console.log(prosecnoDislajkova(blogs));

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let visePozitivnih = niz => {
    niz.forEach(elem => {
        let poz = elem.likes;
        let neg = elem.dislikes;
        if (poz > neg) {
            console.log(elem.title);
        }
    });
};
visePozitivnih(blogs);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = niz => {
    niz.forEach(elem => {
        let naslov = elem.title;
        if (naslov.endsWith('!')) {
            console.log(naslov);
        }
    })
};
uzvicnik(blogs);

let user1 = {
    username: 'SanjaBogoev',
    age: 28,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach( b => {
            console.log(b);
        });
    },
    logTitleBlogs: function() {
        this.blogs.forEach(b => {
            console.log(b.title);
        });
    }
};

console.log(user1);
user1.logBlogs();
user1.logTitleBlogs();

let user2 = {
    username: 'PeraPeric',
    age: 16,
    blogs: [blog1, blog2]
};
console.log(user2);

let user3 = {
    username:'AnaAntic',
    age: 29,
    blogs: [blog1, blog3]
};
console.log(user3);

//Niz korisnika
//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let users = [user1, user2, user3];

//Ispisati imena onih autora koji imaju ispod 18 godina
let mladjiOd18 = korisnici => {
    korisnici.forEach(elem => {
        let god = elem.age;
        if (god < 18) {
            console.log(elem.username);
        }
    });
};
mladjiOd18(users);

//Ispisati naslove onih blogova koji imaju više od 50 lajkova

let popularniBlogovi = korisnici => {
    korisnici.forEach(k => {
        let nizBlogova = k.blogs;
        nizBlogova.forEach(b => {
            let lajkovi = b.likes;
            if (lajkovi > 50) {
                console.log(b.title);
            }
        });
    });
};
popularniBlogovi(users);

//Ispisati sve blogove autora čiji je username ’SanjaBogoev’

let blogoviAutora = (korisnici, ime) => {
    korisnici.forEach(k => {
        //Ako je korisnik '...' tek onda ispisati njegove blogove
        if (k.username == ime) {
            let nizBlogova = k.blogs;
            nizBlogova.forEach(b => {
                console.log(b.title);
            });
        }
    });
};
blogoviAutora(users, 'SanjaBogoev');
blogoviAutora(users, 'AnaAntic');
blogoviAutora(users, 'MikaMikic');

//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

let popularniAutori = autori => {
    //let sumLikes = 0; //ukupno lajkova za sve korisnike (autore)
    autori.forEach(a => {
        let nizBlogova = a.blogs;
        let sumLikes = 0; //pojedinacni korisnici
        nizBlogova.forEach(b => {
            sumLikes += b.likes;
        });
        if (sumLikes > 100) {
            console.log(a.username);
        }
    });
};
popularniAutori(users);

// drugi nacin, sa vec napravljenom funkcijom za ukupne lajkove

let popularniAutori2 = autori => {
    //let sumLikes = 0; //ukupno lajkova za sve korisnike (autore)
    autori.forEach(a => {
        let nizBlogova = a.blogs;
        let sumLikes = ukupnoLajkova(nizBlogova)
        if (sumLikes > 100) {
            console.log(a.username);
        }
    });
};
popularniAutori2(users);

//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

let superBlog = niz => {
    let sum = 0; // suma svih lajkova svih blogova
    let sumDis = 0; // suma svih dislajkova svih blogova
    let br = 0; // broj svih blogova
    niz.forEach(a => { //ukupno lajkova/dislajkova i blogova
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b => {
            br++;
            sum += b.likes;
            sumDis += b.dislikes;
        });
    });
    let avgLikes = sum / br; // prosek lajkova i dislajkova
    let avgDislikes = sumDis / br;

    niz.forEach(a => { //Prodjem svim blogovima i ispitam da li imaju vise od prosecno lajkova i manje od prosecno dislajkova
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b => {
            if (avgLikes < b.likes && avgDislikes > b.dislikes) {
                console.log(b.title);
            }
        });
    });
};

superBlog(users);