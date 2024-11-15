/*
Write a JavaScript function to count the number of days passed since beginning of the year.

Test Data :
console.log(days_passed(new Date(2015, 0, 15))); 
15
console.log(days_passed(new Date(2015, 11, 14)));
348
*/

function days_passed(date) {
  let startOfYear = new Date(date.getFullYear(), 0, 1);
  let differenceInTime = date - startOfYear;
  let daysPassed = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  return daysPassed + 1;
}

console.log(days_passed(new Date(2015, 0, 15)));
console.log(days_passed(new Date(2015, 11, 14)));
