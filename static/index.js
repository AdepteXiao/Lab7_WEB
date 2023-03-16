let openModalButton = document.getElementById('open-modal');
let imageModal = document.getElementById('image-modal');

openModalButton.addEventListener('click', function() {
    imageModal.style.display = 'block';
});



window.addEventListener('click', function(event) {
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});


const links = document.querySelectorAll('a');
const images = document.getElementsByTagName('img');
links.forEach(link => {
    console.log('ссылка: ', link.href, ', текст: ', link.innerText);
});
for (let i = 0; i < images.length; i++) {
    console.log('изображение: ', images[i].src);
}


function handleClick(event) {
    console.log('клик', event.target);
}
function handleMouseOver(event) {
    console.log('наведение мыши', event.target);
}
const button = document.querySelector('button');
button.addEventListener('click', handleClick);
button.addEventListener('mouseover', handleMouseOver);


const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    console.log('клик', event.target.href);
});


const gifs = ["Genshin Impact Paimon-0.png", "Genshin Impact Paimon-1.png", "Genshin Impact Paimon-2.png", "Genshin Impact Paimon-3.png", "Genshin Impact Paimon-4.png", "Genshin Impact Paimon-5.png", "Genshin Impact Paimon-6.png", "Genshin Impact Paimon-7.png", "Genshin Impact Paimon-8.png", "Genshin Impact Paimon-9.png", "Genshin Impact Paimon-10.png", "Genshin Impact Paimon-11.png", "Genshin Impact Paimon-12.png", "Genshin Impact Paimon-13.png", "Genshin Impact Paimon-14.png", "Genshin Impact Paimon-15.png", "Genshin Impact Paimon-16.png", "Genshin Impact Paimon-17.png", "Genshin Impact Paimon-18.png", "Genshin Impact Paimon-19.png", "Genshin Impact Paimon-20.png", "Genshin Impact Paimon-21.png", "Genshin Impact Paimon-22.png", "Genshin Impact Paimon-23.png", "Genshin Impact Paimon-24.png", "Genshin Impact Paimon-25.png", "Genshin Impact Paimon-26.png", "Genshin Impact Paimon-27.png", "Genshin Impact Paimon-28.png", "Genshin Impact Paimon-29.png", "Genshin Impact Paimon-30.png", "Genshin Impact Paimon-31.png", "Genshin Impact Paimon-32.png", "Genshin Impact Paimon-33.png", "Genshin Impact Paimon-34.png", "Genshin Impact Paimon-35.png", "Genshin Impact Paimon-36.png", "Genshin Impact Paimon-37.png"];
let index = 0;

function changeImage() {
    index = (index + 1) % gifs.length;
    const img = document.getElementById("gif");
    img.src = "./static/images/" + gifs[index];
    img.alt = gifs[index];
}

setInterval(changeImage, 50);