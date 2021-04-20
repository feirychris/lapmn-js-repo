const scanf = require('scanf');

console.log("entrez la première chaine");

let firstChaine = scanf('%S');

console.log("entrez la deuxieme chaine");

let secondChaine = scanf('%S');

//La plus longue chaine

if (firstChaine.length > 2* secondChaine.length){
    console.log(`${firstChaine} est plus grand que ${secondChaine}`);
} else{
    console.log(`${firstChaine} n'est pas  plus grand que ${secondChaine}`);
}