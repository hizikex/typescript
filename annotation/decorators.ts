@classDecorator
class Boat {
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError('Something bad')
    pilot(@parameterDecorator speed: string,
         @parameterDecorator generateWake: boolean): void {
        if (speed === 'fast') {
            console.log('Mitoma')
        } else {
            console.log('nothing')
        }
    }
}

//for parameter
function parameterDecorator (taarget: any, key: string, index: number) {
    console.log(key, index);
    
}

//for class
function classDecorator (constructor: typeof Boat) {
    console.log(constructor);
    
}

function testDecorator(target: any, key: string) {
    console.log(key);
 }

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
     
        desc.value = function () {
         try {
             method();
         } catch (e) {
             console.log(errorMessage);
         }
        }
     }
}
