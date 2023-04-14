//INTERFACES
//It creates new type, describing the property names and values types of an object.
const oldCivic = {
    name: 'civic',
    year: 2000,
    isBroken: true,
    summary(): string {
        return `Name: ${this.name}\nYear: ${this.year}\nIsBroken: ${this.isBroken}`;
    }
};

interface Reportable{
    // name: string,
    // year: number,
    // isBroken: boolean,
    summary(): string
};

const printVehicle = (vehicle: Reportable): void => {
    console.log(vehicle.summary())
};
printVehicle(oldCivic);