var canvas;
var backgroundImage,bkImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars1,cars2,cars3,cars4;
var ground,grounds;

var cars, car1, car2, car3, car4;

function preload(){
  cars1=loadImage("../images/car1.png");
  cars2=loadImage("../images/car2.png");
  cars3=loadImage("../images/car3.png");
  cars4=loadImage("../images/car4.png");

  grounds=loadImage("../images/ground.png");

  bkImage=loadImage("../images/track.png")
  
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
