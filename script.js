class Hero {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
  attack() {
    let ranNum = Math.random();
    FighterHub(`Player Fires at Enemy`);
    if (ranNum < this.accuracy) {
      FighterHub(`You Hit Enemy Ship!`);
      currentAlien.hull = currentAlien.hull - this.firepower;
      FighterHub(`currentAlien has ${currentAlien.hull} hull points left.`);
      if (currentAlien.hull <= 0) {
        FighterHub(`The Enemy Ship is NoMore!!`);
      }
    } else {
      FighterHub(`We missed the enemy!`);
    }
  }
}

class Alien {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
  attack() {
    let ranNum = Math.random();
    FighterHub(`Enemy Fires back at You`);
    if (ranNum < this.accuracy) {
      FighterHub(`Enemy Hit My ship!`);
      player1.hull = player1.hull - this.firepower;
      FighterHub(`Player has ${player1.hull} hull points left.`);
      if (player1.hull <= 0) {
        FighterHub(`Enemy Destoyed My Ship!!`);
      }
    } else {
      FighterHub(`You Dodged Enemy Missles!`);
    }
  }
}

let player1 = new Hero("hero1", 20, 5, 0.7);

const setRandomNum = (min, max) => {
  let random = Math.floor(Math.random(max - min));
};

let alien = new Alien("Jiren");
let alien2 = new Alien("Lord Beerus");
let alien3 = new Alien("Whis");
let alien4 = new Alien("Cell");
let alien5 = new Alien("Frieza");
let alien6 = new Alien("Majin Buu");

let count = 0;

let aliengroup = [alien, alien2, alien3, alien4, alien5, alien6];

let currentAlien = aliengroup[count];

const switchalien = function () {
  if (aliengroup.length > 0) {
    aliengroup.shift();
  }
};
if (aliengroup.length === 0) {
}

let round = 0;

const changeRound = () => {
  round += 1;
};

const showRound = () => {
  let gameround = document.querySelector(".roundClock");
  gameround.innerHTML = round;
};
showRound();

let popup = document.querySelector("#popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

let playerstats = document.querySelector("#playerStats");
playerstats.innerText = `Player Firepower ${player1.firepower}\n Player Health ${player1.hull}`;

let enemystats = document.querySelector("#enemyStats");
enemystats.innerText = `Alien Firepower ${currentAlien.firepower}\n Alien Health ${currentAlien.hull}`;

const Fighterinfo = document.querySelector(".FighterHub");

function FighterHub(newtext) {
  const text = document.createElement("p");
  text.classList.add("updates")
  text.textContent = newtext;
  Fighterinfo.appendChild(text);
}

const battle = () => {
  if (player1.hull > 0 && currentAlien.hull > 0) {
    player1.attack();
    if (currentAlien.hull < 1) {
      count++;
      currentAlien = aliengroup[count];
      enemystats.innerText = `Alien Firepower ${currentAlien.firepower}\n Alien Health ${currentAlien.hull}`;
      FighterHub(currentAlien.name);
    } else {
      currentAlien.attack();
      playerstats.innerText = `Player Firepower ${player1.firepower}\n Player Health ${player1.hull}`;
    }
  }
};

const button = document.querySelector(".Getem");

button.addEventListener("click", (e) => {
  if (round < 6) {
    battle(player1, aliengroup);
    changeRound();
    document.querySelector(".roundClock").innerHTML = round;
  }
});
