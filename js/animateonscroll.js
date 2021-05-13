const fadingObjects = document.querySelectorAll('.fade');

const appearOnScrollOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScrollObserver = new IntersectionObserver(appearOnScroll, appearOnScrollOptions);

function appearOnScroll(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    })
}

fadingObjects.forEach(fadingObject => appearOnScrollObserver.observe(fadingObject));