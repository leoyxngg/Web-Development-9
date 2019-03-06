//variables list
var myRange = document.getElementById('myRange')
var output = document.getElementById('output')
output.innerHTML = myRange.value;
function updateOutput() {
    output.innerHTML = myRange.value;
}
var appleArea = document.getElementById('appleArea');
var greenApple = '<img src="img/green_apple.png" class="bad1" onmouseover="chop(this.id)" ';
var redApple = '<img src="img/red_apple.png" class="good1" onmouseover="chop(this.id)"';
var goodAppleMax = 0;
var goodAppleCount = 0;

//one-time command
document.getElementById('restartBtn').style.display = 'none';


function genApple() {
    document.getElementById("countdown").style.visibility = "visible";
    var howManyApples = myRange.value;
    var goodId, badId;
    for (i = 0; i < howManyApples; i++) {
        goodId = 'id="good' + i + '">';
        badId = 'id="bad' + i + '">';
        if (Math.random() < 0.8) {
            appleArea.innerHTML += redApple + goodId;
            goodAppleMax++;
            alert(goodAppleMax);
        } else {
            appleArea.innerHTML += greenApple + badId;
        }
    }
    document.getElementById('genBtn').style.display = 'none';
    document.getElementById('restartBtn').style.display = '';
    countdown(howManyApples);
}

var countdownInterval;
var currentCount;
function countdown(howManyApples) {
    var timeAllowed = Math.round(howManyApples / 2);
    document.getElementById("countdown").innerHTML = timeAllowed;
    currentCount = timeAllowed;
    clearInterval(countdownInterval);
    countdownInterval = setInterval(doCount, 1000);
}
function doCount() {
    currentCount--;
    document.getElementById('countdown').innerHTML = currentCount
    if (currentCount == 0) {
        // time is up - you lose
        clearInterval(countdownInterval);
    }
}

function restart() {
    appleArea.innerHTML = '';
    document.getElementById('genBtn').style.display = '';
    document.getElementById('restartBtn').style.display = 'none';
    goodAppleCount = 0;
    goodAppleMax = 0;
    window.clearInterval(countdownInterval);
    document.getElementById("countdown").style.visibility = "hidden";
}

function chop(appleId) {
    var isGood = appleId[0] == 'g'
    if (isGood) {
        document.getElementById(appleId).className = 'good2';
        goodAppleCount++;
        document.getElementById("goodAppleCount").innerHTML = goodAppleCount;
    } else {
        document.getElementById(appleId).className = 'bad2';
    }
}

function stopCountDown() {
    if (goodAppleCount == goodAppleMax) {
        window.clearInterval(countdownInterval);
        alert("test");
    }
    
}