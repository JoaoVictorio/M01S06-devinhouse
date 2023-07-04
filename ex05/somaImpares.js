let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const somaImpares = (array) => array.reduce((soma, elemento) => {
  if (elemento % 2 !== 0) {
    return soma + elemento;
  } else {
    return soma;
  }
}, 0);