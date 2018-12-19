function getVal(){   
    var aValue = document.getElementById("aValue").valueAsNumber;

    document.getElementById("show1").innerHTML = aValue + " > 10";
    document.getElementById("result1").innerHTML = (aValue > 10);

    document.getElementById("show2").innerHTML = aValue + " >= 5";
    document.getElementById("result2").innerHTML = (aValue >= 5);

    document.getElementById("show3").innerHTML = aValue + " < -50";
    document.getElementById("result3").innerHTML = (aValue < -50);

    document.getElementById("show4").innerHTML = aValue + " <= 100";
    document.getElementById("result4").innerHTML = (aValue <= 100);

    document.getElementById("show5").innerHTML = aValue + " == \"5\"";
    document.getElementById("result5").innerHTML = (aValue == "5");

    document.getElementById("show6").innerHTML = aValue + " != \"b\"";
    document.getElementById("result6").innerHTML = (aValue >= "b");
 
    document.getElementById("show7").innerHTML = aValue + " === \"5\"";
    document.getElementById("result7").innerHTML = (aValue === "5");

    document.getElementById("show8").innerHTML = aValue + " !== \"5\"";
    document.getElementById("result8").innerHTML = (aValue !== "5");
 }
 