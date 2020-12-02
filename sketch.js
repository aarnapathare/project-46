var backIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint

var gameState = 0;

function preload()
{
backIMG = loadImage("images/backIMG.jpg")
}

function setup() {
  createCanvas(1200, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  rocket = new Rocket(600,630,20,20)  
ground = new Ground(600,675,1200,20)
 
circles1 = new Circles(200,20,10)
circles1.velocityX = 10
circles2 = new Circles(250,50,10)
circles3 = new Circles(300,30,10)
circles4 = new Circles(450,10,10)
circles5 = new Circles(150,60,10)
circles6 = new Circles(350,55,10)
circles7 = new Circles(420,30,10)
circles8 = new Circles(175,40,10)
circles9 = new Circles(220,20,10)
circles10 = new Circles(700,30,10)
circles11 = new Circles(655,60,10)
circles12 = new Circles(455,70,10)
circles13 = new Circles(573,80,10)
circles14 = new Circles(680,20,10)
circles15 = new Circles(432,30,10)
circles16 = new Circles(700,50,10)
circles17 = new Circles(250,20,10)
circles18 = new Circles(180,50,10)
circles19 = new Circles(335,70,10)
circles20 = new Circles(684,90,10)
circles21 = new Circles(313,20,10)
circles22 = new Circles(210,40,10)
circles23 = new Circles(559,50,10)
circles24 = new Circles(890,28,10)
circles33 = new Circles(798,100,10)
circles25 = new Circles(1100,70,10)
circles26 = new Circles(735,38,10)
circles27 = new Circles(653,95,10)
circles28 = new Circles(983,60,10)
circles29 = new Circles(758,45,10)
circles30 = new Circles(600,60,10)
circles31 = new Circles(875,20,10)
circles32 = new Circles(900,80,10)
circles34 = new Circles(1200,90,10)
circles35 = new Circles(240,100,10)
circles36 = new Circles(450,120,10)
circles37 = new Circles(600,30,10)
circles38 = new Circles(250,50,10)
circles39 = new Circles(548,65,10)
circles40 = new Circles(750,75,10)
circles41 = new Circles(630,37,10)
circles42 = new Circles(250,50,10)
circles43 = new Circles(874,86,10)
circles44 = new Circles(928,76,10)
circles45 = new Circles(930,46,10)
circles46 = new Circles(1004,56,10)
circles47 = new Circles(564,40,10)

Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(backIMG);


 
  fill("white")
  textSize(20)
   text("Dont Touch The Aesteroids!! ", 100, 50)
    textSize(20)
    text("Press the Up Arrow to Move ", 900, 50)
    
    
    
 
    keyPressed()

  rocket.display()
  ground.display()
  circles1.display()
  circles2.display()
  circles3.display()
  circles4.display()
  circles5.display()
  circles6.display()
  circles7.display()
  circles8.display()
  circles9.display()
  circles10.display()
  circles11.display()
  circles12.display()
  circles13.display()
  circles14.display()
  circles15.display()
  circles16.display()
  circles17.display()
  circles18.display()
  circles19.display()
  circles20.display()
  circles21.display()
  circles22.display()
  circles23.display()
  circles24.display()
  circles25.display()
  circles26.display()
  circles27.display()
  circles28.display()
  circles29.display()
  circles30.display()
  circles31.display()
  circles32.display()
  circles33.display()
  circles34.display()
  circles35.display()
  circles36.display()
  circles37.display()
  circles38.display()
  circles39.display()
  circles40.display()
  circles41.display()
  circles42.display()
  circles43.display()
  circles44.display()
  circles45.display()
  circles46.display()
  circles47.display()
  // circles48.display()
  // circles49.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 38){
    rocket.distance +=10

  }
  if(keyCode === 37){
    rocket.distance +=10
  }
  if(keyCode === 39){
    rocket.distance +=10
  }if(keyCode === 40){
    rocket.distance -=10
  }
}



  

