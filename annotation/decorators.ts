class Boat {
    @testDecorator
    color: string = 'red';

    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError('Oops, boat was sunk in the ocean')
    pilot(): void {
        throw new Error( )
        console.log('Mitoma');
    }
}

function testDecorator(target: any, key: string) {
    console.log(target.color);
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
