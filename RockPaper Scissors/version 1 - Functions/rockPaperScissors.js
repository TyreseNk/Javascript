const prompt = require ("prompt-sync")();

let yourMove = prompt("rock, paper or scissors?: ");
let computerMove=pickComputerMove();
while(!(yourMove==="rock"||yourMove==="paper"||yourMove==="scissors")){
    yourMove = prompt("please type 'rock', 'paper' or 'scissors': ");
}
let result = decideWinner(computerMove,yourMove);

console.log(`you: ${yourMove} - computer: ${computerMove}.`);
console.log(result);

//functies
function pickComputerMove(){
    let rand = Math.random()
    let move ="";
    if(rand>=0&&rand<=1/3){
        move = "rock";
    } else if(rand>1/3&&rand<=2/3){
        move = "paper";
    }else{
        move = "scissors";
    }
    return move;
}

function decideWinner(computerMove,yourMove){
    if(computerMove===yourMove){
        return "draw";
    }else if(computerMove==="rock"&&yourMove==="paper"){
        return "you win";
    }else if(yourMove==="rock"&&computerMove==="paper"){
        return "you Lose";
    }else if(computerMove==="scissors"&&yourMove==="paper"){
        return "you win";
    }else if(yourMove==="scissors"&&computerMove==="paper"){
        return "you win";
    }else if(computerMove==="scissors"&&yourMove==="rock"){
        return "you win";
    }else if(yourMove==="scissors"&&computerMove==="rock"){
        return "you Lose";
    }
}
