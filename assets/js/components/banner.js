function loadBanner() {
    fetch('/components/banner.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('banner-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading banner:', error));
}

document.addEventListener('DOMContentLoaded', loadBanner);
