var msg = new SpeechSynthesisUtterance();
var synth = window.speechSynthesis;

function uniKeyCode(event) {
    var key = event.which || event.keyCode; // event.keyCode is used for <IE8  document.getElementById("demo").innerHTML = "Unicode KEY code: " + key;
    if (key == 32) {
        document.getElementById("demo").innerHTML += " fire"
               //INSIDE A FUNCTION
       // set in the message (use a variable?)
       msg = new SpeechSynthesisUtterance("test");
     
       //settings
       msg.rate = 1.2; //speech speed - range: 0 to 10
       console.log(synth.getVoices())
       //look into console to see all available voices/languages
       //msg.voice = synth.getVoices()[65];

       //speaking trigger
       //synth.cancel(); //cut previous voice short
       synth.speak(msg);
    }
}
