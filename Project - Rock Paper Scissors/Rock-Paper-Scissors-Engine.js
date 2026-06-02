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
    document.getElementById("Outcome").textContent = "You Chose : " + UserInput + " | Computer Chose : "+ RandomOutput;
}

function WinPrint(UserInput) {
    document.getElementById("Result").textContent = "You Win";
    document.getElementById("Wins").textContent = "Wins : " + (Wins += 1);
    document.getElementById("Outcome").textContent = "You Chose : " + UserInput + " | Computer Chose : "+ RandomOutput;
}

function LossPrint(UserInput) {
    document.getElementById("Result").textContent = "You Lose";
    document.getElementById("Losses").textContent = "Losses : " + (Losses += 1);
    document.getElementById("Outcome").textContent = "You Chose : " + UserInput + " | Computer Chose : "+ RandomOutput;
}

function ResetFunction() {
    Wins = 0;
    Losses = 0;
    Draws = 0;

    document.getElementById("Wins").textContent = "Wins : 0";
    document.getElementById("Losses").textContent = "Losses : 0";
    document.getElementById("Draws").textContent = "Draws : 0";
    document.getElementById("Outcome").textContent = "Outcome Shows Up Here";
    document.getElementById("Result").textContent = "Start Playing !";
}




