// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari 

// DEFINISCO ARRAY E VARIABILI
let listaNumeri = [];
const risultatoNumeri = document.getElementById('lista-numeri');
const sommaNumeri = document.getElementById('somma-numeri');

// CICLO PER 10 NUMERI RANDOM CON CUI POPOLARE L'ARRAY 
for (let i = 0; i < 10; i++) {

    // CREO NUMERO RANDOM DA 0 A 100
    let creaNumeri = Math.floor(Math.random() * 100) + 1;
    // INSERISCO IL NUMERO CREATO NELL'ARRAY
    listaNumeri.push(creaNumeri);
    // STAMPO IL NUMERO CREATO NELL'HTML 
    risultatoNumeri.innerHTML += ` ${listaNumeri[i]} `;

}

// DEFINISCO VARIABILE CONTATORE 
let somma = 0;

// CICLO listaNumeri PER FARE LA SOMMA

for (let y = 0; y < listaNumeri.length; y++) {
    let currentNumber = listaNumeri[y];

    // SOMMO SOLO SE IL NUMERO E' IN POSIZIONE DISPARI NELL'INDICE
    if (y % 2 != 0) {
        somma += currentNumber;
    }
}

// STAMPO IL RISULTATO DELLA SOMMA 
sommaNumeri.innerHTML += somma;