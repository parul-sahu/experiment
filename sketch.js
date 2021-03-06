const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1,bird;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1= new Pig(810,350)
    block1 = new Block(810,260,300,PI/2)
    bird = new Bird(100,100)
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    block2 = new Block(810,180,300,PI/2);
    box5 = new Box(810,160,70,70);
    block4 = new Block(760,120,150,PI/7)
    block3 = new Block(870,120,150,-PI/7)
pig3 = new Pig(810,220)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle)
   box1.display();
   box2.display();
   ground.display();
   pig1.display();
   block1.display();
   bird.display();
   box3.display();
   box4.display();
   pig2.display();
   block2.display();
   box5.display();
   block3.display();
   block4.display();
   pig3.display()
}