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
 // ========== PARTICULES D'ARRIÈRE-PLAN ==========
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // ========== INDICATEUR DE SCROLL ==========
        function updateScrollIndicator() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scrollIndicator').style.width = scrolled + '%';
        }

        // ========== BOUTON RETOUR EN HAUT ==========
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            updateScrollIndicator();
            
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // ========== ANIMATION DES CHIFFRES ==========
        function animateNumbers() {
            const stats = document.querySelectorAll('.stat-number');
            
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
            });
        }

        // ========== OBSERVER POUR ANIMATIONS ==========
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observer les éléments de timeline
        document.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
            observer.observe(item);
        });

        // ========== INITIALISATION ==========
        window.addEventListener('load', () => {
            createParticles();
            
            // Animation des chiffres au scroll
            const statsSection = document.querySelector('.stats-section');
            const statsObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animateNumbers();
                    statsObserver.disconnect();
                }
            }, { threshold: 0.5 });
            
            statsObserver.observe(statsSection);
        });
