// create function getComputerChoice
// return random selection out of rock, paper, scissor

const choices = ["Rock", "Paper", "Scissors"]

const getRandomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
}

const getComputerChoice = () =>  choices[getRandomNumber(choices)];

console.log(getComputerChoice())