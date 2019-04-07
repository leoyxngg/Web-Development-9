function flipOver(index) {
    console.log(index);
    var name = (document.getElementById("fc" + index).innerHTML).trim();
    console.log(name);
    var vertxt = '<img src="pics/txt' + index + '.png">';
    var verimg = '<img src="pics/img' + index + '.png">';
    document.getElementById("fc" + index).innerHTML = vertxt;
    var name = (document.getElementById("fc" + index).innerHTML).trim();
    console.log(name);
    console.log(name[name.length - 9]);
    if (name[name.length - 9] == "i") {
        document.getElementById("fc" + index).innerHTML = vertxt;
    } else {
        document.getElementById("fc" + index).innerHTML = verimg;
    }
} 