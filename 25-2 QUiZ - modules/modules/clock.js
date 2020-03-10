//Modul clock.js

let generateScore = (h2, score) => {
    let brojac = 0;
    let clock = setInterval(() => {
        h2.textContent = `Vas odgovor je: ${brojac}%`;
        if (brojac < score) {
            brojac++;
        }
        else {
            clearInterval(clock);
        }
    }, 10);
};

export default generateScore;