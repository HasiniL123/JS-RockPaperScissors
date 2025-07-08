 

let Hscore, Cscore = 0;
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






let Hchoice = getHumanChoice().toLowerCase();
console.log("Hchoice:" + Hchoice);

let Cchoice = getComputerChoice();
console.log("Cchoice:" + Cchoice);

console.log(playRound(Hchoice, Cchoice)) 

