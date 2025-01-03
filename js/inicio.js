document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".banner, .testimonial, .card, .heading");

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

const services = [
    {
        img: "/img/inicio/image-lummi-category-avatars0.png",
        title: "Instalación de Aire Acondicionado",
        desc: "Ofrecemos la mejor instalación de aire acondicionado con soporte técnico profesional."
    },
    {
        img: "/img/inicio/image-lummi-category-avatars1.png",
        title: "Sistemas Eléctricos",
        desc: "Soluciones eficientes para sistemas eléctricos industriales y domésticos."
    },
    {
        img: "/img/inicio/image-lummi-category-avatars2.png",
        title: "Sistemas contra Incendios",
        desc: "Implementamos sistemas seguros contra incendios para proteger tu empresa y hogar."
    },
    {
        img: "/img/servicios/Servicio-InstalacionDryWall.jpg",
        title: "Instalación de Drywall",
        desc: "Ofrecemos servicios profesionales de instalación de drywall para todo tipo de proyectos, garantizando calidad y durabilidad."
    },
    {
        img: "/img/servicios/Servicio-Entubado.jpeg",
        title: "Entubado de Conduit",
        desc: "Realizamos instalaciones de entubado en conduit para proteger y organizar el cableado eléctrico."
    },
    {
        img: "/img/servicios/Servicios-Camaras.png",
        title: "Instalación de Cámaras de Seguridad",
        desc: "Instalamos sistemas de cámaras de seguridad para monitorear y proteger tus espacios."
    },
    {
        img: "/img/servicios/Servicio-Cableado.png",
        title: "Cableado Estructurado",
        desc: "Ofrecemos instalación de redes y cableado estructurado para empresas y hogares."
    },
    {
        img: "/img/servicios/Servicio-Pozo.jpeg",
        title: "Construcción de Pozo a Tierra",
        desc: "Construimos pozos a tierra para garantizar la seguridad eléctrica de tus instalaciones."
    },
    {
        img: "/img/servicios/Servicio-Ascensor.png",
        title: "Mantenimiento de Ascensores",
        desc: "Proveemos mantenimiento preventivo y correctivo para ascensores, asegurando su funcionamiento óptimo."
    },
    {
        img: "/img/servicios/Servicio-Fierro.png",
        title: "Acero y Estructuras de Fierro",
        desc: "Diseñamos y construimos estructuras de acero y fierro para proyectos industriales y comerciales."
    },
    {
        img: "/img/servicios/Servicio-Acabados.png",
        title: "Acabados en Granito, Mármol, Cuarzo, entre otros",
        desc: "Ofrecemos acabados de alta calidad en granito, mármol, cuarzo y otros materiales para tus espacios."
    }
];

let currentStartIndex = 0;

function renderCarousel() {
    const testimonialsContainer = document.querySelector('.testimonials');
    testimonialsContainer.innerHTML = '';

    const visibleServices = [
        ...services.slice(currentStartIndex, currentStartIndex + 4),
        ...services.slice(0, Math.max(0, currentStartIndex + 4 - services.length))
    ];

    visibleServices.forEach(service => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        testimonialDiv.innerHTML = `
            <div class="testimonial-content">
                <img class="image-lummi-category-avatars" src="${service.img}" />
                <div class="service-title">${service.title}</div>
            </div>
            <div class="testimonial-back">
                <p>${service.desc}</p>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialDiv);
    });
}

function scrollCarousel(direction) {
    currentStartIndex = (currentStartIndex + direction + services.length) % services.length;
    renderCarousel();
}

// Avanzar automáticamente cada 3 segundos
setInterval(() => scrollCarousel(1), 5000);

document.addEventListener('DOMContentLoaded', renderCarousel);
