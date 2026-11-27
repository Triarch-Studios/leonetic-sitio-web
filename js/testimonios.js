/* ============================================================
   testimonios.js
   Genera las tarjetas de testimonios de clientes a partir del
   arreglo "testimonios" (definido en datos.js).
   ============================================================ */

function pintarTestimonios() {
  const contenedor = document.getElementById("lista-testimonios");
  if (!contenedor) return;

  let html = "";

  testimonios.forEach(function (t) {
    html += '<div class="tarjeta">';
    html += '  <p class="comentario">"' + t.comentario + '"</p>';
    html += '  <p class="autor">' + t.nombre + "</p>";
    html += '  <p class="equipo-cliente">' + t.equipo + "</p>";
    html += "</div>";
  });

  contenedor.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", pintarTestimonios);
