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
    document.getElementById("Result").textContent = "Draw";
    document.getElementById("Draws").textContent = "Draws : " + (Draws += 1);
}

function WinPrint(UserInput) {
    document.getElementById("Result").textContent = "You Win";
    document.getElementById("Wins").textContent = "Wins : " + (Wins += 1);
}

function LossPrint(UserInput) {
    document.getElementById("Result").textContent = "You Lose";
    document.getElementById("Losses").textContent = "Losses : " + (Losses += 1);
}




