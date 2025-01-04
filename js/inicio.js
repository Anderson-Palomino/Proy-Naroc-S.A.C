// Efectos de animación para elementos de la página
const initializeAnimations = () => {
    const animatedElements = document.querySelectorAll(".banner, .service-card, .card, .heading");
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Animar elemento cuando sea visible
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Configurar elementos para animación
    animatedElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(element);
    });
};

// Datos de servicios
const services = [
    {
        id: 1,
        img: "/img/inicio/image-lummi-category-avatars0.png",
        title: "Instalación de Aire Acondicionado",
        desc: "Ofrecemos la mejor instalación de aire acondicionado con soporte técnico profesional.",
        link: "/servicios/aire-acondicionado"
    },
    {
        id: 2,
        img: "/img/inicio/image-lummi-category-avatars1.png",
        title: "Sistemas Eléctricos",
        desc: "Soluciones eficientes para sistemas eléctricos industriales y domésticos.",
        link: "/servicios/sistemas-electricos"
    },
    // ... resto de servicios con el mismo formato
];

// Clase para manejar el carrusel
class ServicesCarousel {
    constructor(carouselId) {
        this.carousel = document.getElementById(carouselId);
        this.interval = null;
        this.pauseOnHover = true;
        this.autoPlayInterval = 5000;
        this.isPlaying = true;
        
        this.initializeCarousel();
    }

    initializeCarousel() {
        // Detectar soporte táctil
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (isTouchDevice) {
            this.initializeTouchEvents();
        }

        // Pausar en hover
        if (this.pauseOnHover) {
            this.carousel.addEventListener('mouseenter', () => this.pause());
            this.carousel.addEventListener('mouseleave', () => this.play());
        }

        // Iniciar autoplay
        this.play();

        // Botones de navegación
        const prevButton = this.carousel.querySelector('.carousel-control-prev');
        const nextButton = this.carousel.querySelector('.carousel-control-next');

        prevButton?.addEventListener('click', (e) => {
            e.preventDefault();
            this.navigate('prev');
        });

        nextButton?.addEventListener('click', (e) => {
            e.preventDefault();
            this.navigate('next');
        });

        // Manejar indicadores
        const indicators = this.carousel.querySelectorAll('.carousel-indicators button');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                const slideIndex = indicator.getAttribute('data-bs-slide-to');
                this.goToSlide(parseInt(slideIndex));
            });
        });
    }

    initializeTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleTouchMove(touchStartX, touchEndX);
        }, { passive: true });
    }

    handleTouchMove(startX, endX) {
        const SWIPE_THRESHOLD = 50;
        const difference = startX - endX;

        if (Math.abs(difference) > SWIPE_THRESHOLD) {
            if (difference > 0) {
                this.navigate('next');
            } else {
                this.navigate('prev');
            }
        }
    }

    navigate(direction) {
        const slideWidth = this.carousel.offsetWidth;
        const currentSlide = this.carousel.querySelector('.carousel-item.active');
        const targetSlide = direction === 'next' 
            ? currentSlide.nextElementSibling || this.carousel.querySelector('.carousel-item:first-child')
            : currentSlide.previousElementSibling || this.carousel.querySelector('.carousel-item:last-child');

        // Actualizar clases y animar
        currentSlide.classList.remove('active');
        targetSlide.classList.add('active');

        // Actualizar indicadores
        this.updateIndicators(targetSlide);

        // Reiniciar el temporizador
        this.resetInterval();
    }

    goToSlide(index) {
        const slides = this.carousel.querySelectorAll('.carousel-item');
        const currentSlide = this.carousel.querySelector('.carousel-item.active');
        
        if (slides[index]) {
            currentSlide.classList.remove('active');
            slides[index].classList.add('active');
            this.updateIndicators(slides[index]);
        }

        this.resetInterval();
    }

    updateIndicators(activeSlide) {
        const indicators = this.carousel.querySelectorAll('.carousel-indicators button');
        const slideIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === slideIndex);
            indicator.setAttribute('aria-current', index === slideIndex);
        });
    }

    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.resetInterval();
        }
    }

    pause() {
        if (this.isPlaying) {
            this.isPlaying = false;
            clearInterval(this.interval);
        }
    }

    resetInterval() {
        clearInterval(this.interval);
        if (this.isPlaying) {
            this.interval = setInterval(() => this.navigate('next'), this.autoPlayInterval);
        }
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar animaciones
    initializeAnimations();

    // Inicializar carrusel
    const servicesCarousel = new ServicesCarousel('carouselServicios');

    // Mejorar la carga de imágenes
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }
});