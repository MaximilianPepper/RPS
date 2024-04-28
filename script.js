const options = ["rock","scissor","paper"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let rng = Math.floor(Math.random()*3);
    return options[rng];
}
function getHumanChoice()
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
}
function playRound(humanSelection, computerSelection)
{   
    if (humanSelection === computerSelection) {console.log(`You tie`)}
    else if (humanSelection === "rock" && computerSelection === "scissor") {console.log(`You win! ${humanSelection} beats ${computerSelection}`);humanScore++;}
    else if (humanSelection === "paper" && computerSelection === "rock") {console.log(`You win! ${humanSelection} beats ${computerSelection}`);humanScore++;}
    else if (humanSelection === "scissor" && computerSelection === "paper") {console.log(`You win! ${humanSelection} beats ${computerSelection}`);humanScore++;}
    else {console.log(`You lose! ${computerSelection} beats ${humanSelection}`);computerScore++;}
}
function playGame()
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
}
playGame();
