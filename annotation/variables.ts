let apples: number = 5;
let speed: string = "quick";
let isName: boolean = true;

let nothing: null = null;
let othingMuch: undefined = undefined

//built in object 
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue', 'indigo'];
let myNumbers: number[] =[1, 2, 3, 4];
let truths: boolean[] = [true, true, false, true]

//classes
class Car {

}
let car: Car = new Car();


//object literal
let point: {x: number; y: number} = 
 {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    // console.log(i);   
}


//When to use annotations
//1. functions that returns the 'any' type
const json = '{"x": 10, "y":20}'
const coordinates = JSON.parse(json)
// console.log(coordinates);


//2. When we declare a variable on one line
//and initialize it later
let words = ["red", 'green', 'blue']
let foundWord: true;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
        // console.log(foundWord);
    }
}

//Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
        console.log(numberAboveZero);
        
    }
}