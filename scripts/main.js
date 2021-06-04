'use strict';

// receive input from user
function playerPlay() {
  // return rock paper or scissors
  return prompt('Please enter Rock, Paper, or Scissors: ').toLowerCase();
}
// randomly select rps as computer
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  // return rock paper or scissors
  switch (random) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}
// compare the output from user and computer
function playRound(playerSelection, computerSelection) {
  // return win lose or draw
  if (playerSelection === computerSelection) return 'draw';

  switch (playerSelection) {
    case 'rock':
      return computerSelection === 'paper' ? 'lose' : 'win';
      break;
    case 'paper':
      return computerSelection === 'scissors' ? 'lose' : 'win';
      break;
    case 'scissors':
      return computerSelection === 'rock' ? 'lose' : 'win';
      break;
  }
}
// play 5 rounds of rps
function game() {
  // keep track of both player's scores
  let playerScore = 0;
  let computerScore = 0;
  var i;
  for (i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    // determine who gets a point
    let result = playRound(playerSelection, computerSelection);
    if (result === 'win') {
      playerScore++;
    } else if (result === 'lose') {
      computerScore++;
    }
    console.log(`Player: ${playerScore} vs Computer ${computerScore}`);
  }
  return `The final scores are Player: ${playerScore} and Computer: ${computerScore}`;
}

const rps = document.querySelectorAll('.rps');
const restartBtn = document.querySelector('.restart-btn');
const display = document.querySelector('.display');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;

rps.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    display.textContent = `${playerSelection} vs ${computerSelection}, you ${result}!`;
    updateScore(result);
    checkWinner();
  });
});

restartBtn.addEventListener('click', restartGame);

function updateScore(result) {
  if (result == 'win') playerScore++;
  if (result == 'lose') computerScore++;
  player.textContent = playerScore;
  computer.textContent = computerScore;
}

function checkWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    rps.forEach((button) => {
      button.disabled = true;
    });
  }
  if (playerScore == 5) {
    display.textContent = 'Congratulations, you are the winner!';
    display.classList.add('win');
  } else if (computerScore == 5) {
    display.textContent = 'You lost to a computer!';
    display.classList.add('lose');
  }
  if (playerScore == 5 || computerScore == 5) {
    playerScore = 0;
    computerScore = 0;
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  player.textContent = playerScore;
  computer.textContent = computerScore;
  rps.forEach((button) => {
    button.disabled = false;
  });
  display.classList = 'display';
  display.textContent = '';
}
