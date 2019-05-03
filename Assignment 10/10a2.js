var t0, difference, boxedNums, numOfTerms, redCircle, redTriangle, redRectangle, blueCircle, blueTriangle, blueRectangle;
redCircle = "<img src='imgs/negativeOne.png'>";
redTriangle = "<img src='imgs/negativeTen.png'>";
redRectangle = "<img src='imgs/negativeHundred.png'";
blueCircle = "<img src='imgs/one.png'";
blueTriangle = "<img src='imgs/ten.png'";
blueRectangle = "img src='imgs/hundred.png'";

function genTn() {
    reset();
    t0 = document.getElementById("t0").value;
    difference = document.getElementById("d").value;
    numOfTerms = document.getElementById("tn").value;
    var tn;
    document.getElementById('buildButton').style.display = 'none';
    for (n = 0; n < numOfTerms; n++) {
        tn = t0 * 1 + difference * n;
        setTimeout(buildNextOne, 3000 * n, n, tn);
    }
    setTimeout(showButton, 3000 * numOfTerms);
}

function buildNextOne(n, tn) {
    var insert = '<div class="col-sm-4 col-md-2">'
    insert += '<span class="boxed center">'
    insert += 't<sub>' + n + '</sub>'
    insert += '<span class="tn">' + tn + '</span>'
    // insert += '<span id="invisible">space</span>'
    // insert += '<span><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"></span>'
    insert += '</span>'
    insert += '</div>'
    document.getElementById("boxArea").innerHTML += insert;
    
    var msg = new SpeechSynthesisUtterance(tn);
    window.speechSynthesis.speak(msg);
}

function showButton() {
    document.getElementById('buildButton').style.display = '';
}

function reset() {
    document.getElementById("boxArea").innerHTML = "";
}