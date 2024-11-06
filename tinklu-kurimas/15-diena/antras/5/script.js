function allPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      return false;
    }
  }
  return true;
}

console.log(allPositive([1, 2, 3, 4, 5])); // true
console.log(allPositive([1, 2, -3, 4, 5])); // false
console.log(allPositive([0, 0, 1])); // false
