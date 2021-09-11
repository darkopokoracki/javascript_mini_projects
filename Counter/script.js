const addBtn = document.querySelector('.add-count');
const lowerBtn = document.querySelector('.lower-count');
const number = document.getElementById('number');

let numberValue = 0;
number.innerText = numberValue;

function counter(e) {
    if (e.target.className === 'add-count') {
        numberValue += 1;
    }

    if (e.target.className === 'lower-count') {
        numberValue -= 1;
    }

    number.innerText = numberValue;

    if (numberValue > 0) {
        number.style.color = "green";
    } else if (numberValue < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }

}

addBtn.addEventListener('click', counter);
lowerBtn.addEventListener('click', counter);
