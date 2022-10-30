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

const computersChoice = getComputerChoice();


