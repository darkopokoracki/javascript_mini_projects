const countBtn = document.querySelector('#count-btn');
const res = document.getElementById('result');

function countWithoutSpaces(word) {

}

function countWithSpaces(word) {
    return word.length;
}

function countWord() {
    const word = document.querySelector('#word').value;
    const checkboxSpace = document.querySelector('#space');
    const checkboxNoSpace = document.querySelector('#no-space');

    if (checkboxSpace.checked) {
        console.log('With spaces');
        const result = countWithSpaces(word);
        res.innerText = result;
        
        
    } else if (checkboxNoSpace.checked) {
        console.log('With OUT Spaces');
        const result = countWithoutSpaces(word);

    } else {
        console.log('Morate popuniti ovo');
    }


}

countBtn.addEventListener('click', countWord);



