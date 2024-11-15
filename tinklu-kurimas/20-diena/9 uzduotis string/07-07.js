/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/

function string_parameterize(str) {
  var lowerCaseStr = str.toLowerCase();

  var parameterizedStr = lowerCaseStr.replace(/[^a-z0-9]+/g, "-");

  return parameterizedStr.replace(/^-|-$/g, "");
}

console.log(string_parameterize("Robin Singh from USA."));
