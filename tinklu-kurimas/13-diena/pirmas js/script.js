function calculate() {
    const lessons = [
        parseInt(document.getElementById("day1").value) || 0,
        parseInt(document.getElementById("day2").value) || 0,
        parseInt(document.getElementById("day3").value) || 0,
        parseInt(document.getElementById("day4").value) || 0,
        parseInt(document.getElementById("day5").value) || 0
    ];
    
    const totalLessons = lessons.reduce((a, b) => a + b, 0);
    const totalMinutes = totalLessons * 45;
    
    document.getElementById("output").innerHTML = `Pamokų skaičius: ${totalLessons}<br> Tai sudaro minučių: ${totalMinutes}`;
}