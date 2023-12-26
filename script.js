const getRandomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
}

const getComputerChoice = () =>  {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[getRandomNumber(choices)]
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw! Play Again"
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

const declareWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return `You win with a score of ${playerScore} to ${computerScore}.`
  } else {
    return `You lose with a score of ${playerScore} to ${computerScore}.`
  }
}

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  // while (playerScore < 3 && computerScore < 3) {
  //   playerSelection = prompt('Choose between "Rock", "Paper" and "Scissors":');
  //   computerSelection = getComputerChoice();
  //   const winner = playRound(playerSelection, computerSelection);

  //   if (winner.includes("lose")) {
  //     computerScore++
  //   } else if (winner.includes("win")) {
  //     playerScore++
  //   }

  //   console.log(winner);
  //   console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  // }
  console.log(declareWinner(playerScore, computerScore))
}

game()
