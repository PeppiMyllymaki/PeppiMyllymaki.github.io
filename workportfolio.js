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
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });

// Accordion functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const panel = header.nextElementSibling;
        const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

        // Close all panels
        document.querySelectorAll('.accordion-panel').forEach(p => p.style.maxHeight = null);

        // Toggle current panel
        if (!isOpen) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const panel = header.nextElementSibling;

    const isOpen = item.classList.contains('active');

    // Close all items
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.accordion-panel').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
