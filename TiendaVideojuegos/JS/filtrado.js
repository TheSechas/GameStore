document.addEventListener('DOMContentLoaded', function () {
    const btnsCategoria = document.querySelectorAll('.btn-categoria');
    const btnsPlataforma = document.querySelectorAll('.btn-consola');
    const tarjetasJuegos = document.querySelectorAll('.tarjeta-juego');

    // Función que se llama al hacer clic en los filtros
    function aplicarFiltro() {
        const categoriasSeleccionadas = [];
        const plataformasSeleccionadas = [];
        
        // Obtener las categorías seleccionadas
        btnsCategoria.forEach(btn => {
            if (btn.classList.contains('activo')) {
                categoriasSeleccionadas.push(btn.dataset.categoria.toLowerCase());
            }
        });
        
        // Obtener las plataformas seleccionadas (si se implementa)
        btnsPlataforma.forEach(btn => {
            if (btn.classList.contains('activo')) {
                plataformasSeleccionadas.push(btn.dataset.consola.toLowerCase());
            }
        });

        // Filtrar juegos según las categorías y plataformas seleccionadas
        tarjetasJuegos.forEach(tarjeta => {
            const categoriasJuego = tarjeta.dataset.categoria.toLowerCase().split(',').map(cat => cat.trim());
            const plataformasJuego = tarjeta.dataset.plataforma ? tarjeta.dataset.plataforma.toLowerCase().split(',').map(pla => pla.trim()) : [];

            const cumpleCategoria = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.some(categoria => categoriasJuego.includes(categoria));
            const cumplePlataforma = plataformasSeleccionadas.length === 0 || plataformasSeleccionadas.some(plataforma => plataformasJuego.includes(plataforma));

            if (cumpleCategoria && cumplePlataforma) {
                tarjeta.style.display = 'block';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }

    // Hacer clic en los botones de categoría
    btnsCategoria.forEach(btn => {
        btn.addEventListener('click', () => {
            // Alternar la clase 'activo' en el botón
            btn.classList.toggle('activo');
            aplicarFiltro(); // Aplicar los filtros después de cada clic
        });
    });

    // Hacer clic en los botones de plataforma (si se agregan)
    btnsPlataforma.forEach(btn => {
        btn.addEventListener('click', () => {
            // Alternar la clase 'activo' en el botón
            btn.classList.toggle('activo');
            aplicarFiltro(); // Aplicar los filtros después de cada clic
        });
    });
});
