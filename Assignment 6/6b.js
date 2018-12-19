var name = prompt("What is your last name?");
var title = prompt("How would you like to be addressed?");
document.write("Hello, <span class = 'highlight'>" + title, name + ", </span>");
document.write("<hr>");

var birthDay = prompt("What year were you born?");
var retireAge = prompt("What age do you wish to retire?");
var age = 2018 - birthDay;
var numRetire = retireAge - age;
document.write("You are currently " + age + " years old, and you need to work " + numRetire + " years in order to retire.");
document.write("<hr>");

var noun = prompt("Enter a noun: ");
var adjective = prompt("Enter an adjective: ");
var verb = prompt("Enter a verb: ");
document.write(noun + " " + verb + " " + adjective);