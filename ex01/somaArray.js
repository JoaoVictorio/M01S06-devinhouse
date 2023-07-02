function somaArray(array) {
  return array.reduce((total, num) => total + num, 0);
}

module.exports = somaArray;