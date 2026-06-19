(function () {
  var $ = function (selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  };

  function normalize(value) {
    return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function initImages() {
    $('img').forEach(function (image) {
      image.addEventListener('error', function () {
        image.classList.add('image-missing');
      });
    });
  }

  function initMenu() {
    var button = document.querySelector('[data-menu-toggle]');
    var nav = document.querySelector('[data-site-nav]');
    if (!button || !nav) return;
    button.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  function initHero() {
    var slider = document.querySelector('[data-hero-slider]');
    if (!slider) return;
    var slides = $('.hero-slide', slider);
    var dots = $('.hero-dot', slider);
    if (slides.length < 2) return;
    var index = 0;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === index);
      });
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener('click', function () {
        show(dotIndex);
      });
    });

    window.setInterval(function () {
      show(index + 1);
    }, 6200);
  }

  function getQueryParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name) || '';
    } catch (error) {
      return '';
    }
  }

  function initSearchForms() {
    $('[data-search-form]').forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var input = form.querySelector('input[name="q"]');
        var value = input ? input.value.trim() : '';
        var base = form.getAttribute('data-search-form') || 'search.html';
        window.location.href = value ? base + '?q=' + encodeURIComponent(value) : base;
      });
    });
  }

  function initFilters() {
    var panels = $('[data-filter-panel]');
    panels.forEach(function (panel) {
      var input = panel.querySelector('[data-filter-input]');
      var type = panel.querySelector('[data-filter-type]');
      var region = panel.querySelector('[data-filter-region]');
      var year = panel.querySelector('[data-filter-year]');
      var scopeId = panel.getAttribute('data-filter-panel');
      var scope = scopeId ? document.getElementById(scopeId) : document;
      var cards = $('[data-card]', scope || document);
      var rows = $('[data-rank-row]', scope || document);
      var empty = document.querySelector('[data-empty-for="' + scopeId + '"]');
      var initialQuery = getQueryParam('q');
      if (input && initialQuery) input.value = initialQuery;

      function matchItem(item) {
        var query = normalize(input ? input.value : '');
        var search = normalize(item.getAttribute('data-search'));
        var itemType = normalize(item.getAttribute('data-type'));
        var itemRegion = normalize(item.getAttribute('data-region'));
        var itemYear = normalize(item.getAttribute('data-year'));
        var typeValue = normalize(type ? type.value : '');
        var regionValue = normalize(region ? region.value : '');
        var yearValue = normalize(year ? year.value : '');
        var okQuery = !query || search.indexOf(query) !== -1;
        var okType = !typeValue || itemType.indexOf(typeValue) !== -1 || search.indexOf(typeValue) !== -1;
        var okRegion = !regionValue || itemRegion.indexOf(regionValue) !== -1 || search.indexOf(regionValue) !== -1;
        var okYear = !yearValue || itemYear === yearValue;
        return okQuery && okType && okRegion && okYear;
      }

      function run() {
        var shown = 0;
        cards.forEach(function (card) {
          var visible = matchItem(card);
          card.classList.toggle('is-hidden', !visible);
          if (visible) shown += 1;
        });
        rows.forEach(function (row) {
          var visible = matchItem(row);
          row.classList.toggle('is-hidden', !visible);
          if (visible) shown += 1;
        });
        if (empty) empty.classList.toggle('is-visible', shown === 0);
      }

      [input, type, region, year].forEach(function (control) {
        if (control) control.addEventListener('input', run);
        if (control) control.addEventListener('change', run);
      });
      run();
    });
  }

  function initPlayers() {
    $('[data-player]').forEach(function (box) {
      var video = box.querySelector('video');
      var button = box.querySelector('[data-play]');
      var source = box.getAttribute('data-hls-src');
      var bound = false;
      var hlsInstance = null;
      if (!video || !button || !source) return;

      function attachSource() {
        if (bound) return;
        bound = true;
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = source;
        } else if (window.Hls && window.Hls.isSupported()) {
          hlsInstance = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90
          });
          hlsInstance.loadSource(source);
          hlsInstance.attachMedia(video);
        } else {
          video.src = source;
        }
        video.setAttribute('controls', 'controls');
      }

      function play() {
        attachSource();
        box.classList.add('is-playing');
        var result = video.play();
        if (result && typeof result.catch === 'function') {
          result.catch(function () {
            video.setAttribute('controls', 'controls');
          });
        }
      }

      button.addEventListener('click', play);
      video.addEventListener('click', function () {
        if (!bound) play();
      });
      window.addEventListener('beforeunload', function () {
        if (hlsInstance) hlsInstance.destroy();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initImages();
    initMenu();
    initHero();
    initSearchForms();
    initFilters();
    initPlayers();
  });
})();
