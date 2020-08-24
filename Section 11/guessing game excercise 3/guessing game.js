var secretNumber = 9;
var stringGuess = prompt("Guess the number");
var guess = Number(stringGuess);
if (guess === secretNumber) {
    alert("Your Guess Is Correct");
}
else if(guess > secretNumber) {
    alert("HIGH, Guess Again");
}
else {
    alert("LESS , Guess Again");

}
