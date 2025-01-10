function getComputerChoice(){
    let random = (Math.random()*3); 
    let choice = (random<1) ? "rock" : 
    (random<2) ? "paper" : "scissors";
    return choice;
}

let container = document.querySelector("#buttons");
let buttons = container.children; 
let scoreboard = document.querySelector("#scoreboard");
let human = scoreboard.children[0];
let computer = scoreboard.children[1];

[...buttons].forEach(button =>{
    button.setAttribute("id", button.textContent.toLowerCase()); 
})

function clickIt(e){
    let clicked = e.target; 
    clicked.style.outline = "2px solid black"; 
    clicked.style.backgroundColor = "#FFFF00"; 
}

function unClickIt(e){
    let clicked = e.target; 
    clicked.style.outline = ""; 
    clicked.style.backgroundColor = ""; 
}


let computerScore = 0;
let humanScore = 0;
function playRound(e){
    let humanChoice = e.target.getAttribute("id");
   
    let computerChoice = getComputerChoice(); 
    console.log(`Computer ${computerChoice} vs your ${humanChoice}`);
    if (humanChoice === computerChoice){
        console.log(`The computer also played ${computerChoice}. It's a draw!`);
    }
    else if(humanChoice === "rock"){
        (computerChoice === "paper") ? computerScore++ : humanScore++; 

    }
    else if (humanChoice === "paper"){
        (computerChoice==="scissors") ? computerScore++ : humanScore++; 
    }
    else{   
        (computerChoice==="rock") ? computerScore++ : humanScore++;
    }
    displayMatchup(humanChoice, computerChoice);
    updateScore();
}

let computerImg = document.querySelectorAll("img")[1];
let humanImg = document.querySelectorAll("img")[0];
let versus = document.querySelector("#versus");
let labels = document.querySelectorAll("div > p");
let compLabel = labels[1];
let humanLabel = labels[0];
const visual = document.querySelector("#visual");
    

function displayMatchup(humanChoice, computerChoice){
    visual.style.display = "flex";
    computerImg.src = `./${computerChoice}.jpg`; 
    humanImg.src = `./${humanChoice}.jpg`;
    versus.textContent="VS."
    humanLabel.textContent = "HUMAN";
    compLabel.textContent = "COMPUTER";
}

let humScore = document.querySelector("#humScore");
let compScore = document.querySelector("#compScore");

let declareWinner = document.createElement("div");

let winner; 
function updateScore(){
    if(computerScore===5 || humanScore===5){
        if(computerScore===5){
            winner = "COMPUTER";
            compLabel.style.color = "green";
        }
        else{
            winner = "HUMAN";
            humanLabel.style.color = "green";
        }
        scoreboard.replaceWith(declareWinner); 
        declareWinner.textContent = `WINNER: ${winner}`;
        declareWinner.style.cssText = "padding: 5px; border: 4px solid red; width: fit-content; margin-top: 50px; margin-left: auto; margin-right: auto; font-weight: bold; text-align: center; font-size: 30px;"; 
        [...buttons].forEach(button => button.removeEventListener("click", playRound)); 
        [...buttons].forEach(button => button.removeEventListener("mousedown", clickIt)); 
        [...buttons].forEach(button => button.removeEventListener("mouseup", unClickIt)); 
        let playAgain = document.createElement("div");
        playAgain.setAttribute("id", "playAgain");
        playAgain.textContent = "Play again";
        document.body.appendChild(playAgain);
        
        playAgain.addEventListener("click", resetGame);
        playAgain.addEventListener("mousedown", clickIt); 
        playAgain.addEventListener("mouseup", unClickIt); 
        
        return;
    }
    humScore.textContent = `${humanScore}`;
    compScore.textContent = `${computerScore}`;
    
}

function resetGame(){
    computerScore = 0;
    humanScore = 0; 
    humScore.textContent = `${humanScore}`;
    compScore.textContent = `${computerScore}`;
    declareWinner.replaceWith(scoreboard);
    computerImg.src = ""; 
    humanImg.src = "";
    visual.style.display = "none";
    humanLabel.style.color = "";
    compLabel.style.color = "";
    playAgain.remove();
    [...buttons].forEach(button => button.addEventListener("click", playRound)); 
    [...buttons].forEach(button => button.addEventListener("mousedown", clickIt)); 
    [...buttons].forEach(button => button.addEventListener("mouseup", unClickIt)); 
}

[...buttons].forEach(button => button.addEventListener("click", playRound)); 
[...buttons].forEach(button => button.addEventListener("mousedown", clickIt)); 
[...buttons].forEach(button => button.addEventListener("mouseup", unClickIt)); 
