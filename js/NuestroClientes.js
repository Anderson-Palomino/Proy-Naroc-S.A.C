
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Set active slide
function updateActiveSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });

    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Go to next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateActiveSlide(currentIndex);
}

// Go to previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateActiveSlide(currentIndex);
}

// Event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Initialize
updateActiveSlide(currentIndex);

