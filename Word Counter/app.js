const countBtn = document.querySelector('#count-btn');
const res = document.getElementById('result');
const alertBtn = document.querySelector('.closebtn');
const wordForm = document.querySelector('.word-form');


function countWithoutSpaces(word) {
    console.log('Without spaces')
    let counter = word.split(" ").length - 1;

    return word.length - counter;
}

function countWithSpaces(word) {
    console.log('With');
    return word.length;
}

function countWord() {
    const word = document.querySelector('#word').value;
    const checkboxSpace = document.querySelector('#space');
    const checkboxNoSpace = document.querySelector('#no-space');

    if ((checkboxSpace.checked && word !== "")) {
        alertBtn.parentElement.classList.add('d_none');

        const result = countWithSpaces(word);
        res.innerText = result;
        wordForm.reset();
        
        
    } else if (checkboxNoSpace.checked && word !== "") {
        alertBtn.parentElement.classList.add('d_none');

        const result = countWithoutSpaces(word);
        res.innerText = result;
        wordForm.reset();

    } else {
        alertBtn.parentElement.classList.remove('d_none');

        // setTimeout(() => {
        //     alertBtn.parentElement.classList.add('d_none'); 
        // }, 5000);
    }
}

countBtn.addEventListener('click', countWord);
alertBtn.addEventListener('click', () => {
    alertBtn.parentElement.classList.add('d_none');
});



