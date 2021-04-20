class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    toString(){
        return `le point a pour coordonnées (${this.x},${this.y})`
    }
}

let p = new Point(2,3);
console.log(p.toString());

p.setX(4);

console.log(p.toString());

module.exports = Point; //heritage
