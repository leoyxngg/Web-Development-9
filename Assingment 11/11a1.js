var msg = new SpeechSynthesisUtterance();
var synth = window.speechSynthesis;

function uniKeyCode(event) {
    var key = event.which || event.keyCode; // event.keyCode is used for <IE8  document.getElementById("actionCenter").innerHTML = "Unicode KEY code: " + key;
    // console.log(key)
    if (key == 32) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/fire.jpg'>"
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

    if(key == 87) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/up.png'>"
        msg = new SpeechSynthesisUtterance("jump");
     
       //settings
       msg.rate = 1.2; //speech speed - range: 0 to 10
       console.log(synth.getVoices())
       //look into console to see all available voices/languages
       msg.voice = synth.getVoices()[0];

       //speaking trigger
       synth.cancel(); //cut previous voice short
       synth.speak(msg);
    }

    if(key == 83) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/down.png'>"
        msg = new SpeechSynthesisUtterance("roll");
     
       //settings
       msg.rate = 1.2; //speech speed - range: 0 to 10
       console.log(synth.getVoices())
       //look into console to see all available voices/languages
       msg.voice = synth.getVoices()[0];

       //speaking trigger
       synth.cancel(); //cut previous voice short
       synth.speak(msg);
    }

    if(key == 65) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/left.png'>"
        msg = new SpeechSynthesisUtterance("roll left");
     
       //settings
       msg.rate = 1.2; //speech speed - range: 0 to 10
       console.log(synth.getVoices())
       //look into console to see all available voices/languages
       msg.voice = synth.getVoices()[0];

       //speaking trigger
       synth.cancel(); //cut previous voice short
       synth.speak(msg);
    }

    if(key == 68) {
        document.getElementById("actionCenter").innerHTML = "<img src='pics/right.png'>"
        msg = new SpeechSynthesisUtterance("roll right");
     
       //settings
       msg.rate = 1.2; //speech speed - range: 0 to 10
       console.log(synth.getVoices())
       //look into console to see all available voices/languages
       msg.voice = synth.getVoices()[0];

       //speaking trigger
       synth.cancel(); //cut previous voice short
       synth.speak(msg);
    }
}
