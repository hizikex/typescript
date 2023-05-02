//INTERFACES
//It creates new type, describing the property names and values types of an object.
const getWater = {
    source: 'tap',
    price: 500,
    purity: true
}

const waterDetails = ({source, price, purity}: {source: string; price: number; purity: boolean}): void => {
    // console.log(`Source: ${source}`);
    // console.log(`Price: ${price}`);
    // console.log(`Purity: ${purity}`);
}
waterDetails(getWater)
//NOTE:
//if the properties of water continue to incrrease the type annotation increases too.
//So how then can we solve this issue_INTERFACE

interface WaterSpec {
    source: string;
    price: number;
    purity: boolean;
}

const theWater = (water: WaterSpec): void => {
    // console.log(`Source: ${water.source}`);
    // console.log(`Source: ${water.price}`);
    // console.log(`Source: ${water.purity}`);
}
theWater(getWater)


//The best way to bring out the properties of an interface 

interface Reportable{
    name: string,
    year: number,
    isBroken: boolean,
    summary(): string
};

interface Drinks {
    name: string,
    carbonated: boolean,
    sugar: number,
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
        return `My drink: ${this.name} has ${this.sugar} grams of sugar.\nIt is cabonated.`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
};
printSummary(oldCivic);

const drinkSummary = (item: Drinks): void => {
    console.log(item.summary())
};
drinkSummary(drink)