const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const fade = Math.min(window.scrollY / 300, 1);
    header.style.backgroundColor = `rgba(229, 213, 195, ${fade})`;
});

const video = document.querySelector('#showreel-video');
const overlay = document.querySelector('#video-overlay');

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    video.play();
});
