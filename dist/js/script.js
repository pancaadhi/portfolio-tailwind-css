// navbar fixed & back to top
window.onscroll = function () {
    const header = document.querySelector('header');
    const backToTop = document.querySelector('#back-to-top');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        backToTop.classList.remove('flex');
        backToTop.classList.add('hidden');
    }
}


// Humberger on click
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});

// when outside humberger menu on click
document.addEventListener('click', function (e) {
    if (e.target != humberger && e.target != navMenu) {
        humberger.classList.remove('humberger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// move the toggle position according to the mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}
