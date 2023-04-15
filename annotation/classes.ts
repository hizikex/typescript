//CLASSES
//It is a blueprint to create an object with some 
//fields(values and methods(functions) to represent a 'thing'.
class Vehicle {
    drive(): void {
        console.log('chugga chugga')
    }

    honk(): void {
        console.log('beep')
    }
}

//the keyword "extends" automatically passes the property/methods
//of the "Vehicle" class to the "Car" class.
class Car extends Vehicle{
    drive(): void{
        console.log("Vroom Vroom");
    }
};

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();


//Types of methods in classes.
//PUBLIC METHODS: This method can be called any where and anytime.
//PRIVATE METHODS: This method can be called only by methods in this class.
//PROTECTED METHODS: this methods can be called by other methods in this class,
//or by other methods in child classicNameResolver.