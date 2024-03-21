function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("rolls royce", "phantom", ["color", "bronze"], ["year", 2010]));
console.log(make_car("farrari", "Ferrari 599XX", ["color", "green"], ["antiTheift", true]));