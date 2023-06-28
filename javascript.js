let getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let computer = Math.floor(Math.random() * choices.length);
    
    return choices[computer]
}

let playRound = (playerSelection, computerSelection) => {
    let message = (playerSelection === computerSelection) ? "You Tie!" :
    (playerSelection === "rock" && computerSelection === "paper") ? "You lose! Paper beats rock!" :
    (playerSelection === "paper" && computerSelection === "rock") ? "You win! Paper beats rock!" :
    (playerSelection === "scissors" && computerSelection === "paper") ? "You win! Scissors beats paper!" :
    (playerSelection === "rock" && computerSelection === "scissors") ? "You win! Scissors beats rock!" :
    (playerSelection === "paper" && computerSelection === "scissors") ? "You lose! Scissors beats paper!" :
    (playerSelection === "scissors" && computerSelection === "rock") ? "You lose! Rock beats scissors!" :
    "Please choose rock, paper, or scissors.";

    return message
}

let game = () => {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose rock, paper, or scissors").toLowerCase();
        console.log(playerSelection);
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(computerSelection);
        const round = playRound(playerSelection, computerSelection);
        console.log(round);
        if (round.includes("lose")){
            computerScore += 1;
        } else if (round.includes("win")){
            playerScore += 1;
        } else {
            playerScore += 0;
            computerScore += 0;
        }
    }

    if (playerScore > computerScore){
        console.log("You won the match!")
    } else if (computerScore > playerScore) {
        console.log("You lost the match!")
    } else {
        console.log("It's a tie!")
    }
}

game();