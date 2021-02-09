//ROCK, PAPER, SCISSORS
let games = 0;
let input;
let userScore = 0;
let botScore = 0;

//Declaring variable to store randomly generated Rock, Paper, Or Scissors.

let play;

//creating Lose, Win, and Draw results

function userW() {

document.getElementById("result").style.color = "green"; document.getElementById("result").innerHTML = "You win!";
userScore++;

}

function userL() {

document.getElementById("result").style.color = "red"; document.getElementById("result").innerHTML = "You lose!";
botScore++;

}

function draw() {

document.getElementById("result").style.color = "grey"; document.getElementById("result").innerHTML = "Draw!";

}
  
//stores a string in our play variable depending on our randomly generated # from 1 - 10

function RPS() {
  
  let bot = 10 * Math.random();
      
  if (0 < bot && bot < 3.33) {
      play = "Rock";
  }
  else if (3.33 < bot && bot < 6.66) {
      play = "Paper";
  }
  else if (6.66 < bot && bot < 10) {
      play = "Scissors";
  }
      
  document.getElementById("bot").innerHTML = input + " vs " + play;
  
}

//assigning input value respective to the button clicked, then comparing user input with generated bot play

function choseRock() {
  input = "Rock";
  RPS();
  compare();
}

function chosePaper() {
  input = "Paper";
  RPS();
  compare();
}

function choseScissors() {
  input = "Scissors";
  RPS();
  compare();
}

//comparing user input with the generated plays

function compare() {

  if (input != play) {
    if (input == "Rock" && play == "Scissors") {
      userW();
    }
    if (input == "Scissors" && play == "Rock") {
      userL();
    }
    if (input == "Rock" && play == "Paper") {
      userL();
      }
    if (input == "Paper" && play == "Rock") {
      userW();
    }
    if (input == "Scissors" && play == "Paper") {
      userW();
    }
    if (input == "Paper" && play == "Scissors") {
      userL();
    }
  }
  else {
      draw();
  }
  
  document.getElementById("score").innerHTML = userScore + "-" + botScore;
  
}

//disables play button and opens the input buttons

function playGame() {
document.getElementById("plybtn").style.display = "none";
document.getElementById("buttons").style.display = "block";
document.getElementById("bot").innerHTML = "Player vs BOT";
document.getElementById("points").style.display = "block";
document.getElementById("result").innerHTML = "Ready!";
    
}