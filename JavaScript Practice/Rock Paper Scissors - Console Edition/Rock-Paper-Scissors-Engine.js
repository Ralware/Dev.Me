let RandomOutput;

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
        console.log(
            "It's A DRAW!\nComputer Chose: " + RandomOutput + "\nYou Chose: Rock",
        );
    } else if (RandomOutput === "Paper") {
        console.log(
            "You Have LOST!\nComputer Chose: " + RandomOutput + "\nYou Chose: Rock",
        );
    } else {
        console.log(
            "You Have WON!\nComputer Chose: " + RandomOutput + "\nYou Chose: Rock",
        );
    }
}

function PaperOutput() {
    if (RandomOutput === 'Rock') {
        console.log(
            'You Have WON!\nComputer Chose: ' +
            RandomOutput +
            '\nYou Chose: Paper',
        );
    } else if (RandomOutput === 'Paper') {
        console.log(
            'It\'s A DRAW!\nComputer Chose: ' +
            RandomOutput +
            '\nYou Chose: Paper',
        );
    } else {
        console.log(
            'You Have LOST!\nComputer Chose: ' +
            RandomOutput +
            '\nYou Chose: Paper',
        );
    }
}

function ScissorsOutput() {
    if (RandomOutput === 'Rock') {
        console.log(
            'You Have LOST!\nComputer Chose: ' +
            RandomOutput +
            '\nYou Chose: Scissors',
        );
    } else if (RandomOutput === 'Paper') {
        console.log(
            'You Have WON!\nComputer Chose: ' +
            RandomOutput +
            '\nYou Chose: Scissors',
        );
    } else {
        console.log(
            'It\'s A DRAW!\nComputer Chose: ' +
            RandomOutput +
            '\nYou Chose: Scissors',
        );
    }
}