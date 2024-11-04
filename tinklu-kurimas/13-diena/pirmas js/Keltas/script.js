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

var automobiliųSkaičius = parseInt(prompt("Automobilių skaičius:"));
var keltuiTelpa = parseInt(prompt("Į keltą telpa automobilių:"));

var kelimoKartai = Math.floor(automobiliųSkaičius / keltuiTelpa);
var likęAutomobiliai = automobiliųSkaičius % keltuiTelpa;

alert("Perkels per kartų: " + kelimoKartai + "\nLiks neperkelta: " + likęAutomobiliai);