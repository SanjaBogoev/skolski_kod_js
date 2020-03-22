class Chatroom {

    // Konstruktor
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub;
    }
    //Seteri
    set username(u) {
        this._username = u;
    }

    set room(r) {
        this._room = r;
    }
    // Geteri
    get username() {
        return this._username;
    }

    get room() {
        return this._room;
    }

    async addChat(mess) { //asinhrona funkcija - obavlja se nezavisno od ostalog dela koda

        //Dohvatanje tekuceg datuma koji je potreban za Timestamp
        let date = new Date();


        // Kreiranje objekta/dokumenta koji prosledjujemo bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };
        // Da sacuvamo dokument u bazi //cekamo na odgovor
        let response = await this.chats.add(docChat); //await se korisi samo kod asinhronih funkcija
        return response;
    }

    getChats(callback) { //kada se desi neka izmena(snapshot) treba uraditi nesto
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot( snapshot => {
                snapshot.docChanges().forEach(change => {
                    // Ako je poruka dodata u bazu onda raditi update
                    if( change.type === 'added') {
                        //uradi update
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateUsername(uu) {
        //Sustinski menja samo vrednost lokalne promenljive, ne menja vrednost username u bazi podataka
        this.username = uu;
    }

    updateRoom(ur) {
        this.room = ur;
        console.log("Updated room");
        if (this.unsub == true) {
            this.unsub(); // ponovo slusa, kako bi resetovao vrednosti 
        }
    }

}

// Nova instanca klase (Novi objekat)
let chatroom = new Chatroom('js', 'Pera Peric');
//console.log(chatroom);

/*
chatroom.addChat('Zdravo!')
    .then( () => {
        console.log('Chat je dodat!');
    })
    .catch(error => {
        console.log(error);
    });
*/  

/*
chatroom.getChats(data => {
    console.log(data);
});

chatroom.updateRoom("general");

chatroom.getChats(data => {
                    console.log(data);
                });
     
chatroom.updateRoom('js');

chatroom.getChats( data => {
    console.log(data);
});

*/

setTimeout( () => {
    chatroom.updateRoom('js');
    chatroom.updateUsername('Tina');
    chatroom.getChats( data => {
        console.log(data);
    });
    chatroom.addChat("Kako si, Milice?");
}, 3000);

