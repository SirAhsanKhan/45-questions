var current_users = ["bhai", "dada", "wasay", "ahsan"];
var new_users = ["laiba", "bhai", "dada", "hania"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
