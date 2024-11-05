let start = parseInt(prompt("Įveskite intervalo pradžią: "));
let end = parseInt(prompt("Įveskite intervalo pabaigą: "));

let count = 0;


for (let number = start; number <= end; number++) {
  if (number % 6 === 0) {
    count++;
  }
}

alert("Reikalingų marškinėlių skaičius: " + count);
