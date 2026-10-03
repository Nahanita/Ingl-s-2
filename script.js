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
  "about.text":           "Estudiante de Ingeniería de Sistemas en UniEspinal y Técnica Profesional en Programación Web. Apasionada por el desarrollo de plataformas web funcionales, intuitivas y atractivas, comprometida con el aprendizaje continuo en desarrollo de software.",
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
  "edu.1.text":  "Formación en desarrollo web con HTML, CSS, JavaScript, Java, PHP y Laravel. Competencias en diseño de interfaces y gestión de bases de datos.",

  "exp.1.title": "NarrArt - Plataforma Web",
  "exp.1.text":  "Desarrollo de sitio web para la aplicación NarrArt, integrando lectura de libros, música y podcasts.",
  "exp.2.title": "Calculadora Web",
  "exp.2.text":  "Construcción de una aplicación de calculadora interactiva utilizando JavaScript en Eclipse.",

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
  "about.text":           "Currently, I am a Systems Engineering student at UniEspinal and a Professional Technician in Web Programming. I am passionate about building web platforms, focusing on functional, intuitive, and visually engaging solutions. I consider myself a curious person, committed to continuous learning and strengthening my software engineering and programming skills.",
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
  "edu.1.text":  "Practical training in web development covering HTML, CSS, JavaScript, Java, PHP, and Laravel.",

  "exp.1.title": "NarrArt Web Platform",
  "exp.1.text":  "Designed and deployed a promotional web platform for NarrArt, enabling podcast creation and audio playback.",
  "exp.2.title": "Web Calculator App",
  "exp.2.text":  "Engineered an interactive web calculator using vanilla JavaScript developed inside the Eclipse IDE environment.",

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


/* ------------------------------------------------------------
   3. LANGUAGE SWITCHER
   ------------------------------------------------------------ */
const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const clave = el.getAttribute("data-i18n");
    if (textos[clave] !== undefined) el.textContent = textos[clave];
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "EN" : "ES";
    boton.innerHTML = `<span class="idioma-activo">${idioma.toUpperCase()}</span><span class="idioma-sep">/</span><span class="idioma-inactivo">${otro}</span>`;
  }

  idiomaActual = idioma;
}

window.cambiarIdioma = () => aplicarIdioma(idiomaActual === "es" ? "en" : "es");


/* ------------------------------------------------------------
   4. RESPONSIVE MENU
   ------------------------------------------------------------ */
window.mostrarOcultarMenu = () => document.getElementById("nav")?.classList.toggle("responsive");
window.cerrarMenu = () => document.getElementById("nav")?.classList.remove("responsive");


/* ------------------------------------------------------------
   5. SKILL BARS
   ------------------------------------------------------------ */
function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = `${porcentaje}%`;
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = `${porcentaje}%`;
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


/* ------------------------------------------------------------
   6. START
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
