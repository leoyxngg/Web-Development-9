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
    document.getElementById("hintPlace").innerHTML = "<img src='img/win.png' alt = 'winPicture'>"
    return;
  } else {
    if (guess > randomNum) {
      larger();
    }
    if (guess < randomNum) {
      smaller();
    }
    guessNum++;
    var currentScore = 10000 - 100*(guessNum);
    document.getElementById("currentScore").innerHTML = currentScore;
    document.getElementById("guessNum").innerHTML = guessNum;
  }
}

function larger() {
  largerSound.play();
  document.getElementById("hintPlace").innerHTML = "<img src='img/down.png' alt = 'higher'>";
}

function smaller() {
  smallerSound.play();
  document.getElementById("hintPlace").innerHTML = "<img src='img/up.png' width = '128' height = '128' alt = 'lower'>"
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause();
  }
}