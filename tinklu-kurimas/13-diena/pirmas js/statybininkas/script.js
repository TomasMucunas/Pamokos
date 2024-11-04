// function calculateLessons() {
//     const lessons = [
//         parseInt(prompt("Pirmadienio pamokų skaičius:")) || 0,
//         parseInt(prompt("Antradienio pamokų skaičius:")) || 0,
//         parseInt(prompt("Trečiadienio pamokų skaičius:")) || 0,
//         parseInt(prompt("Ketvirtadienio pamokų skaičius:")) || 0,
//         parseInt(prompt("Penktadienio pamokų skaičius:")) || 0,
//     ];

//     const totalLessons = lessons.reduce((a, b) => a + b, 0);
//     const totalMinutes = totalLessons * 45;

//     alert(`Pamokų skaičius: ${totalLessons}\nTai sudaro minučių: ${totalMinutes}`);
// }

// calculateLessons();

// const lessons = [
//     parseInt(prompt("Pirmadienio pamokų skaičius:")) || 0,
//     parseInt(prompt("Antradienio pamokų skaičius:")) || 0,
//     parseInt(prompt("Trečiadienio pamokų skaičius:")) || 0,
//     parseInt(prompt("Ketvirtadienio pamokų skaičius:")) || 0,
//     parseInt(prompt("Penktadienio pamokų skaičius:")) || 0,
// ];


var a = parseInt(prompt("Sienos ilgis:"));
var h = parseInt(prompt("Sienos aukstis:"));
var k = parseFloat(prompt("Plytos kaina:"));

var plytosIlgisM = 0.2;
var plytosAukštisM = 0.1;

var sienaPlotas = a * h;
var plytosPlotas = plytosIlgisM * plytosAukštisM;

var plytųKiekis = Math.ceil(sienaPlotas / plytosPlotas);
var bendrosPlytųKainos = plytųKiekis * k;

alert(`Plytų kiekis: ${plytųKiekis}\nPlytos kainuos: ${bendrosPlytųKainos.toFixed(2)} Lt`);