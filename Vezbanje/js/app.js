let j = 1;
// Hvata elemente iz html po id, classi i po nazivu elementa... sve to zajendo moze i kombinovano
let umotvorina = document.querySelector('.umotvorine p');

let texts = [
  "Ako drugog poštuješ za sebe ne brini..",
  "Bez muke nema nauke.",
  "Ko uči nosi gucci.",
  "Za čisto zlato, rđa ne prijanja..",
  "Jedna lasta ne čini proleće.."
];

setInterval(function() {
  if (j == 5) {
    j = 0;
  }
  umotvorina.innerHTML = texts[j];
  j++;
}, 10000);


// Header slike
function reklame() {
    console.log("Usli smo u funk")
    let slike = ['car1.jpg', 'car2.jpg', 'car3.jpg'];
    let slika_reklame = document.querySelector('.automobili img');
    console.log(slika_reklame.src);
    let i = 0;

    setInterval(function() {
        if (i === 3) {
            i = 0;
        }

        slika_reklame.src = `images/${slike[i]}`;
        // slika_reklame.src = 'images/' + slike[i];
        i++;
    }, 10000);
}

reklame();
/*
document.getElementById('moj_paragraf');
document.querySelector('#moj_paragraf');
*/