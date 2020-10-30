
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bo1,bo2,bo3,bo4,bo5;
var ro;
var r1,r2,r3r,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ro=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=800;
	startBobPositionY=675;
	bo1=new bob(800-80,675,40);
	bo2=new bob(800-40,675,40);
	bo3=new bob(800,675,40);
	bo4=new bob(800+40,675,40);
	bo5=new bob(800+80,675,40);


	r1=new rope(bo1.body,ro.body,-40*2,0);
	r2=new rope(bo2.body,ro.body,-40*1,0);
	r3=new rope(bo3.body,ro.body,0,0);
	r4=new rope(bo4.body,ro.body,40*1,0);
	r5=new rope(bo5.body,ro.body,40*2,0);



	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ro.display();


  bo1.display();
  bo2.display();
  bo3.display();
  bo4.display();
  bo5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bo1.body,bo1.body.position,{x:-100,y:-100}); } 
} 





