/*
Write a JavaScript function to uncamelize a string. 
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
*/

function uncamelize(str, separator = " ") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (char === char.toUpperCase() && i > 0) {
      result += separator + char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
}

console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
