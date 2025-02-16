// main.js

// Toggle menú móvil
document.getElementById('menu-hamburguesa').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    // Alterna entre mostrar y ocultar el menú
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});

// Función para obtener los parámetros de la URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const juegos = {
    1: { 
        id: 1, 
        nombre: "Uncharted 4", 
        imagen: "IMG/u4.png", 
        precio: 49.99, 
        categoria: "Acción, Aventura", 
        descripcion: "Uncharted 4 es un juego de aventura y acción donde Nathan Drake explora peligrosos entornos en busca de tesoros perdidos.", 
        plataformas: "PlayStation 4, PC"
    },
    2: { 
        id: 2, 
        nombre: "The Walking Dead", 
        imagen: "IMG/twd.jpg", 
        precio: 14.99, 
        categoria: "Terror, Aventura", 
        descripcion: "Basado en la famosa serie de TV, The Walking Dead te pone en el papel de sobreviviente en un mundo lleno de zombis.", 
        plataformas: "PC"
    },
    3: { 
        id: 3, 
        nombre: "Counter Strike 2", 
        imagen: "IMG/cs2.jpg", 
        precio: 0.00, 
        categoria: "Táctico, Multijugador", 
        descripcion: "Counter Strike 2 es un juego de disparos en primera persona competitivo con un enfoque en el trabajo en equipo.", 
        plataformas: "PC"
    },
    4: { 
        id: 4, 
        nombre: "Marvel Rivals", 
        imagen: "IMG/mr.png", 
        precio: 0.00, 
        categoria: "Lucha, Acción", 
        descripcion: "Marvel Rivals es un juego de lucha basado en los superhéroes de Marvel, donde puedes controlar a tus personajes favoritos.", 
        plataformas: "PlayStation 5, Xbox"
    },
    5: { 
        id: 5, 
        nombre: "Valorant", 
        imagen: "IMG/v.jpg", 
        precio: 0.00, 
        categoria: "Táctico, Multijugador", 
        descripcion: "Valorant es un juego de disparos táctico de 5v5 en el que cada jugador elige un 'agente' con habilidades únicas.", 
        plataformas: "PC"
    },
    6: { 
        id: 6, 
        nombre: "Red Dead Redemption 2", 
        imagen: "IMG/rdr2.jpg", 
        precio: 59.99, 
        categoria: "Aventura, Mundo Abierto", 
        descripcion: "Red Dead Redemption 2 es un juego de acción y aventura de mundo abierto ambientado en el salvaje oeste estadounidense.", 
        plataformas: "PlayStation 4, Xbox One, PC"
    },
    7: { 
        id: 7, 
        nombre: "Elden Ring", 
        imagen: "IMG/er.jpg", 
        precio: 34.99, 
        categoria: "RPG, Acción", 
        descripcion: "Elden Ring es un RPG de acción ambientado en un mundo fantástico, creado por los autores de Dark Souls y George R. R. Martin.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC"
    },
    8: { 
        id: 8, 
        nombre: "Alan Wake 2", 
        imagen: "IMG/aw2.jpg", 
        precio: 44.99, 
        categoria: "Terror Psicológico, Aventura", 
        descripcion: "Alan Wake 2 es un juego de terror psicológico en el que los jugadores controlan a un escritor atrapado en una realidad distorsionada.", 
        plataformas: "PlayStation 5, PC"
    },
    9: { 
        id: 9, 
        nombre: "The Last Of Us Parte 1", 
        imagen: "IMG/tlou.jpg", 
        precio: 69.99, 
        categoria: "Aventura, Acción", 
        descripcion: "The Last Of Us Parte 1 es un juego de acción y aventura en un mundo post-apocalíptico donde debes sobrevivir mientras desarrollas una relación profunda con los personajes.", 
        plataformas: "PlayStation 5, PC"
    },
    10: { 
        id: 10, 
        nombre: "Grand Theft Auto 6", 
        imagen: "IMG/gta6.jpg", 
        precio: 99.99, 
        categoria: "Acción, Mundo Abierto", 
        descripcion: "Grand Theft Auto 6 es un juego de acción en un mundo abierto donde puedes realizar misiones, explorar ciudades y participar en actividades criminales.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC"
    },
    11: { 
        id: 11, 
        nombre: "Silent Hill 2", 
        imagen: "IMG/sh2.jpg", 
        precio: 69.99, 
        categoria: "Terror Psicológico", 
        descripcion: "Silent Hill 2 es un juego de terror psicológico en un pueblo donde la oscuridad y las criaturas extrañas acechan a los jugadores.", 
        plataformas: "PlayStation 2, PC"
    },
    12: { 
        id: 12, 
        nombre: "Resident Evil Village", 
        imagen: "IMG/rev.png", 
        precio: 39.99, 
        categoria: "Terror, Acción", 
        descripcion: "Resident Evil Village continúa la historia de Ethan Winters mientras se enfrenta a nuevas amenazas en un extraño y aterrador pueblo.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC"
    },
    13: { 
        id: 13, 
        nombre: "Outlast", 
        imagen: "IMG/o.jpg", 
        precio: 19.99, 
        categoria: "Terror, Survival", 
        descripcion: "Outlast es un juego de terror de supervivencia en el que te enfrentas a criaturas aterradoras dentro de un hospital psiquiátrico.", 
        plataformas: "PlayStation 4, Xbox One, PC"
    },
    14: { 
        id: 14, 
        nombre: "Fallout 4", 
        imagen: "IMG/f4.png", 
        precio: 29.99, 
        categoria: "RPG, Mundo Abierto", 
        descripcion: "Fallout 4 es un RPG de mundo abierto donde los jugadores exploran un mundo post-apocalíptico lleno de criaturas mutantes y misterios.", 
        plataformas: "PlayStation 4, Xbox One, PC"
    },
    15: { 
        id: 15, 
        nombre: "Astro Bot", 
        imagen: "IMG/ab.png", 
        precio: 0.00, 
        categoria: "Aventura, Familia", 
        descripcion: "Astro Bot es un juego de aventuras donde un pequeño robot explora mundos coloridos y resuelve rompecabezas.", 
        plataformas: "PlayStation VR"
    },
    16: { 
        id: 16, 
        nombre: "Visage", 
        imagen: "IMG/vis.jpg", 
        precio: 24.99, 
        categoria: "Terror Psicológico", 
        descripcion: "Visage es un juego de terror psicológico que se desarrolla en una casa misteriosa, llena de secretos oscuros y horrores inexplicables.", 
        plataformas: "PC, PlayStation 4, Xbox One"
    },
    17: { 
        id: 17, 
        nombre: "The Witcher 3", 
        imagen: "IMG/tw3.jpg", 
        precio: 29.99, 
        categoria: "RPG, Aventura", 
        descripcion: "The Witcher 3 es un RPG de mundo abierto en el que Geralt de Rivia busca a su hija adoptiva en un mundo plagado de monstruos y magia.", 
        plataformas: "PlayStation 4, Xbox One, PC"
    },
    18: { 
        id: 18, 
        nombre: "The Zelda Breath Of The Wild", 
        imagen: "IMG/zbw.jpg", 
        precio: 49.99, 
        categoria: "Aventura, Mundo Abierto", 
        descripcion: "The Legend of Zelda: Breath of the Wild es un juego de aventuras en un mundo abierto donde exploras y resuelves acertijos mientras enfrentas a peligros y enemigos.", 
        plataformas: "Nintendo Switch"
    },
    19: { 
        id: 19, 
        nombre: "Intergalatic The Heretic Prophet", 
        imagen: "IMG/i.png", 
        precio: 39.99, 
        categoria: "RPG, Ciencia Ficción", 
        descripcion: "Intergalatic The Heretic Prophet es un RPG de ciencia ficción donde viajas por galaxias lejanas en busca de conocimiento y poder.", 
        plataformas: "PC"
    },
    20: { 
        id: 20, 
        nombre: "God Of War", 
        imagen: "IMG/gow.png", 
        precio: 39.99, 
        categoria: "Acción, Aventura", 
        descripcion: "God of War es un juego de acción que sigue a Kratos mientras navega en el mundo de la mitología nórdica en busca de venganza y redención.", 
        plataformas: "PlayStation 4, PC"
    },
    21: { 
        id: 21, 
        nombre: "Metal Gear Solid Delta", 
        imagen: "IMG/mgsd.png", 
        precio: 59.99, 
        categoria: "Acción, Sigilo", 
        descripcion: "Metal Gear Solid Delta es un juego de sigilo en el que el jugador toma el control de Snake para desbaratar planes de guerra global.", 
        plataformas: "PlayStation 5, PC"
    },
    22: { 
        id: 22, 
        nombre: "Death Stranding 2", 
        imagen: "IMG/ds2.jpg", 
        precio: 59.99, 
        categoria: "Aventura, Ciencia Ficción", 
        descripcion: "Death Stranding 2 es un juego de aventura y ciencia ficción que explora el aislamiento y la reconexión en un mundo devastado.", 
        plataformas: "PlayStation 5"
    },
    23: { 
        id: 23, 
        nombre: "Apex Legends", 
        imagen: "IMG/apex.png", 
        precio: 0.00, 
        categoria: "Battle Royale, Multijugador", 
        descripcion: "Apex Legends es un juego battle royale gratuito en el que equipos de jugadores luchan por ser los últimos en pie.", 
        plataformas: "PC, PlayStation 4, Xbox One"
    },
    24: { 
        id: 24, 
        nombre: "Cyberpunk 2077", 
        imagen: "IMG/c77.jpg", 
        precio: 49.99, 
        categoria: "RPG, Mundo Abierto", 
        descripcion: "Cyberpunk 2077 es un RPG de mundo abierto donde te sumerges en un futuro distópico, explorando las calles de Night City.", 
        plataformas: "PlayStation 4, Xbox One, PC"
    },
    25: { 
        id: 25, 
        nombre: "Days Gone", 
        imagen: "IMG/dg.jpg", 
        precio: 29.99, 
        categoria: "Acción, Aventura", 
        descripcion: "Days Gone es un juego de acción y aventura en un mundo post-apocalíptico lleno de zombis, donde un motociclista trata de sobrevivir.", 
        plataformas: "PlayStation 4, PC"
    }
};

// Obtener el ID del juego de la URL
const juegoId = getUrlParameter('id');

// Función para cargar los detalles del juego
function cargarDetalleJuego(id) {
    const juego = juegos[id];

    if (juego) {
        // Actualizar el contenido con los detalles del juego
        document.getElementById('imagen-juego').src = juego.imagen;
        document.getElementById('nombre-juego').textContent = juego.nombre;
        document.getElementById('genero-juego').textContent = juego.categoria; // 'genero' no existe en los datos, usa 'categoria'
        document.getElementById('plataformas-juego').textContent = juego.plataformas;
        document.getElementById('precio-juego').textContent = `$${juego.precio.toFixed(2)}`; // Añadir formato al precio
        document.getElementById('descripcion-juego').textContent = juego.descripcion;

        // Cambiar la lógica del botón "Agregar al Carrito"
        const btnAgregarCarrito = document.getElementById('btn-agregar-carrito');
        if (btnAgregarCarrito) {
            btnAgregarCarrito.addEventListener('click', function() {
                agregarAlCarrito(id); // Usar el ID dinámico del juego
            });
        }
    } else {
        document.querySelector('.detalle-juego').innerHTML = '<p>Juego no encontrado.</p>';
    }
}

// Cargar los detalles del juego al cargar la página
if (juegoId) {
    cargarDetalleJuego(juegoId);
} else {
    document.querySelector('.detalle-juego').innerHTML = '<p>Juego no encontrado.</p>';
}

// Función para agregar al carrito
function agregarAlCarrito(id) {
    // Aquí agregarías la lógica para agregar el juego al carrito
    console.log(`Juego con ID ${id} agregado al carrito`);
    alert(`Juego con ID ${id} agregado al carrito`);
}