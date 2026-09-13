function initNavbarScroll() {
    const navbar = document.querySelector('.site-header');
    if (!navbar) return;

    // always-solid
    if (navbar.classList.contains('navbar--always-solid') || document.body.classList.contains('navbar--always-solid')) {
        navbar.classList.add('navbar--solid');
        navbar.classList.remove('navbar--transparent');
        return;
    }

    // hero/filler-hero
    const hero = document.querySelector('.hero, .filler-hero');
    if (hero) {
        navbar.classList.add('navbar--transparent'); // initially transparent
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar--solid');
                navbar.classList.remove('navbar--transparent');
            } else {
                navbar.classList.add('navbar--transparent');
                navbar.classList.remove('navbar--solid');
            }
        });
    } else {
        navbar.classList.add('navbar--solid'); // fallback
    }
}