"use strict";

// receive input from user
function playerPlay() {
    // return rock paper or scissors
    return prompt("Please enter Rock, Paper, or Scissors: ").toLowerCase();
}
// randomly select rps as computer
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    // return rock paper or scissors
    switch(random) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'
            break;
    }
}
// compare the output from user and computer
function playRound(playerSelection, computerSelection) {
    // return win lose or draw
    console.log(playerSelection + " vs " + computerSelection);

    if (playerSelection === computerSelection) return "draw";

    switch(playerSelection) {
        case 'rock':
            return (computerSelection === 'paper') ? 'lose' : 'win';
            break;
        case 'paper':
            return (computerSelection === 'scissors') ? 'lose' : 'win';
            break;
        case 'scissors':
            return (computerSelection === 'rock') ? 'lose' : 'win';
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

function givePoint() {
    console.log(playerScore);
}

console.log(game());

