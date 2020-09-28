
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var dustbin1,dustbin2,dustbin3;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(width/2,690,800,10);

	dustbin1=new Dustbin(700,675,500,20);
    dustbin2=new Dustbin(750,635,20,100);
	dustbin3=new Dustbin(650,635,20,100);
	
	paper1=new Paper(100,675,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
}


