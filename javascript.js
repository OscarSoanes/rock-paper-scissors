// Generates a random number between 0 and 2, assigns value to move
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let output = "";

    switch (choice) {
        case 0: output = "Rock"; 
        break;
        case 1: output = "Paper"; 
        break;
        case 2: output = "Scissors"; 
        break;
    }

    return output;
}

function playRound(playersChoice, computersChoice) {
    if (playersChoice === computersChoice) {
        return `Tie! ${playersChoice} equals ${computersChoice}`;
    }

    if (playersChoice === "Rock" && computersChoice === "Paper" ||
        playersChoice === "Paper" && computersChoice === "Scissors" ||
        playersChoice === "Scissors" && computersChoice === "Rock") {
        return `You Lose! ${computersChoice} beats ${playersChoice}`;
    }

    if (playersChoice === "Rock" && computersChoice === "Scissors" ||
        playersChoice === "Paper" && computersChoice === "Rock" ||
        playersChoice === "Scissors" && computersChoice == "Paper") {
        return `You Win! ${playersChoice} beats ${computersChoice}`;
    }

    return "You Lose! You didn't say rock, paper or scissors!"
}

const computersChoice = getComputerChoice();
let playersChoice = prompt("ROCK/ PAPER/ SCISSORS?").toLowerCase();
playersChoice = playersChoice.charAt(0).toUpperCase() + playersChoice.substring(1);

console.log(playRound(playersChoice, computersChoice));
