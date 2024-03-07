/* Script JS pour changer la couleur du menu */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;

    if (scrollY > 100) { // Ajustez la valeur en pixels selon votre préférence
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});



/* Script JS pour afficher la commande validée  */
// Fonction pour afficher la boîte de dialogue après soumission du formulaire
function afficherPopup1() {
    alert("Commande validée, le livreur vous contactera !");
}

function afficherPopup2() {
    alert("Message Envoyé, un de nos assistants prendra contact avec vous !");
}

// Récupérer le formulaire par son ID
var formulaireAchat = document.getElementById("monFormulaire");
var formulaireContact = document.getElementById("monFormulaire");

// Ajouter un gestionnaire d'événement pour le formulaire
formulaireAchat.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut
    afficherPopup1(); // Affiche la boîte de dialogue
});

formulaireContact.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut
    afficherPopup2(); // Affiche la boîte de dialogue
});


/* script for nav content */
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {
    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


