// let message: string = "Hello, World!";
// let age: number = 30;
// let isMarried: boolean = true;
// let hobbies: string[] = ["reading", "traveling", "swimming"];


// function sayHello(name: string): void {
//   console.log(`Hello, ${name}!`);
// }

// sayHello("John");


// class Person {
//     private name: string;
//     private age: number;
  
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
  
//     getDetails(): string {
//       return `Name: ${this.name}, Age: ${this.age}`;
//     }
//   }
  
//   const person = new Person("John", 30);
//   console.log(person.getDetails());
  


// function greet(person, date) {
//   // console.log(`Hello ${person}, today is ${date}!`);
// }
// greet("Brendan", 4);

// function greet(person: string, date: Date) {
//   // console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Alade", new Date())


// function greet(person: string, date) {
// console.log("Hello ".concat(person.toUpperCase(), ", today is ").concat(date.toDateString()))
// }
// greet("Joan", new Date());


//  function getFavoriteNumber(num1: number, num2: number): number {
//    return num1 * num2
// }
// let sum = getFavoriteNumber(3, 1)
// console.log(sum);


// const names = ["John", "Mark", "Luke"]
// names.forEach((s) => {
//   if ( names ) {
//   console.log(s.toUpperCase());
//   } else {
//     console.log("Not a string");
//   }
// });


// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 3, y: 7 });



// function printName(obj: { first: string; last?: string }) {
//   console.log(`My is ${obj.first} ${obj.last}`);
// }
// // Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });


// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//   // console.log(obj.last.toUpperCase());
// // Object is possibly 'undefined'.
//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }
//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }
// printName({first: "Ugwuanya", last: "Joan"})


// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     // console.log("Hello, " + x.join(" and "));
//     console.log(`Hi, ${x.join(" and ")}`)
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }

// welcomePeople(["Paul", "Isaac"])
// // welcomePeople("Ademola")


// function printId(id: number | string) {
//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }
// printId("5")


// function getfirstthree(x: number[] | string) {
//   return x.slice(0, 3)
// }
// // let number = getfirstthree([4, 6, 7, 8, 1, 5])
// let string = getfirstthree("zico")
// console.log(string);


// type Point = {
//   x: number;
//   y: number;
// };
// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 100, y: 100 })



type UserInputSanitizedString = string;
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}
// sanitizeInput("Chinya")

// Create a sanitized input
let userInput = sanitizeInput(getInput());
// Can still be re-assigned with a string though
userInput = "new input";
