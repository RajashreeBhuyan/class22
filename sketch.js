const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;
var options;
var option1;

function setup() {
  createCanvas(400,400);
 option1 = {
   restitution:1
 }

  options = {
isStatic:true
  }
engine =  Engine.create();
world = engine.world;
ground = Bodies.rectangle(100,390,200,20,options);
World.add(world,ground);
ball = Bodies.circle(200,100,20,option1);
World.add(world,ball);




}

function draw() {
  background(0);  
Engine.update(engine);
rect(ground.position.x,ground.position.y,200,20);
ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}