
function integers(arr) {
  
  let integerNumbers = [];

 
  for (let i = 0; i < arr.length; i++) {
      
      if (Number.isInteger(arr[i])) {
          integerNumbers.push(arr[i]); 
      }
  }


  return integerNumbers;
}

console.log(integers([3.14, 2.4, 7, 8.1, 2]));
console.log(integers([1, 2, 3]));
console.log(integers([4.5, 6.6, 1.0]));
console.log(integers([]));