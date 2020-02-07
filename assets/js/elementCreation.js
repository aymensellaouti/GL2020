let img = document.createElement('img');

img.src = 'assets/images/job.png';
img.title = 'job offer';
img.alt = 'job offer';

let ol1 =  document.querySelector('#listeVilles');
let body = document.querySelector('body');
setInterval(
    () => {
        var img2 = img.cloneNode(true);
        ol1.appendChild(img2);
    }, 2500
);

body.insertBefore(img, body.firstChild);

