//a function of make_sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
//making sandwich with different ingredients
make_sandwich("egg", "cheese");
make_sandwich("chicken", "sauce", "tomato");
make_sandwich("beef", "ketchup", "mustard", "mayo");
