document.querySelectorAll('.no-esconder').forEach(no => {
    no.addEventListener('click', () => {
        const contenidoOculto = no.nextElementSibling;
        if (contenidoOculto.style.display === 'none' || contenidoOculto.style.display === '') {
            contenidoOculto.style.display = 'table-row';
        } else {
            contenidoOculto.style.display = 'none';
        }
    });
});