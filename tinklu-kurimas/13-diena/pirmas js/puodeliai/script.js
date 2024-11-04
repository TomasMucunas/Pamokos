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

var puodeliųSkaičius = parseInt(
  prompt("Puodelių, kuriuos reikia supakuoti, skaičius:")
);
var puodeliaiPerDėžutę = 3;
var pilnųDėžiųSkaičius = Math.floor(puodeliųSkaičius / puodeliaiPerDėžutę);
var nesupakuotųPuodeliųSkaičius = puodeliųSkaičius % puodeliaiPerDėžutę;

alert(
  "Pilnų dėžučių skaičius: " + pilnųDėžiųSkaičius + "\nNesupakuotų puodelių skaičius: " + nesupakuotųPuodeliųSkaičius
);
