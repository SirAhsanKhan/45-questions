let guestList: string[] = ["father", "mother", "brother", "sister"];
guestList.forEach((guestList) => {
  console.log(
    `dear ${guestList}; i would like to invite you for dinner tonight`
  );
});
//a guest cant make it to the dinner
let unableToAttend = "sister"; //removing guest
console.log(`sorry ${unableToAttend} will not be there to join us`); //telling everyone that a guest cant make it to dinner
//replace the guest
let newGuest = "uncle";
guestList[guestList.indexOf(unableToAttend)] = newGuest; //adding newguest
//new invitation
guestList.forEach((guestList) => {
  console.log(
    `dear ${guestList}; i would like to invite you for dinner tonight`
  ); //this will print personal message to guest
});
//i found a bigger table lets add more guests
console.log(`${guestList} great news i found a bigger table`); //this print a message to guest
guestList.unshift("grandmother"); //add new guest at start of array
guestList.splice(guestList.length / 3, 0, "grandfather"); //add new guest in middle of array acc at specified index
guestList.push("greatGrandFather"); //add new guest at end  of array

guestList.forEach((guestList) => {
  console.log(
    `dear ${guestList} i would like you to join me for dinner tonight`
  );
});
//unfortunately table was broken 
//removing guest
console.log("unfortunately table was broken")
while (guestList.length > 6) {
    let removedGuestList = guestList.pop()
    console.log(`sorry ${removedGuestList} i cant invite you to dinner `)
}
guestList.forEach(guestList=>{
    console.log(`dear ${guestList} you are still invited `)
})