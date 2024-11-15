/*
Write a JavaScript function to remove specified number of characters from a string. 
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
*/

function truncate_string(input, num) {
  return input.slice(0, input.length - num);
}

console.log(truncate_string("Robin Singh", 4)); // Robin S
