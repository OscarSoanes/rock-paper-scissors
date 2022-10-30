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

function getPlayersChoice() {
    let valid = false;
    let playersChoice;

    while (!valid) {
        playersChoice = prompt("ROCK/ PAPER/ SCISSORS?");
        playersChoice = playersChoice.charAt(0).toUpperCase() + playersChoice.substring(1).toLowerCase();

        if (playersChoice === "Rock" || playersChoice === "Paper" || playersChoice === "Scissors") {
            valid = true;
        } else {
            alert("Please enter 'Rock', 'Paper' or 'Scissors'!");
            console.warn(`Your input of ${playersChoice} was not valid`);
        }
    }

    return playersChoice;
    
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

function game() {
    var playersScore = 0;
    var computersScore = 0;

    for (let i = 0; i < 5; i++) {
        let computersChoice = getComputerChoice();
        let playersChoice = getPlayersChoice();

        let result = playRound(playersChoice, computersChoice);
        console.log(result);

        if (result.includes("Win")) {
            playersScore++
        } else if (result.includes("Lose")) {
            computersScore++
        }
    }

    console.log(result(playersScore, computersScore));
}

function result(player, computer) {
    if (player > computer) {
        return `GAME OVER! You beat the computer! Your score ${player} to ${computer}`;
    } else if (player < computer) {
        return `GAME OVER! You lost to the computer! Your score ${player} to ${computer}`;
    } else {
        return `GAME OVER! You tied to the computer! Your score ${player} to ${computer}`;
    }
}

console.log("Playing 5 rounds of Rock Paper Scissors!")
game()

