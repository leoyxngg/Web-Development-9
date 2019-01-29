function getVal() {
    var aValue = document.getElementById("aValue").valueAsNumber;
    var bValue = document.getElementById("bValue").valueAsNumber;

    if (aValue > 12 || aValue < 1){
       document.getElementById("errorMessageForX").innerHTML = "<i class=\"material-icons\">report_problem</i>" + "Your input is out of bound!";
       return;
    }
    else{
        document.getElementById("errorMessageForX").innerHTML = "";
    }

    if (bValue > 12 || bValue < 1){
        document.getElementById("errorMessageForY").innerHTML = "<i class=\"material-icons\">report_problem</i>" + "Your input is out of bound!";
        return;
    }
    else{
        document.getElementById("errorMessageForY").innerHTML = "";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }

    var thumbUp = "<i class=\"material-icons\">thumb_up</i>";
    var thumbDown = "<i class=\"material-icons\">thumb_down</i>";

    document.getElementById("example1").innerHTML = aValue + " < 10 && " + aValue + " !== 5";
    var example1ResultTrue = aValue < 10 && aValue !== 5;
    if (example1ResultTrue) {
        document.getElementById("result1").innerHTML = thumbUp;
        document.getElementById("tr1").style.backgroundColor = "green";
        document.getElementById("tr1").style.color = "white";
        document.getElementById("tr1").style.fontFamily = "Josefin Sans";
    }
    else {
        document.getElementById("result1").innerHTML = thumbDown;
        document.getElementById("tr1").style.backgroundColor = "red";
        document.getElementById("tr1").style.color = "white";
    }

    document.getElementById("example2").innerHTML = bValue + " > 9 || " + aValue + " === 5";
    var example2ResultTrue = bValue > 9 || aValue === 5;
    if (example2ResultTrue) {
        document.getElementById("result2").innerHTML = thumbUp;
        document.getElementById("tr2").style.backgroundColor = "green";
        document.getElementById("tr2").style.color = "white";
        document.getElementById("tr2").style.fontFamily = "Josefin Sans";
    }
    else {
        document.getElementById("result2").innerHTML = thumbDown;
        document.getElementById("tr2").style.backgroundColor = "red";
        document.getElementById("tr2").style.color = "white";
    }


    document.getElementById("example3").innerHTML = "!(" + aValue + " === " + bValue + ")";
    var example3ResultTrue = !(aValue === bValue);
    if (example3ResultTrue) {
        document.getElementById("result3").innerHTML = thumbUp;
        document.getElementById("tr3").style.backgroundColor = "green";
        document.getElementById("tr3").style.color = "white";
        document.getElementById("tr3").style.fontFamily = "Josefin Sans"
    }
    else {
        document.getElementById("result3").innerHTML = thumbDown;
        document.getElementById("tr3").style.backgroundColor = "red";
        document.getElementById("tr3").style.color = "white";
    }

    if(example1ResultTrue && example2ResultTrue && example3ResultTrue)
    {
        document.getElementById('body').style.backgroundColor = "blue";
    }
}