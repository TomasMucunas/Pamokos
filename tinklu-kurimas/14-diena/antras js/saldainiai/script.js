let visoSaldainiu = parseInt(prompt("Petriukas gavo saldainių:"));

let likusiosSaldainiai = visoSaldainiu;
let dienos = 0;

for (; likusiosSaldainiai > 0; dienos++) {
  let suvalgyta = parseInt(prompt("Per dieną suvalgė:"));

  if (suvalgyta > likusiosSaldainiai) {
    alert("Neužtenka saldainių! Liko " + likusiosSaldainiai + " saldainių.");
    break;
  }

  likusiosSaldainiai -= suvalgyta;
}

alert(
  `Petriukui saldainių užteks ${dienos} dienoms ir jam liks ${likusiosSaldainiai} saldainių.`
);