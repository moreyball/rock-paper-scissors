let playerScore = 0;
let computerScore = 0;

// randomie computer moves
function computerPlay(){
  let choice = Math.random() *3;
  if (choice <=1){
    choice = "rock";
  }else if (choice<=2){
    choice="scissors";

  }else{
    choice="paper";
  }
  return choice;
}

// returns result of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
      console.log("It's a draw!");
    }
    else{
      if (playerSelection=="rock"){
        if(computerSelection=="scissors"){
          console.log("You Win! Rock beats Scissors");
          return playerScore++;
        }else{
          console.log("You Lose! Paper beats Rock");
          return computerScore++;
        }
      }
      if (playerSelection=="scissors"){
        if(computerSelection=="paper"){
          console.log("You Win! Scissors beats Paper");
          return playerScore++;
        }else{
          console.log("You Lose! Rock beats Scissors");
          return computerScore;
        }
      }
      if (playerSelection=="paper"){
        if(computerSelection=="rock"){
          console.log("You Win! Paper beats Rock");
          return playerScore++;
        }else{
          console.log("You Lose! Scissors beats Paper");
          return computerScore++;
        }
      }
      }

    }

// runs the game
function game(){
    for (let i=0;i<5;i++){
        let playerMove = prompt("Play Rock, Paper or Scissors!").toLowerCase().trim();
        while (playerMove != "rock" && playerMove != "paper" && playerMove != "scissors") {
          playerMove = prompt("Invalid Input! Rock Paper Scissors!").toLowerCase().trim();
      }
        let computerMove = computerPlay();
        playRound(playerMove,computerMove);
        console.log("Current score:" + playerScore +" - "+computerScore);
    }
  gameResult()
}

//updates the score
function gameResult(){
  if (playerScore > computerScore){
    console.log ("You win the game! Score is " + playerScore +"-"+ computerScore); 
} else if (playerScore < computerScore){
    console.log("You lost the game! Score is " + playerScore +"-"+ computerScore);
} else{
  console.log ("The game is a draw Score is"+ playerScore +"-"+ computerScore); 
}
}

game()