let steps = parseInt(prompt("Įveskite žingsnių kiekį iki mokyklos:"));

let claps = 0;
let snaps = 0;

for (let i = 1; i <= steps; i++) {
  if (i % 10 === 0) {
    claps++;
  }
  if (i % 5 === 0) {
    snaps++;
  }
}

snaps -= claps;

alert("Suplojimų bus: " + claps);
alert("Spragtelėjimų bus: " + snaps);
