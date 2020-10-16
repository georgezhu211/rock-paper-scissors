"use strict";

// receive input from user
function playerPlay() {
    // return rock paper or scissors
    return prompt("Please enter Rock, Paper, or Scissors: ");
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

// return win lose or draw

// testing site
var i;
for (i = 0; i < 10; i++) {
    console.log(i);
    console.log(computerPlay());
}

