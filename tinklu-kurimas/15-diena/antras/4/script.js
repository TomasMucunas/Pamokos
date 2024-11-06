function sumNumbers(arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
}

console.log(sumNumbers([1, 4, 8])); // 13
