const btd = document.getElementById('btd');
const images = 
[
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg',
    'img/img8.jpg',
    'img/img9.jpg'
];

let i = 0;

btd.addEventListener("click", function (e) {
    e.preventDefault(); 
    document.body.style.backgroundImage = `url(${images[i]})`;
    i++;
    if(i >= images.length)
    {
        i = 0;
    }
  });