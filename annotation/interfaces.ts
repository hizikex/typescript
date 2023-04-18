//INTERFACES
//It creates new type, describing the property names and values types of an object.
interface Reportable{
    // name: string,
    // year: number,
    // isBroken: boolean,
    summary(): string
};


const oldCivic = {
    name: 'civic',
    year: 2000,
    isBroken: true,
    summary(): string {
        return `Name: ${this.name}\nYear: ${this.year}\nIsBroken: ${this.isBroken}`;
    }
};

const drink = {
    name: 'Pepsi',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
};
printSummary(oldCivic);
printSummary(drink)