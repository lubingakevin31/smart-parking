document.addEventListener("DOMContentLoaded", () => {
    // Hydratation automatique des icônes Lucide de la zone footer
    if (window.lucide) {
        lucide.createIcons();
    }

    // Script d'ancrage fluide pour le bouton retour en haut
    const backToTopBtn = document.getElementById('saas-back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
