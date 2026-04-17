document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".tech-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {

            // cerrar otras
            cards.forEach(c => c.classList.remove("active"));

            // activar actual
            card.classList.add("active");

        });
    });

});