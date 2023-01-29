// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro. 

// DEFINISCO ARRAY E VARIABILI
let PrimaLista = [];
let SecondaLista = [];
const risultatoNumeri = document.getElementById('risultato');
const PrimaListaEl = document.getElementById('prima-lista');
const SecondaListaEl = document.getElementById('seconda-lista');
const risultatoDifferenza = document.getElementById('differenza');

// definisco numero di elementi random per le due liste 

CounterPrimaLista = Math.floor(Math.random() * 20) + 1;
CounterSecondaLista = Math.floor(Math.random() * 20) + 1;

// CREO NUMERI RANDOM PER OGNI LISTA IN BASE AL NUMERO DI ELEMENTI STABILITO
for (let i = 0; i < CounterPrimaLista; i++) {
    let creaNumeri = Math.floor(Math.random() * 100) + 1;
    PrimaLista.push(creaNumeri);
    // STAMPO NUMERO RANDOM IN HTML 
    PrimaListaEl.innerHTML += `${creaNumeri}, `
}


for (let y = 0; y < CounterSecondaLista; y++) {
    let creaNumeri = Math.floor(Math.random() * 100) + 1;
    SecondaLista.push(creaNumeri);
    // STAMPO NUMERO RANDOM IN HTML 
    SecondaListaEl.innerHTML += `${creaNumeri}, `
}

// MOSTRO A SCHERMO QUANTI NUMERI HA CIASCUNA LISTA 
PrimaListaEl.innerHTML += `<br><strong>La prima lista ha ${PrimaLista.length} elementi.</strong>`;
SecondaListaEl.innerHTML += `<br><strong>La seconda lista ha ${SecondaLista.length} elementi.</strong>`;


// DIFFERENZA TRA LE DUE LISTE 
let differenza = PrimaLista.length - SecondaLista.length;
let differenza2 = SecondaLista.length - PrimaLista.length;

// SE LA PRIMA LISTA E' PIU' LUNGA, POPOLA LA SECONDA LISTA FINO AL NUMERO DI ELEMENTI MANCANTI 
if (differenza > 0) {
    for (let x = 0; x < differenza; x++) {
        let creaNumeri = Math.floor(Math.random() * 100) + 1;
        SecondaLista.push(creaNumeri);
    }
    // messaggio all'utente
    risultatoDifferenza.innerHTML += `<br><strong>La differenza è di ${differenza} numeri.</strong> Creo altrettanti numeri per la Seconda Lista. Eccola aggiornata: ${SecondaLista}`;
} else if (differenza == 0) {
    risultatoDifferenza.innerHTML += `<br><strong>Le liste hanno lo stesso numero di elementi, non faccio nulla.`
}

// SE LA SECONDA LISTA E' PIU' LUNGA, POPOLA LA PRIMA LISTA FINO AL NUMERO DI ELEMENTI MANCANTI 
if (differenza2 > 0) {
    for (let k = 0; k < differenza2; k++) {
        let creaNumeri = Math.floor(Math.random() * 100) + 1;
        PrimaLista.push(creaNumeri);
    }
    console.log(PrimaLista)
    risultatoDifferenza.innerHTML += `<br><strong>La differenza è di ${differenza2} numeri.</strong> Creo altrettanti numeri per la Prima Lista. Eccola aggiornata: ${PrimaLista}`;
}