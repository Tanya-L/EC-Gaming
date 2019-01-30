var level = localStorage.getItem('level') || 1;
var operation = "";

// first and second numbers for game
var firstNumber = 0;
var secondNumber = 0;

// Make list with 3 answers (2 wrong, 1 right)
var answer = [];

function prepareGame() {
    operation = "plus";
    // returns a random integer from 1 to 5
    firstNumber = Math.floor(Math.random() * 5) + 1;
    secondNumber = Math.floor(Math.random() * 5) + 1;

    // add wrong answers until we have 2
    while (answer.length < 2) {
        var variant = Math.floor(Math.random() * 10) + 1;
        if (variant == firstNumber + secondNumber) {
            continue;
        }
        if (answer.includes(variant)) {
            continue;
        }
        answer.push(variant);
    }

    // add right answer
    answer.push(firstNumber + secondNumber);

    // shuffle
    answer = answer
        .map(function (a) { return { sort: Math.random(), value: a }; })
        .sort(function (a, b) { return a.sort - b.sort; })
        .map(function (a) { return a.value; });
}

prepareGame();

// make image tag or 2 tags for the number 
function makeImgSrc(n) {
    var digit = n % 10;
    var result = "<img src='image/" + digit + ".png'>";
    if (n < 10) {
        return result;
    }
    return makeImgSrc(Math.floor(n / 10)) + result;
}

// display game state 
function display() {
    var element = document.getElementById("firstNumber");
    element.innerHTML = makeImgSrc(firstNumber);

    element = document.getElementById("operation");
    element.innerHTML = "<img src='image/" + operation + ".png' width='50'>";

    element = document.getElementById("secondNumber");
    element.innerHTML = makeImgSrc(secondNumber);

    for (var i = 0; i <= 2; i++) {
        element = document.getElementById("answer" + i);
        element.innerHTML = makeImgSrc(answer[i]);
    }
}

display();

// jQuery make onclick
$("#answer0").click(function () { checkAnswer(0); });
$("#answer1").click(function () { checkAnswer(1); });
$("#answer2").click(function () { checkAnswer(2); });

// check n-th answer in answer array
function checkAnswer(n) {
    console.log("n=" + n + " answer=" + answer);
    if (answer[n] == firstNumber + secondNumber) {
        localStorage.setItem('level', level + 1)
        window.location.href ="right.html";
    } else window.location.href ="wrong.html";
}

