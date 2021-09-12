const colors = document.querySelectorAll('.color');
const body = document.querySelector('body');



function changeBackground(e) {

    const style = getComputedStyle(e.target);
    const bgColor = style.backgroundColor;

    body.style.backgroundColor = bgColor;
}

/* forEach */
colors.forEach( color => {
    color.addEventListener('click', changeBackground);
});








