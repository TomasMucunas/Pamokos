/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/

function date_diff_indays(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const differenceInMilliseconds = endDate - startDate;

  return differenceInMilliseconds / (1000 * 60 * 60 * 24);
}

console.log(date_diff_indays("04/02/2014", "11/04/2014"));
console.log(date_diff_indays("12/02/2014", "11/04/2014"));
