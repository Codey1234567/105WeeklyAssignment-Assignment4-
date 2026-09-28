const prompt = require('prompt-sync')();

function selectGamemode() {
    let gamemode = Number(prompt("Select gamemode 1 for max mode 2 for three out"));
    if (gamemode === 1) {
        //add difficulty selector here
        gamemode = "max";
        console.log("You have selected max mode")
    } else if (gamemode === 2) {
        //difficulty here
        gamemode = "three-out";
        var lives = 3;
        console.log("You have selected three out mode")
    }

    return gamemode;
}

// function addPoints(points,userAnswer,realAnswer){
//     let score= 0;
//     if (userAnswer === realAnswer) {
//         points+=10
//     } else if (userAnswer!== realAnswer) {
//         points-=5
//     }
//     return points;
    
// }

function maxMode() {
    let randomSymbol = Math.floor(Math.random() * 3) + 1;
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;
    let symbol;
    let realAnswer;
    if (randomSymbol === 1) {
        symbol = "+";
        realAnswer = num1 + num2;
    } else if (randomSymbol === 2) {
        symbol = "-";
        realAnswer = num1 - num2;
    } else if (randomSymbol === 3) {
        symbol = "*";
        realAnswer = num1 * num2;
    } else if(randomSymbol === 4){
        symbol ="/"
        realAnswer = num1 / num2;   
    }

    console.log(`${num1} ${symbol} ${num2} = ?`);
    var userAnswer = prompt("Answer: ");
    if (userAnswer === "skip") {
        console.log("Question skipped");
        console.log("No Points")
    } 
    if (userAnswer !== "skip") {
        userAnswer = Number(userAnswer);
        if (userAnswer === realAnswer) {
            console.log("You got it right");
            console.log("+10 Points")
        } else if (userAnswer !== realAnswer) {
            console.log("You got it wrong");
            points-5
            console.log("-5 Points")
        }
    } 
    return Number(points);

}

// function threeOut() {
//     let randomSymbol = Math.floor(Math.random() * 3) + 1;
//     let num1 = Math.floor(Math.random() * 20) + 1;
//     let num2 = Math.floor(Math.random() * 20) + 1;
//     let symbol;
//     let realAnswer;
//     if (randomSymbol === 1) {
//         symbol = "+";
//         realAnswer = num1 + num2;
//     } else if (randomSymbol === 2) {
//         symbol = "-";
//         realAnswer = num1 - num2;
//     } else if (randomSymbol === 3) {
//         symbol = "*";
//         realAnswer = num1 * num2;
//     }

//     console.log(`${num1} ${symbol} ${num2} = ?`);
//     let userAnswer = prompt("Answer: ");
//     let points = 0;
//         userAnswer = Number(userAnswer);
//         if (userAnswer === realAnswer) {
//             console.log("You got it right");
//             console.log("+10 Points")
//             points+=10
//         } else if (userAnswer !== realAnswer) {
//             console.log("You got it wrong");
//             points-5
//             lives--
//             console.log("-5 Points")
//         }
//     return Number(points);

// }




let gamemode = selectGamemode();

if (gamemode === "max") {
    for (let i = 0; i < 5; i++) {
        (maxMode());
        points = Number(maxMode());
    }
    console.log(`You got ${points} Points`)

} else if (gamemode === "three-out") {
    while (lives > 0) { 
        threeOut();
    }
    points = Number(threeOut());
    console.log(`You got ${points} Poi`)
}