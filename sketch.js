const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball,g2,w1,w2,w3;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    w1 = new Wall(700,370,150,10)
    w2 = new Wall(780,350,10,50)
    w3 = new Wall(620,350,10,50)    
    g2 = new Ground(400,390,900,20)    
    ball = new ball1(20,100,20,20);   
   
}

function draw(){
    background(0);
    Engine.update(engine);
    
     w1.display();
     w2.display();
     w3.display();
     g2.display();
     ball.display();
 
}



