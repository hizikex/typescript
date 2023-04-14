var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
var multiply = function (a, b) {
    return a * b;
};
var throwError = function (message) {
    if (!message) {
        throw new Error(message);
    }
};
//destructure with annotation
var todaysWeather = {
    date: new Date().getDay,
    weather: "Rainy"
};
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(todaysWeather);
