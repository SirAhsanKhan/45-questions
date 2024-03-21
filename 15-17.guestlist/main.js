var guestList = ["father", "mother", "brother", "sister"];
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, "; i would like to invite you for dinner tonight"));
});
//a guest cant make it to the dinner
var unableToAttend = "sister"; //removing guest
console.log("sorry ".concat(unableToAttend, " will not be there to join us")); //telling everyone that a guest cant make it to dinner
//replace the guest
var newGuest = "uncle";
guestList[guestList.indexOf(unableToAttend)] = newGuest; //adding newguest
//new invitation
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, "; i would like to invite you for dinner tonight")); //this will print personal message to guest
});
//i found a bigger table lets add more guests
console.log("".concat(guestList, " great news i found a bigger table")); //this print a message to guest
guestList.unshift("grandmother"); //add new guest at start of array
guestList.splice(guestList.length / 3, 0, "grandfather"); //add new guest in middle of array acc at specified index
guestList.push("greatGrandFather"); //add new guest at end  of array
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, " i would like you to join me for dinner tonight"));
});
//unfortunately table was broken 
//removing guest
console.log("unfortunately table was broken");
while (guestList.length > 6) {
    var removedGuestList = guestList.pop();
    console.log("sorry ".concat(removedGuestList, " i cant invite you to dinner "));
}
guestList.forEach(function (guestList) {
    console.log("dear ".concat(guestList, " you are still invited "));
});
