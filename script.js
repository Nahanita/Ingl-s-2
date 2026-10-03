```javascript
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
  "about.text":           "[Actualmente, soy estudiante de ingeniería de sistemas en la UniEspinal y Técnica Profesional en Programación Web. Me apasiona la creación de plataformas web, especialmente el desarrollo de soluciones que sean funcionales, intuitivas y visualmente atractivas. Me considero una persona curiosa, curiosa y comrpometida con seguir aprendiendo y fortaleciendo mis conocimientos en programación y desarrollo de software.]",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "[Espinal], Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés ([B1])",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": " ",
  "interest.2": " ",
  "interest.3": " ",
  "interest.4": " ",

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
  "edu.1.text":  "[Formación en desarrollo y programación web, con conocimientos en HTML, CSS, JavaScript, Java, PHP y Laravel. Desarrollo habilidades en diseño de interfaces, bases de datos, lógica de programación y construcción de aplicaciones web.]",
  "edu.2.text":  " ",

  "exp.1.title": "[NarrArt]",
  "exp.1.text":  "[Una página web donde se da a conocer la app NarrArt, que permite escuchar y crear podcast, leer libros, ademas de escuchar canciones mientras  lees]",
  "exp.2.title": "[Calculadora]",
  "exp.2.text":  "[Una calculadora simple, con java script. Usando Eclipse]",

  "portfolio.title": "Proyectos",
  "project.1.title": "[NarrArt]",
  "project.1.text":  "[HTML5, CSS, JAVASCRIPT]",
  "project.2.title": "[Calculadora]",
  "project.2.text":  "[JavaScript, CSS]",
  "project.3.title": "[RutaSafe]",
  "project.3.text":  "[Laravel 11, Leaflet, CSS]",

  "contact.title":         "Contacto",
  "contact.intro":         "[¿Tienes un proyecto o una vacante? Escríbeme.]",
  "contact.emailLabel":    "Correo",

  "footer.note": "[Sara Nahany Marrugo Aroca] · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
```javascript
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT ME",
  "nav.skills":    "SKILLS",
  "nav.resume":    "EDUCATION",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "Currently, I am a Systems Engineering student at UniEspinal and a Professional Technician in Web Programming. I am passionate about creating web platforms, especially developing solutions that are functional, intuitive, and visually appealing. I consider myself a curious and committed person who is constantly learning and strengthening my knowledge of programming and software development.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation": "[Espinal], Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": " ",
  "interest.2": " ",
  "interest.3": " ",
  "interest.4": " ",

  "skills.title":        "Skills",
  "skills.technical":    "Technical Skills",
  "skills.professional": "Professional Skills",
  "skill.support":       "User Support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem Solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and Experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Training in web development and programming, with knowledge of HTML, CSS, JavaScript, Java, PHP, and Laravel. I develop skills in interface design, databases, programming logic, and web application development.",
  "edu.2.text":  " ",

  "exp.1.title": "[NarrArt]",
  "exp.1.text":  "A website created to showcase the NarrArt app, which allows users to listen to and create podcasts, read books, and listen to songs while reading.",
  "exp.2.title": "[Calculator]",
  "exp.2.text":  "A simple calculator developed with JavaScript using Eclipse.",

  "portfolio.title": "Projects",
  "project.1.title": "[NarrArt]",
  "project.1.text":  "[HTML5, CSS, JAVASCRIPT]",
  "project.2.title": "[Calculator]",
  "project.2.text":  "[JavaScript, CSS]",
  "project.3.title": "[RutaSafe]",
  "project.3.text":  "[Laravel 11, Leaflet, CSS]",

  "contact.title":         "Contact",
  "contact.intro":         "Do you have a project or a job opportunity? Feel free to contact me.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "[Your professional profile]",

  "footer.note": "Sara Nahany Marrugo Aroca · Professional Technician in Web Programming · UniEspinal"
};


  


/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = {
  es: ES,
  en: EN
};

let idiomaActual = "es";


function aplicarIdioma(idioma) {

  const textos = DICCIONARIOS[idioma];

  if (!textos) {
    console.error("Idioma no encontrado:", idioma);
    return;
  }

  // Cambiar todos los textos que tengan data-i18n
  const elementos = document.querySelectorAll("[data-i18n]");

  elementos.forEach(elemento => {

    const clave = elemento.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(textos, clave)) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }

  });


  // Cambiar el idioma del documento
  document.documentElement.lang = idioma;


  // Actualizar el botón ES / EN
  const boton = document.getElementById("btn-idioma");

  if (boton) {

    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' +
      idioma.toUpperCase() +
      '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' +
      otro.toUpperCase() +
      '</span>';

    boton.setAttribute(
      "aria-label",
      idioma === "es"
        ? "Switch to English"
        : "Cambiar a español"
    );
  }


  // Guardar idioma actual
  idiomaActual = idioma;
}


/* ------------------------------------------------------------
   CHANGE LANGUAGE
   ------------------------------------------------------------ */

function cambiarIdioma() {

  if (idiomaActual === "es") {
    aplicarIdioma("en");
  } else {
    aplicarIdioma("es");
  }

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

    const porcentaje =
      barra.getAttribute("data-percent") || "0";

    barra.style.width = porcentaje + "%";

    const etiqueta = barra.querySelector("span");

    if (etiqueta) {
      etiqueta.textContent = porcentaje + "%";
    }
  };


  if (!("IntersectionObserver" in window)) {

    barras.forEach(mostrar);

    return;
  }


  const observador = new IntersectionObserver(
    (entradas, obs) => {

      entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

          mostrar(entrada.target);

          obs.unobserve(entrada.target);
        }

      });

    },
    {
      threshold: 0.4
    }
  );


  barras.forEach(barra => {
    observador.observe(barra);
  });

}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  aplicarIdioma("es");

  animarHabilidades();


  // Conectar el botón de idioma también mediante JavaScript
  const botonIdioma = document.getElementById("btn-idioma");

  if (botonIdioma) {

    botonIdioma.addEventListener("click", cambiarIdioma);

  }

});
```
