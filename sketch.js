const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var game
var gameState,playerCount;
function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);
    engine = Engine.create();
    world = engine.world;

    game = new Game()

   
}

function draw(){
    background(0);
    Engine.update(engine);

    game.start();
}