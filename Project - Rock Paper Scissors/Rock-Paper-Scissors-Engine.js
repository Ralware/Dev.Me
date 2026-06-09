let RandomOutput = '';
let Outcome = '';
let IsAutoPlaying = false;
let IntervalID;

const SavedGame = JSON.parse(localStorage.getItem("GameVariables"));

const GameVariables = SavedGame || {
    Win: 0,
    Loss: 0,
    Draw: 0,
};

document.getElementById("Win").innerHTML = GameVariables.Win;
document.getElementById("Loss").innerHTML = GameVariables.Loss;
document.getElementById("Draw").innerHTML = GameVariables.Draw;

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
    PrintChoice(UserInput);
    PrintComputerChoice();
    localStorage.setItem("GameVariables", JSON.stringify(GameVariables));
}

function ResetFunction() {
    GameVariables.Draw = 0;
    GameVariables.Win = 0;
    GameVariables.Loss = 0;
    Outcome = '';
    RandomOutput = '';
    localStorage.setItem("GameVariables", JSON.stringify(GameVariables));
    ResetPrint();
}

function ResetPrint() {
    document.getElementById("Win").textContent = "0";
    document.getElementById("Loss").textContent = "0";
    document.getElementById("Draw").textContent = "0";
    document.getElementById("You-Choose-Text").textContent = "Your Choice Shows Up Here";
    document.getElementById("Computer-Chose-Text").textContent = "Computer Choice Shows Up Here";
    document.getElementById("Result").textContent = "Start Playing !";
    document.querySelector('.Choice').innerHTML = '';
    document.querySelector('.Output').innerHTML = '';
}
function PrintChoice(UserInput) {
    if (UserInput === 'Rock') {
        document.getElementById("You-Choose-Text").textContent = "Your Choice : ";
        document.querySelector('.Choice').innerHTML = '<img alt="Your Choice" class="Icons" src="Sources/Rock.Icon.png">';
    }
    else if (UserInput === 'Paper') {
        document.getElementById("You-Choose-Text").textContent = "Your Choice : ";
        document.querySelector('.Choice').innerHTML = '<img alt="Your Choice" class="Icons" src="Sources/Paper.Icon.png">';
    }
    else if (UserInput === 'Scissors') {
        document.getElementById("You-Choose-Text").textContent = "Your Choice : ";
        document.querySelector('.Choice').innerHTML = '<img alt="Your Choice" class="Icons" src="Sources/Scissors.Icon.png">';
    }
}

function PrintComputerChoice() {
    if (RandomOutput === 'Rock') {
        document.getElementById("Computer-Chose-Text").textContent = "Computer Choice : ";
        document.querySelector('.Output').innerHTML = '<img alt="Your Choice" class="Icons" src="Sources/Rock.Icon.png">';
    }
    else if (RandomOutput === 'Paper') {
        document.getElementById("Computer-Chose-Text").textContent = "Computer Choice : ";
        document.querySelector('.Output').innerHTML = '<img alt="Your Choice" class="Icons" src="Sources/Paper.Icon.png">';
    }
    else if (RandomOutput === 'Scissors') {
        document.getElementById("Computer-Chose-Text").textContent = "Computer Choice : ";
        document.querySelector('.Output').innerHTML = '<img alt="Your Choice" class="Icons" src="Sources/Scissors.Icon.png">';
    }
}

/* Project Completed ! */

function AutoChoose() {

    if (!IsAutoPlaying) {

        document.getElementById('AutomatedPlay').innerText = "Stop Auto Play";

        IntervalID = setInterval(function () {

            let RandomChoice = Math.random();
            let AutoOutput = "";

            if (RandomChoice < 1 / 3) {
                AutoOutput = "Rock";
            } else if (RandomChoice < 2 / 3) {
                AutoOutput = "Paper";
            } else {
                AutoOutput = "Scissors";
            }

            GameEngine(AutoOutput);

        }, 1500);

        IsAutoPlaying = true;

    } else {

        clearInterval(IntervalID);
        document.getElementById('AutomatedPlay').innerText = "Start Auto Play";
        IsAutoPlaying = false;

    }
}

document.getElementById('AutomatedPlay').addEventListener("click",AutoChoose);


