// Crea due tag div con due id diversi.Un div avrà il testo colorato di rosso mentre l’altro di verde.Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// DEFINISCO ARRAY E VARIABILI
let listaNumeri = [];
const divDispari = document.getElementById('div-rosso');
const divPari = document.getElementById('div-verde');
const risultatoNumeri = document.getElementById('lista-numeri');

// DEFINISCO COLORI DIV E DIMENSIONE TESTO
divPari.style.color = 'green';
divPari.style.fontSize = '2rem'
divDispari.style.color = 'red';
divDispari.style.fontSize = '2rem'

// CICLO PER 10 NUMERI RANDOM CON CUI POPOLARE L'ARRAY 
for (let i = 0; i < 10; i++) {

    // CREO NUMERO RANDOM DA 0 A 100
    let creaNumeri = Math.floor(Math.random() * 100) + 1;
    // INSERISCO IL NUMERO CREATO NELL'ARRAY
    listaNumeri.push(creaNumeri);
}

// CICLO listaNumeri PER STAMPARE I NUMERI DELL'ARRAY

for (let y = 0; y < listaNumeri.length; y++) {
    let currentNumber = listaNumeri[y];
    risultatoNumeri.innerHTML += ` ${currentNumber} `;
    if (currentNumber % 2 == 0) {
        divPari.innerHTML += ` ${currentNumber} `;
    } else {
        divDispari.innerHTML += ` ${currentNumber} `;
    }
}