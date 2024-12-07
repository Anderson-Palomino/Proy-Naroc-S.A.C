// Initialize AOS library for animations
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 5000, // Animation duration in milliseconds
        easing: "ease-out-quart", // Easing style
        once: true, // Run animation only once
    });
});
