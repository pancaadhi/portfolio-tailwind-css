// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Humberger

const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function () {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});

document.addEventListener('click', function (e) {
    if (!humberger.contains(e.target) && !navMenu.contains(e.target)) {
        humberger.classList.remove('humberger-active');
        navMenu.classList.add('hidden');
    }
});