function loadFooter() {
    fetch('/resources/html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-gaaa').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

window.onload = loadFooter;
