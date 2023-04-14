var profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var name = profile.name, age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
console.log(name, age);
console.log(lat, lng);
