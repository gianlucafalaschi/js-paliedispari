/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Su internet ci sono soluzioni con join e reverse, non potete usarle! */

// chiedo all'utente di inserire una parola
let userWord = prompt('Dammi una parola');
console.log(userWord);


let palindromeResult =isPalindrome(userWord);
console.log(palindromeResult);

let message;
if(palindromeResult === true) {
    message = 'La parola è un palindromo';
}else{
    message = 'La parola non è un palindromo';
}

alert(message);




// FUNCTIONS
// Prende una parola e stabilisce se e' palindroma
// word -> una stringa
// return -> la parola e' palindroma



function isPalindrome(word) {
    let straightWord = '';
    let reversedWord = '';

    for(let i = 0; i < word.length; i++){
        straightWord += word[i];
        //console.log(straightWord);
    }

    for(let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
        //console.log(reversedWord);
    }
    
    console.log(straightWord);
    console.log(reversedWord);
    let isThisWordPalindrome = false;
    if(straightWord === reversedWord) {
        isThisWordPalindrome = true;
    } 

   return isThisWordPalindrome;

}