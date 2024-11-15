/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

function protect_email(email) {
  var atIndex = email.indexOf("@");

  var protectedPart = email.slice(0, 5) + "..." + email.slice(atIndex);
  return protectedPart;
}

console.log(protect_email("robin_singh@example.com"));
