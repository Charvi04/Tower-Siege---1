
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform;

function preload()
{
  backgroundImg = loadImage("Images/back.jpg");
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

  // platform.
  platform = createSprite(140,480,300,250);
platform.shapeColor = "black";

  // stands
  stand1 = new Stand(500,480,300,10);
  stand2 = new Stand(1000,280,250,10);

 
    // row 1.
  block1 = new Block (400,470,30,40);
  block2 = new Block (430,470,30,40);
  block3 = new Block (460,470,30,40);
  block4 = new Block (490,470,30,40);
  block5 = new Block (520,470,30,40);
  block6 = new Block (550,470,30,40);
  block7 = new Block (580,470,30,40);

   // row 2.
  block8 = new Block2 (430,440,30,40);
  block9 = new Block2 (460,440,30,40);
  block10 = new Block2 (490,440,30,40);
  block11 = new Block2 (520,440,30,40);
  block12 = new Block2 (550,440,30,40);

  // row 3.
  block13 = new Block1 (460,370,30,40);
  block14 = new Block1 (490,370,30,40);
  block15 = new Block1 (520,370,30,40);

  // top
  block16 = new Block4(490,350,30,40);
  
  // row 1 
  block17 = new Block(1000,270,30,40); 
  block18 = new Block(970,270,30,40); 
  block19 = new Block(940,270,30,40); 
  block20 = new Block(1030,270,30,40); 
  block21 = new Block(1060,270,30,40); 

  // row 2
  block22 = new Block2(970,240,30,40); 
  block23 = new Block2(1000,240,30,40); 
  block24 = new Block2(1020,240,30,40); 

  // top
  block25 = new Block1(1000,220,30,40);

  hexagon = new Hexagon(65,100,20);
  slingshot = new SlingShot(hexagon.body,{x:50, y:200});

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

   block13.display();
   block14.display();
   block15.display();

   block16.display();

   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();

   block22.display();
   block23.display();
   block24.display();

   block25.display();

   hexagon.display();
   slingshot.display();
   
   
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


