document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('complaint-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simple form validation
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Here you would typically send the form data to a server
        alert('Reclamo enviado exitosamente. Nos pondremos en contacto pronto.');
        form.reset();
    });
});