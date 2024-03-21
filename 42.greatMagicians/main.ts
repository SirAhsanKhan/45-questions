// Array of magician names
let magicians: string[] = [
  "David Copperfield",
  "Harry Houdini",
  "Penn",
  "teller",
  "Criss Angel",
];
// Function to display magician names
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
// Function to modify magician names by adding "the Great"
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " the Great";
  }
}
// Modify magician names to add "the Great
make_great(magicians); 

// Display the modified magician names    
show_magicians(magicians); 