let places: string[] = ["hunza", "sawat", "skardu", "maree", "tokyo"];
console.log("orignal order:", places); //places in orignal order

//alphabetical order but orignal order remains same

console.log("alphabetical order:", [...places].sort());
console.log("orignal order:", places); //orignal order

//reversed alphabetical order  but orignal order remains same
console.log("reversed alphebetical order:", [...places].sort().reverse());
console.log("orignal order:", places); //orignal order

//// Reversing the original array in place
places.reverse();
console.log("reversed order:", places);

// Reversing back to the original order
places.reverse();
console.log("original order", places);

// Sorting in alphabetical order (in place)
places.sort();
console.log("alphebetical order:", places);

// Reversing in reverse alphabetical orde
places.reverse();
console.log("reversed alphabetical order:", places);
