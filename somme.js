const scanf = require('scanf');

console.log("entrez un nombre")
let sum = 0
let num = scanf('%d')
let i;

//calcul de la somme

for(i=1; i<num ;i++){
    sum += i;
}

console.log(`la somme des nombres compris entre 1 et ${num} est ${sum}`)

