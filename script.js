// Typewriter Effect
const typed = new Typed('.typing', {
    strings: ['Python Engineer', 'Cloud Architect', 'Backend Specialist'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Scroll Reveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .timeline', { origin: 'bottom' });

// Sticky Navbar Toggle
window.onscroll = () => {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});