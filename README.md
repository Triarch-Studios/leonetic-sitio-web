# Leonetic — Sitio web

Sitio web del negocio **Leonetic**, dedicado a la reparación de computadores,
tablets y teléfonos. Proyecto hecho con **HTML, CSS y JavaScript** para la
materia de codificación de software.

## Páginas

- `index.html` — Inicio (portada + servicios destacados)
- `servicios.html` — Catálogo de servicios con cotización
- `celulares.html` — Celulares a la venta
- `contacto.html` — Formulario de contacto y resumen de cotización

## Características

- Varias páginas HTML enlazadas con un menú de navegación común.
- Diseño estándar (mismos colores, tipografías, botones y tarjetas) en `css/estilos.css`.
- Diseño responsivo: se adapta a celular, tablet y computador.
- Contenido generado dinámicamente con JavaScript desde arreglos de objetos
  (`js/datos.js`): catálogo de servicios y de celulares.
- Uso de `sessionStorage` para guardar el nombre del usuario y la cotización
  mientras navega por el sitio.
- Formulario de contacto con validación.
- Footer presente en todas las páginas.

## Cómo verlo

Abre `index.html` en el navegador, o levanta un servidor local:

```bash
python3 -m http.server 8777
```

Luego entra a http://localhost:8777

## Estructura

```
├── index.html
├── servicios.html
├── celulares.html
├── contacto.html
├── css/
│   └── estilos.css
├── js/
│   ├── datos.js
│   ├── comun.js
│   ├── servicios.js
│   ├── celulares.js
│   └── contacto.js
└── img/
    └── logo.png
```
