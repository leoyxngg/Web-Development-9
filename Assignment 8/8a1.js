var randomNum = Math.floor((Math.random() * 10) + 1);
var guess = 0;
var guessNum = 0;
while(guess != randomNum){
   guessNum++;
   guess = prompt("Guess a number between 1 to 10");

   if(guess > randomNum){
       larger();
   }

   if(guess < randomNum){
       smaller();
   }
}

function larger(){
    alert("Your guess is larger than the number.");
}

function smaller(){
    alert("Your guess is smaller than the number.");
}

alert("Congradulations! You have guessed the correct number! It took you a total of " + guessNum + " tries.");