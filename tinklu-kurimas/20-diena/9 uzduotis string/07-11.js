/*
 Write a JavaScript function to convert a string into camel case.
Test Data :
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises"
"JavaScriptExercises"
"JavaScriptExercises"
*/

function camelize(str) {
  var words = str.split(" ");
  var camelCaseStr = "";

  for (var i = 0; i < words.length; i++) {
    camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return camelCaseStr;
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
