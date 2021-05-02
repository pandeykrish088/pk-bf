var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;
var ball;
var edges;
var position;

function preload(){
  back_img = loadImage("images/bg2.jpg");
  player_img = loadImage("images/p1.png");
}
function setup() {
  createCanvas(1000, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


         
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}

