<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: inicio.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="GameStore - Tu tienda de videojuegos favorita con los últimos títulos y ofertas.">
    <meta name="keywords" content="videojuegos, tienda, gaming, PS5, PC, Xbox">
    <meta name="author" content="GameStore Team">
    
    <title>Bienvenido - GameStore</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="CSS/estilos.css">
    <link rel="icon" href="IMG/favicon.png" type="image/png">
</head>
<body>
<header>
    <nav class="navbar">
        <a href="index.html" class="logo">GameStore</a>
    <div class="menu-hamburguesa" id="menu-hamburguesa">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul class="nav-links" id="nav-links">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="catalogo.html">Catálogo</a></li>
        <li><a href="contacto.html">Contacto</a></li>
        <li><a href="carrito.html">Carrito</a></li>
        <li><a href="sobre.html">Sobre Nosotros</a></li>
    </ul>
    <div class="user-menu">
        <div class="user-logo">
            <a href="inicio.php"><i class="fa fa-user-circle"></i></a>
        </div>
    </div>
    </nav>
</header>
    <br>
    <br>
    <br>
    <section class="bienvenido">
        <h1>¡Bienvenido, <?php echo htmlspecialchars($_SESSION['usuario']['nombre']); ?>!</h1>
        <p>Has iniciado sesión correctamente en GameStore.</p>
        <a href="logout.php">Cerrar sesión</a>
    </section>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
<footer>
    <div class="footer-container">
        <div class="footer-logo">
            <h2>GameStore</h2>
        </div>

        <div class="footer-links">
            <a href="index.html">Inicio</a>
            <a href="catalogo.html">Juegos</a>
            <a href="contacto.html">Contacto</a>
            <a href="carrito.html">Carrito</a>
            <a href="sobre.html">Sobre Nosotros</a>
        </div>

        <div class="footer-social">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
        </div>

        <p class="footer-copy">&copy; 2025 GameZone - Todos los derechos reservados</p>
    </div>
</footer>
</body>
</html>