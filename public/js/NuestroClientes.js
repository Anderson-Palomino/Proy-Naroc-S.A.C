/* NuestrosClientes.js */
// Asegúrate de importar Swiper desde CDN en el HTML
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 'auto',
            }
        }
    });

    // Pause autoplay on hover
    const swiperContainer = document.querySelector('.swiper-container');
    
    swiperContainer.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
    });
    
    swiperContainer.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
    });
});