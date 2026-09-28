const prompt = require('prompt-sync')();
var points = 0;
var lives = 3;
var easy = 0;
var medium = 0;
var hard = 0;
var num1 = 0;
var num2 = 0;
var operator = ""
var realAnswer = 0;
function selectGamemode() {
    let gamemode = Number(prompt("Select gamemode 1 for max mode 2 for three out"));
    if (gamemode === 1) {
        gamemode = "max";
        console.log("You have selected max mode")
    } else if (gamemode === 2) {
        gamemode = "three-out";
        console.log("You have selected three out mode")
    }
    let difficulty = prompt("Choose your difficulty: (easy, medium, or hard");
    if (difficulty === "easy") {
        console.log("You chose easy difficulty");
        easy = 1;
        medium = 0;
        hard = 0;
    } else if (difficulty === "medium") {
        console.log("You chose medium difficulty")
        easy = 0;
        medium = 2
        hard = 0;
    } else if (difficulty === "hard") {
        console.log("You chose hard difficulty")
        easy = 0;
        medium = 0;
        hard = 3
    }
    return gamemode;
}

function generateOperator() {
    // let difficulty = selectGamemode();
    if (easy === 1) {
        let pick = Math.floor(Math.random() * 2) + 1;
        if (pick === 1) {
            operator = "+";

        }
        if (pick === 2) {
            operator = "-";
        }
        num1 = Math.floor(Math.random() * 9) + 1;
        num2 = Math.floor(Math.random() * 9) + 1

        if (operator === "+") {
            realAnswer = num1 + num2;
        } else {
            realAnswer = num1 - num2;
        }

    } else if (medium === 2) {
        let pick = Math.floor(Math.random() * 5) + 1

        if (pick === 1) operator = "+"
        if (pick === 2) operator = "-"
        if (pick === 3) operator = "*"
        if (pick === 4) operator = "/"
        if (pick === 5) operator = "%"

        if (operator === "+" || operator === "-") {
            num1 = Math.floor(Math.random() * 99) + 1;
            num2 = Math.floor(Math.random() * 99) + 1;
        }
        if (operator === "*" || operator === "/" || operator === "%") {
            num1 = Math.floor(Math.random() * 9) + 1
            num2 = Math.floor(Math.random() * 9) + 1
        }
        if (operator === "+") realAnswer = num1 + num2;
        if (operator === "-") realAnswer = num1 - num2;
        if (operator === "*") realAnswer = num1 * num2;
        if (operator === "/") realAnswer = num1 / num2;
        if (operator === "%") realAnswer = num1 % num2;

    } else if (hard === 3) {
        let pick = Math.floor(Math.random()*5)+1;
        if (pick === 1) operator = "+";
        if (pick === 2) operator = "-"
        if (pick === 3) operator = "*"
        if (pick === 4) operator = "/"
        if (pick === 5) operator = "%"

        if (operator === "+" || operator === "-") {
            num1 = Math.floor(Math.random() * 999) + 1;
            num2 = Math.floor(Math.random() * 999) + 1;
        }
        if (operator === "*" || operator === "/") {
            num1 = Math.floor(Math.random() * 99) + 1;
            num2 = Math.floor(Math.random() * 99) + 1;
        }
        if (operator === "%") {
            num1 = Math.floor(Math.random() * 9) + 1;
            num2 = Math.floor(Math.random() * 9) + 1;
        }
        if (operator === "+") realAnswer = num1 + num2;
        if (operator === "-") realAnswer = num1 - num2;
        if (operator === "*") realAnswer = num1 * num2;
        if (operator === "/") realAnswer = num1 / num2;
        if (operator === "%") realAnswer = num1 % num2;
    }

    return { operator, realAnswer };
}

// function generateNum1() {
//     let num1 = Math.floor(Math.random() * 20) + 1;
//     return num1;
// }

// function generateNum2() {
//     let num2 = Math.floor(Math.random() * 20) + 1;
//     return num2;
// }

function maxMode() {
    let result = generateOperator();
    let operator = result.operator
    let realAnswer = result.realAnswer;
    console.log(`${num1} ${operator} ${num2} = ?`);
    var userAnswer = prompt("Answer: ");
    if (userAnswer === "skip") {
        console.log("Question skipped");
        console.log("No Points")
    }
    if (userAnswer !== "skip") {
        userAnswer = Number(userAnswer);
        if (userAnswer === realAnswer) {
            console.log("You got it right");
            points += 10
            console.log("+10 Points")

        } else if (userAnswer !== realAnswer) {
            console.log("You got it wrong");
            points -= 5
            console.log("-5 Points")

        }

    }
    return Number(points);

}

function threeOut() {
    let result = generateOperator();
    let operator = result.operator;
    let realAnswer = result.realAnswer
    console.log(`${num1} ${operator} ${num2} = ?`);
    let userAnswer = prompt("Answer: ");
    userAnswer = Number(userAnswer);
    if (userAnswer === realAnswer) {
        console.log("You got it right");
        console.log("+10 Points")
        points += 10
    } else if (userAnswer !== realAnswer) {
        console.log("You got it wrong");
        points -= 5
        lives--
        console.log("-5 Points")
    }
    return points;
}






let gamemode = selectGamemode();

if (gamemode === "max") {
    for (let i = 0; i < 20; i++) {
        maxMode();
    }
    console.log(`You got ${points} Points`);

} else if (gamemode === "three-out") {
    while (lives > 0) {
        threeOut();
    }
    if (lives === 0) {
        console.log(`You ran out of lives. Your final score was ${points}`);
    } else {
        console.log("You did something wrong");
    }
}