let choices=["rock","paper","scissor"];
function getComputerChoice(){
    let random=Math.floor(Math.random()*choices.length);
    return choices[random];
}
function playRound(playerSelection,computerSelection){
    if(playerSelection==="rock" && computerSelection==="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection==="rock" && computerSelection==="scissor"){
        return "You Win! Rock beats Scissor";
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection==="paper" && computerSelection==="scissor"){
        return "You Lose! Scissor beats paper";
    }
    else if(playerSelection==="scissor" && computerSelection==="rock"){
        return "You Lose! Rock beats Scissor";
    }
    else if(playerSelection==="scissor" && computerSelection==="paper"){
        return "You Win! Scissor beats Paper";
    }
    else if(playerSelection===computerSelection){
        return "tie";
    }
    else{
        return "wrong";
    }
}
function game(){
    let win=0;
    let lose=0;
    let round;
    let playerSelection;
    let computerSelection;
    for(let i=0;i<5;i++){
        playerSelection=prompt("Whats your choice");
        playerSelection=playerSelection.toLowerCase();
        computerSelection=getComputerChoice();
        round=playRound(playerSelection,computerSelection);
        console.log(round);
        if(round==="tie"){
            continue;
        }
        else if(round==="wrong"){
            console.log("invalid choice");
            console.log("Try again");
            i--;
            continue;
        }
        else if(round[4]==="W"){
            win++;
        }
        else if(round[4]==="L"){
            lose++;
        }
    }
    if(win>lose){
        console.log("Ohhh! you have Won the Great war.")
    }
    else{
        console.log("Sorry soldier you have been defeated.");
    }
}
game();