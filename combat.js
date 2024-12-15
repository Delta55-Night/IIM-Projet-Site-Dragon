// Variables pour les personnages et combat
let pvHeros1 = 100;
let pvHeros2 = 100;
let attaqueHeros1 = 15;
let attaqueHeros2 = 13;
let esquiveHeros1 = 20;
let esquiveHeros2 = 25;
let tour = 1;
let combatEnCours = true;

// Éléments de la page
const scriptDiv = document.getElementById("script");

// Fonction pour ajouter du texte dans le script
function updateScript(text) {
    scriptDiv.innerHTML += `<p>${text}</p>`;
    scriptDiv.scrollTop = scriptDiv.scrollHeight; // Faire défiler vers le bas
}

// Fonction pour gérer le combat
function nextTurn() {
    if (!combatEnCours) return; // Ne pas continuer si le combat est fini

    updateScript(`Tour ${tour}:`);

    // Héros 1 attaque
    if (Math.random() * 100 >= esquiveHeros2) {  // Si l'attaque ne peut pas être esquivée
        pvHeros2 -= attaqueHeros1;
        updateScript(`L'attaque de Héros1 est un succès ! Héros2 perd ${attaqueHeros1} points de vie.`);
    } else {
        updateScript("L'attaque de Héros1 échoue ! Héros2 esquive.");
    }

    // Héros 2 attaque
    if (Math.random() * 100 >= esquiveHeros1) {  // Si l'attaque ne peut pas être esquivée
        pvHeros1 -= attaqueHeros2;
        updateScript(`L'attaque de Héros2 est un succès ! Héros1 perd ${attaqueHeros2} points de vie.`);
    } else {
        updateScript("L'attaque de Héros2 échoue ! Héros1 esquive.");
    }

    // Affichage des points de vie restants
    updateScript(`PV de Héros1: ${pvHeros1}`);
    updateScript(`PV de Héros2: ${pvHeros2}`);

    // Vérification de fin de combat
    if (pvHeros1 <= 0) {
        updateScript("Héros1 a succombé aux blessures. Héros2 est le gagnant !");
        combatEnCours = false;
    } else if (pvHeros2 <= 0) {
        updateScript("Héros2 a succombé aux blessures. Héros1 est le gagnant !");
        combatEnCours = false;
    }

    tour++;

    // Si le combat est terminé, arrêter le défilement
    if (!combatEnCours) {
        clearInterval(combatInterval);
    }
}

// Démarrer le combat
const combatInterval = setInterval(nextTurn, 2000); // Défilement toutes les 2 secondes

