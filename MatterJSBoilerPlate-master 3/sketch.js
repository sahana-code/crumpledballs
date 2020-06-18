const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var d1,d2,d3;
var paperObject;
var ground


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	 d1 = createSprite(750,690,10,150)
d2 = createSprite(650,690,200,20)
 d3 = createSprite(550,690,10,150)
	paperObject = createSprite(100,650,50,75)
	ground = createSprite(400,700,800,30)
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
}
