var randomNum = Math.floor((Math.random() * 10) + 1);
alert(randomNum);
var guess = 0;
var guessNum = 0;

function guessNumber() {

    while (guess != randomNum) {
        guessNum++;
        if (guess > randomNum) {
            larger();
            return;
        }

        if (guess < randomNum) {
            smaller();
            return;
        }
    }
    alert("Congradulations! You have guessed the correct number! It took you a total of " + guessNum + " tries.");
}

function larger() {
    alert("Your guess is larger than the number.");
}

function smaller() {
    alert("Your guess is smaller than the number.");
}