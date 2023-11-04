

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
                console.log(`Hit hero ship!`);
                Hero.hull = Hero.hull - this.firepower;
                console.log(`alien has ${Hero.hull} hull points left.`);
                if (Hero.hull <= 0) {
    
                    console.log(`Destoyed Hero Ship!!`);
    
                }
            } else {
                console.log(`Dodged alien missles !`);
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
// for (i = 0; i < 6; i++) {
//     // aliengroup.push(new Alien('alien${i}',0, 0, 0))
// }
let currentAlien = aliengroup[count]
const switchAlien= () =>{
    count++
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

const displayshipInfo = () =>{
    player1.innerHTML = ussAssembly.hull;
};

const displayenemyInfo = () =>{
    player1.innerHTML = ussAssembly.hull;
};




        








const battle = (hero, alien) => {
    while (player1.hull > 0 && alien.hull > 0) {
        player1.attack(currentAlien);
         if (currentAlien.hull > 0) {
             currentAlien.attack(hero);
        } else {
            switchAlien()
        }
    }
}
const button= document.querySelector(".Getem")
button.addEventListener("click", e => {
    for (const alien of aliengroup.slice()) {
         battle (player1, currentAlien)
         aliengroup.shift()
         console.log(aliengroup)
    }
})

// const retreat = document.querySelector("button")
// retreat.addEventListener("click",() =>{
// retreat.textContent = "GAME IS OVER"
// })



