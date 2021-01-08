const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hex1,ground1,ground2,slingshot;
var engine, world;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    hex1 = new Hex(45,285);
    ground1 = new Ground(885,210,200,15);
    ground2 = new Ground(595,295,200,15);
    slingshot = new Sling(hex.body,{x:200, y:50});
}

function draw(){
   background("black")
    Engine.update(engine);


    strokeWeight(4);
    hex1.display();
    ground1.display();
    ground2.display();
    slingshot.display();
}