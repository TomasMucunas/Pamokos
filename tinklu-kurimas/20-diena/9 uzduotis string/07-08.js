/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/

function capitalize(str) {
  if (str.length === 0) {
    return str;
  }

  var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalizedStr;
}

console.log(capitalize("js string exercises"));
