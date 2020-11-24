const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 250;

function setup() {
  createCanvas(490,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,590,width,15,"white");
  leftBorder = new Ground(2.5,height/2,5,height,"brown");
  rightBorder = new Ground(487.5,height/2,5,height,"brown");
  topBorder = new Ground(width/2,5,width,10,"brown");
  bottomBorder = new Ground(width/2,595,width,10,"brown");

  for(var k=5;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+51){
    plinkos.push(new Plinko(j,80));
  }
  for(var j=20;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,140));
  }
  for(var j=40;j<=width;j=j+51){
    plinkos.push(new Plinko(j,200));
  }
  for(var j=20;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,260));
  }
}

function draw(){
  background(0); 
  Engine.update(engine);

  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display()
  }
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display()
  }

  ground.display();
  topBorder.display();
  bottomBorder.display();
  leftBorder.display();
  rightBorder.display();
  
  drawSprites();
}