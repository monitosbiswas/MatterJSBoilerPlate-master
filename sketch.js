
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
	ground = new Ground(400,height,800,40);
	paper1 = new paper(200,350,30);
	box1 = new Box(700,630,90,10);
	box2 = new Box(750,635,10,60);
	box3 = new Box(650,635,10,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



