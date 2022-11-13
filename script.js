const choices = ["rock", "paper", "scissors"];
var scoreboard = {
    wins: 0,
    losses: 0,
    draws: 0
};

function getComputerChoice() {

    // 1. obtain random choice from rock paper scissors
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // 2. return random choice as output from function
        return computerChoice;
};

function getPlayerChoice() {
    let choice = "hello";

    while (choices.includes(choice) == false) {
        console.log("Choice must be rock, paper or scissors");
        choice = prompt("Choose a hand to play").toLowerCase();
    }
    return choice

};
function playRound(player, computer) {

    let winner;
    // 2. If player choice is same as computer choice, return 'draw'
    if (player == computer) {
        winner = "draw";
    }
    // 3. If player choice is rock and computer chooses scissors, return 'you win'
    else if (player == "rock" && computer == "scissors"){
        winner = "player";
    } 
    // 4. If player choice is paper and computer choice is rock, return 'you win'
    else if (player == "paper" && computer == "rock"){
        winner = "player";
    }
    // 5. If player choice is scissors and computer choice is rock, return 'you win'
    else if (player == "scissors" && computer == "paper") {
        winner = "player";
    }
    // 6. Return computer wins in all other scenarios
    else {
        winner = "computer";
    };
    return winner;
};

function game() {
// initialize scoreboard to 0
scoreboard.wins = 0;
scoreboard.losses = 0;
scoreboard.draws = 0;

    // set up for loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
        let winner;
        // obtain user input
        var playerChoice = getPlayerChoice();
        // obtain computer input
        var computerChoice = getComputerChoice();
        // call playround with both inputs
        console.log("The player choose " + playerChoice);
        console.log("The computer choose " + computerChoice);
        winner = playRound(playerChoice, computerChoice);
        // update score
        if (winner === "player"){
            scoreboard.wins = scoreboard.wins + 1;
            console.log("You won this round!");
        }
        else if(winner === "computer"){
            scoreboard.losses = scoreboard.losses + 1;
            console.log("You lost this round!");
        }
        else{
            scoreboard.draws = scoreboard.draws + 1;
            console.log("You drew this round!");
        };
    }
    return scoreboard;
};