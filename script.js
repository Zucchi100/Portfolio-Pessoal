const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-background video');
    if (video) {
        video.playsinline = true;
        video.muted = true;
        video.setAttribute('muted', '');
        video.autoplay = true;

        // Tenta iniciar o vídeo
        setTimeout(function() {
            video.play();
        }, 1000);

        // Reinicia o vídeo quando terminar (para iOS)
        video.addEventListener('ended', function() {
            video.play();
        });
    }
});