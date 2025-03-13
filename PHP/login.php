<?php
session_start();
include('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['login_email']);
    $password = trim($_POST['login_password']);
    
    try {
        $sql = "SELECT * FROM usuarios WHERE email = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$email]);
        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($usuario && password_verify($password, $usuario['password'])) {
            $_SESSION['usuario'] = [
                'id' => $usuario['id'],
                'nombre' => $usuario['nombre'],
                'email' => $usuario['email']
            ];
            header("Location: ../bienvenido.php");
            exit;
        } else {
            $_SESSION['error'] = "Email o contraseña incorrectos";
            header("Location: ../inicio.php");
        }
    } catch (PDOException $e) {
        $_SESSION['error'] = "Error al iniciar sesión: " . $e->getMessage();
        header("Location: ../inicio.php");
    }
}
?>