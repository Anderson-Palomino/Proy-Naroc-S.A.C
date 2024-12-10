function loadFooter() {
    fetch('/resources/html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-gaaa').innerHTML = data;
            // Añadir el botón de WhatsApp después de cargar el footer
            if (!document.querySelector('.whatsapp-float')) {
                const whatsappButton = document.createElement('a');
                whatsappButton.href = 'https://wa.me/51123456789';
                whatsappButton.className = 'whatsapp-float';
                whatsappButton.target = '_blank';
                whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
                document.body.appendChild(whatsappButton);
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

window.onload = loadFooter;


window.onload = loadFooter;
