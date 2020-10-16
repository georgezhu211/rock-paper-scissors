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

let playerSelection = playerPlay();
let computerSelection = computerPlay();

console.log( playRound(playerSelection, computerSelection) );

// testing site
function test() {
    var i;
    for (i = 0; i < 10; i++) {
        console.log(i);
        console.log(computerPlay());
    } 
}

