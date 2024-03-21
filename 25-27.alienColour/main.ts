//alien colour that passes
let alienColour = "green";
if (alienColour == "green") {
  console.log("you killed an green alien 5 points added");
}
//alien colour that fails(no output)
alienColour = "red";
if (alienColour == "green") {
  console.log("you killed an green alien 5 points added");
} //running if: statement
alienColour = "green";
if (alienColour == "green") {
  console.log(`you earned 5 points for killing ${alienColour} alien `);
} else {
  console.log("you earned 10 points");
}
//runnung else statement
alienColour = "red";
if (alienColour == "green") {
  console.log(`you earned 5 points for killing an alien `);
} else {
  console.log("you just earned 10 points");
}
//running if, else if statement but three colour
//green colour version
alienColour = "green";
if (alienColour == "green") {
  console.log(`you earned 5 points for killing ${alienColour} alien `);
} else if (alienColour == "yellow") {
  console.log(`you just earned 10 points for killing ${alienColour} alien`);
} else if (alienColour == "red") {
  console.log(`you just earned 15 points for killing ${alienColour} alien`);
}
//yellow colour version
alienColour = "yellow";
if (alienColour == "green") {
  console.log(`you earned 5 points for killing ${alienColour} alien `);
} else if (alienColour == "yellow") {
  console.log(`you just earned 10 points for killing ${alienColour} alien`);
} else if (alienColour == "red") {
  console.log(`you just earned 15 points for killing ${alienColour} alien `);
}
//red colour version
alienColour = "red";
if (alienColour == "green") {
  console.log(`you earned 5 points for killing ${alienColour} alien `);
} else if (alienColour == "yellow") {
  console.log(`you just earned 10 points for killing ${alienColour} alien`);
} else if (alienColour == "red") {
  console.log(`you just earned 15 points for killing ${alienColour} alien `);
}
