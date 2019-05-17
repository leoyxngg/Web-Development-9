var msg = new SpeechSynthesisUtterance();
var synth = window.speechSynthesis;
var x = 0;

function uniKeyCode(event) {
    var key = event.which || event.keyCode; // event.keyCode is used for <IE8  document.getElementById("actionCenter").innerHTML = "Unicode KEY code: " + key;
    // console.log(key)
    // console.log(synth.getVoices())
    if (key == 32 || key == 13) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/fire.jpg'>"
        msg = new SpeechSynthesisUtterance("fire");

        //settings
        msg.rate = 1.2; //speech speed - range: 0 to 10
        //look into console to see all available voices/languages
        msg.voice = synth.getVoices()[0];

        //speaking trigger
        synth.cancel(); //cut previous voice short
        synth.speak(msg);
    }

    if (key == 87 || key == 38) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/up.png'>"
        msg = new SpeechSynthesisUtterance("jump");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);

        x += 1;
    }

    if (key == 83 || key == 40) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/down.png'>"
        msg = new SpeechSynthesisUtterance("roll");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (key == 65 || key == 37) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/left.png'>"
        msg = new SpeechSynthesisUtterance("move left");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);

        x += 56;

        if (x == 57) {
            document.getElementById("actionCenter").innerHTML = "<img src='pics/upLeft.png'>";
            x = 0;
        }
    }

    if (key == 68 || key == 39) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/right.png'>"
        msg = new SpeechSynthesisUtterance("move right");

        msg.rate = 1.2;
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);

        x += 4;

        if (x == 5) {
            document.getElementById("actionCenter").innerHTML = "<img src='pics/upRight.png'>"
            x = 0;
        }
    }
}