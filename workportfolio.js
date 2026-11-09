
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

        if (!rotyx.classList.contains('active')) {
            header.click();
        }

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

        if (!soittajat.classList.contains('active')) {
            header.click();
        }

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

        if (!gametech.classList.contains('active')) {
            header.click();
        }

        gametech.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


// -------- MULTILAYERED MAGICAL MOUSE TRAIL --------

const trailContainer = document.createElement("div");
trailContainer.id = "cursor-trail";

Object.assign(trailContainer.style, {
    position: "fixed",
    inset: "0",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: "999999"
});

document.body.appendChild(trailContainer);

const trailSymbols = [
    "♡", "✧", "✦", "⋆",
    "୨୧", "♥", "✿", "˚",
    "ꕤ", "୭", "☆", "❀",
    "★", "♪", "☽", "❄",
    "✿", "✮", "♫", "❁"
];

const trailColors = [
    "#ff9ecb50",
    "#d5a6ff5f",
    "#9edbff50",
    "#ffe49b4a",
    "#a9edcf40",
    "#f5ebff2e"
];

let lastTrailTime = 0;

document.addEventListener("mousemove", (e) => {
    const now = Date.now();

    if (now - lastTrailTime < 45) return;
    lastTrailTime = now;

    // Create several particles around the cursor
    const particleCount = 4;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.className = "trail-particle";

        const symbol = trailSymbols[
            Math.floor(Math.random() * trailSymbols.length)
        ];

        const color = trailColors[
            Math.floor(Math.random() * trailColors.length)
        ];

        // Spread particles in a wider area
        const spreadX = Math.random() * 40 - 35;
        const spreadY = Math.random() * 40 - 35;

        particle.textContent = symbol;
        particle.style.color = color;

        particle.style.left = (e.clientX + spreadX) + "px";
        particle.style.top = (e.clientY + spreadY) + "px";

        particle.style.fontSize =
            (9 + Math.random() * 17) + "px";

        // Different movement for each layer
        particle.style.setProperty(
            "--drift-x",
            (Math.random() * 90 - 45) + "px"
        );

        particle.style.setProperty(
            "--drift-y",
            (-20 - Math.random() * 55) + "px"
        );

        particle.style.animationDelay =
            (Math.random() * 0.15) + "s";

        trailContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1400);
    }
});

/* ✧ PERMANENT FLOATING FAIRY CONSTELLATION ✧ */

document.querySelectorAll(".profile-frame").forEach(frame => {

    const symbols = [
        "♡", "✧", "✦", "⋆",
        "୨୧", "♥", "✿", "˚",
        "ꕤ", "୭", "☆", "❀",
        "★", "♪", "☽", "❄",
        "✿", "✮", "♫", "❁"
    ];

    const colors = [
        "#ff9ecb",
        "#d5a6ff",
        "#9edcff",
        "#ffe49b",
        "#a9edcf",
        "#f5ebff"
    ];

    // Create permanent floating symbols
    const sparkleCount = 35;

    for (let i = 0; i < sparkleCount; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "frame-sparkle";

        // Random fairy symbol
        sparkle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        // Random pastel color
        sparkle.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        // Random position around the frame
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;

        // Different sizes
        sparkle.style.fontSize =
            `${13 + Math.random() * 16}px`;

        // Different dancing speeds
        sparkle.style.setProperty(
            "--duration",
            `${3 + Math.random() * 5}s`
        );

        // Different twinkle speeds
        sparkle.style.setProperty(
            "--twinkle",
            `${2 + Math.random() * 3}s`
        );

        // Random animation starting points
        sparkle.style.setProperty(
            "--delay",
            `${Math.random() * -8}s`
        );

        // Different floating directions
        sparkle.style.setProperty(
            "--drift-x",
            `${-12 + Math.random() * 24}px`
        );

        // Add symbol permanently
        frame.appendChild(sparkle);
    }

});


// -------- MAGICAL FAIRY BACKGROUND --------

const fairySymbols = [
  "✧", "♡", "⋆", "✦", "୨୧",
  "☆", "✿", "˚", "ꕤ", "❀"
];

function createFairyBackground() {
  // Avoid creating duplicate backgrounds
  if (document.querySelector("#fairy-background")) return;

  const background = document.createElement("div");
  background.id = "fairy-background";
  background.setAttribute("aria-hidden", "true");

  document.body.prepend(background);

  const totalSymbols = 45;

  for (let i = 0; i < totalSymbols; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "background-sparkle";
    sparkle.textContent =
      fairySymbols[Math.floor(Math.random() * fairySymbols.length)];

    // Random position across the screen
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;

    // Different sizes
    sparkle.style.fontSize =
      `${12 + Math.random() * 20}px`;

    // Independent twinkling speeds
    sparkle.style.setProperty(
      "--twinkle-duration",
      `${2.5 + Math.random() * 4}s`
    );

    sparkle.style.setProperty(
      "--float-duration",
      `${5 + Math.random() * 7}s`
    );

    // Different animation starting points
    sparkle.style.setProperty(
      "--twinkle-delay",
      `${Math.random() * -6}s`
    );

    sparkle.style.setProperty(
      "--float-delay",
      `${Math.random() * -8}s`
    );

    background.appendChild(sparkle);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createFairyBackground);
} else {
  createFairyBackground();
}
