//modifying shirt with default large size and message
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("making a ".concat(size, " shirt with the ").concat(message, " printed on it"));
}
//printing shirt with unique size and message
make_shirt();
make_shirt("medium");
make_shirt("small", "45 questions");
