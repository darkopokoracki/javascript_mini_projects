//Selectors
const body = document.querySelector('body');
const btn = document.querySelector('button');

const colors = ["red", "green", "blue", "orange", "purple", "yellow", "steelblue",
"lightgreen", "gray", "lightgray", "potato"];



//Functions
function changeBackground() {
    // Return a random integer from 0 to colors.length - 1
    let randomNumber = Math.floor(Math.random() * colors.length);

    body.style.background = `${colors[randomNumber]}`
    btn.style.background = `${colors[randomNumber]}`
}


//Events
btn.addEventListener('click', changeBackground);