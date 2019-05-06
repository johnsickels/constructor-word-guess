// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

let wordToGuess = "World";
let goodGuesses = ["o", "r"];

// console.log(word);

var Word = function (wordParameter) {
    //   * An array of `new` Letter objects representing the letters of the underlying word
    this.word = wordParameter.split("");
    //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.showPlaceholders = function () {
        let tmpString = "";
        this.word.forEach(element => {
            if (goodGuesses.includes(element)) {
                tmpString += element + " ";
            } else {
                tmpString += "_ ";
            }
        });
        console.log(tmpString);
        return tmpString;
    }

};
//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
let myWord = new Word(wordToGuess);
let whatsReturned = myWord.showPlaceholders();
console.log("showPlaceholders function returned " + whatsReturned);