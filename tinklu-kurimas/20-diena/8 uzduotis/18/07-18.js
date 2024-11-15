/*
Write a JavaScript function to count the occurrence of a substring in a string. 
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1
*/

function count(str, subStr, ignoreCase = true) {
  if (ignoreCase) {
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();
  }
  let count = 0;
  let pos = str.indexOf(subStr);
  while (pos !== -1) {
    count++;
    pos = str.indexOf(subStr, pos + subStr.length);
  }
  return count;
}

console.log(count("The quick brown fox jumps over the lazy dog", "the"));
console.log(count("The quick brown fox jumps over the lazy dog", "fox", false));
