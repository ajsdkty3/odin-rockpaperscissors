let humanScore = 0;
let computerScore = 0;

const choices = document.querySelector(".choices");
const results = document.querySelector(".results");
results.style.whiteSpace = "pre-line";

function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) {
        return "rock";
    } else if (choice >= 1/3 && choice < 2/3) {
        return "paper";
    } else if (choice >= 2/3) {
        return "scissors";
    }
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    console.log(humanChoice + "\n");
    console.log(computerChoice + "\n");
    choices.textContent = `Your choice: ${humanChoice}, 
                            Computer's choice: ${computerChoice}`;

    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            humanScore += 1;
            return "win";
    } else if ((humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore += 1;
            return "lose";
    } else {
        return "draw";
    }
}

let humanChoice;
let computerChoice;

const selections = document.querySelector(".selections");

function handleSelectionClick(event) {
    let target = event.target;
    let result = "";
    switch(target.id) {
        case("rock"):
            result = playRound("rock");
            break;
        case("paper"):
            result = playRound("paper");       
            break;
        case("scissors"):
            result = playRound("scissors");
            break;
    }

    results.textContent = `Result is ${result}\n. 
                            Now your score is ${humanScore}\n 
                            Computer's score is ${computerScore}\n`;
    checkWinLose();
}

selections.addEventListener("click", handleSelectionClick);


function checkWinLose() {
    if(humanScore >= 5) {
        results.textContent += "You reach 5 and win!";
        selections.removeEventListener("click", handleSelectionClick);
    } else if(computerScore >= 5) {
        results.textContent += "Computer reaches 5 and wins!";
        selections.removeEventListener("click", handleSelectionClick);
    }
}
