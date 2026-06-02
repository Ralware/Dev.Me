let RandomOutput;
let Wins = 0;
let Losses = 0;
let Draws = 0;

function GameEngine(UserInput) {

    let RandomChoice = Math.random();
    if (RandomChoice < 1 / 3) {
        RandomOutput = "Rock";
    } else if (RandomChoice < 2 / 3) {
        RandomOutput = "Paper";
    } else {
        RandomOutput = "Scissors";
    }

    if (UserInput === RandomOutput) {
        DrawPrint(UserInput);
    } else if ((UserInput === "Rock" && RandomOutput === "Paper") || (UserInput === "Paper" && RandomOutput === "Scissors") || (UserInput === "Scissors" && RandomOutput === "Rock")) {
        LossPrint(UserInput);
    } else if ((UserInput === "Rock" && RandomOutput === "Scissors") || (UserInput === "Paper" && RandomOutput === "Rock") || (UserInput === "Scissors" && RandomOutput === "Paper")) {
        WinPrint(UserInput);

    }
}

function DrawPrint(UserInput) {
    console.log("It's A DRAW!\nComputer Chose: " + RandomOutput + "\nYou Chose: " + UserInput);
    document.getElementById("Result").textContent = "It's A DRAW! , Computer Chose: " + RandomOutput + " , You Chose: " + UserInput;
    document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + Losses + " Draws : " + (Draws += 1);
}

function WinPrint(UserInput) {
    console.log("You Have WON!\nComputer Chose: " + RandomOutput + "\nYou Chose: " + UserInput);
    document.getElementById("Result").textContent = "You Have WON! , Computer Chose: " + RandomOutput + " , You Chose: " + UserInput;
    document.getElementById("Count").textContent = "Wins : " + (Wins += 1) + " Losses : " + (Losses) + " Draws : " + (Draws);
}

function LossPrint(UserInput) {
    console.log("You Have LOST!\nComputer Chose: " + RandomOutput + "\nYou Chose: " + UserInput);
    document.getElementById("Result").textContent = "You Have LOST! , Computer Chose: " + RandomOutput + " , You Chose: " + UserInput;
    document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + (Losses += 1) + " Draws : " + (Draws);
}




