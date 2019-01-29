var x = 0;
var y = 0;
function addEgg() {
    x += 1;
    document.getElementById("eggs").innerHTML += "<img class = 'egg' src = 'pics/download-1.jpg' width = '25%'alt = 'egg'>";
    if (x * 1 == 12) {
        y += 1;
        document.getElementById("eggs").innerHTML = "";
        document.getElementById("carton").innerHTML += "<img class = 'carton' src = 'pics/aea32332b6ba5a98c5c811e8dfbdbd5f_medium.png' alt = 'carton'>";
        x = 0;
    }
    if (y == 1) {

        document.getElementById("henHome").innerHTML = "<img class = ' trophy' onClick = 'reset()' src='pics/download.png' alt = 'trophy'>";

    }
}
function reset() {

    x = 0;
    y = 0;
    document.getElementById("henHome").innerHTML = "<img id = 'hen' class='hen' onClick='addEgg()' src='pics/download.jpg'>";
    document.getElementById("eggs").innerHTML = "";
    document.getElementById("carton").innerHTML = "";
   
}