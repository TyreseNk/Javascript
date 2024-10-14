let yourmove = "Paper";
function pickComputerMove(){
    let rand = Math.random()
    let move ="";
    console.log(rand);
    if(rand>=0&&rand<=1/3){
        move = "Rock";
    } else if(rand>1/3&&rand<=2/3){
        move = "Paper";
    }else{
        move = "Scissors";
    }
    return move;
}

let computermove=pickComputerMove();

function decideWinner(computermove,yourmove){
    if(computermove===yourmove){
        return "draw";
    }else if(computermove==="Rock"&&yourmove==="Paper"){
        return "you win";
    }else if(yourmove==="Rock"&&computermove==="Paper"){
        return "you Lose";
    }else if(computermove==="Scissors"&&yourmove==="Paper"){
        return "you win";
    }else if(yourmove==="Scissors"&&computermove==="Paper"){
        return "you win";
    }else if(computermove==="Scissors"&&yourmove==="Rock"){
        return "you win";
    }else if(yourmove==="Scissors"&&computermove==="Rock"){
        return "you Lose";
    }
}
