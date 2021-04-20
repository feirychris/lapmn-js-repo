const Point = require('./exo5') //heritage

class Circle extends Point{
    constructor(x, y, radius){
        super(x,y);
        this.radius = radius;
    }

    area(){
        return (Math.PI * Math.pow(this.radius,2)).toFixed(2);
        //mathround
    }

    containsPoint(Point){
        if(((Point.x - this.x)^2 + (Point.y - this.y)^2) < this.radius^2){
            return true;
        } else{
            false;
        }
    }

    toString(){
        return `le cercle a pour rayon ${this.radius}`;
    }

}

let cir = new Circle(4,4,2);
let p = new Point(3,2);

console.log(cir.containsPoint(p));
console.log(cir.area());