// ===== OŠ „Sonja Marinković" — main.js =====

document.addEventListener('DOMContentLoaded', function () {

  // Hamburger menu
  var burger = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Tabs
  document.querySelectorAll('.tabs-nav').forEach(function (tabsNav) {
    var wrapper = tabsNav.closest('.tabs-widget');
    var buttons = tabsNav.querySelectorAll('.tab-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        wrapper.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
        wrapper.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        wrapper.querySelector('.tab-panel[data-tab="' + target + '"]').classList.add('active');
      });
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-head').forEach(function (head) {
    head.addEventListener('click', function () {
      var item = head.closest('.accordion-item');
      var body = item.querySelector('.accordion-body');
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.accordion-item').forEach(function (it) {
        it.classList.remove('open');
        it.querySelector('.accordion-body').style.maxHeight = null;
      });
      if (!wasOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Gallery lightbox
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-grid img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.getAttribute('data-full') || img.src;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function () {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    });
  }

  // Document filter pills (Dokumenta page)
  var filterPills = document.querySelectorAll('.filter-pill[data-filter]');
  if (filterPills.length) {
    filterPills.forEach(function (pill) {
      pill.addEventListener('click', function (e) {
        e.preventDefault();
        var filter = pill.getAttribute('data-filter');
        filterPills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
        document.querySelectorAll('[data-category]').forEach(function (el) {
          if (filter === 'all' || el.getAttribute('data-category') === filter) {
            el.style.display = '';
          } else {
            el.style.display = 'none';
          }
        });
      });
    });
  }

  // Contact form (static demo — no backend on GitHub Pages)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Ovo je test/demo sajt bez servera — forma ne šalje poruke. Za pravo slanje potrebna je pozadinska obrada (npr. Formspree, Netlify Forms ili sopstveni server).');
    });
  }

});
