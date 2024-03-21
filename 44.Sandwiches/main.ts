//a function of make_sandwich
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
//making sandwich with different ingredients
make_sandwich("egg", "cheese");
make_sandwich("chicken", "sauce", "tomato");
make_sandwich("beef", "ketchup", "mustard", "mayo");