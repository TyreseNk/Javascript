//initiatie input
const prompt = require ("prompt-sync")();
//initiatie localstorage
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage; 
    localStorage = new LocalStorage('./scratch');
}
//maak object
let score = {
    wins: 0,
    Losses:0,
    draws:0
};
//controle of er al een score in de local storage zit
let savedscore = localStorage.getItem("score");
if(savedscore){
    //zet JSON string om naar object
    score = JSON.parse(savedscore);
}

//programma
let yourMove = prompt("rock, paper or scissors?: ");
while(!(yourMove==="rock"||yourMove==="paper"||yourMove==="scissors")){
    yourMove = prompt("please type 'rock', 'paper' or 'scissors': ");
}

let computerMove=pickComputerMove();

console.log(`you: ${yourMove} - computer: ${computerMove}.`);

let result = decideWinner(computerMove,yourMove);
if(result=="Win"){
    console.log("you win");
    score.wins++;
}else if(result=="Lose"){
    console.log("you lose!");
    score.Losses++;
}else{
    console.log("its a draw!");
    score.draws++;
}

console.log(`wins: ${score.wins} - Losses: ${score.Losses} - Draws: ${score.draws}`);

//slaat de score op in local storage
let scoreString = JSON.stringify(score)
localStorage.setItem("score",scoreString);

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
    }else if(yourMove==="paper"&&computerMove==="rock"){
        return "Win";
    }else if(yourMove==="paper"&&computerMove==="scissors"){
        return "Lose";
    }else if(yourMove==="scissors"&&computerMove==="paper"){
        return "Win";
    }else if(yourMove==="scissors"&&computerMove==="rock"){
        return "Lose";
    }else if(yourMove==="rock"&&computerMove==="scissors"){
        return "Win";
    }else if(yourMove==="rock"&&computerMove==="paper"){
        return "Lose";
    }
}
