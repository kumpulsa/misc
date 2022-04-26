const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

//adding evenListener to all the buttons and adding functionality for button
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  })
);

function generateComputerChoice() {
  //getting random number and get whole number with Math.floor
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or possibleChoices.length
  //console.log(randomNumber)
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw!'
    }
    else if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose!'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose!'
    }
    //showing the result
    resultDisplay.innerHTML = result
}