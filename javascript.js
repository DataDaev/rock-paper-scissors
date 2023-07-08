let getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let computer = Math.floor(Math.random() * choices.length);

    return choices[computer]
}

let playRound = (playerSelection, computerSelection) => {
    let message = (playerSelection === computerSelection) ? "You tie!" :
    (playerSelection === "rock" && computerSelection === "paper") ? "You lose! Paper beats rock!" :
    (playerSelection === "paper" && computerSelection === "rock") ? "You win! Paper beats rock!" :
    (playerSelection === "scissors" && computerSelection === "paper") ? "You win! Scissors beats paper!" :
    (playerSelection === "rock" && computerSelection === "scissors") ? "You win! Rock beats Scissors!" :
    (playerSelection === "paper" && computerSelection === "scissors") ? "You lose! Scissors beats paper!" :
    (playerSelection === "scissors" && computerSelection === "rock") ? "You lose! Rock beats scissors!" :
    "Please choose rock, paper, or scissors.";

        if (message.includes("lose")){
            console.log(message)
            increaseComputerScore();

        } else if (message.includes("win")){
            console.log(message)
            increasePlayerScore();

        } else if (message.includes("tie")){
            console.log(message)
        } 
}

const increasePlayerScore = () => {
    let playerScore = document.getElementById("playerScore");
    let score = parseInt(playerScore.textContent);
    score++;
    playerScore.textContent = score;
    setTimeout(() => {
        if (score === 5){
            document.getElementById("rockButton").disabled = true;
            document.getElementById("paperButton").disabled = true;
            document.getElementById("scissorsButton").disabled = true;
            alert("Congratulations! You beat the computer!");
        }
    }, 1);
}

const increaseComputerScore = () => {
    let computerScore = document.getElementById("computerScore");
    let score = parseInt(computerScore.textContent);
    score++;
    computerScore.textContent = score;
    setTimeout(() => {
        if (score === 5){
            document.getElementById("rockButton").disabled = true;
            document.getElementById("paperButton").disabled = true;
            document.getElementById("scissorsButton").disabled = true;
            alert("Game over! The computer beat you!");
        }
    }, 1);

    
}

const disableButtons = () => {
    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;
}

const resetGame = () => {
    let playerScore = document.getElementById("playerScore");
    let zeroPlayer = parseInt(playerScore.textContent);
    zeroPlayer = 0;
    playerScore.textContent = zeroPlayer;
    let computerScore = document.getElementById("computerScore");
    let zeroComputer = parseInt(computerScore.textContent);
    zeroComputer = 0;
    computerScore.textContent = zeroComputer;
    document.getElementById("rockButton").disabled = false;
    document.getElementById("paperButton").disabled = false;
    document.getElementById("scissorsButton").disabled = false;
}

const rock = document.getElementById("rockButton").addEventListener("click", () => playRound('rock', getComputerChoice()));
const paper = document.getElementById("paperButton").addEventListener("click", () => playRound('paper', getComputerChoice()));
const scissors = document.getElementById("scissorsButton").addEventListener("click", () => playRound('scissors', getComputerChoice()));
const reset = document.getElementById("resetButton").addEventListener("click", () => resetGame());

