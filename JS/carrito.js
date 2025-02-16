// js/carrito.js

document.addEventListener("DOMContentLoaded", function() {
    mostrarCarrito();
    document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito);
});

function agregarAlCarrito(idJuego) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(item => item.id == idJuego);
    
    if (index !== -1) {
        carrito[index].cantidad++;
    } else {
        const juego = juegosCatalogo[idJuego];
        if(juego) {
            carrito.push({
                id: juego.id,
                nombre: juego.nombre,
                imagen: juego.imagen,
                precio: juego.precio,
                cantidad: 1
            });
        } else {
            alert("Juego no encontrado");
            return;
        }
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('¡Juego agregado al carrito!');
    mostrarCarrito();
}

function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenido = document.getElementById('contenido-carrito');
    contenido.innerHTML = '';
    
    if (carrito.length === 0) {
        contenido.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }
    
    carrito.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item-carrito');

        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="img-carrito">
            <h4>${item.nombre}</h4>
            <p>Precio: $${item.precio.toFixed(2)}</p>
            <p>Cantidad: ${item.cantidad}</p>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        contenido.appendChild(div);
    });
}

function eliminarDelCarrito(idJuego) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== idJuego);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

const juegosCatalogo = {
    1: { id: 1, nombre: "Uncharted 4", imagen: "IMG/u4.png", precio: 49.99 },
    2: { id: 2, nombre: "The Walking Dead", imagen: "IMG/twd.jpg", precio: 14.99 },
    3: { id: 3, nombre: "Counter Strike 2", imagen: "IMG/cs2.jpg", precio: 0.00 },
    4: { id: 4, nombre: "Marvel Rivals", imagen: "IMG/mr.png", precio: 0.00 },
    5: { id: 5, nombre: "Valorant", imagen: "IMG/v.jpg", precio: 0.00 },
    6: { id: 6, nombre: "Red Dead Redemption 2", imagen: "IMG/rdr2.jpg", precio: 59.99 },
    7: { id: 7, nombre: "Elden Ring", imagen: "IMG/er.jpg", precio: 34.99 },
    8: { id: 8, nombre: "Alan Wake 2", imagen: "IMG/aw2.jpg", precio: 44.99 },
    9: { id: 9, nombre: "The Last Of Us Parte 1", imagen: "IMG/tlou.jpg", precio: 69.99 },
    10: { id: 10, nombre: "Grand Theft Auto 6", imagen: "IMG/gta6.jpg", precio: 99.99 },
    11: { id: 11, nombre: "Silent Hill 2", imagen: "IMG/sh2.jpg", precio: 69.99 },
    12: { id: 12, nombre: "Resident Evil Village", imagen: "IMG/rev.png", precio: 39.99 },
    13: { id: 13, nombre: "Outlast", imagen: "IMG/o.jpg", precio: 19.99 },
    14: { id: 14, nombre: "Fallout 4", imagen: "IMG/f4.png", precio: 29.99 },
    15: { id: 15, nombre: "Astro Bot", imagen: "IMG/ab.png", precio: 0.00 },
    16: { id: 16, nombre: "Visage", imagen: "IMG/vis.jpg", precio: 24.99 },
    17: { id: 17, nombre: "The Witcher 3", imagen: "IMG/tw3.jpg", precio: 29.99 },
    18: { id: 18, nombre: "The Zelda Breath Of The Wild", imagen: "IMG/zbw.jpg", precio: 49.99 },
    19: { id: 19, nombre: "Intergalatic The Heretic Prophet", imagen: "IMG/i.png", precio: 39.99 },
    20: { id: 20, nombre: "God Of War", imagen: "IMG/gow.png", precio: 39.99 },
    21: { id: 21, nombre: "Metal Gear Solid Delta", imagen: "IMG/mgsd.png", precio: 59.99 },
    22: { id: 22, nombre: "Death Stranding 2", imagen: "IMG/ds2.jpg", precio: 59.99 },
    23: { id: 23, nombre: "Apex Legends", imagen: "IMG/apex.png", precio: 0.00 },
    24: { id: 24, nombre: "Cyberpunk 2077", imagen: "IMG/c77.jpg", precio: 49.99 },
    25: { id: 25, nombre: "Days Gone", imagen: "IMG/dg.jpg", precio: 29.99 }
};
