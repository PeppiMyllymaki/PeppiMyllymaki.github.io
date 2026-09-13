document.addEventListener("click", (e) => {
    const toggle = e.target.closest(".dropdown-toggle");
    const dropdown = document.querySelector(".mobile-menu.dropdown");

    if (!dropdown) return;

    if (toggle) {
        e.preventDefault();
        e.stopPropagation();

        dropdown.classList.toggle("open");
        toggle.setAttribute("aria-expanded", dropdown.classList.contains("open"));
        return;
    }

    if (!e.target.closest(".mobile-menu.dropdown")) {
        dropdown.classList.remove("open");
        const btn = dropdown.querySelector(".dropdown-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
    }
});