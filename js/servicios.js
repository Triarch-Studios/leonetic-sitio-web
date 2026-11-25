/* ============================================================
   servicios.js
   Genera las tarjetas de servicios dinámicamente a partir del
   arreglo "servicios" (definido en datos.js) y las inserta en
   el HTML. También conecta el botón "Agregar a cotización".
   ============================================================ */

function pintarServicios(idContenedor, conBoton) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  let html = "";

  // Recorremos el arreglo de objetos y construimos el HTML
  servicios.forEach(function (s) {
    html += '<div class="tarjeta">';
    html += '  <div class="badge">' + s.nombre.charAt(0) + "</div>";
    html += "  <h3>" + s.nombre + "</h3>";
    html += "  <p>" + s.descripcion + "</p>";
    html += "  <ul>";
    s.reparaciones.forEach(function (r) {
      html += "<li>" + r + "</li>";
    });
    html += "  </ul>";
    html += '  <p class="precio">Desde ' + formatearPrecio(s.desde) + "</p>";

    // En la página de servicios mostramos el botón de cotización
    if (conBoton) {
      html +=
        '  <button class="boton" onclick="pedirCotizacion(\'' +
        s.id +
        "')\">Agregar a cotización</button>";
    }
    html += "</div>";
  });

  contenedor.innerHTML = html;
}

// Busca el servicio por id y lo agrega a sessionStorage
function pedirCotizacion(id) {
  const servicio = servicios.find(function (s) {
    return s.id === id;
  });
  if (servicio) {
    agregarACotizacion({ nombre: servicio.nombre, precio: servicio.desde });
  }
}
