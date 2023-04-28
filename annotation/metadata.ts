//Metadata allows you to add more information to an object, it's properties

import 'reflect-metadata'

@printMetadata
class Plane {
    color: string = 'red'

    @markFunction('Hi Johann')
    fly(): void {
        console.log('Vrrrrrrr');
    }
};

function markFunction(secretInfo: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key)
    }
}

function printMetadata(target: typeof Plane) {
    for (let key in target.prototype) {
        const secret = Reflect.getMetadata('secret', target.prototype, key) 
            console.log(secret);
    }
}


////METADATA ADDING MORE INFO TO THE OBJECT'S PROPERTY
// Reflect.defineMetadata('note', 'hi there', plane, 'color')
// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);

////ADDING MORE INFO TO THE OBJECT
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('weight', 500, plane);

// const note = Reflect.getMetadata('note', plane)
// const weight = Reflect.getMetadata('weight', plane)
// console.log(note);
// console.log(weight);
