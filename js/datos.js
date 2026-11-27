/* ============================================================
   datos.js
   Arreglos de objetos que usamos para generar el contenido
   dinámicamente con JavaScript (catálogo de servicios y de
   celulares). Separar los datos del HTML hace el sitio más
   fácil de mantener.
   ============================================================ */

// Catálogo de servicios de reparación de Leonetic
const servicios = [
  {
    id: "computadores",
    nombre: "Computadores y portátiles",
    descripcion: "Diagnóstico, mantenimiento y reparación de equipos de escritorio y portátiles.",
    reparaciones: [
      "Cambio de pantalla y bisagras",
      "Teclado y touchpad",
      "Batería y cargador",
      "Cambio a disco SSD y ampliación de RAM",
      "Formateo e instalación de sistema operativo",
    ],
    desde: 40000,
  },
  {
    id: "tablets",
    nombre: "Tablets",
    descripcion: "Reparamos tu tablet con repuestos de calidad y garantía.",
    reparaciones: [
      "Cambio de pantalla y táctil",
      "Reemplazo de batería",
      "Puerto de carga",
      "Botones y conectores",
    ],
    desde: 50000,
  },
  {
    id: "telefonos",
    nombre: "Teléfonos",
    descripcion: "Pantallas, baterías y daños por líquido en todas las marcas.",
    reparaciones: [
      "Cambio de pantalla y táctil",
      "Reemplazo de batería",
      "Puerto de carga",
      "Cámaras",
      "Daño por líquido",
    ],
    desde: 45000,
  },
  {
    id: "empresas",
    nombre: "Soporte para empresas",
    descripcion: "Mantenimiento preventivo y soporte para tu negocio.",
    reparaciones: [
      "Visitas a tu local",
      "Soporte remoto",
      "Contratos de mantenimiento",
    ],
    desde: 80000,
  },
];

// Catálogo de celulares a la venta
const celulares = [
  {
    id: "cel1",
    nombre: "Samsung Galaxy A15",
    descripcion: "128 GB · 6 GB RAM · Pantalla AMOLED",
    precio: 650000,
    imagen: "img/galaxy-a15.jpg",
  },
  {
    id: "cel2",
    nombre: "Xiaomi Redmi 13C",
    descripcion: "256 GB · 8 GB RAM · Cámara 50 MP",
    precio: 580000,
    imagen: "img/redmi-13c.jpg",
  },
  {
    id: "cel3",
    nombre: "Motorola Moto G24",
    descripcion: "128 GB · 4 GB RAM · Batería 5000 mAh",
    precio: 520000,
    imagen: "img/moto-g24.jpg",
  },
  {
    id: "cel4",
    nombre: "iPhone 11 (reacondicionado)",
    descripcion: "64 GB · Garantía 6 meses",
    precio: 1150000,
    imagen: "img/iphone-11.jpg",
  },
];

// Testimonios de clientes (se muestran con JavaScript en el inicio)
const testimonios = [
  {
    nombre: "Carolina Ríos",
    equipo: "Portátil HP",
    comentario:
      "Me cambiaron la pantalla el mismo día y quedó como nuevo. Muy honestos con el precio.",
  },
  {
    nombre: "Andrés Gómez",
    equipo: "iPhone 11",
    comentario:
      "Le hicieron mantenimiento y cambio de batería. Excelente atención y garantía por escrito.",
  },
  {
    nombre: "Laura Martínez",
    equipo: "Tablet Samsung",
    comentario:
      "Pensé que ya no servía y la recuperaron. Los recomiendo totalmente.",
  },
];

// Función para dar formato de precio en pesos colombianos
function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CO");
}
