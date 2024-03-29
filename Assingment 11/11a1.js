var msg = new SpeechSynthesisUtterance();
var synth = window.speechSynthesis;

function uniKeyCode(event) {
    var key = event.which || event.keyCode; // event.keyCode is used for <IE8  document.getElementById("actionCenter").innerHTML = "Unicode KEY code: " + key;
    // console.log(key)
    if (key == 32) {
        document.getElementById("actionCenter").innerHTML = "fire"
        msg = new SpeechSynthesisUtterance("fire");

        //settings
        msg.rate = 1.2; //speech speed - range: 0 to 10
        console.log(synth.getVoices())
        //look into console to see all available voices/languages
        msg.voice = synth.getVoices()[0];

        //speaking trigger
        synth.cancel(); //cut previous voice short
        synth.speak(msg);
    }

    if (key == 87) {
        document.getElementById("actionCenter").innerHTML = "jump"
        msg = new SpeechSynthesisUtterance("jump");

        msg.rate = 1.2;
        console.log(synth.getVoices())
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (key == 83) {
        document.getElementById("actionCenter").innerHTML = "roll"
        msg = new SpeechSynthesisUtterance("roll");

        msg.rate = 1.2;
        console.log(synth.getVoices())
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (key == 65) {
        document.getElementById("actionCenter").innerHTML = "roll left"
        msg = new SpeechSynthesisUtterance("roll left");

        msg.rate = 1.2;
        console.log(synth.getVoices())
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }

    if (key == 68) {
        document.getElementById("actionCenter").innerHTML = "roll right"
        msg = new SpeechSynthesisUtterance("roll right");

        msg.rate = 1.2;
        console.log(synth.getVoices())
        msg.voice = synth.getVoices()[0];

        synth.cancel();
        synth.speak(msg);
    }
}