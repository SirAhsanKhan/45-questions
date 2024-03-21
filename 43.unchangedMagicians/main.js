var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Original array of magician names
var magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn",
    "Teller",
    "Criss Angel",
];
// Function to display magician names
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to modify magician names by adding "the Great" and return a new array
function make_great(magicians) {
    // Make a copy of the original array
    var modifiedMagicians = __spreadArray([], magicians, true);
    for (var i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] += " the Great";
    }
    // Return the modified array
    return modifiedMagicians;
}
var modifiedMagiciansArray = make_great(magicians.slice());
// Display the original and modified magician names
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagiciansArray);
