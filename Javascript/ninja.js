class Ninja {
    constructor(name, health, speed, strength){
        this.name;
        this.health;
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
// example:
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

