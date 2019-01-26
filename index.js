var level = 1;
var operation = "";

// first and second numbers for game
var firstNumber = 0;
var secondNumber = 0;

// Make list with 3 answers (2 wrong, 1 right)
var answer = [];

function prepareGame() {

    operation = "+";
    // returns a random integer from 1 to 5
    firstNumber = Math.floor(Math.random() * 5) + 1;
    secondNumber = Math.floor(Math.random() * 5) + 1;

    // add wrong answers until we have 2
    while (answer.length < 2) {
        var variant = Math.floor(Math.random() * 10) + 1;
        if (variant == firstNumber + secondNumber) {
            continue;
        }
        answer.push(variant);
    }

    // add right answer
    answer.push(firstNumber + secondNumber);

    // shuffle 
    answer.sort(function (a, b) {
        return Math.floor(Math.random() * 2);
    });

}

prepareGame();