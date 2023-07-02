const somaArray = require('./somaArray');
const multiplicaArray = require('./multiplicaArray');
const calculaMedia = require('./calculaMedia');

const array = [1, 2, 3, 4, 5];

const soma = somaArray(array);
const multiplicacao = multiplicaArray(array);
const media = calculaMedia(array);

console.log(`Soma: ${soma}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Média: ${media}`);