let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock-btn');
const paper = document.getElementById('paper-btn');
const scissors = document.getElementById('scissors-btn');
const roundResult = document.getElementById("roundUpdate")
const score = document.querySelector(".scoreBoard")
const finalResult=document.querySelector(".results")
const restartButton = document.querySelector(".restart")

function computerPlay() {
  const signs = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return signs[choice];
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function draw() {
  roundResult.textContent="It's a draw!";
}

function win(playerSelection,computerSelection){
  playerScore++;
  score.textContent = playerScore+":"+computerScore;
  if (playerScore<5){
    roundResult.textContent="You win! "+ capitalize(playerSelection) + " beats "+ computerSelection;
  }else {
    finalResult.textContent="Game over, you win!"
    restartButton.style.visibility="visible";
    rock.setAttribute("disabled", 1);
    paper.setAttribute("disabled", 1);
    scissors.setAttribute("disabled", 1);
    restartButton.addEventListener("click",endGame)
  }
}

function lose(playerSelection,computerSelection){
  computerScore++;
  score.textContent=playerScore+":"+computerScore;
  if(computerScore<5){
    roundResult.textContent="You lose! "+capitalize(computerSelection)+ " beats "+ playerSelection;
  }else{
    finalResult.textContent='Game over, you lose!'
    restartButton.style.visibility="visible";
    rock.setAttribute("disabled", 1);
    paper.setAttribute("disabled", 1);
    scissors.setAttribute("disabled", 1);
    restartButton.addEventListener("click",endGame);
  }
}

// displays result of a round
function playRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection){
      draw();
    }
    else{
      if (playerSelection=="rock"){
        if(computerSelection=="scissors"){
          win(playerSelection,computerSelection);

        }else{
          lose(playerSelection,computerSelection);
        }
      }
      else if (playerSelection=="scissors"){
        if(computerSelection=="paper"){
          win(playerSelection,computerSelection);
        }else{
          lose(playerSelection,computerSelection);
        }
      }
      else if  (playerSelection=="paper"){
        if(computerSelection=="rock"){
          win(playerSelection,computerSelection);
        }else{
          lose(playerSelection,computerSelection);
        }
      }
    }
    
}

// resets the game
function endGame() {
  // reset both score to 0
  playerScore = 0;
  computerScore = 0;

  // display the new score to user
  score.textContent = playerScore+":"+computerScore;
  roundResult.textContent= "Play until 5 wins!";

  // show blank result
  finalResult.textContent = ``;
  restartButton.style.visibility="hidden";

  // reenable all the RPS buttons so that user can continue to play
  rock.removeAttribute("disabled");
  paper.removeAttribute("disabled");
  scissors.removeAttribute("disabled");
}

function main() {

  rock.addEventListener("click",function() {
    playRound("rock");
  })
  
  paper.addEventListener("click",function() {
    playRound("paper");
  })
  
  scissors.addEventListener("click",function() {
    playRound("scissors");
  })
  
}

main()