// -------- MODAL VIEWER & ACCORDION --------
const modal = document.getElementById("modal");
const modalInner = document.getElementById("modalInner");
const closeModal = document.getElementById("closeModal");

// Open modal when clicking a media item
window.addEventListener("click", e => {
    if (e.target.classList.contains("media-item")) {
        const clone = e.target.cloneNode(true);
        clone.style.width = "100%";
        clone.style.height = "auto";
        modalInner.innerHTML = "";
        modalInner.appendChild(clone);
        modal.classList.add("show");
    }
});

// Close modal
closeModal.addEventListener("click", () => modal.classList.remove("show"));

modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
});


// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const panel = header.nextElementSibling;
        const isOpen = item.classList.contains('active');

        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.accordion-panel').style.maxHeight = null;
        });

        // Open clicked item if it was previously closed
        if (!isOpen) {
            item.classList.add('active');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});


// Open ROTYX accordion from "See more here" link
const rotyxLink = document.querySelector('a[href="#rotyx"]');

if (rotyxLink) {
    rotyxLink.addEventListener('click', e => {
        e.preventDefault();

        const rotyx = document.getElementById('rotyx');
        const header = rotyx.querySelector('.accordion-header');

        // Open the accordion if it's closed
        if (!rotyx.classList.contains('active')) {
            header.click();
        }

        // Scroll to it
        rotyx.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Open soittajat accordion from "See more here" link
const soittajatLink = document.querySelector('a[href="#soittajat"]');

if (soittajatLink) {
    soittajatLink.addEventListener('click', e => {
        e.preventDefault();

        const soittajat = document.getElementById('soittajat');
        const header = soittajat.querySelector('.accordion-header');

        // Open the accordion if it's closed
        if (!soittajat.classList.contains('active')) {
            header.click();
        }

        // Scroll to it
        soittajat.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


// Open gametech accordion from "See more here" link
const gametechLink = document.querySelector('a[href="#gametech"]');

if (gametechLink) {
    gametechLink.addEventListener('click', e => {
        e.preventDefault();

        const gametech = document.getElementById('gametech');
        const header = gametech.querySelector('.accordion-header');

        // Open the accordion if it's closed
        if (!gametech.classList.contains('active')) {
            header.click();
        }

        // Scroll to it
        gametech.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}
