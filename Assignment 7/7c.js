var clickCounts = 0;
var cartonCounts = 0;
function addEgg() {
    if (cartonCounts == 2) {
        return;
    }
    
    var egg = createImg("pics/egg.jpg", "120", "150");
    document.getElementById("eggPan").appendChild(egg);

    var eggCarton = document.createElement("IMG");
    eggCarton.setAttribute("src", "pics/eggcarton.png")
  
    var winPicture = createImg("pics/trophy.jpg", "300", "300");
    clickCounts += 1;
    document.getElementById("eggCount").innerHTML = clickCounts;


    if (clickCounts == 12) {
        eggToCarton(eggCarton);
    }
    if (cartonCounts == 2) {
       win(winPicture);
    }
}

function createImg(src, width, height){
    var img = document.createElement("IMG");
    img.setAttribute("src", src)
    img.setAttribute("width", width);
    img.setAttribute("height", height);
    return img;
}

function eggToCarton(eggCarton){
    document.getElementById("eggPan").innerHTML = "";
    clickCounts = 0;
    document.getElementById("eggShelf").appendChild(eggCarton);
    cartonCounts += 1;
    document.getElementById("cartonCount").innerHTML = cartonCounts;
}

function win(winPicture){
    document.getElementById("winDisplay").appendChild(winPicture);
    document.getElementById("button").style.visibility = "visible"
}

function reset() {
    document.getElementById("eggPan").innerHTML = "";
    document.getElementById("eggShelf").innerHTML = "";
    document.getElementById("winDisplay").innerHTML = "";
    document.getElementById("button").style.visibility = "hidden"
    document.getElementById("eggCount").innerHTML = 0;
    document.getElementById("cartonCount").innerHTML = 0;
    clickCounts = 0;
    cartonCounts = 0;
}

