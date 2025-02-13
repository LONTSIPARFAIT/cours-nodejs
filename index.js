console.log('Introduction a nodeJS');

// const mathsLib = require('./mathsLib');

// let somme = mathsLib.SOMME(4,7);
// let produit = mathsLib.PRODUIT(4,2)
// console.log(somme;
// console.log(produit);

// console.log(`${nbr1} + ${nbr2} = ${mathsLib.SOMME(nbr1,nbr2)}`);
// console.log(`${nbr1} * ${nbr2} = ${mathsLib.PRODUIT(nbr1,nbr2)}`);

// Destructuring

let { somme , produit } = require('./mathsLib');

console.log(somme(4,7));
console.log(produit(4,2));

const nbr1 = 215;
const nbr2 = 2215;


console.log(`${nbr1} + ${nbr2} = ${somme(nbr1,nbr2)}`);
console.log(`${nbr1} * ${nbr2} = ${produit(nbr1,nbr2)}`);



