class Developer{
    constructor(name){
    this.name = name;
    this.health=100;
    this.belts=0;
    this.brainCells=0;
    this.abilities=[];
    }
    sleep(){
        console.log(this.name+ " is sleeping")
        this.health+=50;
        this.brainCells++;
    }
    completeProject(title){
        console.log(name+ " has completed"+ title)
        this.health-=50
        this.brainCells--;
        this.abilities.push(title)
    }
} 

class SeniorDeveloper extends Developer{
    constructor(name){
        super(name) //calling the constructor of superclass
        this.brainCells = 10;
        
    }
}

const dev1 = new Developer("Heidi")
dev1.sleep();
dev1.completeProject("MERN")
dev1.completeProject("Java")
console.log(dev1)
