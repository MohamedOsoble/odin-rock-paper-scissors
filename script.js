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
    var choice = "hello";

    while (choices.includes(choice) == false) {
        console.log("Choice must be rock, paper or scissors");
        var choice = prompt("Choose a hand to play").toLowerCase();
    }
    return choice

};
function playRound(player, computer) {
    // 1. Compare player choice to computer choice
    let winner;
    console.log(player, computer)
    // 2. If player choice is same as computer choice, return 'draw'
    if (player == computer) {
        winner = "draw";
    }
    // 3. If player choice is rock and computer chooses scissors, return 'you win'
    else if (player == "rock" && computer == "scissors"){
        winner = "player";
    } 
    // 4. If player choice is paper and computer choice is rock, return 'you win'
    else if (player == "paper" && computerC == "rock"){
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
        // obtain user input
        var playerChoice = getPlayerChoice();
        // obtain computer input
        var computerChoice = getComputerChoice();
        // call playround with both inputs
        console.log("The player choose " + playerChoice);
        console.log("The computer choose " + computerChoice)
        var winner = playRound(getPlayerChoice, getComputerChoice);
        // update score
        console.log("the winner is the " + winner)
        if (winner === "player"){
            scoreboard.wins = scoreboard.wins++
        }
        else if(winner === "computer"){
            scoreboard.losses = scoreboard.losses++
        }
        else{
            scoreboard.draws = scoreboard.draws++
        };
    }
    // once loop is complete, return rounds won, lost and drawn.
    console.log(scoreboard);
};