// Función para saludar al usuario
function saludarUsuario() {
    var nombre = prompt("Por favor, introduce tu nombre:");
    if (nombre !== null) {
        alert("¡Hola, " + nombre + "! Bienvenido a nuestra página web.");
    }
}

// Función para mostrar la fecha actual
function mostrarFecha() {
    var fecha = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    alert("Hoy es " + fecha.toLocaleDateString('es-ES', options));
}

// Función para validar un formulario simple
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    return true;
}
