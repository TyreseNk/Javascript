const convertCelsiusToFahrenheit = celcius => {
    let fahrenheit = (9/5)*celcius + 32;
    return fahrenheit;
};
console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(35));
console.log(convertCelsiusToFahrenheit(95));