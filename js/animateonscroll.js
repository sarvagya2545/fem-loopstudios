const fadingObjects = document.querySelectorAll('.fade');
const navbar = document.querySelector('.nav');
const hero = document.querySelector('.hero');

const appearOnScrollOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -150px 0px"
};

const navBarOptions = {
    threshold: 0.8,
};

const appearOnScrollObserver = new IntersectionObserver(appearOnScroll, appearOnScrollOptions);
const navBarObserver = new IntersectionObserver(changeBgOnScroll, navBarOptions);

function appearOnScroll(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    })
}

function changeBgOnScroll(entries, observer) {
    entries.forEach(entry => {
        // console.log(entry);
        // console.log(entry.target);
        if(!entry.isIntersecting) {
            navbar.classList.add('navbar-scrolled')
        } else {
            navbar.classList.remove('navbar-scrolled')
        }
    })
}

fadingObjects.forEach(fadingObject => appearOnScrollObserver.observe(fadingObject));
navBarObserver.observe(hero);