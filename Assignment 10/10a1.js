var t0, difference;
t0 = 6;
difference = 2;

function genTn() {
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
