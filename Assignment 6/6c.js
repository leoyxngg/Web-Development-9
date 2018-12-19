var output = document.getElementById("output");
output.innerHTML += "Assignment 6c <hr>";

function askName() {
    var name = prompt("What is your last name?");
    var title = prompt("How would you like to be addressed?");
    output.innerHTML += "Hello, <span class = 'highlight'>" + title + name + ", </span>";
    output.innerHTML += "<hr>";
    output.className = "nameColor";
}

function birthDay() {
    var birthDay = prompt("What year were you born?");
    var retireAge = prompt("What age do you wish to retire?");
    var age = 2018 - birthDay;
    var numRetire = retireAge - age;
    output.innerHTML += "You are currently " + age + " years old, and you need to work " + numRetire + " years in order to retire.";
    output.innerHTML += "<hr>";
    output.className = "retireColor";
}

function makeSentence() {
    var noun = prompt("Enter a noun: ");
    var adjective = prompt("Enter an adjective: ");
    var verb = prompt("Enter a verb: ");
    output.innerHTML += noun + " " + verb + " " + adjective;
    output.className = "sentenceColor";
}   

function clearOutput(){
    output.innerHTML = "";
}