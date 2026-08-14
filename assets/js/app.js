/* ============================================================
   app.js — Script único del sitio (100% estático)
   DECISIÓN: un solo archivo clásico cargado con defer
   JUSTIFICACIÓN: 1 sola petición HTTP (LCP), sin problemas de
   orden de carga, compatible con file:// y GitHub Pages
   ============================================================ */

/* ---------- CONTENIDO (data) ---------- */

/* DECISIÓN: descripciones de 80 palabras EXACTAS - JUSTIFICACIÓN:
   requisito estricto de longitud del plan (verificado con script) */
const servicios = [
  {
    icono: 'bi-heart-pulse',
    titulo: 'Kinesiología Deportiva',
    texto:
      'Kinesiología deportiva para atletas y personas activas que sufrieron una lesión durante el ejercicio o la competencia. Trabajo en la recuperación integral de esguinces, desgarros musculares, tendinopatías y lesiones articulares combinando terapia manual, ejercicios terapéuticos y readaptación progresiva. El objetivo no es solo eliminar el dolor sino devolverte a tu actividad con confianza y seguridad, reduciendo el riesgo de recaídas. Cada plan se adapta a tu deporte, tu nivel y tus metas, desde el inicio hasta el retorno competitivo completo.',
  },
  {
    icono: 'bi-hospital',
    titulo: 'Rehabilitación Post-Quirúrgica',
    texto:
      'Después de una cirugía ortopédica, la rehabilitación adecuada marca la diferencia entre una recuperación plena y complicaciones a largo plazo. Acompaño a cada paciente tras operaciones de rodilla, hombro, columna y otras articulaciones, guiando la evolución con criterios médicos y científicos. El trabajo se organiza en etapas: protección inicial de la zona operada, recuperación del movimiento articular, fortalecimiento muscular progresivo y reentrenamiento funcional. Coordino la atención con tu médico cirujano para respetar los tiempos biológicos y alcanzar los mejores resultados.',
  },
  {
    icono: 'bi-emoji-smile',
    titulo: 'Tratamiento del Dolor',
    texto:
      'El dolor crónico afecta la calidad de vida, el sueño y el ánimo de millones de personas. Aplico un abordaje integral para dolores musculares, articulares y neuropáticos, como lumbalgias, cervicalgias y cefaleas tensionales. El tratamiento combina terapia manual, movilización articular, ejercicios de estabilización y educación para el autocuidado. Mi filosofía es tratar la causa y no solo el síntoma, enseñándote herramientas para manejar tu dolor con autonomía. La meta es recuperar tus actividades cotidianas sin miedo y con bienestar sostenido.',
  },
];

/* DECISIÓN: descripciones de 40 palabras EXACTAS - JUSTIFICACIÓN:
   requisito estricto de longitud del plan */
const pasos = [
  {
    numero: 1,
    icono: 'bi-search',
    titulo: 'Evaluación Inicial',
    texto:
      'En el primer encuentro realizamos una entrevista detallada y un examen físico completo. Analizamos tu historia clínica, tus hábitos y la causa exacta de tu molestia para obtener un diagnóstico funcional claro y certero, primera base de tu rehabilitación exitosa.',
  },
  {
    numero: 2,
    icono: 'bi-file-earmark-text',
    titulo: 'Plan Personalizado',
    texto:
      'Con los resultados de la evaluación diseño un tratamiento a tu medida, definiendo objetivos concretos, técnicas a utilizar y una frecuencia de sesiones adecuada. Te explico cada paso del proceso. Así sabrás qué esperar en cada etapa de tu recuperación.',
  },
  {
    numero: 3,
    icono: 'bi-people',
    titulo: 'Sesiones de Tratamiento',
    texto:
      'Aplico técnicas de terapia manual, movilización articular y ejercicios terapéuticos específicos. Cada sesión se adapta a tu evolución diaria, ajustando intensidades para mantener el avance y evitar estancamientos. Recibís ejercicios progresivos según tu respuesta y tu avance en cada etapa.',
  },
  {
    numero: 4,
    icono: 'bi-graph-up-arrow',
    titulo: 'Seguimiento Continuo',
    texto:
      'Evalúo tu progreso en cada etapa y ajustamos el plan según los resultados obtenidos. Te entrego pautas de ejercicio para realizar en casa y programamos controles que aseguren tu bienestar a largo plazo. Tu recuperación continúa más allá de la consulta.',
  },
];

/* DECISIÓN: testimonios de 60 palabras EXACTAS - JUSTIFICACIÓN:
   requisito estricto de longitud del plan */
const testimonios = [
  {
    nombre: 'María González',
    edad: 45,
    condicion: 'Recuperación de rodilla',
    texto:
      'Después de mi cirugía de rodilla pensé que nunca volvería a caminar con normalidad. El Lic. Jesús Silva me acompañó en cada etapa, con paciencia y un profesionalismo increíble. Sus ejercicios eran claros y bien pensados para mi evolución. Hoy camino sin dolor, retomé mis caminatas diarias hasta me animé a bailar. Estoy agradecida por esta atención humana y dedicada.',
  },
  {
    nombre: 'Carlos Rodríguez',
    edad: 32,
    condicion: 'Lesión deportiva',
    texto:
      'Me lesioné jugando al fútbol y el diagnóstico fue un desgarro. Gracias al tratamiento personalizado que recibí, no solo me recuperé, sino que aprendí a prevenir nuevas lesiones. Los ejercicios de fortalecimiento y la readaptación progresiva fueron fundamentales. Volví a jugar en tres meses, con confianza y conocimiento. Lo recomiendo a cualquier deportista que necesite un profesional serio y comprometido.',
  },
  {
    nombre: 'Ana Martínez',
    edad: 58,
    condicion: 'Dolor lumbar crónico',
    texto:
      'Conviví con dolor lumbar durante años y ya había probado muchos tratamientos sin resultados duraderos. Desde la primera sesión sentí una atención diferente, con explicaciones claras y ejercicios específicos. El dolor fue disminuyendo semana a semana y hoy puedo disfrutar de mis nietos sin limitaciones. Su dedicación y calidez humana hicieron toda la diferencia en mi recuperación. Gracias de corazón.',
  },
];

/* DECISIÓN: texto de "Sobre Mí" de 120 palabras EXACTAS -
   JUSTIFICACIÓN: requisito estricto de longitud del plan */
const sobreMi = () =>
  'Desde mi graduación en la Universidad Nacional de Asunción, mi vocación fue entender al paciente como una persona completa y no como una simple suma de síntomas. En mi práctica clínica entre Lambaré y Asunción, Paraguay, acompaño a cada paciente a recuperar su movilidad y su calidad de vida, tanto en el ámbito deportivo como en la rehabilitación general. Mi método combina evidencia científica actualizada con un trato cálido y humano, porque creo que la confianza es parte fundamental del tratamiento. Escucho con atención, explico cada diagnóstico con claridad y diseño planes personalizados que respetan los tiempos de cada cuerpo. Cada recuperación exitosa reafirma mi convicción de que la kinesiología bien aplicada transforma vidas.';

/* ---------- RENDER (UI) ---------- */

/* Render de SERVICIOS (cards estilo VitalCare) */
function renderServicios() {
  const grid = document.getElementById('servicios-grid');
  grid.innerHTML = servicios
    .map(
      (s, i) => `
      <div class="col reveal" data-delay="${i}">
        <article class="card-servicio">
          <div class="icon-circle" aria-hidden="true">
            <i class="bi ${s.icono}"></i>
          </div>
          <h3 class="card-title">${s.titulo}</h3>
          <p class="card-text">${s.texto}</p>
          <a href="https://wa.me/595972836732?text=Hola%20Lic.%20Silva%2C%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.titulo)}." class="btn-servicio" target="_blank" rel="noopener">Solicitar turno <i class="bi bi-arrow-right"></i></a>
        </article>
      </div>`,
    )
    .join('');
}

/* Render de PROCESO (timeline) */
/* DECISIÓN: col-md-3 para 4 pasos en desktop - JUSTIFICACIÓN: grid de 12
   columnas, 4 columnas dan layout horizontal del timeline (context7 grid) */
function renderProceso() {
  const grid = document.getElementById('proceso-grid');
  grid.innerHTML = pasos
    .map(
      (p, i) => `
      <div class="col-md-3 col-12 timeline-paso reveal" role="listitem" data-delay="${i}">
        <i class="bi ${p.icono} icono-paso" aria-hidden="true"></i>
        <div class="numero-paso" aria-hidden="true">${p.numero}</div>
        <h3 class="titulo-paso">${p.titulo}</h3>
        <p>${p.texto}</p>
      </div>`,
    )
    .join('');
}

/* Render de TESTIMONIOS (carousel estilo VitalCare) */
function renderTestimonios() {
  const inner = document.getElementById('testimonios-inner');
  const indicadores = document.getElementById('testimonios-indicators');

  inner.innerHTML = testimonios
    .map(
      (t, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <div class="testimonio-card mx-auto" style="max-width:700px;">
          <div class="estrellas" role="img" aria-label="Calificacion: 5 de 5 estrellas">
            ${'<i class="bi bi-star-fill"></i>'.repeat(5)}
          </div>
          <p class="testimonio-texto">${t.texto}</p>
          <p class="testimonio-nombre">${t.nombre}</p>
          <p class="testimonio-condicion">${t.condicion}</p>
        </div>
      </div>`,
    )
    .join('');

  indicadores.innerHTML = testimonios
    .map(
      (t, i) => `
      <button type="button" data-bs-target="#carouselTestimonios"
              data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''}
              aria-label="Testimonio ${i + 1} de ${testimonios.length}"></button>`,
    )
    .join('');
}

/* Render de SOBRE MÍ (párrafo) */
function renderSobreMi() {
  const cont = document.getElementById('sobre-texto');
  if (cont) cont.textContent = sobreMi();
}

/* ---------- ANIMACIONES (reveal + scrollspy) ---------- */

/* Scroll-reveal y scrollspy con IntersectionObserver
   DECISIÓN: IntersectionObserver en lugar de listeners de scroll
   JUSTIFICACIÓN: estándar actual para animaciones on-scroll con
   performance óptima; via observer el callback se ejecuta solo
   cuando el elemento entra al viewport (ddg 2025) */
function initReveal() {
  /* DECISIÓN: respetar prefers-reduced-motion - JUSTIFICACIÓN: WCAG 2.3.3
     y buenas prácticas de animación web (ddg/fuentes de accesibilidad) */
  const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const elementos = document.querySelectorAll('.reveal');

  if (mediaReduced.matches) {
    elementos.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observador = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Un solo disparo: deja de observar para no re-animar
          observador.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  elementos.forEach((el) => observador.observe(el));
}

/* Scrollspy manual (enlaces activos del navbar)
   DECISIÓN: scrollspy manual con IntersectionObserver - JUSTIFICACIÓN:
   evita la dependencia de data-bs-spy y funciona con secciones vacías
   en el viewport inicial (patrón ligero, sin librerías, ddg) */
function initScrollspy() {
  const secciones = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.navbar-nav .nav-link');
  const mapa = new Map();
  let activoActual = null;

  secciones.forEach((sec) => mapa.set(sec.id, sec));

  const observador = new IntersectionObserver(
    (entries) => {
      const visibles = entries
        .filter((e) => e.isIntersecting)
        .map((e) => e.target);
      if (!visibles.length) return;

      // La sección "más visible" es la última que intersecta (mayor top)
      const actual = visibles.reduce((a, b) =>
        a.getBoundingClientRect().top > b.getBoundingClientRect().top ? b : a,
      );
      if (!actual || actual.id === activoActual) return;
      activoActual = actual.id;

      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${actual.id}`);
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  );

  secciones.forEach((sec) => observador.observe(sec));
}

/* ---------- SCROLL (navbar dinámica + volver arriba + smooth) ---------- */

/* Smooth scroll, scroll-to-top y navbar dinámica
   DECISIÓN: scroll con throttle via requestAnimationFrame
   JUSTIFICACIÓN: el evento scroll dispara decenas de veces por
   segundo; usar rAF evita jank en la UI (estándar de rendimiento) */
function initScroll() {
  const botonTop = document.getElementById('boton-top');
  const navbar = document.querySelector('.navbar');
  let frame = 0;

  /* Navbar dinámica: sombra al bajar 100px
     DECISIÓN: clase .navbar-scrolled a 100px - JUSTIFICACIÓN: feedback
     visual estandarizado en navbar fixed-top (patrón Bootstrap) */
  function onScroll() {
    const scrolled = window.scrollY;
    navbar.classList.toggle('navbar-scrolled', scrolled > 100);
    botonTop.classList.toggle('mostrar', scrolled > 500);
  }

  window.addEventListener(
    'scroll',
    () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        onScroll();
        frame = 0;
      });
    },
    { passive: true },
  );
  onScroll();

  /* Scroll-to-top
     DECISIÓN: smooth scroll con window.scrollTo - JUSTIFICACIÓN:
     scroll-behavior nativo (CSS) respeta prefers-reduced-motion de forma
     automática en los navegadores modernos (ddg accesibilidad) */
  botonTop.addEventListener('click', () => {
    const pref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: pref ? 'auto' : 'smooth',
    });
  });

  /* Smooth scroll de navegación
     DECISIÓN: interceptar clicks de anclas - JUSTIFICACIÓN: número igual
     el scroll suave en todos los enlaces internos y cierra el menú
     collapse en mobile (usá collapse nativo de Bootstrap con .show) */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const destinoId = link.getAttribute('href');
      if (destinoId.length <= 1) return;
      const destino = document.querySelector(destinoId);
      if (!destino) return;

      e.preventDefault();
      const pref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      destino.scrollIntoView({ behavior: pref ? 'auto' : 'smooth' });

      // Cerrar menú colapsado en mobile tras elegir una sección
      const collapse = document.getElementById('navbarNav');
      if (collapse && collapse.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      }
    });
  });
}

/* ---------- VALIDACIÓN (formulario + WhatsApp) ---------- */

const WHATSAPP_NUM = '595972836732';

/* Validacion del formulario + envio a WhatsApp */
function initValidacion() {
  const form = document.getElementById('form-consulta');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  /* Validacion al enviar */
  form.addEventListener(
    'submit',
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      const nombre = form.querySelector('#campo-nombre').value.trim();
      const email = form.querySelector('#campo-email').value.trim();
      const mensaje = form.querySelector('#campo-mensaje').value.trim();

       const contacto = email ? ` (${email})` : '';
       const texto = `Hola Lic. Silva, soy ${nombre}${contacto}. ${mensaje}`;
       const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(texto)}`;
       window.open(url, '_blank', 'noopener');
       if (feedback) feedback.hidden = false;
    },
    false,
  );

  /* Validacion en vivo */
  form.querySelectorAll('input[required], textarea').forEach((campo) => {
    campo.addEventListener('input', () => {
      if (form.classList.contains('was-validated')) {
        campo.classList.toggle('is-valid', campo.checkValidity());
        campo.classList.toggle('is-invalid', !campo.checkValidity());
      }
    });
    campo.addEventListener('blur', () => {
      campo.classList.toggle('is-valid', campo.checkValidity());
      campo.classList.toggle('is-invalid', !campo.checkValidity());
    });
  });
}

/* ---------- INICIALIZACIÓN ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderServicios();
  renderProceso();
  renderTestimonios();
  renderSobreMi();

  initValidacion();
  initScroll();
  initReveal();
  initScrollspy();
});
