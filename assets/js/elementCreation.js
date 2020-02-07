let img = document.createElement('img');

img.src = 'assets/images/job.png';
img.title = 'job offer';
img.alt = 'job offer';

let ol1 =  document.querySelector('#listeVilles');

setInterval(
    () => ol1.appendChild(img), 2000
)

