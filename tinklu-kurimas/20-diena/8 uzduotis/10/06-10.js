/*
Write a JavaScript function to calculate 'yesterday day'.

Test Data :
console.log(yesterday('Nov 15, 2014')); 
console.log(yesterday('Nov 16, 2015')); 
console.log(yesterday('Nov 17, 2016'));
Output :
"Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"
"Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)" 
"Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"
*/

function yesterday(dateString) {
  const date = new Date(dateString);

  const yesterdayDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);

  return yesterdayDate;
}

console.log(yesterday("Nov 15, 2014"));
console.log(yesterday("Nov 16, 2015"));
console.log(yesterday("Nov 17, 2016"));
