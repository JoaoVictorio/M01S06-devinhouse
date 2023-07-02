function calculaMedia(array) {
  const soma = array.reduce((total, num) => total + num, 0);
  return soma / array.length;
}

module.exports = calculaMedia;