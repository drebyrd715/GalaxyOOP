

class Hero {
   constructor(){
    this.hull= 20
    this.firepower= 5
    this.accuracy= .7
    this.isAlive= true
}

    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`Got em!`);
            this.hull = this.hull - this.firepower;
            console.log(`alien has ${this.hull} hull points left.`);
            if (this.hull <= 0) {
                this.isAlive = false;
                console.log(`Alien ship is NoMore!!`);

            }
        } else {
            console.log(`We missed!`);
        }
    }
}
let hero1 = new Hero ()
hero1.attack()
console.log(hero1)

let alien = {

    hull: Math.round((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log(`Accuracy is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`Gotcha!`);
            alien.hull = alien.hull - hero1.firepower;
            console.log(`hero has ${target.hull} hull points left.`);
            if (alien.hull <= 0) {
                alien.isAlive = false;
                console.log(`You have died, hahaha!`);

            }
        } else {
            console.log(`You dodged the attack!`);
        }
    }
}
console.log(alien)

let battle = (player, computer) => {
    while (player.isAlive && computer.isAlive) {
        player.attack(computer);
        if (computer.isAlive) {
            computer.attack(player);
        }
    }
}
const button= document.querySelector(".Getem")
button.addEventListener("click", e => {
    hero1.attack()
})