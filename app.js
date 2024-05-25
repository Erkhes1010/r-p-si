var cpoint = document.querySelector(".cPoint");
var pPoint = document.querySelector(".pPoint");
var computer = document.querySelector(".computer");
var player = document.querySelector(".player");
var winner = document.querySelector(".winner");
var pCount = 0,
  cCount = 0;
function play(playerChoice) {
  if (playerChoice == "rock") {
    //alert("rock");
    player.innerText = "playerChoice: rock";
  } else if (playerChoice == "paper") {
    //alert("paper");
    player.innerText = "playerChoice: paper";
  } else if (playerChoice == "scissors") {
    //alert("scissors");
    player.innerText = "playerChoice: scissors";
    // 0,1,2 0->rock 1->paper 2->scissors
  }
  var random = Math.floor(Math.random() * 3);
  console.log(random);
  var computerChoice;
  if (random === 0) {
    computerChoice = "rock";
    computer.innerText = "computerChoice: rock";
  } else if (random === 1) {
    computerChoice = "paper";
    computer.innerText = "computerChoice: paper";
  } else if (random === 2) {
    computerChoice = "scissors";
    computer.innerText = "computerChoice: scissors";
  }
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    winner.innerText = "player wins";
    pCount++;
    pPoint.innerText = pCount;
  } else {
    winner.innerText = "computer wins";
  }
}
