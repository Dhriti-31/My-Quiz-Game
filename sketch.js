var canvas, background;
var gameState = 0;
var contestantCount;
var allContestants;
var answer, database;

var Quiz, Contestant, Question;
var contestant, question, quiz;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
  quiz.update(1)
}

if(gameState === 1){
  clear()
  quiz.play();
}
}
