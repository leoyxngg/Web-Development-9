var t0, difference, boxedNums, numOfTerms, redCircle, redTriangle, redRectangle, blueCircle, blueTriangle, blueRectangle;
redCircle = "<img src='imgs/negativeOne.png'>";
redTriangle = "<img src='imgs/negativeTen.png'>";
redRectangle = "<img src='imgs/negativeHundred.png'";
blueCircle = "<img src='imgs/one.png'";
blueTriangle = "<img src='imgs/ten.png'";
blueRectangle = "img src='imgs/hundred.png'";

function genTn() {
    t0 = document.getElementById("t0").value;
    difference = document.getElementById("d").value;
    numOfTerms = document.getElementById("tn").value;
    var tn;
    document.getElementById('buildButton').style.display = 'none';
    for (n = 0; n < numOfTerms; n++) {
        tn = t0 * 1 + difference * n;
        setTimeout(buildNextOne, 1500 * n, n, tn);
    }
    setTimeout(showButton, 1500 * numOfTerms);
}

function buildNextOne(n, tn) {
    console.log('t' + n + " = " + tn);
    document.getElementById("boxArea").innerHTML = '<div class="col-sm-4 col-md-2"><span id="boxed" class="center">t<sub>' + n + '</sub><span class="tn">' + tn + '</span><span><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"></span></span></div>'
}

function showButton() {
    document.getElementById('buildButton').style.display = '';
}

{/* <div class="col-sm-4 col-md-2"><span id="boxed" class="center">t<sub>0</sub><span class="tn">6</span><span id="invisible">space</span><span><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"></span></span></div> */}

{/* <div class="col-sm-4 col-md-2">
    <span id="boxed" class="center">
        t<sub>0</sub>
        <span class="tn">6</span>
        <span id="invisible">space</span>
        <span><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"><img src="imgs/one.png"></span>
    </span>
</div> */}