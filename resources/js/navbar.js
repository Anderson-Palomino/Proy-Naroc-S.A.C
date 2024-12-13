function loadNavbar() {
    fetch('/resources/html/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
}
window.onload = loadNavbar();
