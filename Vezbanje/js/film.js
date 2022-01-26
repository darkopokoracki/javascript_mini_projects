function main() {
    let klikFilmovi = document.getElementsByClassName('klik-film');

    // Prolazimo kroz svaki film da bi smo saznali na koji paragraf smo kliknuli
    for (let i = 0; i < klikFilmovi.length; i++) {
        console.log(klikFilmovi[i])
        // Za svaki klik-film stavljam click event
        klikFilmovi[i].addEventListener('click', pustiFilm);
    }
}

function pustiFilm(e) {
    // e = event = to je objekat koji nam pokazuje informacije o dogadjaju
    // Nama treba informacija o tome na koji paragraf smo kliknuli

    let meta = e.target.id;
    let metaNaslova = e.target.innerText;
    

    // Traget je atribut koji pokazuje metu na koju smo kliknuli
    let sourceElement = document.querySelector('video source');
    let naslovFilma = document.querySelector('.film h1');

    switch (meta) {
        case 'prvi-film':
            sourceElement.src = 'videos/video1.mp4';
            break;

        case 'drugi-film':
            sourceElement.src = 'videos/video2.mp4';
            break;

        case 'treci-film':
            sourceElement.src = 'videos/video3.mp4';
            break;
    }

    sourceElement.parentElement.load();
    naslovFilma.innerHTML = metaNaslova;

}

// Kada se ucita stranica, pokrece se main funkcija
window.addEventListener('load', main);
