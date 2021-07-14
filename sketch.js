
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    //Physics engine is going to create a world 
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,150,50,50);
    box2 = new Box(120,200,50,100);
    ground1 = new Ground(200,height,400,20);

    

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    
    box1.display();
    box2.display();
    ground1.display();
    

   
}