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

const pradineZuvis = parseInt(prompt("Kiek žuvų gyvena akvariume?"));
const kasdienPapildoma = parseInt(prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?"));
const dienosPraejo = parseInt(prompt("Kiek dienų praėjo?"));

const visoZuviu = pradineZuvis + (kasdienPapildoma * dienosPraejo);

alert(`Po ${dienosPraejo} dienų akvariume gyvens ${visoZuviu} žuvų.`);

