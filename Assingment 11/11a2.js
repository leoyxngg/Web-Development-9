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

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    // Key M and N combo
    if (keys[77] && keys[78]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/upRight.png'>";
        msg = new SpeechSynthesisUtterance("Dash Right");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (keyE == 32 || keyE == 13) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/fire.jpg'>";
        msg = new SpeechSynthesisUtterance("fire");

        //settings
        msg.rate = 1.2; //speech speed - range: 0 to 10
        //look into console to see all available voices/languages
        msg.voice = synth.getVoices()[0];
        //speaking trigger
        synth.cancel(); //cut previous voice short
        synth.speak(msg);
    }

    if (keys[87] || keys[38]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/up.png'>";
        msg = new SpeechSynthesisUtterance("jump");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (keyE == 83 || keyE == 40) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/down.png'>";
        msg = new SpeechSynthesisUtterance("roll");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (keys[65] || keys[37]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/left.png'>";
        msg = new SpeechSynthesisUtterance("move left");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (keyE == 68 || keyE == 39) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/right.png'>"
        msg = new SpeechSynthesisUtterance("move right");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }
}

function uniKeyCodeChinese() {
    var keyC = event.which || event.keyCode;

    // key Z and X combo
    if (keys[90] && keys[88]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/upLeft.png'>";
        msg = new SpeechSynthesisUtterance("冲向左边");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[19];

        synth.cancel();
        synth.speak(msg);
    }

    // Key M and N combo
    if (keys[77] && keys[78]) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/upRight.png'>";
        msg = new SpeechSynthesisUtterance("冲向右边");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[19];

        synth.cancel();
        synth.speak(msg);
    }

    if (keyC == 32 || keyC == 13) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/fire.jpg'>";
        msg = new SpeechSynthesisUtterance("火攻");

        //settings
        msg.rate = 1.2; //speech speed - range: 0 to 10
        //look into console to see all available voices/languages
        msg.voice = synth.getVoices()[19];
        console.log(synth.getVoices())
        //speaking trigger
        synth.cancel(); //cut previous voice short
        synth.speak(msg);
    }

    if (keyC == 87 || keyC == 38) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/up.png'>";
        msg = new SpeechSynthesisUtterance("跳");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[19];

        synth.cancel();
        synth.speak(msg);
    }

    if (keyC == 83 || keyC == 40) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/down.png'>";
        msg = new SpeechSynthesisUtterance("翻滚");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[19];

        synth.cancel();
        synth.speak(msg);
    }

    if (keyC == 65 || keyC == 37) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/left.png'>";
        msg = new SpeechSynthesisUtterance("向左");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[19];

        synth.cancel();
        synth.speak(msg);
    }

    if (keyC == 68 || keyC == 39) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/right.png'>"
        msg = new SpeechSynthesisUtterance("向右");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[19];

        synth.cancel();
        synth.speak(msg);
    }
}
