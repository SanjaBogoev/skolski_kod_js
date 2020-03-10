// Modul result_div.js
//Kreiranje i dodavanje div-a
let createDiv = (cls, parent, whereChild) => {
    let div = document.createElement('div');
    div.classList.add(cls);
    let text = document.createElement('div');
    text.classList.add('text');
    let h2 = document.createElement('h2');
    text.appendChild(h2);
    div.appendChild(text);
    parent.insertBefore(div, whereChild);
    div.style.display = 'none';
    return [div, h2]; //vraca niz
};

export default createDiv;
