const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch("/send.php", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {

                formMessage.textContent = "✓ Viesti lähetetty onnistuneesti!";
                formMessage.className = "form-message success show";

                // Tyhjennetään lomake onnistuneen lähetyksen jälkeen
                contactForm.reset();

            } else {

                formMessage.textContent =
                    "✕ Viestin lähetys epäonnistui. Yritä myöhemmin uudelleen.";

                formMessage.className = "form-message error show";
            }

            // Popup katoaa 5 sekunnin kuluttua
            setTimeout(function () {
                formMessage.classList.remove("show");
            }, 5000);

        } catch (error) {

            formMessage.textContent =
                "✕ Viestin lähetys epäonnistui. Yritä myöhemmin uudelleen.";

            formMessage.className = "form-message error show";

            setTimeout(function () {
                formMessage.classList.remove("show");
            }, 5000);
        }

    });

}