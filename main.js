(function () {
  'use strict';

  // Translations
  var translations = {
    es: {
      'lang.current': 'ES',
      'nav.services': 'Servicios',
      'nav.about': 'Nosotros',
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
      'about.title': 'Sobre Bliim',
      'about.text': 'Somos un equipo especializado en desarrollo y en la operación que acompaña a las empresas. Unimos tecnología, servicio al cliente y administración en una sola propuesta para que puedas escalar con tranquilidad.',
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
      'nav.about': 'About',
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
      'about.title': 'About Bliim',
      'about.text': 'We are a team specialized in development and the operations that support companies. We combine technology, customer service, and administration into a single offering so you can scale with confidence.',
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
