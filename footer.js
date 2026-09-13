function loadComponent(file, placeholderId, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;

            // ✅ run callback AFTER the component is inserted
            if (callback) callback();
        })
        .catch(error => console.error(error));
}

// -------------------------
// HEADER
// -------------------------
loadComponent('/header.html', 'header-placeholder', () => {
    const navbar = document.querySelector('.site-header');
    if (!navbar) return;

    // Always-solid pages (or body has navbar--always-solid)
    if (navbar.classList.contains('navbar--always-solid') || document.body.classList.contains('navbar--always-solid')) {
        navbar.classList.add('navbar--solid');
        navbar.classList.remove('navbar--transparent');
    } else {
        // Pages with hero
        const hero = document.querySelector('.hero, .filler-hero');
        if (hero) {
            navbar.classList.add('navbar--transparent');
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
            // Non-hero page, default solid
            navbar.classList.add('navbar--solid');
            navbar.classList.remove('navbar--transparent');
        }
    }
});

// -------------------------
// FOOTER
// -------------------------
loadComponent('/footer.html', 'footer-placeholder');