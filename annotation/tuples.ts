// const drink = {
//     color: "brown",
//     carbonated: true,
//     sugar: 30
// };

//example of a tuples
const Fanta: [string, boolean, number] = ['orange', true, 40];
const nescafe: [string, boolean, number] = ['brown', false, 3];
const Mirinda: [string, boolean, number] = ['orange', true, 40]
//Tuples will work very fine here, but type aliases 
//will make the code more clean and reusable

//Type aliases
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 30];
const sprite: Drink = ['colourless', true, 20];
const tea: Drink = ['brown', false, 0];

//Tuples are rarely used because it doesn't carry enough meaning. //Therefore objects can replace them with ease. example
const sosa = {
    color: 'yellow',
    carbonated: true,
    sugar: 15
}