let getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let computer = Math.floor(Math.random() * choices.length);
    
    return choices[computer]
}

let playRound = (playerSelection, computerSelection) => {
    (playerSelection === computerSelection) ? console.log("You Tie!") :
    (playerSelection === "rock" && computerSelection === "paper") ? console.log("You lose! Paper beats rock!") :
    (playerSelection === "paper" && computerSelection === "rock") ? console.log("You win! Paper beats rock!") :
    (playerSelection === "scissors" && computerSelection === "paper") ? console.log("You win! Scissors beats paper!") :
    (playerSelection === "rock" && computerSelection === "scissors") ? console.log("You win! Scissors beats rock!") :
    (playerSelection === "paper" && computerSelection === "scissors") ? console.log("You lose! Scissors beats paper!") :
    (playerSelection === "scissors" && computerSelection === "rock") ? console.log("You lose! Rock beats scissors!") :
    console.log("Please choose rock, paper, or scissors.");

}



let game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose rock, paper, or scissors").toLowerCase();
        console.log(playerSelection);
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
    }
}

game();