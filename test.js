let wordToGuess = "World";
let goodGuesses = ["o", "r"];

// console.log(word);

function Word(wordParameter) {
  this.word = wordParameter.split("");
  
  this.showPlaceholders = function() {
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
}

let myWord = new Word(wordToGuess);
let whatsReturned = myWord.showPlaceholders();
console.log("showPlaceholders function returned " + whatsReturned);