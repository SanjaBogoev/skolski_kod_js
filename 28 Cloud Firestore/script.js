//console.log(db); // objekat konekcije

let kolekcija1 = db.collection('tasks'); // objekat kolekcije
console.log(kolekcija1);

let task01 = kolekcija1.doc('task-01'); //pristup dokumentu preko objekta kolekcije
console.log(task01);

// let task02 = kolekcija1.doc('task-02');
let task02 = db.doc('tasks/task-02');  // pristup dokumentu preko baze
console.log(task02);

let task001 = db.collection('tasks').doc('task-01'); //pristup dokumentu preko objekta kolekcije - nadovezane metode
console.log(task001);

//DODAVANJE NOVOG DOKUMENTA U KOLEKCIJU

let c1 = {
    name: "Filip Filipovic",
    age: 50,
    addresses: ["Beograd", "Pozarevac", "Negotin"],
    salary: 1200
};

// Ne zadajemo ID dokumentu, baza sama generise neki ID
/*
db.collection('customers').doc().set(c1)
.then(()=> {
    console.log('Customer added successfully'); //callback funkcija
})
.catch((error)=> {
    console.error("Error adding cutomer:", error);
});
*/

// Zadajemo ID
db.collection('customers').doc('customer-01').set(c1)
.then(()=> {
    console.log('Customer added successfully'); //callback funkcija
})
.catch((error)=> {
    console.error("Error adding cutomer:", error);
});

let c2 = {
    gender: "male",
    height: 180
};
let s = {
    merge: true
};

db.collection('customers').doc('customer-01').set(c2, s)
.then(()=> {
    console.log('Customer added successfully'); //callback funkcija
})
.catch((error)=> {
    console.error("Error adding cutomer:", error);
});

let datum1 = new Date("2020-03-17 19:00:00");
let datum2 = new Date("2020-03-17 21:00");

let t3 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1), // timestamp se dodaje na ovaj nacin, jer timestamp ne postoji u js, ves samo u firestore
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbalica sa drustvom"
};

db.collection('tasks').doc('task-03').set(t3)
.then(()=> {
    console.log('Task added successfully'); //callback funkcija
})
.catch((error)=> {
    console.error("Cannot add task:", error);
});

db.collection('tasks').doc('task-03').update({
    description: "Fudbalica sa drustvom ako stignem"
})
.then(()=> {
    console.log('Task successfully updated!');
})
.catch((error)=> {
    console.error("Error updating task:", error);
});

/*
Podaci mogu da se upisuju u bazu
Podaci mogu da se menjaju u bazi
Podaci mogu da se citaju iz baze

*/
