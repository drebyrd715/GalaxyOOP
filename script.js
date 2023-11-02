let heroShip = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log('Accuracy is ${ranNum}');
        if (ranNum < this.accuracy) {
            console.log('Got em');
            target.hull = target.hull - this.firepower;
            console.log('alien has ${target.hull} hull points left.');
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log('Alien ship is NoMore');

            }
        } else {
            console.log('We missed!');
        }
    }
}
let alienShip = {
    hull:((Math.random() * (6 - 3)) + 3),
    firepower: Math.round((Math.random() * (4 - 2)) + 2),
    accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
    isAlive: true,
    attack(target) {
        let ranNum = Math.random();
        console.log('Accuracy is ${ranNum}');
        if (ranNum < this.accuracy) {
            console.log('You have been hit!');
            target.hull = target.hull - this.firepower;
            console.log('hero has ${target.hull} hull points left.');
            if (target.hull <= 0) {
                target.isAlive = false;
                console.log('We have been hit');

            }
        } else {
            console.log("We escaped the attack");
        }
    }
}
let battle = (player, computer) => {
    while (player.isAlive && computer.isAlive) {
        player.attack(computer);
        if (computer.isAlive) {
            computer.attack(player);
        }
    }
}