// Código JavaScript básico
console.log("Catálogo de productos importados cargado!");

// Función simple para el WhatsApp
function contactarWhatsApp() {
    const telefono = "5491111111111"; // CAMBIA ESTE NÚMERO
    const mensaje = "Hola, vi su catálogo y me interesan sus productos";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Cambiar el botón de WhatsApp para usar esta función
document.addEventListener('DOMContentLoaded', function() {
    const btnWhatsApp = document.querySelector('.btn-whatsapp');
    if (btnWhatsApp) {
        btnWhatsApp.onclick = function(e) {
            e.preventDefault();
            contactarWhatsApp();
        };
    }
    
    // Efecto suave al hacer clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});