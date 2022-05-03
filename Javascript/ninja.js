class Ninja {
    constructor(name, health){
        this.name=name;
        this.health=10;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(`Name is ${this.name}`);
    }
    showStats(){
        console.log(`Name:    ${this.name}`);
        console.log(`Health:  ${this.health}`);
        console.log(`Speed:   ${this.speed}`);
        console.log(`Stength: ${this.strength}`);
        return this;
    }
    drinkSake() {
        console.log(`${this.name} drank sake.`);
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200);
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("2+2=4");
        console.log(`${this.wisdom}`)
    }
}
// example:
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


