const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var dground,tree;
var boy,boyimg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6;


function preload(){
	
	boyimg=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1000, 650);
	
	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone(100,360,33);

	mango1=new mango(600,290,34);
	mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	mango6=new mango(780,250,35);

	attach=new Throw(stones.body,{x:100,y:465});

	tree=new Tree(775,608);

	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);

}

function draw() {
rectMode(CENTER)
  background("grey");

  fill("black")
  textSize(18);
  
  

 
 
 
 
  drawSprites();

  stones.display();
  dground.display()
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  
}
