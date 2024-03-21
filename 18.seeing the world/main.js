var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["hunza", "sawat", "skardu", "maree", "tokyo"];
console.log("orignal order:", places); //places in orignal order
//alphabetical order but orignal order remains same
console.log("alphabetical order:", __spreadArray([], places, true).sort());
console.log("orignal order:", places); //orignal order
//reversed alphabetical order  but orignal order remains same
console.log("reversed alphebetical order:", __spreadArray([], places, true).sort().reverse());
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
