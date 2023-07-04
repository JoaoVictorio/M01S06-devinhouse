const filtraPares = require('./filtraPares');
const somaImpares = require('./somaImpares');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`A soma dos números ímpares é ${somaImpares(array)}`);
console.log(`A quantidade de números pares é ${filtraPares(array).length}`);