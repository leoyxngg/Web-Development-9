var randomNum = Math.floor((Math.random() * 10) + 1);
var guess = 0;
var guessNum = 0;

function guessNumber() {
    guess = document.getElementById("guess").value;
    if (guess == randomNum) {
        alert("Congradulations! You have guessed the correct number! It took you a total of " + guessNum + " tries.");
        return;
    }
    else {
        if (guess > randomNum) {
            larger();
        }
        if (guess < randomNum) {
            smaller();
        }
        guessNum++;
        
    }
}

function larger() {
    alert("Your guess is larger than the number.");
}

function smaller() {
    alert("Your guess is smaller than the number.");
}