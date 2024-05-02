document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.nav-toggler');
    const siteNavbar = document.querySelector('.site-navbar ul');

    // Función para alternar la clase 'toggler-open' en el botón de alternancia de navegación
    navToggler.addEventListener('click', function() {
        this.classList.toggle('toggler-open');
        
        // Toggle para mostrar u ocultar el menú de navegación
        if (siteNavbar.style.maxHeight) {
            siteNavbar.style.maxHeight = null;
        } else {
            siteNavbar.style.maxHeight = siteNavbar.scrollHeight + 'px';
        }
    });

    // Cerrar el menú de navegación cuando se hace clic en un enlace
    siteNavbar.querySelectorAll('li').forEach(function(item) {
        item.addEventListener('click', function() {
            navToggler.classList.remove('toggler-open');
            siteNavbar.style.maxHeight = null;
        });
    });

    // Cerrar el menú de navegación cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.site-navbar')) {
            navToggler.classList.remove('toggler-open');
            siteNavbar.style.maxHeight = null;
        }
    });
});
