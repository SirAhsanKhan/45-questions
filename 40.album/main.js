//a function called make_album 
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    // Check if the tracks is provided
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
// printing album with 2 tracks provide and 1 not
console.log(make_album("travis scott", "rodeo", 16));
console.log(make_album("alan walker", "on my way"));
console.log(make_album("talha anjum", "open letter", 11));
