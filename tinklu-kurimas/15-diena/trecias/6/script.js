function odds(arr) {
  let oddNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    }
  }

  return oddNumbers;
}

console.log(odds([1, 2, 4, 3, 8])); // [1, 3]
console.log(odds([2, 4, 6]));
console.log(odds([5, 10, 15, 20])); // [5, 15]
console.log(odds([]));
