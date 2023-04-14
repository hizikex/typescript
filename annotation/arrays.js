var food = ['Rice', 'Shawarma', 'afang and Fufu'];
var dates = [new Date(), new Date()];
var carMakers = ['Honda', 'Toyota', 'Lexus', 'Acura'];
var cars = [
    ['Pilot2020'],
    ['Highlander2022'],
    ['LX 350 2013'],
    ['Enjoyment2026']
];
//Help with inference when extracting values
var car = carMakers[0];
var myCar = carMakers.pop();
//Prevents incompatible values
// const todaysMeal = food.push(344)
// console.log(todaysMeal)
//Help with 'map'
carMakers.map(function (car) {
    return car.toUpperCase();
    console.log(car.toUpperCase());
});
