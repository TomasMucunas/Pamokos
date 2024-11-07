let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;

document.forms["form"].onsubmit = function (event) {
  event.preventDefault();

  let guessedNumber = parseInt(document.getElementById("number").value);

  attempts++;

  if (isNaN(guessedNumber)) {
    document.getElementById("resultText").textContent =
      "Įveskite teisingą numerį.";
  } else if (guessedNumber < randomNumber) {
    document.getElementById("resultText").textContent =
      "Jūsų skaičius yra per mažas. Bandykite dar kartą!";
  } else if (guessedNumber > randomNumber) {
    document.getElementById("resultText").textContent =
      "Jūsų skaičius yra per didelis. Bandykite dar kartą!";
  } else {
    document.getElementById(
      "resultText"
    ).textContent = `Sveikiname! Jūs atspėjote skaičių ${randomNumber} už ${attempts} bandymai!`;

    randomNumber = Math.floor(Math.random() * 101);
    attempts = 0;
  }

  document.getElementById(
    "resultCount"
  ).textContent = `Bandymų skaičius: ${attempts}`;
};
