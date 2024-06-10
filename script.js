const displayYourMove=document.getElementById("playerChoice");
const dispalyAiMove=document.getElementById("aiChoice");
const displayResult=document.getElementById("result");
const displayModal=document.getElementById("modal");
const displayWins=document.getElementById("wins");
const displayDraws=document.getElementById("draws");
const displayLosses=document.getElementById("losses");
const randomNumber=Math.random();


const score=JSON.parse(localStorage.getItem('score'))||{
    Draws:0,
    Wins:0,
    Losses:0
};

displayDraws.textContent=score.Draws;
displayLosses.textContent=score.Losses;
displayWins.textContent=score.Wins;


function appendToDisplay(input)
{
    const randomNumber=Math.random();
    const aiMove=PCMove(randomNumber);
    const result=Result(input,randomNumber);
    displayModal.style.display='flex';
    displayYourMove.textContent=input;
    console.log(aiMove);
    dispalyAiMove.textContent=aiMove;
    displayResult.textContent=result;
    if(result==='Win'){
        score.Wins++;
    }else if(result==='Lose'){
        score.Losses++;
    }else score.Draws++;

    
    displayDraws.textContent=score.Draws;
    displayLosses.textContent=score.Losses;
    displayWins.textContent=score.Wins;

    localStorage.setItem('score',JSON.stringify(score));
}




function PCMove(randomNumber){
    let computerMove='';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='Rock';
    }else if(randomNumber>= 1/3 && randomNumber<2/3){
        computerMove='Paper';
    }else if(randomNumber>= 2/3 && randomNumber<1){
        computerMove='Scissors';
    }
   return computerMove;
}

function Result(input,randomNumber){
    if(input==='Rock'&&PCMove(randomNumber)==='Rock'){
     return 'Draw';
    }else if(input==='Rock'&&PCMove(randomNumber)==='Paper'){
        return 'Lose';
    }else if(input==='Rock'&&PCMove(randomNumber)==='Scissors'){
        return 'Win';
    }

    if(input==='Paper'&&PCMove(randomNumber)==='Rock'){
        return 'Win';
       }else if(input==='Paper'&&PCMove(randomNumber)==='Paper'){
           return 'Draw';
       }else if(input==='Paper'&&PCMove(randomNumber)==='Scissors'){
           return 'Lose';
       }

    if(input==='Scissors'&&PCMove(randomNumber)==='Rock'){
        return 'Lose';
       }else if(input==='Scissors'&&PCMove(randomNumber)==='Paper'){
           return 'Win';
       }else if(input==='Scissors'&&PCMove(randomNumber)==='Scissors'){
           return 'Draw';
       }   

       

    
     
}


const closeModal=()=>{
    displayModal.style.display='none';
}


function resetScore(){
       score.Draws=0;
       score.Wins=0;
       score.Losses=0;
       displayDraws.textContent=score.Draws;
       displayLosses.textContent=score.Losses;
       displayWins.textContent=score.Wins;
}


