function evens(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

console.log(evens([1, 2, 4, 3, 8])); // [2, 4, 8]
console.log(evens([5, 11, 3])); //
console.log(evens([2, 4, 6, 8])); // [2, 4, 6, 8]
console.log(evens([])); //
