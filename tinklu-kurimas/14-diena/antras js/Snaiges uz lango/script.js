function calculateSnowflakes(initialSnowflakes, seconds) {
  let totalSnowflakes = 0;
  let currentSnowflakes = initialSnowflakes;

  for (let i = 0; i < seconds; i++) {
    totalSnowflakes += currentSnowflakes;
    currentSnowflakes *= 2;
  }

  return totalSnowflakes;
}

for (let i = 0; i < 2; i++) {
  let input = prompt(
    "Įveskite, kiek snaigių nukrito per pirmąją sekundę ir kiek sekundžių snigo:"
  );
  
}
