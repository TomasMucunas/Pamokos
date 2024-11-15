/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
*/

function swapcase(str) {
  var swappedStr = "";

  for (var i = 0; i < str.length; i++) {
    var char = str.charAt(i);

    if (char === char.toUpperCase()) {
      swappedStr += char.toLowerCase();
    } else {
      swappedStr += char.toUpperCase();
    }
  }
  return swappedStr;
}

console.log(swapcase("AaBbc"));
