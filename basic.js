let choices=["rock","paper","scissor"];
let win=0,lose=0,round,playerSelection,computerSelection;
function getComputerChoice(){
    let random=Math.floor(Math.random()*choices.length);
    return choices[random];
}
function checkEmpty(){
    if(classResult.childElementCount!=0){
        classResult.removeChild(resultDis);
    }
}
function playRound(playerSelection,computerSelection){
    if(playerSelection==="rock" && computerSelection==="paper"){
        return "You Lose! Rock was not able to move";
    }
    else if(playerSelection==="rock" && computerSelection==="scissor"){
        return "You Win! The scissor was destroyed";
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        return "You Win! Rock was not able tear your paper";
    }
    else if(playerSelection==="paper" && computerSelection==="scissor"){
        return "You Lose! You were torn into pieces";
    }
    else if(playerSelection==="scissor" && computerSelection==="rock"){
        return "You Lose! The rock destroyed you";
    }
    else if(playerSelection==="scissor" && computerSelection==="paper"){
        return "You Win! You tore him to pieces";
    }
    else if(playerSelection===computerSelection){
        return "Ohh you both chose the same";
    }
}
function result(roundResult){
    if(win!=5 && lose!=5){
        if(roundResult[4]=="W"){
            checkEmpty();
            resultDis.textContent=roundResult;
            classResult.appendChild(resultDis);
            win++;
            yourScore.textContent=win;
        }
        else if(roundResult[4]=="L"){
            checkEmpty();
            resultDis.textContent=roundResult;
            classResult.appendChild(resultDis);
            lose++;
            compScore.textContent=lose;
        }
        else if(roundResult=="Ohh you both chose the same"){
            checkEmpty();
            resultDis.textContent=roundResult;
            classResult.appendChild(resultDis);
        }
    }
    if(win==5){
        checkEmpty();
        resultDis.textContent="Great champ you have destroyed COMP";
        classResult.appendChild(resultDis);
        classResult.appendChild(resetResult);
    }
    else if(lose==5){
        checkEmpty();
        resultDis.textContent="Sorry LOSER you were destroyed";
        classResult.appendChild(resultDis);
        classResult.appendChild(resetResult);
    }
}
const paper=document.querySelector(".paper");
const rock=document.querySelector(".rock");
const scissor=document.querySelector(".scissor");
const classResult=document.querySelector(".result");
const resultDis=document.createElement("h2");
const resetResult=document.createElement('button');
resetResult.textContent="REPLAY";
resetResult.style.cssText="all:unset;width:120px;height:70px;background:red;text-align:center;font-size:20px;border-radius:8%"
const yourScore=document.querySelector("#yourScore");
const compScore=document.querySelector("#compScore");
resetResult.onclick=()=>{
    checkEmpty();
    classResult.removeChild(resetResult);
    yourScore.textContent="0";
    compScore.textContent="0";
    win=0;
    lose=0;
}

paper.onclick=()=>{
    playerSelection="paper";
    round=playRound(playerSelection,getComputerChoice());
    result(round);
}
rock.onclick=()=>{
    playerSelection="rock";
    round=playRound(playerSelection,getComputerChoice());
    result(round);
}
scissor.onclick=()=>{
    playerSelection="scissor";
    round=playRound(playerSelection,getComputerChoice());
    result(round);
}
    