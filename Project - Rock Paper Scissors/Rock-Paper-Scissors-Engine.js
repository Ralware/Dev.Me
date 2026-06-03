let RandomOutput = '';
let Outcome = '';
const GameVariables =
{
    Win: 0,
    Loss: 0,
    Draw: 0,
};

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
        Outcome = 'Draw';
        OutcomePrint(UserInput, Outcome);
    } else if ((UserInput === "Rock" && RandomOutput === "Paper") || (UserInput === "Paper" && RandomOutput === "Scissors") || (UserInput === "Scissors" && RandomOutput === "Rock")) {
        Outcome = 'Loss'
        OutcomePrint(UserInput, Outcome);
    } else if ((UserInput === "Rock" && RandomOutput === "Scissors") || (UserInput === "Paper" && RandomOutput === "Rock") || (UserInput === "Scissors" && RandomOutput === "Paper")) {
        Outcome = 'Win'
        OutcomePrint(UserInput, Outcome);

    }

}

function OutcomePrint(UserInput, Outcome) {
    document.getElementById("Result").textContent = Outcome;
    document.getElementById(Outcome).textContent = ++GameVariables[Outcome];
    document.getElementById("YourChoice").textContent = "You Chose : " + UserInput;
    document.getElementById("ComputerChoice").textContent = "Computer Chose : " + RandomOutput;
}

function ResetFunction() {
    GameVariables.Draw = 0;
    GameVariables.Win = 0;
    GameVariables.Loss = 0;
    Outcome = '';
    RandomOutput = '';
    ResetPrint();
}

function ResetPrint() {
    document.getElementById("Win").textContent = "0";
    document.getElementById("Loss").textContent = "0";
    document.getElementById("Draw").textContent = "0";
    document.getElementById("YourChoice").textContent = "Your Choice Shows Up Here";
    document.getElementById("ComputerChoice").textContent = "Computer Choice Shows Up Here";
    document.getElementById("Result").textContent = "Start Playing !";
}




