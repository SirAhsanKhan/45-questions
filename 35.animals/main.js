//personilizing message for each animal
var animals = ["cat", "parrot", "dog", "lion", "cheetah"];
animals.forEach(function (animal) {
    if (animal == 'lion') {
        console.log("lion is a wild animal");
    }
    else if (animal == 'cheetah') {
        console.log("cheetah is a wild animal");
    }
    else {
        console.log("".concat(animal, " is a pet animal"));
    }
}); /*in this code i modify 2 animal lion and elephant to print a message that these two are wild animal
while others are pets*/
