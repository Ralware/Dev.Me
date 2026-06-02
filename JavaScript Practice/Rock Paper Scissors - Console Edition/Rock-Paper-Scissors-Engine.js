let RandomOutput;
let Wins = 0;
let Losses = 0;

function ComputerMove() {
    let RandomChoice = Math.random();
    if (RandomChoice < 1 / 3) {
        RandomOutput = "Rock";
    } else if (RandomChoice < 2 / 3) {
        RandomOutput = "Paper";
    } else {
        RandomOutput = "Scissors";
    }
}

function RockOutput() {
    if (RandomOutput === "Rock") {
        console.log("It's A DRAW!\nComputer Chose: " + RandomOutput + "\nYou Chose: Rock",);
        document.getElementById("Result").textContent = "It's A DRAW! , Computer Chose: " + RandomOutput + " , You Chose: Rock";
        document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + Losses;
    } else if (RandomOutput === "Paper") {
        console.log("You Have LOST!\nComputer Chose: " + RandomOutput + "\nYou Chose: Rock",);

        document.getElementById("Result").textContent = "You Have LOST! , Computer Chose: " + RandomOutput + " , You Chose: Rock";
        document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + (Losses += 1);
    } else {
        console.log("You Have WON!\nComputer Chose: " + RandomOutput + "\nYou Chose: Rock",);
        document.getElementById("Result").textContent = "You Have WON! , Computer Chose: " + RandomOutput + " , You Chose: Rock";
        document.getElementById("Count").textContent = "Wins : " + (Wins += 1) + " Losses : " + Losses;
    }
}

function PaperOutput() {
    if (RandomOutput === "Rock") {
        console.log("You Have WON!\nComputer Chose: " + RandomOutput + "\nYou Chose: Paper",);
        document.getElementById("Result").textContent = "You Have WON! , Computer Chose: " + RandomOutput + " , You Chose: Paper";
        document.getElementById("Count").textContent = "Wins : " + (Wins += 1) + " Losses : " + Losses;
    } else if (RandomOutput === "Paper") {
        console.log("It's A DRAW!\nComputer Chose: " + RandomOutput + "\nYou Chose: Paper",);
        document.getElementById("Result").textContent = "It's A DRAW! , Computer Chose: " + RandomOutput + " , You Chose: Paper";
        document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + Losses;
    } else {
        console.log("You Have LOST!\nComputer Chose: " + RandomOutput + "\nYou Chose: Paper",);
        document.getElementById("Result").textContent = "You Have LOST! , Computer Chose: " + RandomOutput + " , You Chose: Paper";
        document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + (Losses += 1);
    }
}

function ScissorsOutput() {
    if (RandomOutput === "Rock") {
        console.log("You Have LOST!\nComputer Chose: " + RandomOutput + "\nYou Chose: Scissors",);
        document.getElementById("Result").textContent = "You Have LOST! , Computer Chose: " + RandomOutput + " , You Chose: Scissors";
        document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + (Losses += 1);
    } else if (RandomOutput === "Paper") {
        console.log("You Have WON!\nComputer Chose: " + RandomOutput + "\nYou Chose: Scissors",);
        document.getElementById("Result").textContent = "You Have WON! , Computer Chose: " + RandomOutput + " , You Chose: Scissors";
        document.getElementById("Count").textContent = "Wins : " + (Wins += 1) + " Losses : " + Losses;
    } else {
        console.log("It's A DRAW!\nComputer Chose: " + RandomOutput + "\nYou Chose: Scissors",);
        document.getElementById("Result").textContent = "It's A DRAW! , Computer Chose: " + RandomOutput + " , You Chose: Scissors";
        document.getElementById("Count").textContent = "Wins : " + Wins + " Losses : " + Losses;
    }
}
