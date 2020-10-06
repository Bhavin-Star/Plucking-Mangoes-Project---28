
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,tree, ground,elastic,stone;
var boyI;

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

    mango1 = new Mango(1120,290,50,50);
	mango2 = new Mango(1010,300,50,50);
	mango3 = new Mango(1110,75,50,50);
	mango4 = new Mango(1060,175,50,50);
	mango5 = new Mango(880,230,50,50);
	mango6 = new Mango(980,100,50,50);
	mango7 = new Mango(1190,190,50,50);
	mango8 = new Mango(1240,300,50,50);
	mango9 = new Mango(910,320,50,50);
	
	tree = new Tree(1050,360,500,650);
	boyI = new Boy(200,500,300,400);
	ground = new Ground(650,681,1300,10);
	
	stone = new Stone(150,150,45);
	elastic = new Elastic(stone.body,{x:140, y:590 });
	

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background('grey');
  
  	ground.display();
	tree.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	
	boyI.display();
	elastic.display();
	stone.display();

	detectCollision(stone,mango1);
 	detectCollision(stone,mango2);
 	detectCollision(stone,mango3);
 	detectCollision(stone,mango4);
 	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);

	fill('black');
	textSize(20);
	text('Press space to get a second chance',50,30);
	}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
  
	function mouseReleased(){
	   elastic.fly()
  }
  
  function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.mango.position;
	stoneBodyPosition=lstone.body.position;
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<lmango.width+lstone.radius ){
		  Matter.Body.setStatic(lmango.mango,false);
	  }
   }

   function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		elastic.attach(stone.body);
	}
}