// Prikazati sve dokumente iz kolekcije customers sortirane po imenu
/*
db.collection('customers')
.orderBy('name')
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error geting documents:", error);
});
*/

// Iz kolekcije customers procitati sve klijente:
// koji imaju adresu u Nisu
/*
db.collection('customers')
.where('addresses', 'array-contains', 'Nis')
//.orderBy('name')
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting documents:", error);
});
*/

//koji imaju platu vecu ili jednaku od 500
/*
db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting documents:", error);
});
*/
//koji imaju platu izmedju 300 i 800
/*
db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting documents:", error);
});
*/
//koji imaju platu manju od 900 i imaju 30 god
/*
db.collection('customers')
.where('salary', '<', 900)
.where('age', '==', 30)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting documents:", error);
});
*/
//koji imaju adresu u Nisu ili Beogradu
/*
db.collection('customers')
.where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting documents:", error);
});
*/

// Koji imaju 22, 25 ili 28 godina
/*
db.collection('customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting documents:", error);
});
*/


///////////////////////////////////////////TASKS////////////////////////////////////////////////

//Iz kolekcije TASKS, procitati sve zadatke, i koji:
//su prioritetni
/*
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting tasks:", error);
});
*/

//treba da se izvrse u tekucoj godini

// poredjenje kada je polje start_due STRING
/*
let datum1 = "2020-01-01";
let datum2 = "2020-12-31";

db.collection('tasks')
.where('start_date', '>=', datum1)
.where('start_date', '<=', datum2)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting tasks:", error);
});
*/
// poredjenje kada je polje start_due TIMESTAMP
/*
let d1 = new Date(datum1);
let d2 = new Date(datum2);

db.collection('tasks')
.where('start_date', '>=', firebase.firestore.Timestamp.fromDate(d1),)
.where('start_date', '<=', firebase.firestore.Timestamp.fromDate(d2),)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting tasks:", error);
});
*/

//su zavrseni
// poredjenje kada je polje start_due STRING
/*
db.collection('tasks')
.where('due_date', '<=', "2020-03-19")
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting tasks:", error);
});
*/
// poredjenje kada je polje start_due TIMESTAMP
/*
let now = new Date();

db.collection('tasks')
.where('due_date', '<=', firebase.firestore.Timestamp.fromDate(now),)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting tasks:", error);
});
*/

//tek treba da pocnu

// poredjenje kada je polje start_due STRING
/*
db.collection('tasks')
.where('start_date', '>=', "2020-03-19")
.get()
.then(snapshot => {
    console.log("Dokumenti koji zadovoljavaju kriterijume su:");
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting tasks:", error);
});
*/

// poredjenje kada je polje start_due TIMESTAMP
/*
let now = new Date();

db.collection('tasks')
.where('start_date', '>=', firebase.firestore.Timestamp.fromDate(now),)
.get()
.then(snapshot => {
    console.log("Dokumenti koji zadovoljavaju kriterijume su:");
    snapshot.docs.forEach(doc => {
        let polja = doc.data();
        let id = doc.id;
        console.log(id, " => ", polja);
    });
})
.catch(error => {
    console.error("Error getting tasks:", error);
});
*/

