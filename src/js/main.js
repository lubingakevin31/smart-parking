/* ==========================================
   SmartParking
   Chargement automatique des composants
========================================== */

async function loadComponent(selector, path) {

    const container = document.querySelector(selector);

    if (!container) return;

    try {

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Impossible de charger ${path}`);
        }

        container.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

    }

}


/* ==========================================
   Initialisation
========================================== */

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent(
        "#navbar",
        "../../components/navbar/navbar.html"
    );

    await loadComponent(
        "#footer",
        "../../components/footer/footer.html"
    );

});
