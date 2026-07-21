document.addEventListener("DOMContentLoaded", () => {
    initParallaxMouseAndScroll();
    init3DBraceletInteractivity();
    initCtaActions();
    initSmoothScroll();
});

/**
 * 1. EFFET PARALLAXE FLUIDE (SOURIS + SCROLL DU FOND)
 */
function initParallaxMouseAndScroll() {
    const heroBg = document.getElementById("hero-bg");
    const orb1 = document.getElementById("orb-1");
    const orb2 = document.getElementById("orb-2");
    const heroSection = document.getElementById("hero-section");

    if (!heroSection || !heroBg) return;

    let mouseX = 0, mouseY = 0;
    let scrollY = 0;

    // A. Parallaxe au mouvement de la souris
    heroSection.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        mouseX = (clientX / window.innerWidth - 0.5) * 20;
        mouseY = (clientY / window.innerHeight - 0.5) * 20;
        updateParallax();
    });

    // B. Parallaxe au défilement (Scroll) de la page
    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        updateParallax();
    }, { passive: true });

    function updateParallax() {
        // Combiner l'effet souris + le défilement vertical du scroll
        const bgTranslateY = (scrollY * 0.25) + (mouseY * 0.4);
        const bgTranslateX = mouseX * 0.4;

        heroBg.style.transform = `translate3d(${bgTranslateX}px, ${bgTranslateY}px, 0) scale(1.05)`;

        if (orb1) {
            orb1.style.transform = `translate3d(${mouseX * 0.8}px, ${mouseY * 0.8 - scrollY * 0.15}px, 0)`;
        }
        if (orb2) {
            orb2.style.transform = `translate3d(${-mouseX * 0.6}px, ${-mouseY * 0.6 - scrollY * 0.1}px, 0)`;
        }
    }
}

/**
 * 2. INTERACTIVITÉ & DRAG (SOURIS ET TACTILE) DU BRACELET 3D
 */
function init3DBraceletInteractivity() {
    const container = document.getElementById("cadran-container");
    const wheel = document.getElementById("cadran-wheel");

    if (!container || !wheel) return;

    let isDragging = false;
    let startX = 0;
    let currentAngle = 0;

    // Pause au survol
    container.addEventListener("mouseenter", () => {
        if (!isDragging) wheel.classList.add("paused");
    });

    container.addEventListener("mouseleave", () => {
        if (!isDragging) wheel.classList.remove("paused");
    });

    // --- Fonctions de démarrage, mouvement et fin du Drag ---
    const startDrag = (x) => {
        isDragging = true;
        startX = x;
        wheel.classList.add("paused");
    };

    const moveDrag = (x) => {
        if (!isDragging) return;
        const deltaX = x - startX;
        currentAngle += deltaX * 0.5;
        // Applique la rotation 3D tout en maintenant un léger basculement d'axe (rotateX)
        wheel.style.transform = `rotateY(${currentAngle}deg) rotateX(6deg)`;
        startX = x;
    };

    const stopDrag = () => {
        if (isDragging) {
            isDragging = false;
            wheel.classList.remove("paused");
        }
    };

    // Événements Souris
    container.addEventListener("mousedown", (e) => startDrag(e.clientX));
    window.addEventListener("mousemove", (e) => moveDrag(e.clientX));
    window.addEventListener("mouseup", stopDrag);

    // Événements Tactiles (Mobiles & Tablettes)
    container.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX), { passive: true });
    window.addEventListener("touchmove", (e) => {
        if (isDragging) moveDrag(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener("touchend", stopDrag);
}

/**
 * 3. BOUTON CTA ET MODALE
 */
function initCtaActions() {
    const btnRegister = document.getElementById("btn-cta-register");
    if (!btnRegister) return;

    btnRegister.addEventListener("click", () => {
        const registerModal = document.getElementById("modal-register");
        if (registerModal && typeof registerModal.showModal === "function") {
            registerModal.showModal();
        } else {
            window.location.href = "../dashboard/index.html";
        }
    });
}

/**
 * 4. SMOOTH SCROLL AVEC COMPENSATION DE LA NAVBAR FIXE
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calcule la hauteur exacte de la navbar pour éviter de masquer le titre
                const navbar = document.querySelector('.navbar-fixed-wrapper');
                const navbarHeight = navbar ? navbar.offsetHeight : 70;

                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight - 20; // 20px de marge

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}