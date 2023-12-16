// create function getComputerChoice
// return random selection out of rock, paper, scissor

const choices = ["Rock", "Paper", "Scissors"];

const getRandomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
}

const getComputerChoice = () =>  choices[getRandomNumber(choices)];

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return 0
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper"
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper"
  }
}