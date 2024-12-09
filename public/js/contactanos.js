// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Animación para el título principal
  gsap.from(".contact-title", {
    duration: 5,
    y: -50,
    opacity: 0,
    ease: "power3.out",
  });

  // Animación para el subtítulo
  gsap.from(".contact-subtitle", {
    duration: 5,
    x: -100,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  // Animación para la información de contacto
  gsap.from(".contact-info p", {
    duration: 5,
    x: 100,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2, // Retrasa la animación de cada elemento
  });

  // Animación para el formulario de contacto
  gsap.from(".contact-form", {
    duration: 5,
    scale: 0.8,
    opacity: 0,
    ease: "elastic.out(1, 0.5)",
    delay: 1,
  });

  // Animación para las imágenes del carrusel
  gsap.from(".carousel-image", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    ease: "power3.out",
    stagger: 0.3,
    delay: 1.5,
  });

  // Animación para el banner
  gsap.from(".banner-text span", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
  });
});
