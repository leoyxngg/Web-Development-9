var randomNum = Math.floor((Math.random() * 10) + 1);
var guess = 0;
var guessNum = 0;
var largerSound = new sound("sounds/larger.mp3");
var smallerSound = new sound("sounds/smaller.mp3");
var winSound = new sound("sounds/win.mp3");

function guessNumber() {
    guess = document.getElementById("guess").value;
    if (guess == randomNum) {
        winSound.play();
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
    largerSound.play();
    alert("Your guess is larger than the number.");
}

function smaller() {
    smallerSound.play();
    alert("Your guess is smaller than the number.");
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
// Test