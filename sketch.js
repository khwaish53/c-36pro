var hypnoticBall, database,gameState=0,playerCount=0;
var position;
var form ,player,game

function setup(){
 
  console.log(database);
  createCanvas(500,500);
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
}