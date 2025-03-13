<?php
session_start();
include('config.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim($_POST['nombre']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    
    // Validar campos
    if (empty($nombre) || empty($email) || empty($password)) {
        $_SESSION['error'] = "Todos los campos son obligatorios";
        header("Location: ../inicio.php");
        exit;
    }
    
    // Hash de contraseña
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    
    try {
        // Verificar si el email existe
        $sql = "SELECT id FROM usuarios WHERE email = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$email]);
        
        if ($stmt->rowCount() > 0) {
            $_SESSION['error'] = "El email ya está registrado";
            header("Location: ../inicio.php");
            exit;
        }
        
        // Insertar nuevo usuario
        $sql = "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nombre, $email, $password_hash]);
        
        $_SESSION['exito'] = "Registro exitoso! Por favor inicia sesión";
        header("Location: ../inicio.php");
        
    } catch (PDOException $e) {
        $_SESSION['error'] = "Error en el registro: " . $e->getMessage();
        header("Location: ../inicio.php");
    }
}
?>