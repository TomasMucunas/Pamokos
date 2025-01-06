class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} gavo ${damage} žalos vienetų`;
    } else {
      return `${this.name} žuvo mūšyje`;
    }
  }

  battleCry() {
    return "Odinui priklauso jūs visi!";
  }
}

class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `Saxon gavo ${damage} žalos vienetų`;
    } else {
      return `Saxon žuvo mūšyje`;
    }
  }
}

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon !== randomSaxon);
    }

    return result;
  }

  saxonAttack() {
    const randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter(
        (viking) => viking !== randomViking
      );
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikingai laimėjo šimtmečio karą!";
    } else if (this.vikingArmy.length === 0) {
      return "Saksonai kovojo už savo gyvybes ir išgyveno dar vieną dieną...";
    } else {
      return "Vikingai ir saksai vis dar yra mūšio įkarštyje.";
    }
  }
}

const war = new War();
const viking1 = new Viking("Ragnar", 50, 50);
const viking2 = new Viking("Saxon", 100, 40);
const saxon1 = new Saxon(60, 30);
const saxon2 = new Saxon(50, 20);

war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());
