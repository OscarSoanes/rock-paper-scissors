// Generates a random number between 0 and 2, assigns value to move
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let output = "";

    switch (choice) {
        case 0: output = "rock"; 
        break;
        case 1: output = "paper"; 
        break;
        case 2: output = "scissors"; 
        break;
    }

    return output;
}

function playRound(playersChoice, computersChoice) {
    // player loses
    if (playersChoice === "rock" && computersChoice === "paper" ||
        playersChoice === "paper" && computersChoice === "scissors" ||
        playersChoice === "scissors" && computersChoice === "rock") {
        return -1;
    }

    // player wins
    if (playersChoice === "rock" && computersChoice === "scissors" ||
        playersChoice === "paper" && computersChoice === "rock" ||
        playersChoice === "scissors" && computersChoice == "paper") {
        return 1;
    }
    
    // tied
    return 0;
}

function game(playersChoice) {
    let computersChoice = getComputerChoice();
    
    const result = playRound(playersChoice, computersChoice);
    if (result == -1) computersScore++;
    if (result == 1) playersScore++;

    console.log(`${playersScore} and ${computersScore}`)

    if (playersScore === 5 || computersScore === 5) {
        results(playersScore, computersScore)
    }
}

function results(player, computer) {
    let message;
    if (player > computer) {
        message = `You beat the computer! Your score ${player} to ${computer}`;
    } else {
        message = `You lost to the computer! Your score ${player} to ${computer}`;
    }

    const container = document.querySelector('#container');

    const result = document.createElement('p');
    result.style.fontSize = 16;
    result.textContent = message;
    container.appendChild(result)
}

var playersScore = 0;
var computersScore = 0;
const btns = document.querySelectorAll('button');
    
function logResult(e) {
    game(e.target.id)
}

btns.forEach(button => button.addEventListener('click', logResult))



