/*
Write a JavaScript function to get the minimum date from an array of dates. 

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
*/

function min_date(dates) {
  let minDate = dates[0];

  for (let i = 1; i < dates.length; i++) {
    if (dates[i] < minDate) {
      minDate = dates[i];
    }
  }

  return minDate;
}

console.log(min_date(["2015/02/01", "2015/02/02", "2015/01/03"]));
