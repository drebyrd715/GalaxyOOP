

class Hero {
   constructor(){
    this.hull= 20
    this.firepower= 5
    this.accuracy= .7

}

    attack(alien) {
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
let player1 = new Hero ()
// player1.attack()
// console.log(player1)

    class Alien {
        constructor(){
            for (let i = 0; i < 6; i++) {
         this.hull= Math.floor(Math.random() * 4) + 3;
         this.firepower= Math.floor(Math.random() * 3) + 2;
         this.accuracy= (Math.floor(Math.random() * 3) + 6) /10;
            }
     }  
    attack(hero) {
        let ranNum = Math.random();
        console.log(`Accuracy is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`shot hero ship!`);
            hero.hull = hero.hull - this.firepower;
            console.log(`hero has ${hero.hull} hull points left.`);
            if (hero.hull <= 0) {
                console.log(`You have died, hahaha!`);

            }
        } else {
            console.log(`hero dodged the attack!`);
        }
    }   
}
let alien1 = new Alien ()

let aliengroup = []
for (i = 0; i < 6; i++) {
    aliengroup.push(new Alien('alien${i}',0, 0, 0))
}
console.log(aliengroup)
let count = 0
let currentAlien = aliengroup[""]

let battle = (hero, alien) => {
    while (player1.hull > 0 && alien.hull > 0) {
        hero.attack(alien);
         if (alien.hull > 0) {
             alien.attack(hero);
        }
    }
}
const button= document.querySelector(".Getem")
button.addEventListener("click", e => {
    battle(player1, alien1)
})
    

// const showRound= () => {
    
// }
// showRound()

// const displayHeroinfo= () => {


// }