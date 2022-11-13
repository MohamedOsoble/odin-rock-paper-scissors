const choices = ["rock", "paper", "scissors"];
console.log(getPlayerChoice());

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
function playRound(playerChoice, computerChoice) {
    // 1. Compare player choice to computer choice

    // 2. If player choice is same as computer choice, return 'draw'

    // 3. If player choice is rock and computer chooses scissors, return 'you win'

    // 4. If player choice is paper and computer choice is rock, return 'you win'

    // 5. If player choice is scissors and computer choice is rock, return 'you win'

    // 6. Return computer wins in all other scenarios
};

function game() {
    // set up for loop to play 5 rounds
        // obtain user input
        let playerChoice = getPlayerChoice();
        // obtain computer input
        let computerChoice = getComputerChoice;
        // call playround with both inputs
        let winner = playRound(getPlayerChoice, getcomputerChoice);
        // update score

    // once loop is complete, return rounds won, lost and drawn.
};