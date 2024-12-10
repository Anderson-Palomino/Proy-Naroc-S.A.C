const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/views', express.static(path.join(__dirname, 'views')));

// Routes
// ...existing code...
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/Inicio', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/Nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'quienesomos.html'));
});

app.get('/Nuestros-Clientes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'NuestrosClientes.html'));
});

app.get('/Reclamos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Reclamos.html'));
});

app.get('/serv1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'serv1.html'));
});

app.get('/serv2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'serv2.html'));
});

app.get('/serv3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'serv3.html'));
});

app.get('/services_modal', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services_modal.html'));
});

app.get('/Servicios', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/Contactanos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contactanos.html'));
});

app.get('/Reclamos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Reclamos.html'));
});

app.get('/PreguntasFrecuentes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'FAQ.html'));
});
// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
