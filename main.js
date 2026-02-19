(function () {
  'use strict';

  // Translations
  var translations = {
    es: {
      'lang.current': 'ES',
      'nav.services': 'Servicios',
      'nav.tech': 'Tecnologías',
      'nav.about': 'Nosotros',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'hero.title': 'Desarrollo que impulsa tu negocio',
      'hero.lead': 'Bliim es una empresa de desarrollo con servicios al cliente y servicios administrativos. Construimos soluciones digitales y gestionamos la operación para que te enfoques en crecer.',
      'hero.cta': 'Ver servicios',
      'services.title': 'Nuestros servicios',
      'services.intro': 'Combinamos desarrollo de software con atención al cliente y soporte administrativo para ofrecer una propuesta integral.',
      'services.client.title': 'Servicios al cliente',
      'services.client.text': 'Atención, soporte y experiencia de usuario. Gestionamos la relación con tus clientes para que tu producto o servicio brille.',
      'services.admin.title': 'Servicios administrativos',
      'services.admin.text': 'Gestión operativa, procesos y administración. Te acompañamos en la parte que no se ve pero que hace que todo funcione.',
      'services.dev.title': 'Desarrollo',
      'services.dev.text': 'Software a medida, aplicaciones web y móviles. Desarrollamos la tecnología que tu negocio necesita hoy y mañana.',
      'tech.title': 'Tecnologías con las que trabajamos',
      'tech.intro': 'Utilizamos stacks modernos y probados para construir aplicaciones escalables, seguras y fáciles de mantener.',
      'tech.web': 'Web',
      'tech.web.desc': 'React, Vue, Node.js, TypeScript, APIs REST y GraphQL.',
      'tech.mobile': 'Móvil',
      'tech.mobile.desc': 'React Native, Flutter y desarrollo nativo cuando hace falta.',
      'tech.cloud': 'Cloud & DevOps',
      'tech.cloud.desc': 'AWS, Azure, Docker, CI/CD y despliegues automatizados.',
      'tech.data': 'Datos',
      'tech.data.desc': 'Bases de datos SQL y NoSQL, análisis y reporting.',
      'process.title': 'Cómo trabajamos',
      'process.intro': 'Metodología ágil, comunicación clara y entregas iterativas para que veas resultados desde el primer sprint.',
      'process.discovery': 'Discovery',
      'process.discovery.text': 'Definimos objetivos, alcance y requisitos contigo para alinear expectativas desde el día uno.',
      'process.design': 'Diseño y arquitectura',
      'process.design.text': 'Diseñamos la solución técnica y la experiencia de usuario antes de escribir código.',
      'process.dev': 'Desarrollo',
      'process.dev.text': 'Desarrollamos en sprints con revisiones continuas y feedback integrado en el flujo.',
      'process.launch': 'Lanzamiento y soporte',
      'process.launch.text': 'Desplegamos en producción y te acompañamos con mantenimiento y mejoras continuas.',
      'about.title': 'Sobre Bliim',
      'about.text': 'Somos un equipo especializado en desarrollo y en la operación que acompaña a las empresas. Unimos tecnología, servicio al cliente y administración en una sola propuesta para que puedas escalar con tranquilidad.',
      'stat.projects': '50+',
      'stat.projects.label': 'Proyectos entregados',
      'stat.clients': '30+',
      'stat.clients.label': 'Clientes',
      'stat.years': '5+',
      'stat.years.label': 'Años de experiencia',
      'projects.title': 'Proyectos destacados',
      'projects.intro': 'Algunos de los productos y soluciones que hemos desarrollado para nuestros clientes.',
      'projects.analytics.title': 'Plataforma de analytics',
      'projects.analytics.text': 'Dashboard en tiempo real, reportes automatizados e integración con múltiples fuentes de datos para equipos de negocio.',
      'projects.app.title': 'App móvil y web',
      'projects.app.text': 'Aplicación multiplataforma para gestión de pedidos, inventario y atención al cliente en retail.',
      'projects.api.title': 'API e integraciones',
      'projects.api.text': 'Backend escalable y APIs documentadas para conectar sistemas internos y terceros de forma segura.',
      'values.title': 'Nuestros valores',
      'values.intro': 'Los principios que guían cómo trabajamos y nos relacionamos con clientes y equipo.',
      'values.quality': 'Calidad',
      'values.quality.text': 'Código limpio, pruebas y buenas prácticas para que el software sea mantenible y escalable.',
      'values.agility': 'Agilidad',
      'values.agility.text': 'Entregas frecuentes, feedback rápido y adaptación al cambio sin perder el foco en el resultado.',
      'values.transparency': 'Transparencia',
      'values.transparency.text': 'Comunicación clara, estimaciones honestas y visibilidad total del avance del proyecto.',
      'values.partnership': 'Compromiso',
      'values.partnership.text': 'Nos implicamos con tu éxito: no solo entregamos código, acompañamos hasta que el producto funciona en producción.',
      'cta.title': '¿Hablamos?',
      'cta.intro': 'Cuéntanos tu proyecto y te proponemos la mejor forma de trabajar juntos.',
      'footer.tagline': 'Desarrollo · Servicios al cliente · Servicios administrativos',
      'footer.company': 'Empresa',
      'footer.info': 'Información',
      'footer.copyright': 'Todos los derechos reservados.'
    },
    en: {
      'lang.current': 'EN',
      'nav.services': 'Services',
      'nav.tech': 'Technologies',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'hero.title': 'Development that drives your business',
      'hero.lead': 'Bliim is a development company with client services and administrative services. We build digital solutions and manage operations so you can focus on growing.',
      'hero.cta': 'View services',
      'services.title': 'Our services',
      'services.intro': 'We combine software development with customer service and administrative support to offer a comprehensive solution.',
      'services.client.title': 'Client services',
      'services.client.text': 'Support, customer service, and user experience. We manage your customer relationships so your product or service shines.',
      'services.admin.title': 'Administrative services',
      'services.admin.text': 'Operational management, processes, and administration. We support you in the behind-the-scenes work that makes everything function.',
      'services.dev.title': 'Development',
      'services.dev.text': 'Custom software, web and mobile applications. We develop the technology your business needs today and tomorrow.',
      'tech.title': 'Technologies we work with',
      'tech.intro': 'We use modern, proven stacks to build scalable, secure, and maintainable applications.',
      'tech.web': 'Web',
      'tech.web.desc': 'React, Vue, Node.js, TypeScript, REST and GraphQL APIs.',
      'tech.mobile': 'Mobile',
      'tech.mobile.desc': 'React Native, Flutter, and native development when needed.',
      'tech.cloud': 'Cloud & DevOps',
      'tech.cloud.desc': 'AWS, Azure, Docker, CI/CD, and automated deployments.',
      'tech.data': 'Data',
      'tech.data.desc': 'SQL and NoSQL databases, analytics, and reporting.',
      'process.title': 'How we work',
      'process.intro': 'Agile methodology, clear communication, and iterative deliveries so you see results from the first sprint.',
      'process.discovery': 'Discovery',
      'process.discovery.text': 'We define goals, scope, and requirements with you to align expectations from day one.',
      'process.design': 'Design and architecture',
      'process.design.text': 'We design the technical solution and user experience before writing code.',
      'process.dev': 'Development',
      'process.dev.text': 'We develop in sprints with continuous reviews and feedback built into the flow.',
      'process.launch': 'Launch and support',
      'process.launch.text': 'We deploy to production and support you with maintenance and continuous improvements.',
      'about.title': 'About Bliim',
      'about.text': 'We are a team specialized in development and the operations that support companies. We combine technology, customer service, and administration into a single offering so you can scale with confidence.',
      'stat.projects': '50+',
      'stat.projects.label': 'Projects delivered',
      'stat.clients': '30+',
      'stat.clients.label': 'Clients',
      'stat.years': '5+',
      'stat.years.label': 'Years of experience',
      'projects.title': 'Featured projects',
      'projects.intro': 'Some of the products and solutions we have developed for our clients.',
      'projects.analytics.title': 'Analytics platform',
      'projects.analytics.text': 'Real-time dashboard, automated reports, and integration with multiple data sources for business teams.',
      'projects.app.title': 'Mobile and web app',
      'projects.app.text': 'Cross-platform application for order management, inventory, and customer service in retail.',
      'projects.api.title': 'API and integrations',
      'projects.api.text': 'Scalable backend and documented APIs to connect internal and third-party systems securely.',
      'values.title': 'Our values',
      'values.intro': 'The principles that guide how we work and relate to clients and our team.',
      'values.quality': 'Quality',
      'values.quality.text': 'Clean code, testing, and best practices so software is maintainable and scalable.',
      'values.agility': 'Agility',
      'values.agility.text': 'Frequent deliveries, fast feedback, and adaptation to change without losing focus on results.',
      'values.transparency': 'Transparency',
      'values.transparency.text': 'Clear communication, honest estimates, and full visibility of project progress.',
      'values.partnership': 'Commitment',
      'values.partnership.text': 'We are committed to your success: we don\'t just deliver code, we support you until the product works in production.',
      'cta.title': 'Let\'s talk?',
      'cta.intro': 'Tell us about your project and we\'ll propose the best way to work together.',
      'footer.tagline': 'Development · Client services · Administrative services',
      'footer.company': 'Company',
      'footer.info': 'Information',
      'footer.copyright': 'All rights reserved.'
    }
  };

  // Language management
  var currentLang = localStorage.getItem('lang') || 'es';
  var htmlEl = document.documentElement;

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    htmlEl.setAttribute('lang', lang);
    
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update language selector current text
    var currentLangEl = document.querySelector('.lang-selector__current');
    if (currentLangEl) {
      currentLangEl.textContent = lang.toUpperCase();
    }

    // Update meta description
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      if (lang === 'es') {
        metaDesc.setAttribute('content', 'Bliim — Empresa de desarrollo con servicios al cliente y servicios administrativos. Soluciones digitales y gestión profesional.');
      } else {
        metaDesc.setAttribute('content', 'Bliim — Development company with client services and administrative services. Digital solutions and professional management.');
      }
    }
  }

  // Initialize language
  setLanguage(currentLang);

  // Language selector
  var langBtn = document.querySelector('.lang-selector__btn');
  var langDropdown = document.querySelector('.lang-selector__dropdown');
  var langOptions = document.querySelectorAll('.lang-selector__option');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var expanded = langBtn.getAttribute('aria-expanded') === 'true';
      langBtn.setAttribute('aria-expanded', !expanded);
      langDropdown.setAttribute('aria-hidden', expanded);
      langDropdown.classList.toggle('is-open');
    });

    langOptions.forEach(function (option) {
      option.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        setLanguage(lang);
        langBtn.setAttribute('aria-expanded', 'false');
        langDropdown.setAttribute('aria-hidden', 'true');
        langDropdown.classList.remove('is-open');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langBtn.setAttribute('aria-expanded', 'false');
        langDropdown.setAttribute('aria-hidden', 'true');
        langDropdown.classList.remove('is-open');
      }
    });
  }

  // Mobile menu
  var menuBtn = document.querySelector('.header__menu-btn');
  var mobileNav = document.querySelector('.nav--mobile');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      mobileNav.classList.toggle('is-open');
      mobileNav.setAttribute('aria-hidden', expanded);
    });

    mobileNav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
