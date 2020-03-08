let forma = document.querySelector('#login-form');
let inputUsername = document.querySelector('#username');
let btnSub = document.querySelector('#submit');
let divGreska = document.querySelector('#greska');
//(HTML5, CSS3 JS6 (ES6) Git NodeJS, React)
let patternUsername = /^[a-zA-Z0-9]{5,15}$/;

//inputUsername ili pristup preko forme forma.username (form.id ili form.name)
inputUsername.addEventListener('keyup', (e) => {
    if(patternUsername.test(inputUsername.value)) {
        //console.log(':)');
        inputUsername.setAttribute('class','success'); //moze i sa classList.add
    }
    else {
        //console.log(':(');
        inputUsername.setAttribute('class', 'error');
    }
});

//kad imamo formu, uvek na formu stavljamoListener i umesto 'click' se pise 'submit'

forma.addEventListener('submit', (e) => {
    e.preventDefault(); // da se forma ne bi refresh-ovala automatski

    //let patternUsername = /zdravo/i; //Da li sadrzi rec zdravo
    //let patternUsername = /^[a-zA-Z0-9]{5,15}$/; //stavili smo ga da bude globalna promenljiva

    let username = inputUsername.value;

    if (patternUsername.test(username)) {
        divGreska.textContent = `Podaci ispravno uneti. Vas username je: ${username}`;
        //console.log(':)');
    }
    else {
        divGreska.textContent = 'Username sme sadrzati samo slova ili brojeve i biti izmedju 5 i 15 karaktera!';
        //console.log(':(');
    }

    //console.log(username);    
});


