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
            document.getElementById("battleWin").style.visibility = "hidden";
            document.getElementById("battleLose").style.visibility = "visible";
            document.getElementById("battleTie").style.visibility = "hidden";

        } else if (message.includes("win")){
            console.log(message)
            increasePlayerScore();
            document.getElementById("battleWin").style.visibility = "visible";
            document.getElementById("battleLose").style.visibility = "hidden";
            document.getElementById("battleTie").style.visibility = "hidden";

        } else if (message.includes("tie")){
            console.log(message)
            document.getElementById("battleWin").style.visibility = "hidden";
            document.getElementById("battleLose").style.visibility = "hidden";
            document.getElementById("battleTie").style.visibility = "visible";
        } 
}

const result = (playerSelection, computerSelection,) => {
    if (playerSelection === "rock") {
        document.getElementById("playerRock").style.visibility = "visible";
        document.getElementById("playerPaper").style.visibility = "hidden";
        document.getElementById("playerScissors").style.visibility = "hidden";
    } else if (playerSelection === "paper") {
        document.getElementById("playerRock").style.visibility = "hidden";
        document.getElementById("playerPaper").style.visibility = "visible";
        document.getElementById("playerScissors").style.visibility = "hidden";
    } else if (playerSelection === "scissors") {
        document.getElementById("playerRock").style.visibility = "hidden";
        document.getElementById("playerPaper").style.visibility = "hidden";
        document.getElementById("playerScissors").style.visibility = "visible";
    }

    if (computerSelection === "rock") {
        document.getElementById("computerRock").style.visibility = "visible";
        document.getElementById("computerPaper").style.visibility = "hidden";
        document.getElementById("computerScissors").style.visibility = "hidden";
    } else if (computerSelection === "paper") {
        document.getElementById("computerRock").style.visibility = "hidden";
        document.getElementById("computerPaper").style.visibility = "visible";
        document.getElementById("computerScissors").style.visibility = "hidden";
    } else if (computerSelection === "scissors") {
        document.getElementById("computerRock").style.visibility = "hidden";
        document.getElementById("computerPaper").style.visibility = "hidden";
        document.getElementById("computerScissors").style.visibility = "visible";
    }
}

const disableButtons = () => {
    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;
}

const increaseComputerScore = () => {
    let computerScore = document.getElementById("computerScore");
    let score = parseInt(computerScore.textContent);
    score++;
    computerScore.textContent = score;
    setTimeout(() => {
        if (score === 5){
            document.getElementById("modalLose").style.visibility = "visible";
            endGame();
        }
    }, 10);
}

const increasePlayerScore = () => {
    let playerScore = document.getElementById("playerScore");
    let score = parseInt(playerScore.textContent);
    score++;
    playerScore.textContent = score;
    setTimeout(() => {
        if (score === 5){
            document.getElementById("modalWin").style.visibility = "visible";
            endGame();
        }
    }, 10);
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
    hideResult();
    const modal = document.getElementById("play").closest(".modal");
    closeModal(modal);
}

const hideResult = () => {
    const result = document.querySelectorAll(".result");
    for (i = 0; i < result.length; i++) {
        result[i].style.visibility = "hidden";
    }
}

const hideModalResult = () => {
    const result = document.querySelectorAll('')
}

function endGame(button) {
    const modal = document.querySelector("#modal");
    openModal(modal);
}

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

const rockChoice = (computerSelection) => {
    playRound('rock', computerSelection);
    result('rock', computerSelection);
}

const paperChoice = (computerSelection) => {
    playRound('paper', computerSelection);
    result('paper', computerSelection);
}

const scissorsChoice = (computerSelection) => {
    playRound('scissors', computerSelection);
    result('scissors', computerSelection);
}

window.onload = hideResult;
const rock = document.getElementById("rockButton").addEventListener("click", () => rockChoice(getComputerChoice()));
const paper = document.getElementById("paperButton").addEventListener("click", () => paperChoice(getComputerChoice()));
const scissors = document.getElementById("scissorsButton").addEventListener("click", () => scissorsChoice(getComputerChoice()));
const reset = document.getElementById("play").addEventListener("click", () => resetGame());
const openGameModal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#play");
const overlay = document.getElementById("overlay");




