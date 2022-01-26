function main() {
    let kocka = document.getElementById('kocka');

    for (let i = 0; i < 10; i++) {
        let red = document.createElement('div');
        red.className = 'red';
        kocka.appendChild(red);

        for (let j = 0; j < 10; j++) {
            let kolona = document.createElement('div');
            kolona.className = 'kolona';
            red.appendChild(kolona);
        }
    }

    let kolone = document.getElementsByClassName('kolona');
    for (let i = 0; i < kolone.length; i++) {
        kolone[i].addEventListener('click', obojiKolonu);
    }
}

function obojiKolonu(e) {
    let meta = e.target;
    console.log(meta);
    meta.style.background = 'red';
}

window.addEventListener('load', main);