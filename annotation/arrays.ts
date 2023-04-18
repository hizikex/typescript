const food = ['Rice', 'Shawarma', 'afang and Fufu'];
const dates = [new Date(), new Date()]
const carMakers = ['Honda', 'Toyota', 'Lexus', 'Acura']

const cars = [
    ['Pilot2020'],
    ['Highlander2022'],
    ['LX 350 2013'],
    ['Enjoyment2026']
]

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop()

//Prevents incompatible values
// const todaysMeal = food.push(344)
// console.log(todaysMeal)

//Help with 'map'
carMakers.map((car: string): void =>{
    //  return car.toUpperCase()
    console.log(car.toUpperCase());  
})


//flexible types
const importantDates = [new Date(), '2023-04-27']
importantDates.push('2024-01-01');
importantDates.push(new Date());

