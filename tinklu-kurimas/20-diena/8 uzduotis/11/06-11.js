/*
 Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/

function max_date(dates) {
  let maxDate = dates[0];

  for (let i = 1; i < dates.length; i++) {
    if (dates[i] > maxDate) {
      maxDate = dates[i];
    }
  }

  return maxDate;
}

console.log(max_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
