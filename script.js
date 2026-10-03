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

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "Actualmente, soy estudiante de ingeniería de sistemas en la UniEspinal y Técnica Profesional en Programación Web. Me apasiona la creación de plataformas web, especialmente el desarrollo de soluciones que sean funcionales, intuitivas y visualmente atractivas. Me considero una persona curiosa y comprometida con seguir aprendiendo y fortaleciendo mis conocimientos en programación y desarrollo de software.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "VIDEOJUEGOS",

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
  "edu.1.text":  "Formación en desarrollo y programación web, con conocimientos en HTML, CSS, JavaScript, Java, PHP y Laravel. Desarrollo habilidades en diseño de interfaces, bases de datos, lógica de programación y construcción de aplicaciones web.",

  "exp.1.title": "NarrArt",
  "exp.1.text":  "Una página web donde se da a conocer la app NarrArt, que permite escuchar y crear podcasts, leer libros, además de escuchar canciones mientras lees.",
  "exp.2.title": "Calculadora",
  "exp.2.text":  "Una calculadora simple desarrollada con JavaScript utilizando Eclipse.",

  "portfolio.title": "Proyectos",
  "project.1.title": "NarrArt",
  "project.1.text":  "HTML5, CSS, JAVASCRIPT",
  "project.2.title": "Calculadora",
  "project.2.text":  "JavaScript, CSS",
  "project.3.title": "RutaSafe",
  "project.3.text":  "Laravel 11, Leaflet, CSS",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Tienes un proyecto o una vacante? Escríbeme.",
  "contact.emailLabel":    "Correo",

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
  "about.text":           "Currently, I am a Systems Engineering student at UniEspinal and a Professional Technician in Web Programming. I am passionate about creating web platforms, especially developing functional, intuitive, and visually appealing solutions. I consider myself a curious and committed person, dedicated to continuous learning and strengthening my skills in programming and software development.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and Experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Trained in web development and programming, with knowledge in HTML, CSS, JavaScript, Java, PHP, and Laravel. Skilled in UI design, databases, programming logic, and building web applications.",

  "exp.1.title": "NarrArt",
  "exp.1.text":  "Designed and built a website showcasing the NarrArt app, which allows users to listen to and create podcasts, read books, and listen to music while reading.",
  "exp.2.title": "Calculator",
  "exp.2.text":  "Built a simple web calculator applying JavaScript programming logic within the Eclipse IDE environment.",

  "portfolio.title": "Projects",
  "project.1.title": "NarrArt",
  "project.1.text":  "HTML5, CSS, JAVASCRIPT",
  "project.2.title": "Calculator",
  "project.2.text":  "JavaScript, CSS",
  "project.3.title": "RutaSafe",
  "project.3.text":  "Laravel 11, Leaflet, CSS",

  "contact.title":         "Contact",
  "contact.intro":         "Do you have a project or an open position? Send me a message.",
  "contact.emailLabel":    "Email",

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
    } else {
      console.warn("Missing translation key:", clave);
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

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


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

  const botonIdioma = document.getElementById("btn-idioma");
  if (botonIdioma) {
    botonIdioma.addEventListener("click", cambiarIdioma);
  }
});
