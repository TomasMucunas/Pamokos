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

const pirmadienis = parseInt(prompt("Pirmadienio pamokų skaičius:"));
const antradienis = parseInt(prompt("Antradienio pamokų skaičius:"));
const treciadienis = parseInt(prompt("Trečiadienio pamokų skaičius:"));
const ketvirtadienis = parseInt(prompt("Ketvirtadienio pamokų skaičius:"));
const penktadienis = parseInt(prompt("Penktadienio pamokų skaičius:"));

const totalLessons = pirmadienis + antradienis + treciadienis + ketvirtadienis + penktadienis;
const totalMinutes = totalLessons * 45;

alert(`Pamokų skaičius: ${totalLessons}\nTai sudaro minučių: ${totalMinutes}`);