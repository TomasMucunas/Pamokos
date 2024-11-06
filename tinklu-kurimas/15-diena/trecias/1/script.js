function product(arr) {
  return arr.reduce((accumulator, current) => accumulator * current, 1);
}

console.log(product([2, 4, 6])); // 48
console.log(product([-10, 10])); // -100
