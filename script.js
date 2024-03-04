// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// divs
let forms = document.querySelector(".form");
let input = document.querySelector(".inputs");
let heading = document.querySelector(".heading");
let columnDisplayImage = document.querySelector(".column display-image");
let columnDisplaySong = document.querySelector(".column display-song");
let columnDisplayArtist = document.querySelector(".column display-artist");
let columnDisplayLink = document.querySelector(".column display-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.


// let image = ["https://i.scdn.co/image/ab67616d0000b2734f59d753e29407c2b6cf5843", "https://m.media-amazon.com/images/I/41k+TeeBKXL._UXNaN_FMjpg_QL85_.jpg", "https://assets.audiomack.com/bizzonthetrack/36c7926cf996c6322fa7196842aed9076838c3f49f48acb33d1bb10ac817dcaa.jpeg" ]

// let songName = [ "Too Busy To be bae", "Reason", "Like I Do"]

// let artist = ["Kizz Daniel", "Omah Lay", "FireBoy" ]

// let songLink = ["https://www.youtube.com/watch?v=0RPzLGxepxg", "https://www.youtube.com/watch?v=vmytMK1ZjcY",  "https://www.youtube.com/watch?v=2geXXMO-Ny0"]




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let song1 = {
  image: "https://i.scdn.co/image/ab67616d0000b2734f59d753e29407c2b6cf5843",
  songName: "Too Busy To be bae",
  artist: "Kizz Daniel",
  songLink: "https://www.youtube.com/watch?v=0RPzLGxepxg"
};

let song2 = {
  image: "https://m.media-amazon.com/images/I/41k+TeeBKXL._UXNaN_FMjpg_QL85_.jpg",
  songName: "Reason",
  artist: "Omah Lay",
  songLink: "https://www.youtube.com/watch?v=vmytMK1ZjcY"
};

let song3 = {
  image: "https://assets.audiomack.com/bizzonthetrack/36c7926cf996c6322fa7196842aed9076838c3f49f48acb33d1bb10ac817dcaa.jpeg",
  songName: "Like I Do",
  artist: "FireBoy",
  songLink: "https://www.youtube.com/watch?v=2geXXMO-Ny0"
};

let songs = [song1, song2, song3];



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.







function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
  let imageValue = image.value;
  let nameValue = songName.value;
  let artistValue = artist.value;
  let linkValue = songLink.value;

  let newSong = {
    image: imageValue,
    songName: nameValue,
    artist: artistValue,
    songLink: linkValue
  };

  // task 10: use `.push()` to add each input value to the correct array.
  // image.push(imageValue);
  // songName.push(nameValue);
  // artist.push(artistValue);
  // songLink.push(linkValue);

  songs.push(newSong);
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  songs.forEach(function(song) {
    displayImage.insertAdjacentHTML('beforeend', `<img src=${song.image}>`);
    displaySong.insertAdjacentHTML('beforeend', `<p>${song.songName}</p>`);
    displayArtist.insertAdjacentHTML('beforeend', `<p>${song.artist}</p>`);
    displayLink.insertAdjacentHTML('beforeend', `<a href="${song.songLink}" target="_blank">Click Here plzz</a>`);

  })

}

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
