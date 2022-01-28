function main() {
    let buttons = document.getElementsByClassName('klik-sort');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', sortirajTabelu);
    }
}

function dodajRed(e) {
    let id = document.getElementById('id');
    let naziv = document.getElementById('naziv');
    let zanr = document.getElementById('zanr');
    let godiste = document.getElementById('godiste');
    let imdb = document.getElementById('imdb');

    let tabela = document.querySelector('table');
    let tr = document.createElement('tr');

    let vrednosti = [id.value, naziv.value, zanr.value, godiste.value, imdb.value];

    for (let i = 0; i < 5; i++) {
        let td = document.createElement('td');
        td.innerHTML = vrednosti[i];
        tr.appendChild(td)
    }

    tabela.appendChild(tr);
}

function sortirajTabelu(e) {
    let meta = e.target.id;
    // let redovi = document.querySelectorAll('tr:not(:first-child)');

    switch(meta) {
        case 'sort-id':
            let ids = []; // 2, 3, 1

            let td_id = document.querySelectorAll('tr td:first-child');

            for (let i = 0; i < td_id.length; i++) {
                let pretvoreniID = parseInt(td_id[i].innerText); // pretvaramo u broj
                ids.push(pretvoreniID)
            }

            ids.sort(); // Sortiramo niz  ids -> 1, 2, 3
            
            for (let i = 0; i < ids.length; i++) {
                td_id[i].innerHTML = ids[i];
            }
            break;


        case 'sort-naziv':
            let nazivi = [];

            let td_naziv = document.querySelectorAll('tr td:nth-child(2)'); 

            for (let i = 0; i < td_naziv.length; i++) {
                nazivi.push(td_naziv[i].innerText);
            }
            
            nazivi.sort()

            for (let i = 0; i < nazivi.length; i++) {
                td_naziv[i].innerHTML = nazivi[i];
            }
            break;


        case 'sort-zanr':
            let zanrovi = [];

            let td_zanr = document.querySelectorAll('tr td:nth-child(3)'); 

            for (let i = 0; i < td_zanr.length; i++) {
                zanrovi.push(td_zanr[i].innerText);
            }
            
            zanrovi.sort()

            for (let i = 0; i < zanrovi.length; i++) {
                td_zanr[i].innerHTML = zanrovi[i];
            }
            break;


        case 'sort-godiste':
            let godine = []; 

            let td_godina = document.querySelectorAll('tr td:nth-child(4)');

            for (let i = 0; i < td_godina.length; i++) {
                let pretvorenaGodina = parseInt(td_godina[i].innerText); // pretvaramo u broj
                godine.push(pretvorenaGodina)
            }

            godine.sort();
            
            for (let i = 0; i < godine.length; i++) {
                td_godina[i].innerHTML = godine[i];
            }
            break;


        case 'sort-imdb':
            let imdb = []; 

            let td_imdb = document.querySelectorAll('tr td:nth-child(5)');

            for (let i = 0; i < td_imdb.length; i++) {
                let pretvoreniImdb = parseFloat(td_imdb[i].innerText); // pretvaramo u broj
                imdb.push(pretvoreniImdb);
            }

            imdb.sort();
            
            for (let i = 0; i < imdb.length; i++) {
                td_imdb[i].innerHTML = imdb[i];
            }
            break;
    }
}

window.addEventListener('load', main);