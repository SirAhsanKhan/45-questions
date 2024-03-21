// Tests for equality and inequality with strings
var str1 = "apple";
var str2 = "banana";
console.log(str1 === str2); // False
console.log(str1 !== str2); // True
// Tests using the lower case function
var str3 = "WORLD";
var str4 = "world";
console.log(str3.toLowerCase() === str4); // True
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log(num1 > num2); // True
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
var a = true;
var b = false;
console.log(a && b); // False
console.log(a || b); // True
// Test whether an item is in an array
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.includes(4)); // True
console.log(myArray.includes(6)); // False
// Test whether an item is not in an array
console.log(!myArray.includes(3)); // False
console.log(!myArray.includes(6)); // True
