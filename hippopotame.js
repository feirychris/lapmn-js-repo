class Hippotamus{
    constructor(name, weight, tuskSize){
        this.name = name;
        this.weight = weight; // en gramme
        this.tuskSize = tuskSize; // en centimètre
    }

    swim(){
        return this.weight - 300;
    }

    eat(){
        return this.weight + 1000;
    }

    fight(Hippotamus){
        if(this.tuskSize > Hippotamus.tuskSize){
            return `${this.name} a gagné`;
        } else{
            return `${this.name} a perdu`
        }
    }


    toString(){
        return `${this.name} pèse ${this.weight} kg et a une taille de défense de ${this.tuskSize} cm`
    }

    lifeCycle(){
        for(let day = 1; day<22; day++){
            for(let hour = 1; hour<16; hour++){
                for(let i = 0; i<2; i++){
                    this.eat();
                }
                for(let j = 0; j<3; j++){
                    this.swim();
                }
            }
            console.log(`day ${day} -- `);
            this.toString();
        }
    }
}

let hip = new Hippotamus("carlos", 500000, 99);
let hipp = new Hippotamus("joe", 400000,  101);

let chop = hip.eat();
console.log(chop);

let brasse = hipp.swim();
console.log(brasse);

let res = hip.fight(hipp);
console.log(res)

console.log(hipp.lifeCycle())


