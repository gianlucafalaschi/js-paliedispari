// Pari e Dispari
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


// chiedere all'utente numero da 1 a 5
//genero un numero random da 1 a 5  per il computer
//sommo i numeri
//creo una funzione che stabilisce se la somma e' pari o dispari 
// dichiariamo chi ha vinto


const randomNumber = getRndInteger(1, 5);
//console.log(randomNumber);


isEvenOrOdd(3);






// FUNCTIONS 
// genera un numero random
// min -> numero intero minimo che puo' essere generato
// max -> numero intero massimo che puo' essere generato
// return -> numero intero random compreso tra min (incluso) e max (incluso)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Stabilisce se un numero e' pari o dispari
// number -> numero intero da valutare se pari o dispari
// return ->  string "even" se il numero e' pari, altrimenti stringa "odd"
function isEvenOrOdd(number) {
    // se il numero e' pari il risultato e' "even", altrimenti e' "odd"
    let evenOrOdd;

    if(number % 2 === 0) {
        evenOrOdd = 'even';
    } else {
        evenOrOdd = 'odd';
    }
    
    return evenOrOdd;
    
}