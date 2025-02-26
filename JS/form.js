const form = document.getElementById('form-contacto');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
    alert('Por favor, completa todos los campos.');
    return;
}
  // Validación básica de email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
    alert('Por favor, introduce un email válido.');
    return;
}
    alert('Formulario enviado correctamente (simulado)!');
    form.reset();
});