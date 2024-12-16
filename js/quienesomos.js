document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".about-section, .about-content, .mision, .vision"
    );

    elements.forEach((element, index) => {
        element.style.opacity = "0"; // Inicialmente invisible
        element.style.transform = "translateY(20px)"; // Aparece desde abajo

        // Añadir retraso progresivo para cada elemento
        setTimeout(() => {
            element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 200); // Incremento de 200ms entre cada elemento
    });
});
