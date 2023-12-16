const choices = ["Rock", "Paper", "Scissors"];

const getRandomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
}

// TODO: put choices in this function to not have it global
const getComputerChoice = () =>  choices[getRandomNumber(choices)];

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 0
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  }
}

// play best of five
// keeps score
// reports winner after every round
// reports winner at the end
// takes user input

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    playerSelection = prompt('Choose between "Rock", "Paper" and "Scissors":');
    computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);

    if (winner === 0) {
      console.log("Draw")
    } else if (winner.includes("lose")) {
      computerScore++
    } else if (winner.includes("win")) {
      playerScore++
    }
    
    console.log(winner)
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
  }
}

game()
