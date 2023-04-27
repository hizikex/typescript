/// <reference types="@types/google.maps" />


// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);



// const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0
//     }
// });



import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./customMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap('map')

customMap.addMarker(user);
customMap.addMarker(company);
