<<<<<<< HEAD
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;

// Muestra la diapositiva actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Mueve el slider manualmente y reinicia el temporizador automático
function changeSlide(direction) {
    clearInterval(autoSlideInterval); // Detiene el temporizador cuando se interactúa manualmente
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
    startAutoSlide(); // Reinicia el temporizador tras la interacción
}

// Evento para botones "Anterior" y "Siguiente"
document.getElementById('next').addEventListener('click', () => changeSlide(1));
document.getElementById('prev').addEventListener('click', () => changeSlide(-1));

// Inicia el slider automático
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Iniciar el slider automáticamente al cargar
=======
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;

// Muestra la diapositiva actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Mueve el slider manualmente y reinicia el temporizador automático
function changeSlide(direction) {
    clearInterval(autoSlideInterval); // Detiene el temporizador cuando se interactúa manualmente
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
    startAutoSlide(); // Reinicia el temporizador tras la interacción
}

// Evento para botones "Anterior" y "Siguiente"
document.getElementById('next').addEventListener('click', () => changeSlide(1));
document.getElementById('prev').addEventListener('click', () => changeSlide(-1));

// Inicia el slider automático
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Iniciar el slider automáticamente al cargar
>>>>>>> a9e567e (Mejoras)
startAutoSlide();