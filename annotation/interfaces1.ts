//Interface here is so powerful. When check the print summary,
//You will discover that only "summary" was called by this: item.summary().
//what it implies is that, typescript only checks if printSummary function
//satisfied the "Reportable interface property", here: "summary(): string".
//It doesn't check if other properties exist or not.
//That is why after commenting the other property of Reportable interface, all is still working well.

interface Reportable{
    // name: string,
    // year: number,
    // isBroken: boolean,
    summary(): string;
};

const oldYamaha = {
    name: 'Yamaha',
    year: 2000,
    isBroken: true,
    summary(): string {
        return `Name: ${this.name}\nYear: ${this.year}\nIsBroken: ${this.isBroken}`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
};
printSummary(oldYamaha);

//NOTE: Reportable interface only have propertty of summary.
//Therefore, since drink object here has property "summary function",-> TBC
const softDrink = {
    name: 'Pepsi',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink: ${this.name} has ${this.sugar} grams of sugar.\nIt is cabonated.`;
    }
};

//printSummary can call drink object too, like so:
printSummary(softDrink)
