document.getElementById("calculate").addEventListener("click", function() {
    const P = parseFloat(document.getElementById("amount").value);
    const R = parseFloat(document.getElementById("rate").value);
    const T = parseFloat(document.getElementById("time").value);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
        document.getElementById("result").textContent = "Įveskite teisingus skaičius.";
        return;
    }

    const simpleInterest = (P * R * T) / 100;
    document.getElementById("result").textContent = `Rezultatas: ${simpleInterest} (Palūkanos)`;
});