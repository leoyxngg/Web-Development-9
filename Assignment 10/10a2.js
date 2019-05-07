var t0, difference, boxedNums, numOfTerms, redCircle, redTriangle, redRectangle, blueCircle, blueTriangle, blueRectangle;
redCircle = "<img src='imgs/negativeOne.png'>&nbsp";
redTriangle = "<img src='imgs/negativeTen.png'>&nbsp";
redRectangle = "<img src='imgs/negativeHundred.png'>&nbsp";
blueCircle = "<img src='imgs/one.png'>&nbsp";
blueTriangle = "<img src='imgs/ten.png'>&nbsp";
blueRectangle = "img src='imgs/hundred.png'>&nbsp";

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
    insert += getPicsRepresentOfNumber(tn);
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

function getPicsRepresentOfNumber(number) {
    var totalHund = 0,
        totalTens = 0,
        totalOnes = 0,
        returnHtml = '';

    totalHund = Math.abs(parseInt(number / 100));
    var diffAfterRemovingHund = number % 100;
    totalTens = Math.abs(parseInt(diffAfterRemovingHund / 10));
    totalOnes = Math.abs(parseInt(diffAfterRemovingHund % 10));

    for (var i = 0; i < totalHund; i++) {
        returnHtml += number < 0 ? "<img src='imgs/negativeHundred.png'>" : "<img src='imgs/hundred.png'>";
        if (i == 4) {
            returnHtml += "&nbsp"
        }
    }
    returnHtml += "<br>";
    for (var i = 0; i < totalTens; i++) {
        returnHtml += number < 0 ? "<img src='imgs/negativeTen.png'>" : "<img src='imgs/ten.png'>";
        if (i == 4) {
            returnHtml += "&nbsp";
        }
    }
    returnHtml += "<br>";
    for (var i = 0; i < totalOnes; i++) {
        returnHtml += number < 0 ? "<img src='imgs/negativeOne.png'>" : "<img src='imgs/one.png'>";
        if (i == 4) {
            returnHtml += "&nbsp";
        }
    }
    returnHtml += "<br>";
    return returnHtml;
}