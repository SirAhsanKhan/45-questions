//making a function of describing city 
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in the ").concat(country, " "));
}
//printing message with different  cities and countries
describe_city("karachi");
describe_city("lahore");
describe_city("newYork", "USA");
