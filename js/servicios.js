/* ============================================================
   servicios.js
   Genera las tarjetas de servicios dinámicamente a partir del
   arreglo "servicios" (definido en datos.js) y las inserta en
   el HTML. También conecta el botón "Agregar a cotización".
   ============================================================ */

// Iconos SVG minimalistas (hechos a mano con líneas) para cada servicio
function iconoServicio(id) {
  const svgs = {
    // Laptop
    computadores:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="11" rx="1"/><path d="M2 20h20"/></svg>',
    // Tablet
    tablets:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg>',
    // Teléfono
    telefonos:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>',
    // Edificio (empresas)
    empresas:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><path d="M3 21h18"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>',
  };
  return svgs[id] || "";
}

function pintarServicios(idContenedor, conBoton) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  let html = "";

  // Recorremos el arreglo de objetos y construimos el HTML
  servicios.forEach(function (s) {
    html += '<div class="tarjeta">';
    html += '  <div class="icono-svg">' + iconoServicio(s.id) + "</div>";
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
