//Declarando variaveis

let i = 0; let j = 0;
const btd = document.getElementById('btd');
const clique = document.getElementById('clique');
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

//Fim da declaração de variaveis

//Criando a função para a alteração de imagem
btd.addEventListener("click", function (e) {
    e.preventDefault(); 
    clique.innerHTML = `${j++}`;
    document.body.style.backgroundImage = `url(${images[i]})`;
    i++;
    if(i >= images.length)
    {
        i = 0;
    }
  });

//Fim da função