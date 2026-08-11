# FISIO JESUS SILVA · Lic. Jesús Silva

**Landing page institucional — Kinesiología y Fisioterapia · Lambaré, Paraguay**

Desarrollé esta landing page para el **Lic. Jesús Silva**, especialista en kinesiología deportiva. El sitio presenta los servicios profesionales y facilita la solicitud de turnos a través de WhatsApp, de acuerdo con un modelo de atención a domicilio en **Lambaré (Paraguay)** y labor en el **Hospital de Clínicas de Asunción**.

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Bootstrap%205.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5.3">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20desarrollo-1565C0?style=for-the-badge" alt="Estado: en desarrollo">
  <img src="https://img.shields.io/badge/SEO-Optimizado-1565C0?style=for-the-badge" alt="SEO optimizado">
  <img src="https://img.shields.io/badge/Accesibilidad-WCAG%20AA-1565C0?style=for-the-badge" alt="Accesibilidad WCAG AA">
  <img src="https://img.shields.io/github/repo-size/rodrigoangeloni/jesussilva?style=for-the-badge&label=Tama%C3%B1o%20repo&color=1565C0" alt="Tamaño del repositorio">
  <img src="https://img.shields.io/github/last-commit/rodrigoangeloni/jesussilva?style=for-the-badge&label=%C3%9Altima%20publicaci%C3%B3n&color=1565C0" alt="Última publicación">
</p>

---

## Tabla de contenidos

1. [Descripción del proyecto](#-descripción-del-proyecto)
2. [Características](#-características)
3. [Tecnologías](#-tecnologías)
4. [Estructura del proyecto](#-estructura-del-proyecto)
5. [Puesta en marcha](#-puesta-en-marcha)
6. [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
7. [Autor](#-autor)
8. [Licencia](#-licencia)

## 📋 Descripción del proyecto

Concibí FISIO JESUS SILVA como una landing page institucional orientada a la captación de pacientes. Organicé el sitio en áreas de tratamiento (kinesiología deportiva, rehabilitación post-quirúrgica y tratamiento del dolor), trayectoria profesional, método de trabajo y testimonios de pacientes, e integré llamadas a la acción que derivan en conversaciones directas por WhatsApp.

Opté por un entorno de **sitio estático puro** (HTML, CSS y JavaScript vanilla, sin frameworks de runtime ni proceso de compilación), con el objetivo de garantizar tiempos de carga óptimos, facilitar el mantenimiento y permitir el despliegue inmediato en cualquier hosting estático, incluido GitHub Pages.

## ✨ Características

| | |
|---|---|
| 🧩 | **Ocho secciones** — Estructuré una barra de navegación fija, portada, servicios, perfil profesional, método de trabajo, testimonios, contacto y pie de página. |
| 📦 | **Contenido escalable** — Centralicé servicios, pasos y testimonios en datos estructurados; es posible incorporar nuevos ítems sin modificar el HTML. |
| ⚡ | **Rendimiento optimizado** — Apliqué `preload` y `fetchpriority="high"` a la imagen principal (LCP), `decoding="async"`, `preconnect` para Google Fonts y un único script con `defer`. |
| 🖼️ | **Imágenes optimizadas** — Utilicé el formato WebP y declaré las dimensiones en el HTML (`width`/`height`) para prevenir el desplazamiento de layout. |
| 🎬 | **Animación en scroll** — Implementé un revelado progresivo mediante `IntersectionObserver`, sin librerías externas. |
| 🧭 | **Navegación activa** — Desarrollé un scrollspy manual que resalta la sección visible en el menú. |
| 📱 | **Diseño responsable** — Aseguré la compatibilidad con dispositivos móviles, tabletas y escritorio mediante un enfoque mobile-first. |
| ♿ | **Accesibilidad** — Incorporé pautas WCAG: respeto por `prefers-reduced-motion`, etiquetas ARIA, `focus-visible` y contraste AA. |
| 🚀 | **Optimización para buscadores** — Empleé semántica HTML5, metadatos descriptivos y rutas relativas para el despliegue bajo subdirectorio. |
| 💬 | **Integración con WhatsApp** — Configuré botones con mensajes predefinidos y un formulario que compone el mensaje automáticamente. |

## 🛠️ Tecnologías

| Tecnología | Función |
|---|---|
| <img src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white" width="110"> | Estructura semántica de las secciones. |
| <img src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white" width="100"> | Estilos organizados en cuatro archivos por responsabilidad. |
| <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black" width="100"> | Render dinámico, validación de formularios y animaciones. |
| <img src="https://img.shields.io/badge/-Bootstrap%205.3-7952B3?logo=bootstrap&logoColor=white" width="140"> | Sistema de grillas, barra de navegación, carrusel y formularios. |
| <img src="https://img.shields.io/badge/-Bootstrap%20Icons-7952B3?logo=bootstrap&logoColor=white" width="140"> | Iconografía de servicios, credenciales y contacto. |

**Tipografía:** Montserrat (títulos) y Open Sans (cuerpo), mediante Google Fonts.  
**Paleta cromática:** `#1565C0` (primario) · `#0D47A1` (interacción) · `#42A5F5` (secundario) · `#F5A623` (acento) · fondo blanco.

## 📁 Estructura del proyecto

```
landing-kinesio/
├─ index.html                      # Ocho secciones, rutas relativas, un único script defer
├─ .gitignore                      # Exclusiones de control de versiones
├─ assets/
│  ├─ css/
│  │  ├─ variables.css             # Diseño-tokens: paleta, tipografías y medidas
│  │  ├─ base.css                  # Estilos globales y tipografía
│  │  ├─ components.css            # Navegación, portada, tarjetas, carrusel, formulario y pie
│  │  └─ effects.css               # Animaciones, transiciones y prefers-reduced-motion
│  ├─ js/
│  │  └─ app.js                    # Script único: datos + render + animaciones + validación
│  └─ img/                         # Fotografías optimizadas en formato WebP
└─ README.md                       # Documentación del proyecto
```

## ▶️ Puesta en marcha

### Requisitos

- Navegador web actualizado (Chrome, Edge, Firefox o Safari).
- No requiere dependencias de ejecución ni proceso de compilación.

### Ejecución local

Dado que el sitio es estático, el archivo `index.html` puede abrirse directamente desde el navegador. Para un entorno de desarrollo con servidor local, se recomienda:

```bash
# Servidor HTTP ligero con Python
python -m http.server 8080

# Alternativa con Node.js
npx serve .
```

La aplicación queda disponible en `http://localhost:8080`.

### Configuración

Los datos de contacto y los mensajes de WhatsApp se centralizan en `assets/js/app.js` (constante `WHATSAPP_NUM` y referencias en el HTML). Para personalizar el sitio, se modifican dichos valores y se reemplazan las imágenes de `assets/img/`.

## 🚀 Despliegue en GitHub Pages

Configuré el sitio para su publicación mediante GitHub Pages (opción *Deploy from a branch*), sin pasos de compilación. El procedimiento es el siguiente:

1. Publicar el contenido de la carpeta en la rama `main` del repositorio.
2. Acceder a **Settings → Pages → Source → Deploy from a branch**.
3. Seleccionar la rama `main` y la carpeta raíz (`/`).
4. Guardar. El sitio se publica automáticamente en:

```
https://rodrigoangeloni.github.io/jesussilva/
```

> Todos los recursos emplean rutas relativas (`./assets/...`), por lo que el sitio opera correctamente bajo subdirectorio.

## 👨‍💻 Autor

El diseño, el desarrollo y la documentación de este proyecto fueron realizados por mí, **Rodrigo Angeloni** (alias **RoanDev**).

| | |
|---|---|
| **Perfil profesional** | [RoanDev](https://github.com/rodrigoangeloni) — Rodrigo Angeloni |
| **Repositorio** | [rodrigoangeloni/jesussilva](https://github.com/rodrigoangeloni/jesussilva) |
| **Sitio publicado** | [rodrigoangeloni.github.io/jesussilva](https://rodrigoangeloni.github.io/jesussilva) |

<p align="center">
  <a href="https://github.com/rodrigoangeloni">
    <img src="https://img.shields.io/badge/GitHub%20de%20RoanDev-rodrigoangeloni-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub de RoanDev">
  </a>
</p>

## 📄 Licencia

© 2026 Lic. Jesús Silva — FISIO JESUS SILVA. Todos los derechos reservados.  
La autoría del desarrollo corresponde a [RoanDev](https://github.com/rodrigoangeloni).