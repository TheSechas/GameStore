<<<<<<< HEAD
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
        plataformas: "PlayStation 4, PC",
        trailer: "https://www.youtube.com/embed/34GJ9ZMAKqA",
        metacritic: 93,
        fechaLanzamiento: "10 de mayo de 2016"
    },
    2: { 
        id: 2, 
        nombre: "The Walking Dead", 
        imagen: "IMG/twd.jpg", 
        precio: 14.99, 
        categoria: "Terror, Aventura", 
        descripcion: "Basado en la famosa serie de TV, The Walking Dead te pone en el papel de sobreviviente en un mundo lleno de zombis.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/N40uY51s5Z0",
        metacritic: 94,
        fechaLanzamiento: "24 de abril de 2012"
    },
    3: { 
        id: 3, 
        nombre: "Counter Strike 2", 
        imagen: "IMG/cs2.jpg", 
        precio: 0.00, 
        categoria: "Táctico, Multijugador", 
        descripcion: "Counter Strike 2 es un juego de disparos en primera persona competitivo con un enfoque en el trabajo en equipo.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/c80dVYcL69E",
        metacritic: 88,
        fechaLanzamiento: "27 de septiembre de 2023"
    },
    4: { 
        id: 4, 
        nombre: "Marvel Rivals", 
        imagen: "IMG/mr.png", 
        precio: 0.00, 
        categoria: "Lucha, Acción", 
        descripcion: "Marvel Rivals es un juego de lucha basado en los superhéroes de Marvel, donde puedes controlar a tus personajes favoritos.", 
        plataformas: "PlayStation 5, Xbox",
        trailer: "https://www.youtube.com/embed/FFWzIbkXxBU",
        metacritic: 85,
        fechaLanzamiento: "6 de diciembre de 2024"
    },
    5: { 
        id: 5, 
        nombre: "Valorant", 
        imagen: "IMG/v.jpg", 
        precio: 0.00, 
        categoria: "Táctico, Multijugador", 
        descripcion: "Valorant es un juego de disparos táctico de 5v5 en el que cada jugador elige un 'agente' con habilidades únicas.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/Iyd2VUcoTBY",
        metacritic: 80,
        fechaLanzamiento: "2 de junio de 2020"
    },
    6: { 
        id: 6, 
        nombre: "Red Dead Redemption 2", 
        imagen: "IMG/rdr2.jpg", 
        precio: 59.99, 
        categoria: "Aventura, Mundo Abierto", 
        descripcion: "Red Dead Redemption 2 es un juego de acción y aventura de mundo abierto ambientado en el salvaje oeste estadounidense.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/gmA6MrX81z4",
        metacritic: 97,
        fechaLanzamiento: "26 de octubre de 2018"
    },
    7: { 
        id: 7, 
        nombre: "Elden Ring", 
        imagen: "IMG/er.jpg", 
        precio: 34.99, 
        categoria: "RPG, Acción", 
        descripcion: "Elden Ring es un RPG de acción ambientado en un mundo fantástico, creado por los autores de Dark Souls y George R. R. Martin.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC",
        trailer: "https://www.youtube.com/embed/CptaXqVY6-E",
        metacritic: 96,
        fechaLanzamiento: "25 de febrero de 2022"
    },
    8: { 
        id: 8, 
        nombre: "Alan Wake 2", 
        imagen: "IMG/aw2.jpg", 
        precio: 44.99, 
        categoria: "Terror Psicológico, Aventura", 
        descripcion: "Alan Wake 2 es un juego de terror psicológico en el que los jugadores controlan a un escritor atrapado en una realidad distorsionada.", 
        plataformas: "PlayStation 5, PC",
        trailer: "https://www.youtube.com/embed/q0vNoRhuV_I",
        metacritic: 88,
        fechaLanzamiento: "27 de octubre de 2023"
    },
    9: { 
        id: 9, 
        nombre: "The Last Of Us Parte 1", 
        imagen: "IMG/tlou.jpg", 
        precio: 69.99, 
        categoria: "Aventura, Acción", 
        descripcion: "The Last Of Us Parte 1 es un juego de acción y aventura en un mundo post-apocalíptico donde debes sobrevivir mientras desarrollas una relación profunda con los personajes.", 
        plataformas: "PlayStation 5, PC",
        trailer: "https://www.youtube.com/embed/Mel8DZBEJTo",
        metacritic: 95,
        fechaLanzamiento: "14 de junio de 2013"
    },
    10: { 
        id: 10, 
        nombre: "Grand Theft Auto 6", 
        imagen: "IMG/gta6.jpg", 
        precio: 99.99, 
        categoria: "Acción, Mundo Abierto", 
        descripcion: "Grand Theft Auto 6 es un juego de acción en un mundo abierto donde puedes realizar misiones, explorar ciudades y participar en actividades criminales.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC",
        trailer: "https://www.youtube.com/embed/QdBZY2fkU-0",
        metacritic: 99,
        fechaLanzamiento: "Otoño 2025"
    },
    11: { 
        id: 11, 
        nombre: "Silent Hill 2", 
        imagen: "IMG/sh2.jpg", 
        precio: 69.99, 
        categoria: "Terror Psicológico", 
        descripcion: "Silent Hill 2 es un juego de terror psicológico en un pueblo donde la oscuridad y las criaturas extrañas acechan a los jugadores.", 
        plataformas: "PlayStation 2, PC",
        trailer: "https://www.youtube.com/embed/pyC_qiW_4ZY",
        metacritic: 86,
        fechaLanzamiento: "7 de octubre 2024"
    },
    12: { 
        id: 12, 
        nombre: "Resident Evil Village", 
        imagen: "IMG/rev.png", 
        precio: 39.99, 
        categoria: "Terror, Acción", 
        descripcion: "Resident Evil Village continúa la historia de Ethan Winters mientras se enfrenta a nuevas amenazas en un extraño y aterrador pueblo.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC",
        trailer: "https://www.youtube.com/embed/ztj8fv6Ttp8",
        metacritic: 84,
        fechaLanzamiento: "7 de mayo de 2021"
    },
    13: { 
        id: 13, 
        nombre: "Outlast", 
        imagen: "IMG/o.jpg", 
        precio: 19.99, 
        categoria: "Terror, Survival", 
        descripcion: "Outlast es un juego de terror de supervivencia en el que te enfrentas a criaturas aterradoras dentro de un hospital psiquiátrico.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/uKA-IA4locM",
        metacritic: 80,
        fechaLanzamiento: "4 de septiembre de 2013"
    },
    14: { 
        id: 14, 
        nombre: "Fallout 4", 
        imagen: "IMG/f4.png", 
        precio: 29.99, 
        categoria: "RPG, Mundo Abierto", 
        descripcion: "Fallout 4 es un RPG de mundo abierto donde los jugadores exploran un mundo post-apocalíptico lleno de criaturas mutantes y misterios.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/X5aJfebzkrM",
        metacritic: 95,
        fechaLanzamiento: "14 de junio de 2013"
    },
    15: { 
        id: 15, 
        nombre: "Astro Bot", 
        imagen: "IMG/ab.png", 
        precio: 0.00, 
        categoria: "Aventura, Familia", 
        descripcion: "Astro Bot es un juego de aventuras donde un pequeño robot explora mundos coloridos y resuelve rompecabezas.", 
        plataformas: "PlayStation VR",
        trailer: "https://www.youtube.com/embed/gdHIbPiQEQI",
        metacritic: 94,
        fechaLanzamiento: "5 de septiembre de 2024"
    },
    16: { 
        id: 16, 
        nombre: "Visage", 
        imagen: "IMG/vis.jpg", 
        precio: 24.99, 
        categoria: "Terror Psicológico", 
        descripcion: "Visage es un juego de terror psicológico que se desarrolla en una casa misteriosa, llena de secretos oscuros y horrores inexplicables.", 
        plataformas: "PC, PlayStation 4, Xbox One",
        trailer: "https://www.youtube.com/embed/dY8AVTFbR9o",
        metacritic: 81,
        fechaLanzamiento: "30 de octubre de 2020"
    },
    17: { 
        id: 17, 
        nombre: "The Witcher 3", 
        imagen: "IMG/tw3.jpg", 
        precio: 29.99, 
        categoria: "RPG, Aventura", 
        descripcion: "The Witcher 3 es un RPG de mundo abierto en el que Geralt de Rivia busca a su hija adoptiva en un mundo plagado de monstruos y magia.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/c0i88t0Kacs",
        metacritic: 93,
        fechaLanzamiento: "19 de mayo de 2015"
    },
    18: { 
        id: 18, 
        nombre: "The Zelda Breath Of The Wild", 
        imagen: "IMG/zbw.jpg", 
        precio: 49.99, 
        categoria: "Aventura, Mundo Abierto", 
        descripcion: "The Legend of Zelda: Breath of the Wild es un juego de aventuras en un mundo abierto donde exploras y resuelves acertijos mientras enfrentas a peligros y enemigos.", 
        plataformas: "Nintendo Switch",
        trailer: "https://www.youtube.com/embed/zw47_q9wbBE",
        metacritic: 97,
        fechaLanzamiento: "3 de marzo de 2017"
    },
    19: { 
        id: 19, 
        nombre: "Intergalatic The Heretic Prophet", 
        imagen: "IMG/i.png", 
        precio: 39.99, 
        categoria: "RPG, Ciencia Ficción", 
        descripcion: "Intergalatic The Heretic Prophet es un RPG de ciencia ficción donde viajas por galaxias lejanas en busca de conocimiento y poder.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/o7TVPoxwi74",
        metacritic: 99,
        fechaLanzamiento: "2028"
    },
    20: { 
        id: 20, 
        nombre: "God Of War", 
        imagen: "IMG/gow.png", 
        precio: 39.99, 
        categoria: "Acción, Aventura", 
        descripcion: "God of War es un juego de acción que sigue a Kratos mientras navega en el mundo de la mitología nórdica en busca de venganza y redención.", 
        plataformas: "PlayStation 4, PC",
        trailer: "https://www.youtube.com/embed/dK42JGgkoF8",
        metacritic: 94,
        fechaLanzamiento: "	20 de abril de 2018"
    },
    21: { 
        id: 21, 
        nombre: "Metal Gear Solid Delta", 
        imagen: "IMG/mgsd.png", 
        precio: 59.99, 
        categoria: "Acción, Sigilo", 
        descripcion: "Metal Gear Solid Delta es un juego de sigilo en el que el jugador toma el control de Snake para desbaratar planes de guerra global.", 
        plataformas: "PlayStation 5, PC",
        trailer: "https://www.youtube.com/embed/iNX8QCeymFM",
        metacritic: 99,
        fechaLanzamiento: "28 de agosto de 2025"
    },
    22: { 
        id: 22, 
        nombre: "Death Stranding 2", 
        imagen: "IMG/ds2.jpg", 
        precio: 59.99, 
        categoria: "Aventura, Ciencia Ficción", 
        descripcion: "Death Stranding 2 es un juego de aventura y ciencia ficción que explora el aislamiento y la reconexión en un mundo devastado.", 
        plataformas: "PlayStation 5",
        trailer: "https://www.youtube.com/embed/wbLstJHlC4U",
        metacritic: 99,
        fechaLanzamiento: "2025"
    },
    23: { 
        id: 23, 
        nombre: "Apex Legends", 
        imagen: "IMG/apex.png", 
        precio: 0.00, 
        categoria: "Battle Royale, Multijugador", 
        descripcion: "Apex Legends es un juego battle royale gratuito en el que equipos de jugadores luchan por ser los últimos en pie.", 
        plataformas: "PC, PlayStation 4, Xbox One",
        trailer: "https://www.youtube.com/embed/oQtHENM_GZU",
        metacritic: 88,
        fechaLanzamiento: "4 de febrero de 2019"
    },
    24: { 
        id: 24, 
        nombre: "Cyberpunk 2077", 
        imagen: "IMG/c77.jpg", 
        precio: 49.99, 
        categoria: "RPG, Mundo Abierto", 
        descripcion: "Cyberpunk 2077 es un RPG de mundo abierto donde te sumerges en un futuro distópico, explorando las calles de Night City.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/8X2kIfS6fb8",
        metacritic: 86,
        fechaLanzamiento: "10 de diciembre de 2020"
    },
    25: { 
        id: 25, 
        nombre: "Days Gone", 
        imagen: "IMG/dg.jpg", 
        precio: 29.99, 
        categoria: "Acción, Aventura", 
        descripcion: "Days Gone es un juego de acción y aventura en un mundo post-apocalíptico lleno de zombis, donde un motociclista trata de sobrevivir.", 
        plataformas: "PlayStation 4, PC",
        trailer: "https://www.youtube.com/embed/FKtaOY9lMvM",
        metacritic: 71,
        fechaLanzamiento: "26 de abril de 2019"
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
        document.getElementById('fecha-lanzamiento').textContent = juego.fechaLanzamiento;
                // Actualizar el contenedor del tráiler
                if(juego.trailer) {
                    document.getElementById('trailer-juego').innerHTML = `
                        <iframe width="560" height="315" src="${juego.trailer}" 
                            title="Tráiler de ${juego.nombre}" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; 
                            web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                            </iframe>
                    `;
                } else {
                    document.getElementById('trailer-juego').innerHTML = '<p>Tráiler no disponible.</p>';
                }
                     // Actualizar la puntuación de Metacritic
        const metacriticScoreElement = document.getElementById('metacritic-score');
        if (juego.metacritic) {
            metacriticScoreElement.innerHTML = `<span class='score'>${juego.metacritic}</span>/100`;
        } else {
            metacriticScoreElement.textContent = 'Puntuación no disponible';
        }
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
=======
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
        plataformas: "PlayStation 4, PC",
        trailer: "https://www.youtube.com/embed/34GJ9ZMAKqA",
        metacritic: 93,
        fechaLanzamiento: "10 de mayo de 2016"
    },
    2: { 
        id: 2, 
        nombre: "The Walking Dead", 
        imagen: "IMG/twd.jpg", 
        precio: 14.99, 
        categoria: "Terror, Aventura", 
        descripcion: "Basado en la famosa serie de TV, The Walking Dead te pone en el papel de sobreviviente en un mundo lleno de zombis.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/N40uY51s5Z0",
        metacritic: 94,
        fechaLanzamiento: "24 de abril de 2012"
    },
    3: { 
        id: 3, 
        nombre: "Counter Strike 2", 
        imagen: "IMG/cs2.jpg", 
        precio: 0.00, 
        categoria: "Táctico, Multijugador", 
        descripcion: "Counter Strike 2 es un juego de disparos en primera persona competitivo con un enfoque en el trabajo en equipo.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/c80dVYcL69E",
        metacritic: 88,
        fechaLanzamiento: "27 de septiembre de 2023"
    },
    4: { 
        id: 4, 
        nombre: "Marvel Rivals", 
        imagen: "IMG/mr.png", 
        precio: 0.00, 
        categoria: "Lucha, Acción", 
        descripcion: "Marvel Rivals es un juego de lucha basado en los superhéroes de Marvel, donde puedes controlar a tus personajes favoritos.", 
        plataformas: "PlayStation 5, Xbox",
        trailer: "https://www.youtube.com/embed/FFWzIbkXxBU",
        metacritic: 85,
        fechaLanzamiento: "6 de diciembre de 2024"
    },
    5: { 
        id: 5, 
        nombre: "Valorant", 
        imagen: "IMG/v.jpg", 
        precio: 0.00, 
        categoria: "Táctico, Multijugador", 
        descripcion: "Valorant es un juego de disparos táctico de 5v5 en el que cada jugador elige un 'agente' con habilidades únicas.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/Iyd2VUcoTBY",
        metacritic: 80,
        fechaLanzamiento: "2 de junio de 2020"
    },
    6: { 
        id: 6, 
        nombre: "Red Dead Redemption 2", 
        imagen: "IMG/rdr2.jpg", 
        precio: 59.99, 
        categoria: "Aventura, Mundo Abierto", 
        descripcion: "Red Dead Redemption 2 es un juego de acción y aventura de mundo abierto ambientado en el salvaje oeste estadounidense.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/gmA6MrX81z4",
        metacritic: 97,
        fechaLanzamiento: "26 de octubre de 2018"
    },
    7: { 
        id: 7, 
        nombre: "Elden Ring", 
        imagen: "IMG/er.jpg", 
        precio: 34.99, 
        categoria: "RPG, Acción", 
        descripcion: "Elden Ring es un RPG de acción ambientado en un mundo fantástico, creado por los autores de Dark Souls y George R. R. Martin.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC",
        trailer: "https://www.youtube.com/embed/CptaXqVY6-E",
        metacritic: 96,
        fechaLanzamiento: "25 de febrero de 2022"
    },
    8: { 
        id: 8, 
        nombre: "Alan Wake 2", 
        imagen: "IMG/aw2.jpg", 
        precio: 44.99, 
        categoria: "Terror Psicológico, Aventura", 
        descripcion: "Alan Wake 2 es un juego de terror psicológico en el que los jugadores controlan a un escritor atrapado en una realidad distorsionada.", 
        plataformas: "PlayStation 5, PC",
        trailer: "https://www.youtube.com/embed/q0vNoRhuV_I",
        metacritic: 88,
        fechaLanzamiento: "27 de octubre de 2023"
    },
    9: { 
        id: 9, 
        nombre: "The Last Of Us Parte 1", 
        imagen: "IMG/tlou.jpg", 
        precio: 69.99, 
        categoria: "Aventura, Acción", 
        descripcion: "The Last Of Us Parte 1 es un juego de acción y aventura en un mundo post-apocalíptico donde debes sobrevivir mientras desarrollas una relación profunda con los personajes.", 
        plataformas: "PlayStation 5, PC",
        trailer: "https://www.youtube.com/embed/Mel8DZBEJTo",
        metacritic: 95,
        fechaLanzamiento: "14 de junio de 2013"
    },
    10: { 
        id: 10, 
        nombre: "Grand Theft Auto 6", 
        imagen: "IMG/gta6.jpg", 
        precio: 99.99, 
        categoria: "Acción, Mundo Abierto", 
        descripcion: "Grand Theft Auto 6 es un juego de acción en un mundo abierto donde puedes realizar misiones, explorar ciudades y participar en actividades criminales.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC",
        trailer: "https://www.youtube.com/embed/QdBZY2fkU-0",
        metacritic: 99,
        fechaLanzamiento: "Otoño 2025"
    },
    11: { 
        id: 11, 
        nombre: "Silent Hill 2", 
        imagen: "IMG/sh2.jpg", 
        precio: 69.99, 
        categoria: "Terror Psicológico", 
        descripcion: "Silent Hill 2 es un juego de terror psicológico en un pueblo donde la oscuridad y las criaturas extrañas acechan a los jugadores.", 
        plataformas: "PlayStation 2, PC",
        trailer: "https://www.youtube.com/embed/pyC_qiW_4ZY",
        metacritic: 86,
        fechaLanzamiento: "7 de octubre 2024"
    },
    12: { 
        id: 12, 
        nombre: "Resident Evil Village", 
        imagen: "IMG/rev.png", 
        precio: 39.99, 
        categoria: "Terror, Acción", 
        descripcion: "Resident Evil Village continúa la historia de Ethan Winters mientras se enfrenta a nuevas amenazas en un extraño y aterrador pueblo.", 
        plataformas: "PlayStation 5, Xbox Series X/S, PC",
        trailer: "https://www.youtube.com/embed/ztj8fv6Ttp8",
        metacritic: 84,
        fechaLanzamiento: "7 de mayo de 2021"
    },
    13: { 
        id: 13, 
        nombre: "Outlast", 
        imagen: "IMG/o.jpg", 
        precio: 19.99, 
        categoria: "Terror, Survival", 
        descripcion: "Outlast es un juego de terror de supervivencia en el que te enfrentas a criaturas aterradoras dentro de un hospital psiquiátrico.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/uKA-IA4locM",
        metacritic: 80,
        fechaLanzamiento: "4 de septiembre de 2013"
    },
    14: { 
        id: 14, 
        nombre: "Fallout 4", 
        imagen: "IMG/f4.png", 
        precio: 29.99, 
        categoria: "RPG, Mundo Abierto", 
        descripcion: "Fallout 4 es un RPG de mundo abierto donde los jugadores exploran un mundo post-apocalíptico lleno de criaturas mutantes y misterios.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/X5aJfebzkrM",
        metacritic: 95,
        fechaLanzamiento: "14 de junio de 2013"
    },
    15: { 
        id: 15, 
        nombre: "Astro Bot", 
        imagen: "IMG/ab.png", 
        precio: 0.00, 
        categoria: "Aventura, Familia", 
        descripcion: "Astro Bot es un juego de aventuras donde un pequeño robot explora mundos coloridos y resuelve rompecabezas.", 
        plataformas: "PlayStation VR",
        trailer: "https://www.youtube.com/embed/gdHIbPiQEQI",
        metacritic: 94,
        fechaLanzamiento: "5 de septiembre de 2024"
    },
    16: { 
        id: 16, 
        nombre: "Visage", 
        imagen: "IMG/vis.jpg", 
        precio: 24.99, 
        categoria: "Terror Psicológico", 
        descripcion: "Visage es un juego de terror psicológico que se desarrolla en una casa misteriosa, llena de secretos oscuros y horrores inexplicables.", 
        plataformas: "PC, PlayStation 4, Xbox One",
        trailer: "https://www.youtube.com/embed/dY8AVTFbR9o",
        metacritic: 81,
        fechaLanzamiento: "30 de octubre de 2020"
    },
    17: { 
        id: 17, 
        nombre: "The Witcher 3", 
        imagen: "IMG/tw3.jpg", 
        precio: 29.99, 
        categoria: "RPG, Aventura", 
        descripcion: "The Witcher 3 es un RPG de mundo abierto en el que Geralt de Rivia busca a su hija adoptiva en un mundo plagado de monstruos y magia.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/c0i88t0Kacs",
        metacritic: 93,
        fechaLanzamiento: "19 de mayo de 2015"
    },
    18: { 
        id: 18, 
        nombre: "The Zelda Breath Of The Wild", 
        imagen: "IMG/zbw.jpg", 
        precio: 49.99, 
        categoria: "Aventura, Mundo Abierto", 
        descripcion: "The Legend of Zelda: Breath of the Wild es un juego de aventuras en un mundo abierto donde exploras y resuelves acertijos mientras enfrentas a peligros y enemigos.", 
        plataformas: "Nintendo Switch",
        trailer: "https://www.youtube.com/embed/zw47_q9wbBE",
        metacritic: 97,
        fechaLanzamiento: "3 de marzo de 2017"
    },
    19: { 
        id: 19, 
        nombre: "Intergalatic The Heretic Prophet", 
        imagen: "IMG/i.png", 
        precio: 39.99, 
        categoria: "RPG, Ciencia Ficción", 
        descripcion: "Intergalatic The Heretic Prophet es un RPG de ciencia ficción donde viajas por galaxias lejanas en busca de conocimiento y poder.", 
        plataformas: "PC",
        trailer: "https://www.youtube.com/embed/o7TVPoxwi74",
        metacritic: 99,
        fechaLanzamiento: "2028"
    },
    20: { 
        id: 20, 
        nombre: "God Of War", 
        imagen: "IMG/gow.png", 
        precio: 39.99, 
        categoria: "Acción, Aventura", 
        descripcion: "God of War es un juego de acción que sigue a Kratos mientras navega en el mundo de la mitología nórdica en busca de venganza y redención.", 
        plataformas: "PlayStation 4, PC",
        trailer: "https://www.youtube.com/embed/dK42JGgkoF8",
        metacritic: 94,
        fechaLanzamiento: "	20 de abril de 2018"
    },
    21: { 
        id: 21, 
        nombre: "Metal Gear Solid Delta", 
        imagen: "IMG/mgsd.png", 
        precio: 59.99, 
        categoria: "Acción, Sigilo", 
        descripcion: "Metal Gear Solid Delta es un juego de sigilo en el que el jugador toma el control de Snake para desbaratar planes de guerra global.", 
        plataformas: "PlayStation 5, PC",
        trailer: "https://www.youtube.com/embed/iNX8QCeymFM",
        metacritic: 99,
        fechaLanzamiento: "28 de agosto de 2025"
    },
    22: { 
        id: 22, 
        nombre: "Death Stranding 2", 
        imagen: "IMG/ds2.jpg", 
        precio: 59.99, 
        categoria: "Aventura, Ciencia Ficción", 
        descripcion: "Death Stranding 2 es un juego de aventura y ciencia ficción que explora el aislamiento y la reconexión en un mundo devastado.", 
        plataformas: "PlayStation 5",
        trailer: "https://www.youtube.com/embed/wbLstJHlC4U",
        metacritic: 99,
        fechaLanzamiento: "2025"
    },
    23: { 
        id: 23, 
        nombre: "Apex Legends", 
        imagen: "IMG/apex.png", 
        precio: 0.00, 
        categoria: "Battle Royale, Multijugador", 
        descripcion: "Apex Legends es un juego battle royale gratuito en el que equipos de jugadores luchan por ser los últimos en pie.", 
        plataformas: "PC, PlayStation 4, Xbox One",
        trailer: "https://www.youtube.com/embed/oQtHENM_GZU",
        metacritic: 88,
        fechaLanzamiento: "4 de febrero de 2019"
    },
    24: { 
        id: 24, 
        nombre: "Cyberpunk 2077", 
        imagen: "IMG/c77.jpg", 
        precio: 49.99, 
        categoria: "RPG, Mundo Abierto", 
        descripcion: "Cyberpunk 2077 es un RPG de mundo abierto donde te sumerges en un futuro distópico, explorando las calles de Night City.", 
        plataformas: "PlayStation 4, Xbox One, PC",
        trailer: "https://www.youtube.com/embed/8X2kIfS6fb8",
        metacritic: 86,
        fechaLanzamiento: "10 de diciembre de 2020"
    },
    25: { 
        id: 25, 
        nombre: "Days Gone", 
        imagen: "IMG/dg.jpg", 
        precio: 29.99, 
        categoria: "Acción, Aventura", 
        descripcion: "Days Gone es un juego de acción y aventura en un mundo post-apocalíptico lleno de zombis, donde un motociclista trata de sobrevivir.", 
        plataformas: "PlayStation 4, PC",
        trailer: "https://www.youtube.com/embed/FKtaOY9lMvM",
        metacritic: 71,
        fechaLanzamiento: "26 de abril de 2019"
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
        document.getElementById('fecha-lanzamiento').textContent = juego.fechaLanzamiento;
                // Actualizar el contenedor del tráiler
                if(juego.trailer) {
                    document.getElementById('trailer-juego').innerHTML = `
                        <iframe width="560" height="315" src="${juego.trailer}" 
                            title="Tráiler de ${juego.nombre}" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; 
                            web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen>
                            </iframe>
                    `;
                } else {
                    document.getElementById('trailer-juego').innerHTML = '<p>Tráiler no disponible.</p>';
                }
                     // Actualizar la puntuación de Metacritic
        const metacriticScoreElement = document.getElementById('metacritic-score');
        if (juego.metacritic) {
            metacriticScoreElement.innerHTML = `<span class='score'>${juego.metacritic}</span>/100`;
        } else {
            metacriticScoreElement.textContent = 'Puntuación no disponible';
        }
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
>>>>>>> a9e567e (Mejoras)
}