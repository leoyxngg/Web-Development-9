var t0, difference, boxedNums, numOfTerms, redCircle, redTriangle, redRectangle, blueCircle, blueTriangle, blueRectangle;

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
    document.getElementById("formulat0").innerHTML = t0;
    document.getElementById("formulad").innerHTML = difference;
    document.getElementById("formulan").innerHTML = numOfTerms;
}

function buildNextOne(n, tn) {
    var insert = '<div class="col-sm-4 col-md-2 boxed center">'
    insert += 't<sub>' + n + '</sub><br>'
    insert += '<span class="tn">' + tn + '</span><br>'
    insert += getPicsRepresentOfNumber(tn);
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
        returnHtml += number < 0 ? "<img src='imgs/negativeHundred.png'>&nbsp" : "<img src='imgs/hundred.png'>&nbsp";
        if (i == 4) {
            returnHtml += "&nbsp"
        }
    }
    returnHtml += "<br>";
    for (var i = 0; i < totalTens; i++) {
        returnHtml += number < 0 ? "<img src='imgs/negativeTen.png'>&nbsp" : "<img src='imgs/ten.png'>&nbsp";
        if (i == 4) {
            returnHtml += "&nbsp";
        }
    }
    returnHtml += "<br>";
    for (var i = 0; i < totalOnes; i++) {
        returnHtml += number < 0 ? "<img src='imgs/negativeOne.png'>&nbsp" : "<img src='imgs/one.png'>&nbsp";
        if (i == 4) {
            returnHtml += "&nbsp";
        }
    }
    returnHtml += "<br>";
    return returnHtml;
}

function updateT0Input(t0) {
    document.getElementById("updatet0").value = t0;
}

function updateDInput(difference) {
    document.getElementById("updated").value = difference;
}

function updateNInput(numOfTerms) {
    document.getElementById("updaten").value = numOfTerms;
}

var slider1 = document.getElementById("t0");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("d");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("tn");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}