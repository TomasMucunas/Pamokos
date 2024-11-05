let pazymiai = prompt("Kokius pažymius gavo Petriukas?");

let pazymiaiMasyvas = pazymiai.split(" ");

let pazymiaiNumeriai = [];
for (let i = 0; i < pazymiaiMasyvas.length; i++) {
  pazymiaiNumeriai.push(Number(pazymiaiMasyvas[i]));
}

let suma = 0;
for (let i = 0; i < pazymiaiNumeriai.length; i++) {
  suma += pazymiaiNumeriai[i];
}

let vidurkis = suma / pazymiaiNumeriai.length;

let saldainiai;
if (vidurkis > 9) {
  saldainiai = 3;
} else if (vidurkis >= 7) {
  saldainiai = 2;
} else {
  saldainiai = 1;
}

console.log(`Petriukas gaus ${saldainiai} saldainių`);
