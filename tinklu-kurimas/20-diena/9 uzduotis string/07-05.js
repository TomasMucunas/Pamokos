/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/

function abbrev_name(input) {
    
    var words = input.split(' ');
    
    return words[0] + ' ' + words[1][0] + '.';
}


console.log(abbrev_name("Robin Singh"));