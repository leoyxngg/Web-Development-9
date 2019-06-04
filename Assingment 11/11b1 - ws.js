// var arFruits = [];

// var arFruits = ["apple", "banana", "cherry"];
// arFruits = [];

// var arFruits = ["apple", "banana", "cherry"]
// arFruits.splice(1, 0, "avocado")

// var arFruits = ["apple", "banana", "cherry"];
// var arFruitsLen = arFruits.length;

// var arFruits = ["apple", "banana", "cherry"];
// arFruits.splice(3, 0, "date");

// var arFruits = ["apple", "banana", "cherry"];
// arFruits.splice(0, 1);

// var arFruits = ["apple", "banana", "cherry"];
// arFruits.splice(2, 1);





// var arFruits = ["apple", "banana", "cherry"];
// arFruits.splice(1, 2);

// var arFruits = ["apple", "banana", "cherry"];
// arFruits.splice(1, 0, "blueberry", "cantaloupe");

// var arFruits = ["apple", "banana", "cherry"];
// for (var i = 0; i < arFruits.length; i++) { 
//     console.log(arFruits[i]);
// }

// var arFruits = ["apple", "banana", "cherry"];
// var arFruits2 = arFruits.slice();

// var sGreeting = "how are you today?";
// var arGreeting = [];
// arGreeting = sGreeting.split(" ");

// var rnd1 = Math.random();
// var rnd2 = rnd1 * 6;
// var rnd3 = Math.floor(rnd2);

var arr1 = ["A","B","C","E","F","G"];
shuffle(arr1)
function shuffle(pass) { 
    for (var i = 0; i < pass.length; i++) { 
        var item = pass[i];
        var randomitem = pass[Math.floor(Math.random() * pass.length)];
        pass[i] = randomitem;
        randomitem = item;
    }
}
console.log(arr1);

// var arr1 = ["apple", "banana", "cherry"];
// var arr2 = ["apple", "banana", "cherry"];
// var arr3 = arr1.toString();
// var arr4 = arr2.toString();
// if (arr3 == arr4) {
//     console.log("The two arrays are the same!")
// }

// else {
//     console.log("The two arrays are not the same!")
// }

