
//////////////// Create Hero Class /////////////

class Hero {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = 0.7;
    }
    attack() {
      let ranNum = Math.random();
      console.log(`Accuracy is ${ranNum}`);
      if (ranNum < this.accuracy) {
        console.log(`Hit enemy ship!`);
        alien.hull = alien.hull - this.firepower;
        console.log(`alien has ${alien.hull} hull points left.`);
        if (alien.hull <= 0) {
          console.log(`Alien ship is NoMore!!`);
        }
      } else {
        console.log(`We missed enemy!`);
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
      console.log(`Accuracy is ${ranNum}`);
      if (ranNum < this.accuracy) {
        console.log(`Hit My ship!`);
        player1.hull = player1.hull - this.firepower;
        console.log(`hero has ${player1.hull} hull points left.`);
        if (player1.hull <= 0) {
          console.log(`Destoyed My Ship!!`);
        }
      } else {
        console.log(`Dodged alien missles!`);
      }
    }
  }
 
let player1 = new Hero ("hero1", 20, 5, .7)

const setRandomNum = (min,max)=>{
    let random =
    Math.floor(Math.random( max - min))
}

 let alien = new Alien("Jiren")
 let alien2 = new Alien("Lord Beerus")
 let alien3 = new Alien("Whis")
 let alien4 = new Alien("Cell")
 let alien5 = new Alien("Frieza")
 let alien6 = new Alien("Majin Buu")


let count = 0;
let aliengroup = [alien, alien2, alien3, alien4, alien5]

let currentAlien = aliengroup[count]
const switchAlien= (array) =>{
        count++
        currentAlien= array[count]
}

let round = 0;

const changeRound = () =>{
    round += 1;
}
// changeRound()

const showRound = () =>{
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
 
let playerstats= document.querySelector("#playerStats");
playerstats.innerText= `Player Firepower ${player1.firepower}\n Player Health ${player1.hull}`

let enemystats= document.querySelector("#enemyStats");
enemystats.innerText= `Alien Firepower ${currentAlien.firepower}\n Alien Health ${currentAlien.hull}`

const battle = (player1, array) => {
    if (player1.hull > 0 && currentAlien.hull > 0) {
      player1.attack(currentAlien);
      if (currentAlien.hull < 1) {
        console.log("alien has been destroyed");
        switchAlien(array)
        console.log(currentAlien.name);
        return;
      } else {
        currentAlien.attack();
      }
    }
  };
  const button = document.querySelector(".Getem");
   
  button.addEventListener("click", (e) => {
    if (round < 6){
        battle(player1, aliengroup);
        changeRound();
        document.querySelector(".roundClock").innerHTML= round;    
    }
    }
  );
