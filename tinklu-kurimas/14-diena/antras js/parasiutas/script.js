
let height = parseFloat(prompt("Iš kokio aukščio šoka parašiutininkas?"));
let timeToOpen = parseFloat(prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?"));
const g = 9.8;


let fallTime = Math.sqrt((2 * height) / g);

if (timeToOpen <= fallTime) {
    console.log("Parašiutas išsiskleis");
} else {
    console.log("Parašiutas neišsiskleis");
}