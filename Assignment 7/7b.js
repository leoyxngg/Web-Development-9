function getVal(){
    var aValue =  document.getElementById("aValue").valueAsNumber;
    var bValue = document.getElementById("bValue").valueAsNumber;

    document.getElementById("example1").innerHTML = aValue + " < 10 && " + aValue + " !== 5";
    document.getElementById("result1").innerHTML = (aValue < 10 && aValue !== 5);

    document.getElementById("example2").innerHTML = bValue + " > 9 ||" + aValue + " === 5"; 
    document.getElementById("result2").innerHTML = (bValue > 9 || aValue === 5);

    document.getElementById("example3").innerHTML = "!(" + aValue + " === " + bValue + ")";
    document.getElementById("result3").innerHTML = (!(aValue === bValue));
}