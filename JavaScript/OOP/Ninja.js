class Ninja {
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(`${this.name} has ${this.speed} speed, ${this.strength} strength, and ${this.health} health`)
    }
    drinkSake(){
        this.health += 10
        console.log(`Sake Power Up! Health now at ${this.health}`)
    }
}

const Ninja1 = new Ninja("Lydell", 90)

// console.log(Ninja1.health)
Ninja1.drinkSake()