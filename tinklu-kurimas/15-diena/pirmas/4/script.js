function findType(argument) {
  return typeof argument;
}

console.log(findType("Jurgis"));
console.log(findType(42));
console.log(findType(true));
console.log(findType({}));
console.log(findType(null));
console.log(findType(undefined));
console.log(findType(function () {}));
