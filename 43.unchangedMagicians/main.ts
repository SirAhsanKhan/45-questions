// Original array of magician names
let magicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn",
  "Teller",
  "Criss Angel",
];

// Function to display magician names
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Function to modify magician names by adding "the Great" and return a new array
function make_great(magicians: string[]): string[] {
  // Make a copy of the original array
let  modifiedMagicians: string[] = [...magicians];
  for (let i = 0; i < modifiedMagicians.length; i++) {
    modifiedMagicians[i] += " the Great";
  }
  // Return the modified array
  return modifiedMagicians;
}
let modifiedMagiciansArray: string[] = make_great(magicians.slice());

// Display the original and modified magician names
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nModified Magicians:");
show_magicians(modifiedMagiciansArray);
