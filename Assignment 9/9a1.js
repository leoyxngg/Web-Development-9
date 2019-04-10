function flipOver(index) {
  var name = (document.getElementById("fc" + index).innerHTML).trim();
  var vertxt = '<img src="pics/txt' + index + '.png">';
  var verimg = '<img src="pics/img' + index + '.png">';
  document.getElementById("fc" + index).innerHTML = vertxt;
  if (name[name.length - 9] == "m") {
    document.getElementById("fc" + index).innerHTML = vertxt;
    playAudio(index);
  } else {
    document.getElementById("fc" + index).innerHTML = verimg;
  }
}
var allImages = '';
for (i = 0; i < 10; i++) {
  var eachPic =
    '<div class="col-sm-4"  id="fc' + i + '" onclick="flipOver(' + i + ')" onclick="playAudio(' + i + ')">';
  eachPic += '<img src="pics/img' + i + '.png"></div>';
  allImages += eachPic;
}
document.getElementById('allpics').innerHTML = allImages;

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