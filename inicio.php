<?php
session_start();
$error = $_SESSION['error'] ?? '';
$exito = $_SESSION['exito'] ?? '';
unset($_SESSION['error']);
unset($_SESSION['exito']);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="GameStore - Tu tienda de videojuegos favorita con los últimos títulos y ofertas.">
    <meta name="keywords" content="videojuegos, tienda, gaming, PS5, PC, Xbox">
    <meta name="author" content="GameStore Team">
    
    <title>Inicio Sesion - GameStore</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="CSS/estilos.css">
    <link rel="icon" href="IMG/favicon.png" type="image/png">
</head>
<body>
<!-- Header y menú -->
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
<?php if ($error): ?>
<div class="error-mensaje">
    <?php echo $error; ?>
</div>
<?php endif; ?>

<?php if ($exito): ?>
<div class="exito-mensaje">
    <?php echo $exito; ?>
</div>
<?php endif; ?>
<section id="login-register">
    <div class="container" id="container">
        <div class="form-container sign-up">
            <form action="PHP/register.php" method="POST">
                <h1>Crear Cuenta</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
                </div>
                <span>O usa tu email para registrarte</span>
                <input type="text" name="nombre" placeholder="Nombre" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Contraseña" required>
                <button type="submit" name="action" value="register">Crear cuenta</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form action="PHP/login.php" method="POST">
                <h1>Iniciar Sesión</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fab fa-instagram"></i></a>
                </div>
                <span>O usa tu email y tu contraseña</span>
                <input type="email" name="login_email" placeholder="Email" required>
                <input type="password" name="login_password" placeholder="Contraseña" required>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button type="submit" name="action" value="login">Iniciar Sesión</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>¡Bienvenido!</h1>
                    <p>Dale a iniciar sesión si ya tienes una cuenta</p>
                    <button class="hidden" id="login">Iniciar Sesión</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hola, amigo!</h1>
                    <p>Dale a crear cuenta si todavía no te has creado una cuenta</p>
                    <button class="hidden" id="register">Crear cuenta</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Footer -->
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

<script>
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
</script>
</body>
</html>
