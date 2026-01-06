document.addEventListener("DOMContentLoaded", () => {

    /* ===================== TYPED TEXT ===================== */
    if (typeof Typed !== "undefined") {
        new Typed(".text", {
            strings: [
                "Géomaticienne",
                "Développeuse Web",
                "Systèmes d'information"
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1200,
            loop: true
        });
    }

    /* ===================== HAMBURGER MENU ===================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Toggle menu
    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navbar.contains(e.target)) {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
        }
    });

    /* ===================== ELEMENTS ===================== */
    const toggleButton = document.getElementById("toggleButton");
    const aboutSection = document.getElementById("about");
    const cvSection = document.getElementById("cv");
    const cvLink = document.querySelector('a[href="#cv"]');
    const aboutText = document.querySelector(".about-text");

    /* ===================== INITIAL STATE ===================== */
    if (aboutSection) {
        aboutSection.style.display = "none";
        aboutSection.classList.remove("visible");
    }

    if (cvSection) {
        cvSection.style.display = "none";
    }

    /* ===================== ABOUT TOGGLE ===================== */
    toggleButton?.addEventListener("click", (e) => {
        e.preventDefault();

        if (!aboutSection) return;

        const isVisible = aboutSection.classList.contains("visible");

        if (!isVisible) {
            aboutSection.style.display = "flex";
            aboutSection.classList.add("visible");
            toggleButton.textContent = "Réduire";

            if (aboutText) {
                aboutText.style.display = "block";
                aboutText.style.opacity = "1";
            }

            if (cvSection) cvSection.style.display = "none";
        } else {
            aboutSection.style.display = "none";
            aboutSection.classList.remove("visible");
            toggleButton.textContent = "En savoir plus sur moi";
        }

        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    /* ===================== CV TOGGLE ===================== */
    cvLink?.addEventListener("click", (e) => {
        e.preventDefault();

        if (aboutSection) {
            aboutSection.style.display = "none";
            aboutSection.classList.remove("visible");
        }

        if (!cvSection) return;

        const isVisible = cvSection.style.display === "block";
        cvSection.style.display = isVisible ? "none" : "block";

        cvSection.scrollIntoView({ behavior: "smooth" });
    });

});
