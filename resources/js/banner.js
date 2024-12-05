function loadBanner() {
    fetch('/resources/html/banner.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('banner-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}
window.onload = loadBanner();