/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

function timeConvert(minutes) {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;

  return `${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;
}

console.log(timeConvert(200));
