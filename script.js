/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrolladora Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Actualmente, soy estudiante de Ingeniería de Sistemas en UniEspinal y Técnica Profesional en Programación Web. Me apasiona la creación de plataformas web, especialmente el desarrollo de soluciones funcionales, intuitivas y visualmente atractivas. Me considero una persona curiosa y comprometida con el aprendizaje continuo y el fortalecimiento de mis conocimientos en programación y desarrollo de software.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierta a prácticas profesionales",
  "about.interestsTitle": "Intereses",

  "interest.1": "DESARROLLO WEB",
  "interest.2": "DISEÑO UI/UX",
  "interest.3": "BASES DE DATOS",
  "interest.4": "NUEVAS TECNOLOGÍAS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Formación enfocada en el desarrollo de software web con tecnologías como HTML, CSS, JavaScript, Java, PHP y Laravel. Competencias en diseño de interfaces, gestión de bases de datos y lógica de programación.",

  "exp.1.title": "NarrArt - Plataforma Web",
  "exp.1.text":  "Desarrollo de sitio web promocional para la aplicación NarrArt, integrando funcionalidades para la lectura de libros, reproducción de música y gestión de podcasts.",
  "exp.2.title": "Calculadora Web",
  "exp.2.text":  "Construcción de una aplicación de calculadora lógica e interactiva utilizando JavaScript y el entorno de desarrollo Eclipse.",

  "portfolio.title": "Proyectos",
  "project.1.title": "NarrArt",
  "project.1.text":  "HTML5, CSS3, JavaScript",
  "project.2.title": "Calculadora",
  "project.2.text":  "JavaScript, CSS3",
  "project.3.title": "RutaSafe",
  "project.3.text":  "Laravel 11, Leaflet, CSS",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto o una oportunidad laboral? ¡Escríbeme!",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Perfil profesional",

  "footer.note": "Sara Nahany Marrugo Aroca · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "I am a Systems Engineering student at UniEspinal and a Professional Technician in Web Programming. Passionate about building web platforms, focusing on functional, intuitive, and engaging user experiences. Fast learner and committed to strengthening software engineering practices.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (Native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internship opportunities",
  "about.interestsTitle": "Interests",

  "interest.1": "WEB DEVELOPMENT",
  "interest.2": "UI/UX DESIGN",
  "interest.3": "DATABASES",
  "interest.4": "NEW TECH STACKS",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education & Experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Practical training in web application development covering HTML, CSS, JavaScript, Java, PHP, and Laravel. Strong foundation in interface design, database management, and business logic.",

  "exp.1.title": "NarrArt Web Platform",
  "exp.1.text":  "Designed and deployed a promotional web platform for NarrArt, enabling podcast creation, book reading, and integrated background audio playback.",
  "exp.2.title": "Web Calculator App",
  "exp.2.text":  "Engineered an interactive web calculator using vanilla JavaScript algorithms developed inside the Eclipse IDE environment.",

  "portfolio.title": "Projects",
  "project.1.title": "NarrArt",
  "project.1.text":  "HTML5, CSS3, JavaScript",
  "project.2.title": "Calculator",
  "project.2.text":  "JavaScript, CSS3",
  "project.3.title": "RutaSafe",
  "project.3.text":  "Laravel 11, Leaflet, CSS",

  "contact.title":         "Contact",
  "contact.intro":         "Interested in working together or have an open position? Feel free to reach out.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "Professional Profile",

  "footer.note": "Sara Nahany Marrugo Aroca · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

window.cambiarIdioma = function() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
};


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

window.mostrarOcultarMenu = function() {
  const nav = document.getElementById("nav");
  if (nav) nav.classList.toggle("responsive");
};

window.cerrarMenu = function() {
  const nav = document.getElementById("nav");
  if (nav) nav.classList.remove("responsive");
};


/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
