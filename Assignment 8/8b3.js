var appleArea = document.getElementById('appleArea');
var greenApple = '<img src="img/green_apple.png" class="bad1" onmouseover="chop(this.id)"';
var redApple = '<img src="img/red_apple.png" class="good1" onmouseover="chop(this.id)"';
var goodAppleMax = 0;
var goodAppleCount = 0;
var highScore = 0;
var win = false;
var finish = false;
var timeAllowed;
var goodAppleSound = new sound("sounds/good_chop.mp3");
var badAppleSound = new sound("sounds/bad_chop.mp3");
var winSound = new sound("sounds/win_chop.mp3");
var loseSound = new sound("sounds/lose_chop.mp3");
var startSound = new sound("sounds/start_chop.mp3");

document.getElementById('restartBtn').style.display = 'none';

function genAppleLevelOne() {
    genApple(7);
}

function genAppleLevelTwo() {
    genApple(14);
}

function genAppleLevelThree() {
    genApple(21);
}

function genApple(howManyApples) {
    startSound.play();
    document.getElementById("countdown").style.visibility = "visible";
    for (i = 0; i < howManyApples; i++) {
        goodId = 'id="good' + i + '">';
        badId = 'id="bad' + i + '">';
        if (Math.random() < 0.8) {
            appleArea.innerHTML += redApple + goodId;
            goodAppleMax++;
        } else {
            appleArea.innerHTML += greenApple + badId;
        }
    }
    document.getElementById('level').style.display = 'none';
    document.getElementById('restartBtn').style.display = '';
    countdown(howManyApples);
}

var countdownInterval;
var currentCount;

function countdown(howManyApples) {
    timeAllowed = Math.round(howManyApples / 2);
    document.getElementById("countdown").innerHTML = timeAllowed;
    currentCount = timeAllowed * 1000;
    clearInterval(countdownInterval);
    countdownInterval = setInterval(doCount, 100);
}

function doCount() {
    currentCount -= 100;
    document.getElementById('countdown').innerHTML = currentCount / 1000;
    document.getElementById('timebar').style.width = (currentCount / (timeAllowed * 1000)) * 100 + "%";
    if (currentCount <= 0) {
        clearInterval(countdownInterval);
        if (!win || finish) {
            loseSound.play();
            document.getElementById("display").innerHTML = '<img src= "img/lose.png">';
            finish = true;
        }
    }
}

function restart() {
    appleArea.innerHTML = '';
    document.getElementById('level').style.display = '';
    document.getElementById('restartBtn').style.display = 'none';
    goodAppleCount = 0;
    document.getElementById("goodAppleCount").innerHTML = goodAppleCount;
    goodAppleMax = 0;
    window.clearInterval(countdownInterval);
    document.getElementById("countdown").style.visibility = "hidden";
    document.getElementById("display").innerHTML = "";
    level = 0;
    win = false;
    finish = false;
}

function chop(appleId) {
    var isGood = appleId[0] == 'g'
    if (win == true || finish == true) {

    }
    else {
        if (isGood) {
            if (document.getElementById(appleId).className == "good2") {

            }
            else {
                goodAppleSound.play();
                goodAppleCount++;
                document.getElementById("goodAppleCount").innerHTML = goodAppleCount;
            }
            document.getElementById(appleId).className = 'good2';
        } else {
            if (document.getElementById(appleId).className == "bad2") {

            }
            else {
                badAppleSound.play();
                currentCount -= 1000;
                document.getElementById('countdown').innerHTML = currentCount;
            }
            document.getElementById(appleId).className = 'bad2';
        }
    }
    isGoodAppleChopped();
}
var level = 1;
function isGoodAppleChopped() {
    if (goodAppleCount == goodAppleMax) {
        window.clearInterval(countdownInterval);
        level++;
        if (level < 4) {
            document.getElementById("appleArea").innerHTML = "";
            levelUp(level);
        }
        else {
            document.getElementById("display").innerHTML = '<img src= "img/win.png">';
            document.getElementById("appleArea").innerHTML = "";
            win = true;
            finish = true;
        }
        winSound.play();


    }
}

function levelUp(level) {
    document.getElementById('level').style.display = '';
    document.getElementById('currentLevel').innerHTML = level;
    switch (level) {
        case 1:
            genAppleLevelOne();
            break;
        case 2:
            genAppleLevelTwo();
            break;
        case 3:
            genAppleLevelThree();
            break;
    }
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

if (highScore < goodAppleCount) {
    alert("dff");
    highScore = goodAppleCount;
    document.getElementById("highScore").innerHTML = highScore;
}