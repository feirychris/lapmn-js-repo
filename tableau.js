const scanf = require('scanf');

const myTab = new Array();
let total = 0
//let max = myTab[0]
let indice = 0
let mean
let i;

//remplissage du tableau
while(myTab.length < 5){
    console.log("entrez un entier")
    let number = scanf('%f')
    myTab.push(number)
}


//détermination de l'indice du plus grand nombre
let max = myTab[0]
for(i=1; i<myTab.length; i++){
    if (max < myTab[i]){
        max = myTab[i]
        indice = i
    }
}

console.log(`l'indice du plus grand nombre est ${indice}`)

//calcul du total
for(i=0; i<myTab.length; i++){
    total += myTab[i]
}

//calcul de la moyenne
mean = total/5;

console.log(`la moyenne est ${mean}`)
