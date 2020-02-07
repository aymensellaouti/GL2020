// var div = document.querySelector('div');
// setInterval(function () {
//     div.classList.toggle('lampe');
// },1000);
//
// let a = document.querySelector('a');
//
// alert(a.href);
//
// let newHref = prompt('Veuillez saisr la nuvelle adresse');
//
// a.href =  newHref;

let p = document.querySelector('div + p');

console.log(p.textContent);
console.log(p.innerHTML);
const section = 'GL2';
villes = [
    'Tunis','Sfax','Djerba','Sousse'
];
// setTimeout(
//     () => {
//         p.innerHTML = ``
//     },1000
// )

let olContent = '';
let ol =  document.querySelector('#listeVilles');
let i = 0;
x = setInterval(function () {
    let ville = villes[i++];
    let newItem = `<li>${ville}</li>`;
    olContent += newItem;
    ol.innerHTML = olContent;
    if (i === villes.length ) {
        clearInterval(x);
    }
}, 1000);

