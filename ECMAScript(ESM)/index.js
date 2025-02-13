// Destructuring

import { sum , prod } from "./mathsLib.mjs" ;

console.log(sum(4,7));
console.log(prod(4,2));

const nbr1 = 215;
const nbr2 = 2215;


console.log(`${nbr1} + ${nbr2} = ${sum(nbr1,nbr2)}`);
console.log(`${nbr1} * ${nbr2} = ${prod(nbr1,nbr2)}`);



