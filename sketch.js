const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var ground;
var division1,division2,division3;
var division4,division5,division6;
var division7,division8,division9;
var world,engine;
var p;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.update(engine);
  
  ground = new Ground();
  
  p = new Particles(300,50,10);
  particles.push(p);


 for(var k = 0;k <= width; k = k+80){
   division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));

   for(var j = 40; j <= width; j=j+50){
     plinkos.push(new Plinko(j,75));
   }

   for(var j = 15; j <= width-10; j=j+50){
     plinkos.push(new Plinko(j,175));
   }
   
 }
}

function draw() {
  background(255,255,255); 
  
  ground.display();
  p.display();

  drawSprites();
}
