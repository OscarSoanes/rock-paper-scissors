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

function updateMessages(playersChoice, computersChoice, result) {
    if (result == -1) {
        computersScore++;
        message.textContent = `You lose! ${computersChoice} beats ${playersChoice}`;
    } else if (result == 0) {
        message.textContent = `It's a tie! You both chose ${playersChoice}`;
    } else {
        playersScore++;
        message.textContent = `You win! ${playersChoice} beats ${computersChoice}`;
    }

    pScore.textContent = `Players Score: ${playersScore}`;
    cScore.textContent = `Computers Score: ${computersScore}`;

    scores.appendChild(message);
    scores.appendChild(pScore);
    scores.appendChild(cScore);
}

function game(playersChoice) {
    let computersChoice = getComputerChoice();
    const result = playRound(playersChoice, computersChoice);
    
    updateMessages(playersChoice, computersChoice, result);

    if (playersScore === 5 || computersScore === 5) {
        results(playersScore, computersScore)
    }
}

function results(player, computer) {
    let message;
    if (player > computer) {
        message = "You beat the computer! Reload the page to play again";
    } else {
        message = "You lost to the computer! Reload the page to try again";
    }

    const results = document.querySelector('#results');

    const result = document.createElement('p');
    result.style.fontSize = 16;
    result.textContent = message;
    results.appendChild(result)

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

var playersScore = 0;
var computersScore = 0;

var scores = document.querySelector('#scores');
var pScore = document.createElement('p');
var cScore = document.createElement('p');
var message = document.createElement('p');


const btns = document.querySelectorAll('button');
    
function logResult(e) {
    game(e.target.id)
}

btns.forEach(button => button.addEventListener('click', logResult))



