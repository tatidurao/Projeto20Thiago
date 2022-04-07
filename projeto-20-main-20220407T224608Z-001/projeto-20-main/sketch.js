
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var quadrado1;

var quadrado = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
}

var circulo1;

var circulo = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}

var retangulo1;

var retangulo = {
	restitution:0.1,
	friction:1,
	frictionAir:0.3
}

var plane;

var plane_options={
	isStatic:true
	}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	circulo1 = Bodies.circle(220,10,10,circulo);
	World.add(world,circulo);
   
	quadrado1 = Bodies.rectangle(110,50,10,10,quadrado);
	World.add(world,quadrado);
   
	retangulo1 = Bodies.rectangle(350,50,10,10,retangulo);
	World.add(world,retangulo);
   
	plane = Bodies.rectangle(600,580,1200,2,plane_options);
	World.add(world,plane);

	rectMode(CENTER);

	Engine.run(engine);



}


function draw() {
  
  background(0);

  Engine.update(engine);

	ellipse (circulo1.position.x, circulo1.position.y,10);

	rect (retangulo1.position.x, retangulo1.position.y,10,10);
 
	rect (plane.position.x, plane.position.y,1200,2);

	rect (quadrado1.position.x, quadrado1.position.y,10,10);

  drawSprites();
 
}



