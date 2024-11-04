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

const tunelioIlgis = 264;
const greitisKmH = parseFloat(prompt("Koks automobilio greitis (km/h)?"));

const greitisMSS = (greitisKmH * 1000) / 3600;

const laikasSekundemis = tunelioIlgis / greitisMSS;

alert(`Automobilis tunelį pravažiuos per ${laikasSekundemis.toFixed(2)} s`);
