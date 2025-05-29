const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const screens = document.querySelectorAll('.screen');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

gsap.from('.hero h1', {opacity: 0, y: -50, duration: 1});
gsap.from('.hero p', {opacity: 0, y: 50, delay: 0.5, duration: 1});
gsap.from('.cta-button', {opacity: 0, scale: 0.8, delay: 1, duration: 0.8});
gsap.from('.pillar', {opacity: 0, y: 50, duration: 1, stagger: 0.2, scrollTrigger: '.pillar'});
gsap.from('.screen', {opacity: 0, y: 50, duration: 1, stagger: 0.2, scrollTrigger: '.screen'});