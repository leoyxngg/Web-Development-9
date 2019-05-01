var t0, difference, redCircle, redTriangle, redRectangle, blueCircle, blueTriangle, blueRectangle;
redCircle = "<img src='imgs/negativeOne.png'>";
redTriangle = "<img src='imgs/negativeTen.png'>";
redRectangle = "<img src='imgs/negativeHundred.png'";
blueCircle = "<img src='imgs/one.png'";
blueTriangle = "<img src='imgs/ten.png'";
blueRectangle = "img src='imgs/hundred.png'";

function genTn() {
    t0 = document.getElementById("t0").value;
    difference = document.getElementById("d").value;
    var tn;
    var numOfTerms = 12;
    console.log('start genTn');
    document.getElementById('buildButton').style.display = 'none';
    for (n = 0; n < numOfTerms; n++) {
        tn = t0 * 1 + difference * n;
        setTimeout(buildNextOne, 1500 * n, n, tn);
    }
    setTimeout(showButton, 1500 * numOfTerms);
}

function buildNextOne(n, tn) {
    console.log('t' + n + " = " + tn);
}

function showButton() {
    document.getElementById('buildButton').style.display = '';
}