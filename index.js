var inquirer = require("inquirer");

var Word = require("./Word.js");

var guesses = 10;
var points = 0;

var wordsToGuess = ["hawaiian pizza", "fish tacos", "spaghetti and meatballs", "bacon cheeseburger", "chicken pad thai", "singapore noodles", "miso ramen"];
var randomWord;
var chosenWord;

function startGame() {

    console.log("It's time to guess the food!");
}

function chooseRandomWord() {

    randomWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]

    chosenWord = new Word(randomWord);
}

function guessWord() {

    if (guesses > 0 && points < 5) {

        console.log(chosenWord.display());
    

        inquirer.prompt([
            {
                name: "txt",
                message: "Guess a letter!",
                validate: function (str) {
                    if (str.length != 1) return false;
                    var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
                    return regEx.test(str);
                }

            }

        ]).then(function (guessedLetter) {

            var guess = guessedLetter.txt;

            chosenWord.checkGuess(guess);

            if (randomWord.toLowerCase().indexOf(guess.toLowerCase()) === -1) {
                guesses--;
                console.log("INCORRECT! " + guesses + " guesses remaining")
            } 
            else {
                if (points < 5) {
                console.log("CORRECT!")
                }
            }

            if (randomWord === chosenWord.display()) {
                console.log(chosenWord.display());
                guesses = 10;
                points++;

                if (points < 5) {
                    console.log("CORRECT! Next menu item!");
                    chooseRandomWord();
                }

                else {
                    winGame();
                }
            }

            if (guesses === 0) {
                loseGame();
            }

            guessWord();

        });
    }

}

function loseGame() {
    console.log("GAME OVER!");
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.confirm) {
                guesses = 10;
                points = 0;
                chooseRandomWord();
                guessWord();
            }
            else {
                console.log("1 star... would not play again");
                process.exit();
            }
        })
}

function winGame() {

    console.log('YOU WIN!')
    inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Play again?",
            default: true
        }
    ])
        .then(function (inquirerResponse) {
            if (inquirerResponse.confirm) {
                guesses = 10;
                points = 0;
                chooseRandomWord();
                guessWord();
            }
            else {
                console.log("Thank you come again!")
                process.exit();
            }
        })

}

startGame();
chooseRandomWord();
guessWord();