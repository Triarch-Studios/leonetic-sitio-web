/* ============================================================
   contacto.js
   - Muestra el resumen de la cotización guardada en
     sessionStorage.
   - Valida el formulario y guarda el nombre del usuario.
   ============================================================ */

// Muestra la lista de servicios que el usuario agregó
function mostrarResumen() {
  const zona = document.getElementById("resumen-cotizacion");
  if (!zona) return;

  const lista = obtenerCotizacion();

  if (lista.length === 0) {
    zona.innerHTML =
      "<p>Aún no has agregado servicios. Ve a <a href='servicios.html'>Servicios</a> para cotizar.</p>";
    return;
  }

  let total = 0;
  let html = "<h3>Tu cotización</h3><ul>";

  lista.forEach(function (item) {
    total += item.precio;
    html += "<li><span>" + item.nombre + "</span><span>" + formatearPrecio(item.precio) + "</span></li>";
  });

  html += "</ul>";
  html += "<p class='precio' style='margin-top:1rem'>Total: " + formatearPrecio(total) + "</p>";
  html += "<button class='boton boton-secundario' onclick='limpiar()'>Vaciar cotización</button>";

  zona.innerHTML = html;
}

function limpiar() {
  vaciarCotizacion();
  mostrarResumen();
}

// Validación y envío del formulario
function enviarFormulario(evento) {
  evento.preventDefault(); // evita que la página se recargue

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Guardamos el nombre en sessionStorage para saludarlo en otras páginas
  guardarNombre(nombre);

  // Mostramos el mensaje de éxito
  const ok = document.getElementById("mensaje-ok");
  ok.textContent = "¡Gracias, " + nombre + "! Recibimos tu mensaje y te contactaremos pronto.";
  ok.style.display = "block";

  // Limpiamos el formulario
  document.getElementById("form-contacto").reset();
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarResumen();

  const form = document.getElementById("form-contacto");
  if (form) {
    form.addEventListener("submit", enviarFormulario);
  }
});
