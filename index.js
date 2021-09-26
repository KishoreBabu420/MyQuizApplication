var readLineSync = require('readline-sync');

// Database
var score = 0;

// databse of Highscore

var highScores = [
  {
    name: "Kishore",
    score: 3,
  },
  {
    name: "Rajesh",
    score: 2,
  }
]


// array of questions(objects)

var questions = [
  {
    question: "What is my middlename? (Babu / Raj) ",
    answer: "Babu"
  },

   {
    question: "Which city I was born?(Mumbai / Vijayawada) ",
    answer: "Vijayawada"
  },

   {
    question: "Which is my favourite SuperHero Merchandise? (Marvel / DC)",
    answer: "Marvel"
  }
]


// Logic - Backend

function welcome(){
  console.log("Welcome to Do you know about me?")
  console.log("-----------------")
  console.log("-----------------")
  var userName = readLineSync.question("May I know your name? ")
  console.log("-----------------")
  console.log("-----------------")

  console.log("Welcome " + userName + ", I am pleased to have you here");
  console.log("-----------------")
  console.log("-----------------")
}

function quiz(question, answer){
  // Asking the question
  var userAnswer = readLineSync.question(question);

  // Verify the answer
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are correct");
    score = score + 1;
  }
  else{
    console.log("You are Incorrect")
  }

  console.log("Your score: " + score)
  console.log("-----------------")
  console.log("-----------------")
}


function play(){
  for(var i = 0; i<questions.length; i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)
  }
}

function finalScores(){
  console.log("Your Final score is " + score);
  console.log("These are the High Scores")
  highScores.map(score => console.log(score.name, ":", score.score));
}






// FrontEnd
welcome();

play();

finalScores();