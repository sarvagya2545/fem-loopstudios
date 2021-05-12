const menuBtn = document.querySelector('#menuOpen');
const closeBtn = document.querySelector('#menuClose');
const target = document.querySelector('.nav__mobile-wrapper');

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
    target.style.visibility = 'visible';
}

function closeMenu() {
    target.style.visibility = 'hidden';
}