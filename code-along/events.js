// Get a reference to the page title element from the DOM
//let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
//pageTitleElement.innerHTML = `Movies to watch!`

// Get a reference to the bulleted list of movies
//let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
//movieList.insertAdjacentHTML(`beforeend`, `
//  <li>Spaceballs</li>
//`)

// Get a reference to the image
//let image = document.querySelector(`img`)

// Add the `border-pink-500` class to the image element
//image.classList.add(`border-pink-500`)

// get a reference to the "click me" button

let clickMeButton = document.querySelector(`click-me`)

// event listener for the "click me" button

clickMeButton.addEventListener(`click`, async function (event) {

 //alert(`button was clicked`) //this code essentially tells the button to show you a pop up that says the button was clicked

 // Get a reference to the page title element from the DOM
let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
pageTitleElement.innerHTML = `Movies to watch!`


})

// get a reference to the "add movie" link
let addMovieLink = document.querySelector(`.add-movie`)


// event listener for the "add movie" link
addMovieLink.addEventListener(`click`, async function(event){
let movieList = document.querySelector(`.movies-to-watch`)

movieList.insertAdjacentHTML(`beforeend`, `
//  <li>Spaceballs</li>
//`)
})
