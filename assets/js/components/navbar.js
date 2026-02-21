function loadNavbar() {
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            initNavbar();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize Bootstrap dropdown for dynamically loaded content
    const dropdownEl = document.querySelector('[data-bs-toggle="dropdown"]');
    if (dropdownEl) {
        new bootstrap.Dropdown(dropdownEl);
    }

    // Set active state based on current URL
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        link.classList.remove('active');

        const page = link.getAttribute('data-page');
        if (page === 'home' && (path === '/' || path === '/index.html' || path.includes('/home.html'))) {
            link.classList.add('active');
        } else if (page === 'quienes-somos' && path.includes('quienes-somos')) {
            link.classList.add('active');
        } else if (page === 'servicios' && path.includes('/servicios')) {
            link.classList.add('active');
        } else if (page === 'clientes' && path.includes('clientes.html')) {
            link.classList.add('active');
        } else if (page === 'contacto' && path.includes('contacto')) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
