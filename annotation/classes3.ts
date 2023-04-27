//Use of constructors
// class Vehicle {
//     color: string= 'red';

//     constructor(color: string){
//         this.color = color
//     }
//     protected honk(): void {
//         console.log('beep');
//     }
// };

//this and the code above perforem the same function
class Vehicle {
    constructor(public color: string){
    }
    protected honk(): void {
        console.log('beep');
    }
};

const vehicle = new Vehicle('orange');
console.log(vehicle.color);