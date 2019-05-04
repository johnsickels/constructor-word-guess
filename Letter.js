// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
var Letter = function () {
    //   * A string value to store the underlying character for the letter
    this.string = "";
    //   * A boolean value that stores whether that letter has been guessed yet
    this.boolean = false;
    //   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.reveal = function () {
        if (this.boolean = false) {
            this.string = "_"
        } else {
            this.string = "x"
        };
    };
    //   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.check = function (x) {
        if (x = string) {
            this.boolean = true;
            this.reveal();
        } else {
            console.log("Something bad");
        };
    };
}
