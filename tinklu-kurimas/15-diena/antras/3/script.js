function max(arr) {
  if (arr.length === 0) {
    return null;
  }

  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return maxNum;
}

const numbers = [1, 5, 10, 9, 4, 1];
console.log(max(numbers)); // 10
