
let varleSvoris = parseFloat(prompt("Kiek sveria varlė?"));

let varliuSkaicius = parseInt(prompt("Kiek varlių norima stebėti?"));


let bendraSvoris = (varleSvoris * varliuSkaicius) / 1000; 

if (bendraSvoris > 5) {
    console.log("Varlių stebėjimui pakanka");
} else {
    console.log("Varlių stebėjimui per mažai");
}