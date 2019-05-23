var msg = new SpeechSynthesisUtterance();
var synth = window.speechSynthesis;
var x = 0;
var keys = [];


window.addEventListener("keydown", keydownFunc, false);
window.addEventListener("keyup", keyupFunc, false);

function keyupFunc(e) {
    keys[e.keyCode] = false;
}

function keydownFunc(e) {
    var e = e || event;
    keys[e.keyCode] = true;
    //alert(e.keyCode);   
    var checkbox = document.querySelector('input[type="checkbox"]');
    //alert(checkBox);
    if (checkbox.checked) {
        // do this
        uniKeyCodeChinese(event);
    } else {
        // do that
        uniKeyCodeEnglish(event);
    }
}

function uniKeyCodeEnglish(event) {
    var keyE = event.which || event.keyCode; // event.keyCode is used for <IE8  document.getElementById("actionCenter").innerHTML = "Unicode KEY code: " + key;

    // key Z and X combo
    if (keys[90] && keys[88]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/upLeft.png'>";
        msg = new SpeechSynthesisUtterance("Dash Left");
        speakEnglish()
    }

    // Key M and N combo
    else if (keys[77] && keys[78]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/upRight.png'>";
        msg = new SpeechSynthesisUtterance("Dash Right");

        speakEnglish()
    }

    else if (keyE == 32 || keyE == 13) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/fire.jpg'>";
        msg = new SpeechSynthesisUtterance("fire");
        speakEnglish()
    }

    else if (keys[87] || keys[38]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/up.png'>";
        msg = new SpeechSynthesisUtterance("jump");

        speakEnglish()
    }

    else if (keyE == 83 || keyE == 40) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/down.png'>";
        msg = new SpeechSynthesisUtterance("roll");
        speakEnglish()
    }

    else if (keys[65] || keys[37]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/left.png'>";
        msg = new SpeechSynthesisUtterance("move left");
        speakEnglish()
    }

    else if (keyE == 68 || keyE == 39) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/right.png'>"
        msg = new SpeechSynthesisUtterance("move right");
        speakEnglish()
    }
}

function uniKeyCodeChinese() {
    var keyC = event.which || event.keyCode;

    // key Z and X combo
    if (keys[90] && keys[88]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/upLeft.png'>";
        msg = new SpeechSynthesisUtterance("冲向左边");
        speakChinese()
    }

    // Key M and N combo
    else if (keys[77] && keys[78]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/upRight.png'>";
        msg = new SpeechSynthesisUtterance("冲向右边");
        speakChinese()
    }

    else if (keyC == 32 || keyC == 13) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/fire.jpg'>";
        msg = new SpeechSynthesisUtterance("火攻");
        speakChinese()
    }

    else if (keyC == 87 || keyC == 38) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/up.png'>";
        msg = new SpeechSynthesisUtterance("跳");
        speakChinese()
    }

    else if (keyC == 83 || keyC == 40) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/down.png'>";
        msg = new SpeechSynthesisUtterance("翻滚");
        speakChinese()
    }

    else if (keyC == 65 || keyC == 37) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/left.png'>";
        msg = new SpeechSynthesisUtterance("向左");
        speakChinese()
    }

    else if (keyC == 68 || keyC == 39) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/right.png'>"
        msg = new SpeechSynthesisUtterance("向右");
        speakChinese()
    }
}

function speakEnglish() {
    msg.rate = 1.2;
    msg.voice = synth.getVoices()[0];

    synth.cancel();
    synth.speak(msg);
}

function speakChinese() {
    msg.rate = 1.2;
    msg.voice = synth.getVoices()[63]; // would be 19 if it is on my computer

    synth.cancel();
    synth.speak(msg);
}