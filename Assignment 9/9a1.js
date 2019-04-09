// function flipOver(index) {
//     var name = (document.getElementById("fc" + index).innerHTML).trim();
//     var vertxt = '<img src="pics/txt' + index + '.png">';
//     var verimg = '<img src="pics/img' + index + '.png">';
//     document.getElementById("fc" + index).innerHTML = vertxt;
//     if (name[name.length - 9] == "m") {
//         document.getElementById("fc" + index).innerHTML = vertxt;
//     } else {
//         document.getElementById("fc" + index).innerHTML = verimg;
//     }
// }

var audio = document.getElementById('myAudio');
var source = document.getElementById('audioSource');

function playAudio(index) {
  source.src = "sounds/sound" + index + ".mp3";
  audio.load();
  audio.play();
}

function stopAudio() {
  audio.pause();
}