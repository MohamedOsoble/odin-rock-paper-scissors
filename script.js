const choices = ["rock", "paper", "scissors"];
var scoreboard = {
    wins: 0,
    losses: 0,
    draws: 0
};

function getComputerChoice() {

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        return computerChoice;
};

/* function getPlayerChoice() {
    let choice = "hello";

    while (choices.includes(choice) == false) {
        console.log("Choice must be rock, paper or scissors");
        choice = prompt("Choose a hand to play").toLowerCase();
    }
    return choice

}; */

function playRound(player, computer) {

    let winner;
    // If player choice is same as computer choice, return 'draw'
    if (player == computer) {
        winner = "draw";
    }
    // If player choice is rock and computer chooses scissors, return 'you win'
    else if (player == "rock" && computer == "scissors"){
        winner = "player";
    } 
    // If player choice is paper and computer choice is rock, return 'you win'
    else if (player == "paper" && computer == "rock"){
        winner = "player";
    }
    // If player choice is scissors and computer choice is rock, return 'you win'
    else if (player == "scissors" && computer == "paper") {
        winner = "player";
    }
    // Return computer wins in all other scenarios
    else {
        winner = "computer";
    };
    return winner;
};

function game(choice) {
/* // initialize scoreboard to 0
scoreboard.wins = 0;
scoreboard.losses = 0;
scoreboard.draws = 0; */

    // Initialize the winner
        let winner;
        // obtain user input
        var playerChoice = choice;

        // obtain computer input
        var computerChoice = getComputerChoice();

        // call playRound function with both inputs
        console.log("The player choose " + playerChoice);
        console.log("The computer choose " + computerChoice);
        winner = playRound(playerChoice, computerChoice);

        // update score & print round outcome
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
    return scoreboard;
};

choices.forEach((choice) => {
    
})

const div = document.createElement('div');
const buttons = document.querySelectorAll('button');
const scoreboardContainer = document.querySelector('#scoreboard');
const playAgainBtn = document.createElement('button');

playAgainBtn.textContent = "Play Again?";
scoreboardContainer.appendChild(playAgainBtn);
playAgainBtn.style.display = "none";

playAgainBtn.addEventListener('click', () => {
    scoreboard.wins = 0;
    scoreboard.losses = 0;
    scoreboard.draws = 0;
    wins.textContent = "Player wins: " + scoreboard.wins;
    losses.textContent = "Computer wins: " + scoreboard.losses;
    draws.textContent = "Draws: " + scoreboard.draws;
    buttons.forEach((button) => {
        button.disabled = false;
    });
    playAgainBtn.style.display = "none";
    div.style.display = "none";
});

let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
let draws = document.getElementById('draws');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
        wins.textContent = "Player wins: " + scoreboard.wins;
        losses.textContent = "Computer wins: " + scoreboard.losses;
        draws.textContent = "Draws: " + scoreboard.draws;
        if(scoreboard.wins == 5){
            div.textContent = "You Won!";
            scoreboardContainer.appendChild(div);
            buttons.forEach((button) => {
                button.disabled = true;
                playAgainBtn.style.display = "";
            });



        }
        else if(scoreboard.losses == 5) {
            div.textContent = "Computer Won!";
            scoreboardContainer.appendChild(div);
            buttons.forEach((button) => {
                button.disabled = "true";
                playAgainBtn.style.display = "";
            });


        };
    });
});