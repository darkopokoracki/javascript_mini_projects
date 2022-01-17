
class Film {
    constructor(id, naziv, zanr, reziser, glavnaUloga, imdb, godina) {
        this.id = id;
        this.naziv = naziv;
        this.zanr = zanr;
        this.reziser = reziser;
        this.glavnaUloga = glavnaUloga;
        this. imdb = imdb;
        this.godina = godina;
    }
}

var myTimer;
var isTimer = false;


function main() {
    let film1 = new Film(1, "The Harder They Fall", "akcija", "The Bullitts", "Idris Elba", 6.6, 2021);
    let film2 = new Film(2, "Shaun of the Dead", "komedija", "Edgar Wright", "Nick Frost", 7.9, 2004);
    let film3 = new Film(3, "A Time To Kill", "triler", "Joel Schumacher", "Carl Lee Hailey", 7.4, 1996);

    let filmovi = [film1, film2, film3];

    napraviTabelu();
    popuniTabelu(filmovi);

    let dodajButton = document.getElementById('film-submit');
    dodajButton.addEventListener('click', validirajPodatke);

    let redovi = document.querySelectorAll('tr:not(:first-child)');

    for (let i = 0; i < redovi.length; i++) {
        redovi[i].addEventListener('click', selektujRed);
    }
}


function napraviTabelu() {
    const container = document.querySelector('.container');
    let table = document.createElement('table');
    table.className = 'table'; // Klasa za bootstrap
    table.setAttribute('border', '1');
    let tr = document.createElement('tr');
    
    const columns = [
        'ID', 'Naziv', 'Zanr', 'Reziser', 'Glavna Uloga', 'IMDB', 'Godina'
    ];

    for (let i = 0; i < columns.length; i++) {
        let th = document.createElement('th');
        th.innerText = `${columns[i]}`;
        th.style.padding = '.6rem 0';
        th.style.textAlign = 'center';
        th.style.background = '#292b2c';
        th.style.color = '#f7f7f7';
        tr.appendChild(th);
    }

    table.appendChild(tr);
    table.id = 'film-table';
    container.appendChild(table);
}


function popuniTabelu(filmovi) {
    let table = document.getElementById('film-table');

    for (let i = 0; i < filmovi.length; i++) {
        let tr = document.createElement('tr');

        let values = [
            filmovi[i].id, filmovi[i].naziv, filmovi[i].zanr, 
            filmovi[i].reziser, filmovi[i].glavnaUloga,
            filmovi[i].imdb, filmovi[i].godina
        ];

        for (let j = 0; j < values.length; j++) {
            let td = document.createElement('td');
            
            // Ideja je da svaka kolona u svakom redu dobije ime klase po kljucu objekta,
            // Moci cu da dohvatim sve id-jeve zato sto svaka kolona koja sadrzi id ima klasu id
            td.className = `${Object.keys(filmovi[i])[j]}`;
            td.innerText = `${values[j]}`;
            td.style.textAlign = 'center';
            td.style.padding = '.35rem 0';
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

var id = document.getElementById('id');
var naziv = document.getElementById('naziv');
var zanr = document.getElementById('zanr');
var reziser = document.getElementById('reziser');
var glavnaUloga = document.getElementById('glavnaUloga');
var imdb = document.getElementById('imdb');
var godina = document.getElementById('godina');

function validirajPodatke(e) {
    e.preventDefault();

    let span_elements =  document.getElementsByClassName('greska');

    for (let i = 0; i < span_elements.length; i++) {
        if (typeof(span_elements[i]) != 'undefined' && span_elements[i] != null) {
            span_elements[i].innerText = ''; //Resetovanje greske, da se ne bi pojavila dupla greska
            span_elements[i].classList.remove('alert');
            span_elements[i].classList.remove('alert-danger');
        }
    }

    // Predpostavljamo da nema greske u unetim podacima
    let greska = false;

    //Prvo proveravamo da li postoji neko polje koje nije popunjeno
    let inputPolja = document.querySelectorAll('.film-form input');
    for (let i = 0; i < inputPolja.length; i++) {
        if (inputPolja[i].value === '') {
            let polje_error = document.createElement('span');
            polje_error.innerText = 'Ovo polje je obavezno!';
            polje_error.classList.add('greska');
            polje_error.classList.add('alert');
            polje_error.classList.add('alert-danger');
            inputPolja[i].parentElement.appendChild(polje_error);

            greska = true;
        }
    }

    id_redovi = document.getElementsByClassName('id');
    let id_greska = document.createElement('span');

    for (let i = 0; i < id_redovi.length; i++) {
        trenutni_id = (parseInt(id_redovi[i].innerText));
        
        if (id.value == trenutni_id) {
            id_greska.innerText = 'ID koji ste uneli vec postoji';
            id_greska.classList.add('greska');
            id_greska.classList.add('alert');
            id_greska.classList.add('alert-danger');
            id.parentElement.appendChild(id_greska);

            greska = true;
        }
    }

    if (naziv.value.length < 2 && naziv.value !== '') {
        let naziv_greska = document.createElement('span');
        naziv_greska.innerText = 'Naziv mora imati najmanje 2 karaktera!';
        naziv_greska.classList.add('greska');
        naziv_greska.classList.add('alert');
        naziv_greska.classList.add('alert-danger');
        naziv.parentElement.appendChild(naziv_greska);

        greska = true;
    }


    zanr_moguce_vrednosti = ['akcija', 'drama', 'triler', 'komedija'];
    if (!zanr_moguce_vrednosti.includes(zanr.value.toLowerCase()) && zanr.value !== '') { //toLowerCase() zbog insensitive
        let zanr_greska = document.createElement('span');
        zanr_greska.innerText = 'Zanr podrzava samo vrednosti: akcija, drama, komedija i triler';
        zanr_greska.classList.add('greska');
        zanr_greska.classList.add('alert');
        zanr_greska.classList.add('alert-danger');
        zanr.parentElement.appendChild(zanr_greska);

        greska = true;
    }

    let reziser_reci = reziser.value.split(" ");
    if ((reziser_reci.length < 2 || reziser_reci[0].length < 2 || reziser_reci[1].length < 2) && reziser.value !== '') {
        let reziser_greska = document.createElement('span');
        reziser_greska.innerText = 'Reziser mora da sadrzi najmanje 2 reci!';
        reziser_greska.classList.add('greska');
        reziser_greska.classList.add('alert');
        reziser_greska.classList.add('alert-danger');
        reziser.parentElement.appendChild(reziser_greska);

        greska = true;
    }

    let glavnaUloga_reci = glavnaUloga.value.split(" ");
    if ((glavnaUloga_reci.length < 2 || glavnaUloga_reci[0].length < 2 || glavnaUloga_reci[1].length < 2) && glavnaUloga.value !== '') {
        let glavnaUloga_greska = document.createElement('span');
        glavnaUloga_greska.innerText = 'Glavna Uloga mora da sadrzi najmanje 2 reci!';
        glavnaUloga_greska.classList.add('greska');
        glavnaUloga_greska.classList.add('alert');
        glavnaUloga_greska.classList.add('alert-danger');
        glavnaUloga.parentElement.appendChild(glavnaUloga_greska);

        greska = true;
    }

    if (parseFloat(imdb.value) < 1 || parseFloat(imdb.value) > 10) {
        let imdb_greska = document.createElement('span');
        imdb_greska.innerText = 'IMDB mora biti u opsegu od 1 do 10!';
        imdb_greska.classList.add('greska');
        imdb_greska.classList.add('alert');
        imdb_greska.classList.add('alert-danger');
        imdb.parentElement.appendChild(imdb_greska);

        greska = true;
    }

    if (parseInt(godina.value) > 2022) {
        let godina_greska = document.createElement('span');
        godina_greska.innerText = 'Godina ne sme biti veca od 2022!';
        godina_greska.classList.add('greska');
        godina_greska.classList.add('alert');
        godina_greska.classList.add('alert-danger');
        godina.parentElement.appendChild(godina_greska);

        greska = true;
    }

    if (greska === false) {
        tajmerValidacija();
    }
}

function tajmerValidacija() {
    let tajmerValidacijaDiv = document.querySelector('.tajmer-validacija');
    tajmerValidacijaDiv.classList.remove('d_none');

    let first_number = Math.floor(Math.random() * 10) + 1; // od 1 do 10
    let second_number = Math.floor(Math.random() * 10) + 1; // od 1 do 10
    let operacije = ['+', '-', '*', '/'];
    let random_operacija = Math.floor(Math.random() * operacije.length); // od 0 do 3
    
    let odbrojavanje = 10;
    let timer = document.getElementById('timer');
    timer.style.fontSize = '3rem';

    let prvi_broj = document.getElementById('prvi_broj');
    let drugi_broj = document.getElementById('drugi_broj');
    let operacija = document.getElementById('operacija');

    prvi_broj.innerText = first_number;
    drugi_broj.innerText = second_number;
    operacija.innerText = operacije[random_operacija];


    let odgovorButton = document.getElementById('odgovor-button');
    // let x = odgovorButton.addEventListener('click', proveriResenje);
    
    if (isTimer == false) {
        myTimer = setInterval(() => {
            isTimer = true;
            timer.innerText = odbrojavanje;
    
            if (odbrojavanje <= 3) {
                timer.style.color = 'red';
            } else if (odbrojavanje > 3 && odbrojavanje >= 10) {
                timer.style.color = 'black';
            }
    
            if (odbrojavanje == 0) {
                clearInterval(myTimer);
                tajmerValidacijaDiv.classList.add('d_none');
                alert('isteklo vreme!');
                isTimer = false;
            }
    
            odbrojavanje--;
        }, 1000);
    }
}


function proveriResenje(e) {
    e.preventDefault();
    let prvi_broj = parseInt(document.getElementById('prvi_broj').innerText);
    let drugi_broj = parseInt(document.getElementById('drugi_broj').innerText);
    let operacija = document.getElementById('operacija').innerText;

    // Kada jednom posaljemo odgovor, ne treba nam timer
    clearInterval(myTimer);
    isTimer = false; 

    let tajmerValidacijaDiv = document.querySelector('.tajmer-validacija');


    let resenje;
    switch (operacija) {
        case '+':
            resenje = prvi_broj + drugi_broj;
            break;
        
        case '-':
            resenje = prvi_broj - drugi_broj;
            break;

        case '*':
            resenje = prvi_broj * drugi_broj;
            break;

        case '/':
            resenje = Math.floor(prvi_broj / drugi_broj);
            break;
    }

    let moje_resenje = parseInt(document.getElementById('rezultat').value);

    if (moje_resenje === resenje) {
        alert('Novi film je dodat u tabelu');
        tajmerValidacijaDiv.classList.add('d_none');

        // Pozivamo funkciju za dodavanje novog flma u tabelu
        dodajNoviFilm();

    } else {
        alert('Rezultat nije dobar');
        tajmerValidacijaDiv.classList.add('d_none');
    }
}

function dodajNoviFilm() {
    let noviFilm = new Film(id.value, naziv.value, zanr.value, reziser.value, glavnaUloga.value, imdb.value, godina.value);
    let table = document.getElementById('film-table');
    let tr = document.createElement('tr');

    let values = [
        noviFilm.id, noviFilm.naziv, noviFilm.zanr, 
        noviFilm.reziser, noviFilm.glavnaUloga, 
        noviFilm.imdb, noviFilm.godina
    ];
    
    for (let i = 0; i < values.length; i++) {
        let td = document.createElement('td');
        td.className = `${Object.keys(noviFilm)[i]}`;
        td.innerText = `${values[i]}`;
        td.style.textAlign = 'center';
        td.style.padding = '.35rem 0';
        tr.appendChild(td);
        tr.addEventListener('click', selektujRed);
    }

    table.appendChild(tr);

    // Vracanje polja na prazan string posle uspesnog popunjavanja
    id.value = '';
    naziv.value = '';
    zanr.value = '';
    reziser.value = '';
    glavnaUloga.value = '';
    imdb.value = '';
    godina.value = '';
}


function selektujRed(e) {
    let meta = e.target;
    meta.parentElement.classList.toggle('selektuj_red');
}

window.addEventListener('load', main);




