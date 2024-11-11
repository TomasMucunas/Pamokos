function sumOfPositiveInputs() {
    let sum = 0;
    while (true) {
        const input = parseInt(prompt("Įveskite skaičių (neigiamas skaičius nutrauks):"), 10);
        if (input < 0) {
            console.log("Suma:", sum);
            break;
        } else {
            sum += input;
        }
    }
}

sumOfPositiveInputs();