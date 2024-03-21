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

// Display the magician names
show_magicians(magicians);