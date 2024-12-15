const button = document.getElementById('toggleButton');
const body = document.body;

button.addEventListener('click', () => {
  // Basculer la classe active pour changer l'image de fond et la couleur du texte
  body.classList.toggle('active');

  // Modifier le texte du bouton
  if (body.classList.contains('active')) {
    button.textContent = 'Désactiver';
  } else {
    button.textContent = 'Activer';
  }
});

// Définition des cartes disponibles pour chaque catégorie
const cardsCommon = ["card1.jpg", "card5.jpg", "card9.jpg", "card13.jpg", "card17.jpg", "card21.jpg", "card25.jpg"];  // Exemple de cartes communes
const cardsAtypical = ["card2.jpg", "card6.jpg", "card10.jpg", "card14.jpg", "card18.jpg", "card22.jpg", "card26.jpg"];  // Exemple de cartes atypiques
const cardsRare = ["card3.jpg", "card7.jpg", "card11.jpg", "card15.jpg", "card19.jpg", "card23.jpg", "card27.jpg"];  // Exemple de cartes rares
const cardsEpic = ["card4.jpg","card8.jpg", "card12.jpg", "card16.jpg", "card20.jpg", "card24.jpg", "card28.jpg"];  // Exemple de cartes épiques
const cardsLieu = ["carte-lieu1.png","carte-lieu2.png", "carte-lieu3.png", "carte-lieu4.png", "carte-lieu5.png", "carte-lieu6.png", "carte-lieu7.png", "carte-lieu8.png", "carte-lieu9.png", "carte-lieu10.png"];  // Exemple de cartes lieux
const cardsLegendary = ["card29.jpg", "card30.jpg", "card31.jpg", "card32.jpg"];  // Exemple de cartes légendaires
const cardsMythic = ["card33.jpg", "card34.jpg", "card35.jpg", "card36.jpg"];  // Exemple de cartes mythiques

// Variable pour suivre l'état actuel de la carte à découvrir
let currentCard = 0;

// Fonction pour tirer une carte aléatoire en fonction des probabilités
function drawCard() {
    const drawnCards = [];

    // 1. Choisir les deux premières cartes parmi les cartes communes
    drawnCards.push(getRandomElement(cardsCommon));
    drawnCards.push(getRandomElement(cardsCommon));

    // 2. Choisir la troisième carte parmi les cartes atypiques
    drawnCards.push(getRandomElement(cardsAtypical));

    // 3. Choisir la quatrième carte parmi les cartes rares
    drawnCards.push(getRandomElement(cardsRare));

    // 4. Choisir la cinquième carte avec les probabilités définies
    drawnCards.push(getRandomElement(cardsLieu));

    // 5. Choisir la sixième carte avec les probabilités définies
    const randomChance = Math.random() * 100;
    if (randomChance <= 80) {
        drawnCards.push(getRandomElement(cardsEpic)); // 80% chance d'être épique
    } else if (randomChance >= 90) {
        drawnCards.push(getRandomElement(cardsLegendary)); // 10% chance d'être légendaire
    } else {
        drawnCards.push(getRandomElement(cardsMythic)); // 8% chance d'être mythique
    }

    return drawnCards;
}

// Fonction pour obtenir un élément aléatoire d'un tableau
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Fonction pour afficher une carte
function revealCard() {
    const drawnCards = drawCard();

    if (currentCard === 0) {
        document.getElementById('card1').style.backgroundImage = `url(${drawnCards[0]})`;
        document.getElementById('card1').classList.remove('hidden');
        document.getElementById('boosterFront').style.display = "none";
        document.getElementById('revealCardButton').innerText = "Carte suivante";
    } else if (currentCard === 1) {
        document.getElementById('card2').style.backgroundImage = `url(${drawnCards[1]})`;
        document.getElementById('card2').classList.remove('hidden');
    } else if (currentCard === 2) {
        document.getElementById('card3').style.backgroundImage = `url(${drawnCards[2]})`;
        document.getElementById('card3').classList.remove('hidden');
    } else if (currentCard === 3) {
        document.getElementById('card4').style.backgroundImage = `url(${drawnCards[3]})`;
        document.getElementById('card4').classList.remove('hidden');
    } else if (currentCard === 4) {
        document.getElementById('card5').style.backgroundImage = `url(${drawnCards[4]})`;
        document.getElementById('card5').classList.remove('hidden');
    } else if (currentCard === 5) {
        document.getElementById('card6').style.backgroundImage = `url(${drawnCards[5]})`;
        document.getElementById('card6').classList.remove('hidden');
    }

    currentCard++;

    // Si toutes les cartes sont révélées, afficher le bouton "Booster suivant"
    if (currentCard > 5) {
        document.getElementById('nextBoosterButton').classList.remove('hidden');
    }
}

// Réinitialiser l'état du booster et recommencer
function resetBooster() {
    currentCard = 0;
    document.getElementById('card1').classList.add('hidden');
    document.getElementById('card2').classList.add('hidden');
    document.getElementById('card3').classList.add('hidden');
    document.getElementById('card4').classList.add('hidden');
    document.getElementById('card5').classList.add('hidden');
    document.getElementById('card6').classList.add('hidden');
    document.getElementById('card1').style.backgroundImage = '';
    document.getElementById('card2').style.backgroundImage = '';
    document.getElementById('card3').style.backgroundImage = '';
    document.getElementById('card4').style.backgroundImage = '';
    document.getElementById('card5').style.backgroundImage = '';
    document.getElementById('card6').style.backgroundImage = '';
    document.getElementById('nextBoosterButton').classList.add('hidden');
    document.getElementById('boosterFront').style.display = "block";
    document.getElementById('revealCardButton').innerText = "Découvrir la première carte";
}

// Ajouter l'événement pour révéler la carte
document.getElementById('revealCardButton').addEventListener('click', function() {
    revealCard();
});

// Ajouter l'événement pour passer au prochain booster
document.getElementById('nextBoosterButton').addEventListener('click', function() {
    resetBooster(); // Réinitialiser le booster et commencer un nouveau tirage
});
