// Array de objetos con datos de los juegos en oferta
const juegosEnOferta = [
    {
        id: 20,
        titulo: "God of War",
        descripcion: "Nuevo contenido ya disponible",
        tag: "Lo más vendido",
        oldPrice: "$39.99",
        discount: "-50%",
        newPrice: "$19.99",
        banner: "IMG/gow.png",
        thumbs: ["IMG/god.jpg","IMG/god1.jpg","IMG/god2.jpg","IMG/gow.png"]
    },
    {
        id: 11,
        titulo: "Silent Hill 2 REMAKE",
        descripcion: "¡Edición Remasterizada!",
        tag: "Muy positivo",
        oldPrice: "$69.99",
        discount: "-25%",
        newPrice: "$52.49",
        banner: "IMG/sh2.jpg",
        thumbs: ["IMG/shr1.jpg","IMG/shr2.jpg","IMG/shr3.jpg", "IMG/sh2.jpg"]
    },
    {
        id: 6,
        titulo: "Red Dead Redemption 2",
        descripcion: "Mejor juego Mundo Abierto",
        tag: "GOTY",
        oldPrice: "$59.99",
        discount: "-75%",
        newPrice: "$14.99",
        banner: "IMG/rdr2.jpg",
        thumbs: ["IMG/rdr21.jpg","IMG/rdr22.jpg","IMG/rdr23.jpg", "IMG/rdr2.jpg"]
    },
    {
        id: 8,
        titulo: "Alan Wake",
        descripcion: "La Mejor Secuela",
        tag: "Extremadamente Positivo",
        oldPrice: "$44.99",
        discount: "-40%",
        newPrice: "$26.99",
        banner: "IMG/aw2.jpg",
        thumbs: ["IMG/aw3.jpg","IMG/aw1.jpg","IMG/aw4.jpg", "IMG/aw2.jpg"]
    }
];

// Variables
let index = 0; // Juego actual
const mainImage = document.getElementById("main-image");
const mainImageLink = document.getElementById("main-image-link");
const gameTitle = document.getElementById("game-title");
const gameDesc = document.getElementById("game-desc");
const gameTag = document.getElementById("game-tag");
const oldPrice = document.getElementById("old-price");
const discount = document.getElementById("discount");
const newPrice = document.getElementById("new-price");
const thumbsContainer = document.getElementById("thumbs-container");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

function mostrarJuego(i) {
const juego = juegosEnOferta[i];
  // Actualizar imagen principal y enlace
    mainImage.src = juego.banner;
    mainImage.alt = juego.titulo;
    mainImageLink.href = `detalle-juego.html?id=${juego.id}`; // <-- AQUÍ ajustamos el enlace

  // Actualizar texto
    gameTitle.textContent = juego.titulo;
    gameDesc.textContent = juego.descripcion;
    gameTag.textContent = juego.tag;
    oldPrice.textContent = juego.oldPrice;
    discount.textContent = juego.discount;
    newPrice.textContent = juego.newPrice;

  // Actualizar miniaturas
    thumbsContainer.innerHTML = "";
    juego.thumbs.forEach((thumbSrc, idx) => {
        const img = document.createElement("img");
            img.src = thumbSrc;
            img.alt = `Miniatura ${idx+1}`;
            img.classList.add("thumb");
        if (idx === 0) img.classList.add("active");

    // Evento para cambiar el banner al hacer clic en miniatura
    img.addEventListener("click", () => {
        mainImage.src = thumbSrc;
        thumbsContainer.querySelectorAll("img").forEach(e => e.classList.remove("active"));
        img.classList.add("active");
    });

    thumbsContainer.appendChild(img);
});
}

// Flechas
arrowLeft.addEventListener("click", () => {
    index = (index - 1 + juegosEnOferta.length) % juegosEnOferta.length;
    mostrarJuego(index);
});
arrowRight.addEventListener("click", () => {
    index = (index + 1) % juegosEnOferta.length;
    mostrarJuego(index);
});

// Inicializar carrusel con el primer juego
mostrarJuego(index);