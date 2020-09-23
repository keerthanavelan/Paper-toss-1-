const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, paper;
var binPart1, binPart2, binPart3;

function preload(){
    
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //creating objects
    ground = new Ground();
    paper = new Paper(250,540);

    //creating the parts of the bin
    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background("white");
    Engine.update(engine);
    
    fill("black");
    text("Press the UP arrow key to move the paper", 500, 200);

    //displaying the objects
    ground.display();
    paper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});
    }
}