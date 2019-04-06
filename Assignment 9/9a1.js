function flipOver(index){
    console.log(index)
    var name=(document.getElementById("fc"+index).innerHTML).trim();
    console.log(name)
    var vertxt = '<img src="pics/txt'+index+'.png">';
    document.getElementById("fc"+index).innerHTML = vertxt;
    
 } 