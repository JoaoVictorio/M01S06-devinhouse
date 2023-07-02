const readline = require('readline');
const filtraPares = require('./filtraPares');
const somaImpares = require('./somaImpares');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Insira um array de números separados por espaço: ', (input) => {
  const numbers = input.split(' ').map(Number);

  const pares = filtraPares(numbers);
  console.log('Números pares:', pares);

  const impares = numbers.filter((num) => num % 2 !== 0);
  const soma = somaImpares(impares);
  console.log('Soma dos números ímpares:', soma);

  rl.close();
});