// Destructuring

const { SOMME , PRODUIT } = require('./mathsLib.mjs');

console.log(SOMME(4,7));
console.log(PRODUIT(4,2));

const nbr1 = 215;
const nbr2 = 2215;


console.log(`${nbr1} + ${nbr2} = ${SOMME(nbr1,nbr2)}`);
console.log(`${nbr1} * ${nbr2} = ${PRODUIT(nbr1,nbr2)}`);



