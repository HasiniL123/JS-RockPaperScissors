 

let Hscore = 0;
let Cscore = 0;
function getComputerChoice(){

    let x;
    let Cchoice;

    x = Math.random()
    

    if (x <= (1/3)){
        Cchoice = "rock";
    }else if (x> (1/3) && x <= (2/3)) {
    Cchoice = "paper";
    }else{
        Cchoice = "scissors"
    }

    

    return Cchoice;
}




 function getHumanChoice(){

    let Hchoice;

    Hchoice = prompt("What is your choice?")
    
    return Hchoice;
}



function playRound(Hchoice, Cchoice){
   
    let message;
    if ((Hchoice === "scissors"  && Cchoice ===  "paper")||
    (Hchoice === "paper" && Cchoice === "rock") ||
    (Hchoice === "rock" && Cchoice === "scissors")){
        message = "You won! " + Hchoice + " beats " + Cchoice +"!"
        Hscore += 1;


    } else if(Hchoice === Cchoice){
        message = "It's a tie!"
    } else{ 
        message = "You lost! " + Cchoice + " beats " + Hchoice +"!"
        Cscore +=1;
    }

    console.log(message)

}

function playGame(){
    let i = 0;

    while (i < 5){
        let Hchoice = getHumanChoice().toLowerCase();
        let Cchoice = getComputerChoice();

        console.log(playRound(Hchoice, Cchoice))
        i += 1;
    }

    console.log("humanScore: " + Hscore);
    console.log("computerScore: " + Cscore);

    if (Hscore > Cscore){
        console.log("You won!!")
    } else if(Hscore == Cscore){
        console.log("It's a tie!")
    }
    else{
        console.log("Computer won!!")
    } 

}

playGame();




 

