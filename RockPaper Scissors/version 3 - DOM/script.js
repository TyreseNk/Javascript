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

updateScoreElement();

//functies
function play(move){
    const computerMove=pickComputerMove();
    const result = decideWinner(computerMove,move);
    updateResultElement(result)
    updateObject(result)
    updateChosenMovesElement(computerMove,move)
    updateScoreElement();
    saveScore();
}

function saveScore(){
    let scoreString = JSON.stringify(score)
    localStorage.setItem("score",scoreString);
}

function updateScoreElement(){
    const scoreElement = document.querySelector("#score");
    scoreElement.innerHTML =`wins: ${score.wins} - Losses: ${score.Losses} - Draws: ${score.draws}`;
}

function updateChosenMovesElement(computerMove,yourMove){
    const chosenMovesElement = document.querySelector("#chosen-moves")
    chosenMovesElement.innerHTML =`you: ${yourMove} - computer: ${computerMove}.`;
}

function updateResultElement(result){
    const resultElement  = document.querySelector("#result")
    if( result == "draw"){
        resultElement.innerHTML = 'draw!'; 
    }else{
        resultElement.innerHTML = `you ${result}!` 
    }
    
}

function updateObject (result){
    switch(result){
        case"win" :  
            score.wins++;
        break;
        case "lose" : 
            score.Losses++;
        break;
        case "draw":
            score.draws++;
        break;
        default:
        break;
    }
}

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
        return "win";
    }else if(yourMove==="paper"&&computerMove==="scissors"){
        return "lose";
    }else if(yourMove==="scissors"&&computerMove==="paper"){
        return "win";
    }else if(yourMove==="scissors"&&computerMove==="rock"){
        return "lose";
    }else if(yourMove==="rock"&&computerMove==="scissors"){
        return "win";
    }else if(yourMove==="rock"&&computerMove==="paper"){
        return "lose";
    }
}
function resetScore(){
    score.wins = 0;
    score.Losses = 0;
    score.draws = 0;
    updateScoreElement();
}
