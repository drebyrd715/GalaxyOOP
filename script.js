

class Hero {
   constructor(name, hull, firepower, accuracy,){
    this.name= name
    this.hull= 20
    this.firepower= 5
    this.accuracy= .7
    this.attack= () =>{
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
}
let player1 = new Hero ("hero1", 20, 5, .7)

    class Alien {
        constructor(name, hull, firepower, accuracy){
         this.name= "name"
         this.hull= Math.floor(Math.random() * 4) + 3;
         this.firepower= Math.floor(Math.random() * 3) + 2;
         this.accuracy= (Math.floor(Math.random() * 3) + 6) /10;
         this.attack= () =>{
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
    }
    
const setRandomNum = (min,max)=>{
    let random =
    Math.floor(Math.random( max - min))
}

 let alien = new Alien("Jiren",setRandomNum(3,6),setRandomNum(2,4),setRandomNum(0.6,0.8))
 let alien2 = new Alien("Lord Beerus",setRandomNum(3,6),setRandomNum(2,4),setRandomNum(0.6,0.8))
 let alien3 = new Alien("Whis",setRandomNum(3,6),setRandomNum(2,4),setRandomNum(0.6,0.8))
 let alien4 = new Alien("Cell",setRandomNum(3,6),setRandomNum(2,4),setRandomNum(0.6,0.8))
 let alien5 = new Alien("Frieza",setRandomNum(3,6),setRandomNum(2,4), setRandomNum(0.6,0.8))
 let alien6 = new Alien("Majin Buu",setRandomNum(3,6),setRandomNum(2,4),setRandomNum(0.6,0.8))


let count = 0;
let aliengroup = [alien, alien2, alien3, alien4, alien5, alien6]

let currentAlien = aliengroup[count]
const switchAlien= () =>{
        count++
        currentAlien= aliengroup[count]
}

let round = 0;

const changeRound = () =>{
    round += 1;
}

const showRound = () =>{
    let gameround = document.querySelector(".roundClock");
    gameround.innerHTML = round;
};
showRound();

// const displayshipInfo = () =>{
//     player1.innerHTML = ussAssembly.hull;
// };

// const displayenemyInfo = () =>{
//     player1.innerHTML = ussAssembly.hull;
// };

let popup = document.querySelector("#popup");

function openPopup() {
popup.classList.add("open-popup");
}
function closePopup() {
popup.classList.remove("open-popup");
}
 
const playerstats= document.querySelector("#playerStats");
playerstats.innerText= `Player Firepower ${player1.firepower}\n Alien Health ${player1.hull}`

const enemystats= document.querySelector("#enemyStats");
enemystats.innerText= `Alien Firepower ${currentAlien.firepower}\n Alien Health ${currentAlien.hull}`




        



const battle = (hero, alien) => {
    while (player1.hull > 0 && alien.hull > 0) {
        player1.attack(currentAlien);
         if (currentAlien.hull > 0) {
             currentAlien.attack(player1);
        } else {
            switchAlien()
        }
    }
}
const button= document.querySelector(".Getem")
button.addEventListener("click", e => {
    for (const alien of aliengroup){
    battle (player1, currentAlien)
    }
})

const retreat = document.querySelector(".buttin")
retreat.addEventListener("click",() =>{
retreat.textContent = "GAME IS OVER"
})



