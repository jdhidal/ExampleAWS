// script.js

// Función para mostrar el tráiler en un pop-up
function showTrailer(url) {
    var popup = document.getElementById('trailer-popup');
    var iframe = document.getElementById('trailer-frame');
    iframe.src = url;
    popup.style.display = 'flex';
}

// Función para cerrar el pop-up del tráiler
function closeTrailer() {
    var popup = document.getElementById('trailer-popup');
    var iframe = document.getElementById('trailer-frame');
    iframe.src = '';
    popup.style.display = 'none';
}
