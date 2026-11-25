/* ============================================================
   comun.js
   Código que se usa en TODAS las páginas:
   - Menú hamburguesa para celular.
   - Año automático del footer.
   - Saludo con el nombre del usuario guardado en sessionStorage.
   - Funciones para manejar la "cotización" (lista de servicios
     que el usuario va agregando) usando sessionStorage.
   ============================================================ */

// ---- Menú hamburguesa (abrir / cerrar en celular) ----
function alternarMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("abierto");
  }
}

// ---- Año automático en el footer ----
document.addEventListener("DOMContentLoaded", function () {
  const anio = document.getElementById("anio");
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }

  // Mostrar saludo si ya guardamos el nombre antes
  mostrarSaludo();
});

/* ============================================================
   sessionStorage: nombre del usuario
   Guardamos el nombre cuando el usuario llena el formulario y
   lo recuperamos en otras páginas mientras navega.
   ============================================================ */
function guardarNombre(nombre) {
  sessionStorage.setItem("nombreUsuario", nombre);
}

function mostrarSaludo() {
  const nombre = sessionStorage.getItem("nombreUsuario");
  const zona = document.getElementById("saludo");
  if (zona && nombre) {
    zona.textContent = "¡Hola de nuevo, " + nombre + "!";
    zona.style.display = "inline-block";
  }
}

/* ============================================================
   sessionStorage: cotización (lista de servicios elegidos)
   Se guarda como texto JSON porque sessionStorage solo
   guarda cadenas de texto.
   ============================================================ */
function obtenerCotizacion() {
  const guardado = sessionStorage.getItem("cotizacion");
  return guardado ? JSON.parse(guardado) : [];
}

function agregarACotizacion(item) {
  const lista = obtenerCotizacion();
  lista.push(item);
  sessionStorage.setItem("cotizacion", JSON.stringify(lista));
  actualizarContador();
  alert('Agregaste "' + item.nombre + '" a tu cotización.');
}

function vaciarCotizacion() {
  sessionStorage.removeItem("cotizacion");
  actualizarContador();
}

// Muestra cuántos servicios lleva el usuario (en el menú)
function actualizarContador() {
  const contador = document.getElementById("contador");
  if (contador) {
    const total = obtenerCotizacion().length;
    contador.textContent = total;
    contador.style.display = total > 0 ? "inline-block" : "none";
  }
}

// Actualizar el contador al cargar cualquier página
document.addEventListener("DOMContentLoaded", actualizarContador);
