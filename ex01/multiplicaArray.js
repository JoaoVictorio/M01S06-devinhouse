function multiplicaArray(array) {
  return array.reduce((total, num) => total * num, 1);
}

module.exports = multiplicaArray;
