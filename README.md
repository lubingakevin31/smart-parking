🛠️ Guide Intégration : Navbar & Footer Globaux

Ce guide explique comment afficher la Navbar et le Footer sur vos pages sans jamais faire de copier-coller de code HTML. Grâce à main.js, les composants sont centralisés et injectés dynamiquement.
📁 Structure du Projet

Vérifiez que votre architecture locale ressemble bien à ça :
Plaintext

src/
├── components/
│   ├── navbar/
│   │   ├── navbar.html
│   │   ├── navbar.css
│   │   └── navbar.js
│   └── footer/
│       ├── footer.html
│       ├── footer.css
│       └── footer.js
├── js/
│   └── main.js
└── pages/
    ├── home/
    ├── dashboard/
    └── ...

🚀 Procédure pour chaque page (Home, Dashboard, FAQ, etc.)

Pour intégrer proprement la Navbar et le Footer sur votre page, suivez impérativement ces 3 étapes dans votre fichier HTML.
Étape 1 : Charger les styles du composant (<head>)

Ajoutez les liens CSS de la navbar et du footer dans le <head> de votre page, juste avant vos styles locaux.
HTML

<head>
    <!-- Styles globaux et thèmes -->
    <link rel="stylesheet" href="../../styles/global.css">
    
    <!-- 1. Styles spécifiques des composants partagés -->
    <link rel="stylesheet" href="../../components/navbar/navbar.css">
    <link rel="stylesheet" href="../../components/footer/footer.css">
</head>

Étape 2 : Créer les conteneurs HTML (<body>)

Remplacez les gros blocs HTML par de simples balises conteneurs vides avec les identifiants #navbar et #footer.
HTML

<body>

    <!-- 2. La Navbar sera injectée ici automatiquement -->
    <div id="navbar"></div>

    <!-- Le contenu propre à votre page -->
    <main class="main-content">
        <!-- Votre code ici... -->
    </main>

    <!-- La Footer sera injecté ici automatiquement -->
    <div id="footer"></div>

</body>

Étape 3 : Lier les scripts d'injection (Fin du <body>)

Ajoutez le script main.js tout en bas de votre fichier pour lancer le chargement.
HTML

    <!-- 3. Script d'injection global (à mettre en dernier) -->
    <script src="../../js/main.js"></script>
    
    <!-- Vos scripts locaux de page (ex: dashboard.js) -->
    <script src="./votre-script.js"></script>
</body>

⚙️ Comment ça marche en coulisses ? (js/main.js)

Le fichier main.js contient la fonction asynchrone qui télécharge le HTML des composants et l'insère dans vos pages au chargement du DOM. Vous n'avez pas besoin de modifier ce fichier.
JavaScript

/* ==========================================================================
   SmartParking - Chargement automatique des composants
   ========================================================================== */

async function loadComponent(selector, path) {
    const container = document.querySelector(selector);
    if (!container) return;

    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Impossible de charger ${path}`);
        
        container.innerHTML = await response.text();
    } catch (error) {
        console.error("Erreur SmartParking :", error);
    }
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", async () => {
    // Les chemins partent de l'emplacement des pages (ex: pages/home/index.html)
    await loadComponent("#navbar", "../../components/navbar/navbar.html");
    await loadComponent("#footer", "../../components/footer/footer.html");
});

🎯 État d'avancement du Design System

La base solide de notre application est désormais prête :

    [x] reset.css & variables.css (Gestion des thèmes OK)

    [x] global.css (Styles partagés)

    [x] Composant navbar (Structure & Design isolés)

    [x] Composant footer (Structure & Design isolés)

    [x] main.js (Moteur d'injection Vanilla JS)


    Comprendre et Utiliser notre Architecture CSSPour éviter que notre code devienne un fouillis, les styles globaux ont été séparés en 3 fichiers bien distincts. Chacun a un rôle précis :📋 Tableau Comparatif des Fichiers CSS GlobauxFichierSon RôleCe qu'on met dedansCe qu'on ne met JAMAIS dedansreset.cssMettre tous les navigateurs à égalité.Suppression des marges par défaut (margin: 0), uniformisation des bordures, réinitialisation des listes.Des classes personnalisées, des couleurs, du design.variables.cssStocker notre charte graphique (Design System).Variables de couleurs (oklch), tailles des polices, espacements (--space-md), arrondis, ombres.Du vrai code CSS avec des propriétés appliquées à des balises.global.cssAppliquer les styles de base communs à tout le site.Styles par défaut de la police du body, design de base des boutons (.btn), mise en page des titres (h1, h2).Du code spécifique à une seule page (ex: pas de style pour le profil).⚠️ L'Ordre d'Importation Crucial (Dans le <head>)Le CSS se lit du haut vers le bas. Pour que les variables et le reset fonctionnent, vous devez impérativement les importer dans cet ordre précis dans le <head> de votre page :HTML<head>
    <!-- 1. On remet à zéro les styles des navigateurs -->
    <link rel="stylesheet" href="../../styles/reset.css">
    
    <!-- 2. On charge notre dictionnaire de variables (thèmes clair/sombre) -->
    <link rel="stylesheet" href="../../styles/variables.css">
    
    <!-- 3. On applique les règles globales (qui utilisent les variables) -->
    <link rel="stylesheet" href="../../styles/global.css">
    
    <!-- 4. On charge les composants partagés -->
    <link rel="stylesheet" href="../../components/navbar/navbar.css">
    <link rel="stylesheet" href="../../components/footer/footer.css">

    <!-- 5. Votre style propre à la page (ex: dashboard.css) -->
    <link rel="stylesheet" href="./style.css">
</head>
