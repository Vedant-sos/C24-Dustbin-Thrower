
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperball= new Paper(200,300,50);
    ground=new Ground(400,630,800,40);
    dustbin1=new Dustbin(650,605,150,20);
    dustbin2=new Dustbin(575,565,20,100);
    dustbin3=new Dustbin(725,565,20,100);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine);
  console.log(paperball);
  
  drawSprites();
  paperball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}



