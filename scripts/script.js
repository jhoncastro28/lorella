document.getElementById('music-btn').addEventListener('click', function() {
    const song = document.getElementById('song');
    if (song.paused) {
        song.play();
        console.log('Reproduciendo la canción');
        this.textContent = 'Pausar música';  // Cambia el texto al hacer clic
    } else {
        song.pause();
        console.log('Pausando la canción');
        this.textContent = 'Púlsame :3';  // Vuelve al texto original si se pausa
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.getElementById('corazones').appendChild(heart);

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function animateImages() {
    const images = document.querySelectorAll('.imagenes img');
    images.forEach(img => {
        // Cambiar las posiciones top y left para que cubran toda la pantalla.
        const randomX = Math.random() * (window.innerWidth - img.clientWidth);
        const randomY = Math.random() * (window.innerHeight - img.clientHeight);
        img.style.left = randomX + 'px';
        img.style.top = randomY + 'px';
        img.style.animationDuration = Math.random() * 3 + 3 + 's'; // 3 a 6 segundos de duración
    });
}

setInterval(animateImages, 4000);

document.addEventListener('DOMContentLoaded', () => {
    const song = document.getElementById('song');
    song.volume = 0.5;
    animateImages();  // Inicializa la animación de las imágenes
});
