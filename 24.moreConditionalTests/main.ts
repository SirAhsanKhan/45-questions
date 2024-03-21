// Tests for equality and inequality with strings
let str1: string = "apple";
let str2: string = "banana";
console.log(str1 === str2); // False
console.log(str1 !== str2); // True

// Tests using the lower case function
let str3: string = "WORLD";
let str4: string = "world";
console.log(str3.toLowerCase() === str4); // True

// Numerical tests
let num1: number = 10;
let num2: number = 5;
console.log(num1 > num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let a: boolean = true;
let b: boolean = false;
console.log(a && b); // False
console.log(a || b); // True

// Test whether an item is in an array
let myArray: number[] = [1, 2, 3, 4, 5];
console.log(myArray.includes(4)); // True
console.log(myArray.includes(6)); // False

// Test whether an item is not in an array
console.log(!myArray.includes(3)); // False
console.log(!myArray.includes(6)); // True
