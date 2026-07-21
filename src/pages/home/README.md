📄 Cahier des Charges — Hero Section (Section 1)
🎯 Objectif

La Hero Section est la première interface que voit l'utilisateur. En moins de 3 secondes, elle doit lui permettre de comprendre que SmartParking est une plateforme intelligente qui permet de :

trouver un parking disponible ;
consulter les places libres en temps réel ;
réserver une place ;
gérer ses réservations facilement.

L'interface doit transmettre une impression de modernité, de fluidité et de fiabilité, inspirée des applications SaaS comme Stripe ou Linear, sans animations inutiles.

📐 Structure générale

La section occupe 100% de la hauteur de l'écran (100vh).

Elle est composée de deux colonnes :

-----------------------------------------------------------

            Navbar (déjà réalisé)

-----------------------------------------------------------

        Gauche                     Droite

 Texte + CTA              Cadran 3D interactif

-----------------------------------------------------------

           ↓ Découvrir

-----------------------------------------------------------
🌄 Arrière-plan
Image

La Hero utilise une seule image de fond :

parking moderne
haute qualité
légèrement floutée

Cette image n'apparaît que dans cette section.

Les autres sections auront leur propre fond.

Dégradé

Par-dessus l'image :

dégradé sombre
améliore la lisibilité du texte
Lumières

Ajouter quelques halos lumineux très discrets.

Exemple :

bleu
cyan

Ils renforcent le côté premium.

Effet Parallaxe

Lorsque l'utilisateur déplace sa souris :

le fond se déplace légèrement ;
les halos lumineux bougent aussi ;
cela crée une impression de profondeur.

Le mouvement reste très discret.

📝 Partie Gauche
Badge

Tout en haut :

🟢 Disponible en temps réel

Petit badge moderne avec effet Glassmorphism.

Grand titre

Exemple :

Trouvez votre place
de parking
en quelques secondes.

Le mot Parking est mis en valeur avec la couleur principale.

Description

Quelques lignes expliquant SmartParking.

Exemple :

Localisez, réservez et gérez vos places de parking grâce à une plateforme rapide, intelligente et accessible partout.

Boutons

Deux boutons.

Bouton principal
Voir la carte

Couleur principale.

Bouton secondaire
En savoir plus

Transparent.

📊 Bandeau de statistiques

Sous les boutons.

Indicateur LIVE

À gauche :

🟢 LIVE

Petite animation discrète.

Défilement continu

Les statistiques défilent horizontalement.

Exemple :

🅿 Parking Centre • 12 places libres

🟢 Disponible

🚗 Parking Université • Complet

🔴 Complet

⭐ 98% Satisfaction

🅿 Parking Marché • 35 places libres

🟢 Disponible

Le défilement est infini.

Couleurs

Chaque état possède sa couleur.

🟢 Disponible

🟡 Presque plein

🔴 Complet

⚫ Fermé

L'utilisateur comprend immédiatement l'état des parkings.

🔄 Partie Droite
Cadran 3D interactif

Le point fort du Hero.

Ce n'est pas un simple carrousel.

Structure

Le cercle est découpé en :

90°

90°

90°

90°

Donc :

4 × 90° = 360°

Chaque image occupe physiquement un quart du cercle.

Les quatre secteurs forment un cercle complet.

Centre

Au milieu :

🅿

SmartParking

Le centre :

ne tourne jamais ;
possède un halo lumineux bleu ;
utilise un léger Glassmorphism.
Rotation

Le cadran tourne :

lentement ;
continuellement ;
à 360°.

Un tour complet doit prendre environ 30 à 40 secondes.

Informations de chaque secteur

Chaque secteur contient :

image du parking ;
nom ;
nombre de places libres ;
état.

Exemple :

Parking Centre

12 places libres

🟢 Disponible
🖱️ Interaction

Lorsque la souris entre sur un secteur :

la rotation ralentit ;
puis s'arrête ;
le secteur s'agrandit légèrement ;
une ombre apparaît ;
une fiche détaillée s'affiche.

Exemple :

Parking Centre

12 places libres

Distance : 350 m

Ouvert

Lorsque la souris quitte :

la rotation reprend progressivement.
⏯ Contrôle de lecture

Sous le cadran.

Un bouton :

⏸

ou

▶

Permet :

d'arrêter la rotation ;
de la relancer.

C'est également un point positif pour l'accessibilité.

⬇️ Indicateur de défilement

En bas de la Hero.

↓

Découvrir

Au clic :

défilement fluide vers la deuxième section.

✨ Animations

Les animations doivent être utiles.

Prévoir :

apparition progressive du texte ;
montée légère des boutons ;
parallaxe du fond ;
rotation lente du cadran ;
pause au survol ;
zoom d'un secteur actif ;
défilement continu des statistiques.

Aucune animation ne doit distraire l'utilisateur.

🎨 Style visuel

Le Hero doit transmettre une sensation de :

modernité ;
technologie ;
fluidité ;
élégance ;
professionnalisme.

Inspirations :

Stripe
Linear
Vercel
📱 Responsive
Desktop

Deux colonnes :

texte à gauche ;
cadran 3D à droite.
Tablette

Même disposition avec un cadran plus petit.

Mobile

Le contenu passe sur une seule colonne :

badge ;
titre ;
description ;
boutons ;
statistiques ;
le cadran est remplacé par un carrousel horizontal ou une grille de cartes plus adaptée aux petits écrans.
✅ Résumé fonctionnel

La Hero Section comprendra :

✅ Navbar (déjà réalisée)
✅ Image de fond avec flou et dégradé
✅ Effet de parallaxe
✅ Badge "Disponible en temps réel"
✅ Grand titre
✅ Description
✅ Deux boutons d'action
✅ Bandeau de statistiques défilant avec indicateur LIVE
✅ Cadran 3D composé de 4 secteurs de 90°
✅ Logo SmartParking fixe au centre
✅ Rotation continue du cadran
✅ Pause automatique au survol
✅ Zoom du secteur actif
✅ Fiche d'informations du parking
✅ Bouton Play / Pause
✅ Indicateur "Découvrir" avec défilement fluide
Évaluation

Cette Hero Section est ambitieuse pour un projet HTML, CSS et JavaScript sans framework, mais elle reste réalisable si vous avancez étape par étape. Elle donnera à SmartParking une identité visuelle forte tout en restant centrée sur les fonctionnalités principales de l'application.


Pour finaliser la page d'accueil complète (depuis la section Hero jusqu'au CTA final), nous allons procéder en 6 grandes étapes, section par section.

Voici la carte de route exacte :
🗺️ Le Plan de Route (6 ÉTAPES)

    Étape 1 : Section HERO (En cours 🟢)

        1.1 : Texte, badge et boutons (ce qu'on vient de poser !)

        1.2 : Le cadran 3D rotatif + le bouton play/pause

        1.3 : Le bandeau de données en direct (Live Stats) & l'effet de fond

    Étape 2 : Section FEATURES (Les Fonctionnalités)

        Grille de cartes (glassmorphism) présentations des avantages (Réservation instantanée, Guidage GPS, Paiement sécurisé...).

    Étape 3 : Section HOW IT WORKS (Comment ça marche)

        Une ligne du temps ou 3 étapes simples (1. Cherchez ➔ 2. Réservez ➔ 3. Garez-vous).

    Étape 4 : Section STATS (Les Chiffres Clés)

        Un bandeau avec des compteurs d'impact (ex: +50k utilisateurs, 120 parkings partenaires, 99% satisfaction).

    Étape 5 : Section TESTIMONIALS (Avis Utilisateurs)

        Cartes de témoignages d'utilisateurs avec notes et photos.

    Étape 6 : Section CTA (Call To Action Final) & Finitions

        Bannière d'incitation à t créer un compte + vérification globale du responsive (mobile/tablette) et des animations JS.

On reste concentrés sur l'Étape 1.1 ! Une fois que tu as collé le morceau HTML dans ton fichier, dis-moi et on met le CSS pour styliser le texte et les boutons.