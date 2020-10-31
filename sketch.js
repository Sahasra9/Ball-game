const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10;
var ball1;
var chain1;
function setup(){
    var canvas = createCanvas(1400,650);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(680,600,175,1400);
    pin1 = new pins(625,20,20,20);
    pin2 = new pins(665,20,20,20);
    pin3 = new pins(705,20,20,20);
    pin4 = new pins(745,20,20,20);
    pin5 = new pins(645,50,20,20);
    pin6 = new pins(685,50,20,20);
    pin7 = new pins(725,50,20,20);
    pin8 = new pins(665,80,20,20);
    pin9 = new pins(705,80,20,20);
    pin10 = new pins(685,110,20,20);
    ball1 = new ball(685,620,10);
chain1 = new chain(ball1.body,{x:690,y:650});
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ground1.display();
    pin1.display();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();
    pin6.display();
pin7.display();
pin8.display();
pin9.display();
pin10.display();
ball1.display();
chain1.display();
}