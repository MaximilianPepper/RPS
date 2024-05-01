const options = ["rock","scissor","paper"];
let humanScore = 0;
let computerScore = 0;
const but1 = document.querySelector("#one");
const but2 = document.querySelector("#two");
const but3 = document.querySelector("#three");
const result = document.querySelector("#result")

const para = document.querySelector("#gameover");


function getComputerChoice()
{
    let rng = Math.floor(Math.random()*3);
    return options[rng];
}
/*function getHumanChoice()
{
    let choice = prompt("Enter rock, paper or scissor!");
    choice = choice.toLowerCase();
    console.log(choice);
    if (choice != options[0] && choice != options[1] && choice != options[2] )
    {   
        console.log("Enter a valid input");
        return getHumanChoice();
    }
    return choice;
} */
function playRound(humanSelection, computerSelection)
{   
    if (humanSelection === computerSelection) {result.textContent= `You tie`}
    else if (humanSelection === "rock" && computerSelection === "scissor") {result.textContent= `You win! ${humanSelection} beats ${computerSelection}`;humanScore++;}
    else if (humanSelection === "paper" && computerSelection === "rock") {result.textContent= `You win! ${humanSelection} beats ${computerSelection}`;humanScore++;}
    else if (humanSelection === "scissor" && computerSelection === "paper") {result.textContent=`You win! ${humanSelection} beats ${computerSelection}`;humanScore++;}
    else {result.textContent=`You lose! ${computerSelection} beats ${humanSelection}`;computerScore++;}
}
/*function playGame()
{
    for (let i = 0; i <5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore>computerScore){console.log(`You win ${humanScore} to ${computerScore}`)}
    else if (humanScore<computerScore){console.log(`You lose ${humanScore} to ${computerScore}`)}
    else {console.log(`You tie ${humanScore} to ${computerScore}`)}
} */
function youWin(){
    if (humanScore === 5){
        para.textContent = `You win the game ${humanScore} to ${computerScore}`;
    }
    if (computerScore === 5){
        para.textContent = `You lose the game ${humanScore} to ${computerScore}`;   
    }
}
but1.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
    youWin();
})
but2.addEventListener("click",()=>{
    playRound("paper",getComputerChoice());
    youWin();
})
but3.addEventListener("click",()=>{
    playRound("scissor",getComputerChoice());
    youWin();
})




