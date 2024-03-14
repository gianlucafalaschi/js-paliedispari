/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Su internet ci sono soluzioni con join e reverse, non potete usarle! */

// chiedo all'utente di inserire una parola
let userWord = prompt('Dammi una parola');
console.log(userWord);


isPalindrome(userWord);




// FUNCTIONS
// Prende una parola e stabilisce se e' palindroma
// word -> una stringa
// return -> la parola e' palindroma



function isPalindrome(word) {
    for(let i = 0; i < word.length; i++){
        let straightWord = word[i];
        console.log(straightWord);
    }
    
}