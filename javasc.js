let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#mes");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3)
    return options[randomIdx];
}
const drawGame = () =>{
    console.log("Game was Draw.");
    msg.innerText="game was Draaw. Play Again";
};
let showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
userScore++;
userScorepara.innerText=userScore;
        console.log("you Win!");
       msg.innerText='You Win! ';
       msg.style.backgroundcolor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You lose! ");
        msg.innerText="You Lose..!";
    }
}
const playGame=(userChoice)=>{
console.log("userChoice=",userChoice);
const compChoice=genCompChoice();
console.log("compChoice=",compChoice);
if(userChoice===compChoice){
drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice="paper"){
        userWin=compChoice==="scissor"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin, compChoice,userChoice);

}
};


choices.forEach((choice) =>{
  
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});