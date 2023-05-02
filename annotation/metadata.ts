//Metadata allows you to add more information to an object, it's properties

import 'reflect-metadata'

@controller
class Plane {
    color: string = 'red'

    @get('/login')
    fly(): void {
        console.log('Vrrrrrrr');
    }
};

function get(path: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key)
    }
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        const middleware = Reflect.getMetadata('middleware', target.prototype);

        router.get(path, middleware, target.prototype[key])

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
