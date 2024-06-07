const displayYourMove=document.getElementById("yourMove");
const dispalyAiMove=document.getElementById("aiMove");
const displayResult=document.getElementById("Result");
const randomNumber=Math.random();



function appendToDisplay(input)
{
    const randomNumber=Math.random();
    const aiMove=PCMove(randomNumber);
    const result=Result(input,randomNumber);
    displayYourMove.value=input;
    dispalyAiMove.value=aiMove;
    displayResult.value=result;
    console.log(result);
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
