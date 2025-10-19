// ----------------------------
// funciones.js
// Funciones para la Feria de Aventura
// ----------------------------

// 1. Index.html → alerta de bienvenida
function bienvenida() {
    alert("¡Bienvenido a la Feria de Aventura y Montañismo!");
}

// 2. About.html → mostrar/ocultar secciones de historia
function toggleSeccion(id) {
    let sec = document.getElementById(id);
    if (sec.style.display === "none") {
        sec.style.display = "block";
    } else {
        sec.style.display = "none";
    }
}

// 3. Exhibitors.html → mostrar mensaje al hacer clic en expositor
function mostrarExpositor(nombre) {
    alert("¡Visita el stand de " + nombre + " y descubre sus aventuras!");
}

// 4. Schedule.html → resaltar la actividad seleccionada
function resaltarActividad(id) {
    let todas = document.getElementsByClassName("actividad");
    for (let i = 0; i < todas.length; i++) {
        todas[i].style.backgroundColor = "";
    }
    document.getElementById(id).style.backgroundColor = "#EFD9C1"; // un tono suave de tu paleta
}

// 5. Contact.html → validar formulario
function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    if(nombre === "" || email === "") {
        alert("Por favor completa todos los campos");
        return false; // evita enviar el formulario
    }
    return true;
}