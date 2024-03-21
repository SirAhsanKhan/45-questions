//an array of usernames
var userNames = ["admin", "anas", "ahsan", "arsalan", "wasay"];
userNames.forEach(function (userName) {
    if (userName === "admin") {
        console.log("hello admin, would you like to see status report"); //only for admin
    }
    else {
        console.log("hello ".concat(userName, "! thanks for logging in again")); //generic message
    }
});
