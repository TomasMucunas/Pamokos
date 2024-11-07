const form = document.getElementById("form1");
const resultElement = document.getElementById("sum");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstNumber = parseFloat(form.firstNumber.value);
  const secondNumber = parseFloat(form.secondNumber.value);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultElement.textContent = "Please enter valid numbers.";
  } else {
    const sum = firstNumber + secondNumber;
    resultElement.textContent = sum;
  }
});
