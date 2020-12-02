class Circles {
    constructor(x, y, r){
        var options={
            isStatic: false,
            restituition:10,
            friction:5,
           density:0.0001
        }
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();

//         if(Circles.isTouching(rocket)){
// text("You Lost :(", 200, 50)
//         }
    }

    
}
