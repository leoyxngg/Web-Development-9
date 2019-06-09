var sentence1 = "Hello! How are you?";
var arRand = sentence1.split(" ");
var arOrig = arRand;
var arCompose = [];
var times = 0;

function shuffle(myArr) {
    var random = Math.floor(Math.random() * myArr.length);
    var lastItem = myArr[myArr.length - random];
    if (lastItem == undefined) {
        random = 1;
        lastItem = myArr[myArr.length - random];
    }
    myArr.splice(0, 0, lastItem);
    myArr.splice(myArr.length - random, 1);
    if (times == 3) {
        return;
    }
    times++;
    shuffle(myArr);
}

function uniKeyCode(event) {
    var key = event.which || event.keyCode;
    if (key == 32) {
        shuffle(arRand);
        genTable();
        console.log(arRand);
    }
}