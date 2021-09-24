
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;

box=[];
var ground;
var box1,box2,box3,box4,box5,box6
var ball,rope;

function setup() {
	createCanvas(2000, 600);


	engine = Engine.create();
	world = engine.world;

 ground=new Ground(1000,600,2000,20);
 
 box1=new Box(1000,500,80,80);
 box2=new Box(1000,400,80,80);
 box3=new Box(1000,300,80,80);
 box4=new Box(1000,200,80,80);
 box5=new Box(1000,100,80,80);
 box6=new Box(1000,10,80,80);
  
 ball=new Ball(500,200,80,80);

 rope=new Rope(ball.body,{x:800,y:50});
}


function draw() {

  background(0);
 Engine.update(engine);

 ground.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();

 ball.display();
 
 rope.display();
}

function mouseDragged() {
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

	
}


