const cardFamily= document.getElementById('card-family');

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


// Partie filtres et sélections
document.getElementById("applyFilters").addEventListener("click", function () {
    const familyFilter = document.getElementById("familyFilter").value;
    const rarityFilter = document.getElementById("rarityFilter").value;

    const cards = document.querySelectorAll(".card-small");

    cards.forEach(card => {
        const family = card.getAttribute("data-family");
        const rarity = card.getAttribute("data-rarity");

        // Vérifie si la carte correspond aux filtres
        const matchesFamily = familyFilter === "all" || family === familyFilter;
        const matchesRarity = rarityFilter === "all" || rarity === rarityFilter;

        if (matchesFamily && matchesRarity) {
            card.style.display = "block"; // Affiche la carte
            cardFamily.style.display = "flex";
            cardFamily.style.flexWrap = "wrap";
        } else {
            card.style.display = "none"; // Masque la carte
        }
    });
});
document.getElementById("goToBooster").addEventListener("click", function () {
    window.location.href = "booster.html"; // Redirige vers la page du booster
});
