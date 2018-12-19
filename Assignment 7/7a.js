function myScript(input) { 
    setTimeout(function() {  // because we're using the onkeydown event which returns the value before processed key, add a wait
        var number = input.value;
        var a = document.querySelector("#a");
        var resulta = document.querySelector("#resulta");
        a.innerHTML = number + " > 10";
        resulta.innerHTML = number > 10; 
        var b = document.querySelector("#b");
        var resultb = document.querySelector("#resultb");
        b.innerHTML = number + " >= 5";
        resultb.innerHTML = number >= 5;
    },10);
    
}