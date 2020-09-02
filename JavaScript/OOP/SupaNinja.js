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

class Sensei extends Ninja {
    constructor(name){
        super(name, 200)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log(`the more you drink, the wiser you become - ${this.name}`)
    }
}

const master = new Sensei("Lydell")
master.speakWisdom()
master.showStats()