function somaImpares(array) {
  return array.reduce((sum, num) => {
    if (num % 2 !== 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

module.exports = somaImpares;
