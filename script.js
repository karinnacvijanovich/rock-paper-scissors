let humanScore =0;
let computerScore =0; 

function getComputerChoice(){
    let random = (Math.random()*3); 
    let choice = (random<1) ? "rock" : 
    (random<2) ? "paper" : "scissors";
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?","Rock");
    return choice; 
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    console.log(`Computer ${computerChoice} vs your ${humanChoice}`);
    if (humanChoice === computerChoice){
        console.log(`The computer also played ${computerChoice}. It's a draw!`);
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    else if(humanChoice === "rock"){
        (computerChoice === "paper") ? computerWins() : humanWins(); 
    }
    else if (humanChoice === "paper"){
        (computerChoice==="scissors") ? computerWins() : humanWins(); 
    }
    else if (humanChoice === "scissors"){   
        (computerChoice==="rock") ? computerWins() : humanWins();
    }
}

function humanWins(){
    console.log("You won :)"); 
    humanScore++; 
}

function computerWins(){
    console.log("You lost :(");
    computerScore++;
}

function playGame(){
    let humanChoice, computerChoice; 
    let numRounds=0;
    while(numRounds<5){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice); 
        numRounds++;
    }
    console.log(`OVERALL WINNER: ${(computerScore>humanScore) ? "computer :(" : "you :)"}`); 
}

