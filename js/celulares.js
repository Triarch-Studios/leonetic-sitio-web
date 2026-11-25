/* ============================================================
   celulares.js
   Genera las tarjetas de celulares en venta a partir del
   arreglo "celulares" (definido en datos.js).
   ============================================================ */

function pintarCelulares() {
  const contenedor = document.getElementById("lista-celulares");
  if (!contenedor) return;

  let html = "";

  celulares.forEach(function (cel) {
    html += '<div class="tarjeta tarjeta-producto">';
    html += '  <img src="' + cel.imagen + '" alt="' + cel.nombre + '">';
    html += "  <h3>" + cel.nombre + "</h3>";
    html += "  <p>" + cel.descripcion + "</p>";
    html += '  <p class="precio">' + formatearPrecio(cel.precio) + "</p>";
    html += '  <a class="boton" href="contacto.html">Consultar</a>';
    html += "</div>";
  });

  contenedor.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", pintarCelulares);
