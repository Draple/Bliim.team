(function () {
  'use strict';

  var STORAGE_KEY = 'lang';
  var defaultLang = 'es';

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || defaultLang;
    } catch (e) {
      return defaultLang;
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function showLegalContent(lang) {
    var contents = document.querySelectorAll('.legal-content');
    contents.forEach(function (el) {
      if (el.getAttribute('data-lang') === lang) {
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    });
    document.documentElement.setAttribute('lang', lang);
  }

  function updateLangSelector(lang) {
    var current = document.querySelector('.lang-selector__current');
    if (current) current.textContent = lang.toUpperCase();
  }

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
        setLang(lang);
        showLegalContent(lang);
        updateLangSelector(lang);
        langBtn.setAttribute('aria-expanded', 'false');
        langDropdown.setAttribute('aria-hidden', 'true');
        langDropdown.classList.remove('is-open');
      });
    });

    document.addEventListener('click', function (e) {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langBtn.setAttribute('aria-expanded', 'false');
        langDropdown.setAttribute('aria-hidden', 'true');
        langDropdown.classList.remove('is-open');
      }
    });
  }

  // Init: show content for saved or default lang
  var lang = getLang();
  showLegalContent(lang);
  updateLangSelector(lang);

  // Year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
    mobileNav.querySelectorAll('.nav__link, a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }
})();
