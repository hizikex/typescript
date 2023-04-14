var apples = 5;
var speed = "quick";
var isName = true;
var nothing = null;
var othingMuch = undefined;
//built in object 
var now = new Date();
// Array
var colors = ['red', 'green', 'blue', 'indigo'];
var myNumbers = [1, 2, 3, 4];
var truths = [true, true, false, true];
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
//object literal
var point = {
    x: 10,
    y: 20
};
// Function
var logNumber = function (i) {
    // console.log(i);   
};
//When to use annotations
//1. functions that returns the 'any' type
var json = '{"x": 10, "y":20}';
var coordinates = JSON.parse(json);
// console.log(coordinates);
//2. When we declare a variable on one line
//and initialize it later
var words = ["red", 'green', 'blue'];
var foundWord;
for (var i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
        // console.log(foundWord);
    }
}
//Variable whose type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
        console.log(numberAboveZero);
    }
}
