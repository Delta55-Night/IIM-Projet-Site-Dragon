document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    const pseudo = document.getElementById("pseudo");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const errorMessages = document.getElementById("error-messages");
    errorMessages.innerHTML = ""; // Réinitialise les messages d'erreur

    const errors = [];

    // Réinitialise les classes de validation
    pseudo.classList.remove("valid", "invalid");
    email.classList.remove("valid", "invalid");
    password.classList.remove("valid", "invalid");
    confirmPassword.classList.remove("valid", "invalid");

    // Vérifie la longueur du pseudo
    if (pseudo.value.length < 6) {
        errors.push("Le pseudo doit contenir au moins 6 caractères.");
        pseudo.classList.add("invalid");
    } else {
        pseudo.classList.add("valid");
    }

    // Vérifie la longueur du mot de passe
    if (password.value.length < 8) {
        errors.push("Le mot de passe doit contenir au moins 8 caractères.");
        password.classList.add("invalid");
    } else {
        password.classList.add("valid");
    }

    // Vérifie les types de caractères dans le mot de passe
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        errors.push("Le mot de passe doit contenir une majuscule, un chiffre, et un caractère spécial.");
        password.classList.add("invalid");
    } else if (password.value.length >= 8) {
        password.classList.add("valid");
    }

    // Vérifie si les mots de passe correspondent
    if (password.value !== confirmPassword.value) {
        errors.push("Les mots de passe ne correspondent pas.");
        confirmPassword.classList.add("invalid");
    } else {
        confirmPassword.classList.add("valid");
    }

    // Vérifie si l'e-mail est valide
    if (email.validity.valid) {
        email.classList.add("valid");
    } else {
        errors.push("L'adresse e-mail est invalide.");
        email.classList.add("invalid");
    }

    // Affiche les erreurs ou un message de succès
    if (errors.length > 0) {
        errors.forEach(error => {
            const errorElement = document.createElement("div");
            errorElement.textContent = error;
            errorMessages.appendChild(errorElement);
        });
    } else {
        alert("Inscription réussie !");
        document.getElementById("signup-form").reset();

        // Réinitialise les couleurs après une inscription réussie
        pseudo.classList.remove("valid", "invalid");
        email.classList.remove("valid", "invalid");
        password.classList.remove("valid", "invalid");
        confirmPassword.classList.remove("valid", "invalid");
    }
});
