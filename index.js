console.log('Introduction a nodeJS');

// const mathsLib = require('./mathsLib');

// let somme = mathsLib.SOMME(4,7);
// let produit = mathsLib.PRODUIT(4,2)
// console.log(somme;
// console.log(produit);

// console.log(`${nbr1} + ${nbr2} = ${mathsLib.SOMME(nbr1,nbr2)}`);
// console.log(`${nbr1} * ${nbr2} = ${mathsLib.PRODUIT(nbr1,nbr2)}`);

// Destructuring

const { SOMME , PRODUIT } = require('./mathsLib');

console.log(SOMME(4,7));
console.log(PRODUIT(4,2));

const nbr1 = 215;
const nbr2 = 2215;


console.log(`${nbr1} + ${nbr2} = ${SOMME(nbr1,nbr2)}`);
console.log(`${nbr1} * ${nbr2} = ${PRODUIT(nbr1,nbr2)}`);



