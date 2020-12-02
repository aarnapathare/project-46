class Rocket {
    constructor(x,y){
       var options={
           isStatic:true,
           restitution:0.3,
           friction:1,
           density:1
       } 
       this.body = Bodies.circle(x, y, 50, options)
       this.Radius = 50
       this.image = loadImage("images/rocket.png")
       World.add(world, this.body)
  
    }
    display(){
      
  push();
  translate(this.body.position.x, this.body.position.y)
       ellipseMode(RADIUS)
       imageMode(CENTER)
    image(this.image, 0,0,this.Radius, this.Radius)
  pop();

 
    }
    
  }
  
  