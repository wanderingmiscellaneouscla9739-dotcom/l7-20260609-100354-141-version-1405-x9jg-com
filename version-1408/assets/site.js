(function () {
  function ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  function setupMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var nav = document.querySelector('[data-mobile-nav]');
    if (!toggle || !nav) {
      return;
    }
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }

  function setupHero() {
    var carousel = document.querySelector('[data-hero-carousel]');
    if (!carousel) {
      return;
    }
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-hero-dot]'));
    if (slides.length <= 1) {
      return;
    }
    var current = 0;
    var timer = null;

    function activate(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === current);
        dot.setAttribute('aria-current', dotIndex === current ? 'true' : 'false');
      });
    }

    function start() {
      stop();
      timer = window.setInterval(function () {
        activate(current + 1);
      }, 5200);
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        activate(index);
        start();
      });
    });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    activate(0);
    start();
  }

  function normalize(value) {
    return String(value || '').trim().toLowerCase();
  }

  function setupFiltering() {
    var panel = document.querySelector('[data-filter-panel]');
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-movie-card]'));
    if (!panel || cards.length === 0) {
      return;
    }

    var search = panel.querySelector('[data-filter-search]');
    var category = panel.querySelector('[data-filter-category]');
    var type = panel.querySelector('[data-filter-type]');
    var year = panel.querySelector('[data-filter-year]');
    var reset = panel.querySelector('[data-filter-reset]');
    var status = document.querySelector('[data-result-status]');
    var empty = document.querySelector('[data-empty-state]');

    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q && search) {
      search.value = q;
    }

    function matchCard(card) {
      var query = normalize(search && search.value);
      var cardText = normalize([
        card.dataset.title,
        card.dataset.region,
        card.dataset.type,
        card.dataset.year,
        card.dataset.category,
        card.dataset.tags,
        card.dataset.genre
      ].join(' '));
      var categoryValue = normalize(category && category.value);
      var typeValue = normalize(type && type.value);
      var yearValue = normalize(year && year.value);

      if (query && cardText.indexOf(query) === -1) {
        return false;
      }
      if (categoryValue && normalize(card.dataset.category) !== categoryValue) {
        return false;
      }
      if (typeValue && normalize(card.dataset.type) !== typeValue) {
        return false;
      }
      if (yearValue && normalize(card.dataset.year) !== yearValue) {
        return false;
      }
      return true;
    }

    function applyFilters() {
      var shown = 0;
      cards.forEach(function (card) {
        var visible = matchCard(card);
        card.style.display = visible ? '' : 'none';
        if (visible) {
          shown += 1;
        }
      });
      if (status) {
        status.textContent = '当前显示 ' + shown + ' 部影片，共 ' + cards.length + ' 部';
      }
      if (empty) {
        empty.classList.toggle('is-visible', shown === 0);
      }
    }

    [search, category, type, year].forEach(function (field) {
      if (!field) {
        return;
      }
      field.addEventListener('input', applyFilters);
      field.addEventListener('change', applyFilters);
    });

    if (reset) {
      reset.addEventListener('click', function () {
        if (search) {
          search.value = '';
        }
        if (category) {
          category.value = '';
        }
        if (type) {
          type.value = '';
        }
        if (year) {
          year.value = '';
        }
        applyFilters();
      });
    }

    applyFilters();
  }

  function setupPlayer() {
    var video = document.querySelector('[data-hls-player]');
    if (!video) {
      return;
    }

    var source = video.getAttribute('data-src');
    var message = document.querySelector('[data-player-message]');
    var layer = document.querySelector('[data-video-play-layer]');
    var button = document.querySelector('[data-video-play-button]');
    var hlsInstance = null;
    var initialized = false;

    function setMessage(text) {
      if (message) {
        message.textContent = text;
      }
    }

    function initPlayer() {
      if (initialized || !source) {
        return Promise.resolve();
      }
      initialized = true;

      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        setMessage('播放源已就绪，可使用系统播放器直接播放。');
        return Promise.resolve();
      }

      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({
          enableWorker: true,
          lowLatencyMode: false,
          backBufferLength: 90
        });
        hlsInstance.loadSource(source);
        hlsInstance.attachMedia(video);
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
          setMessage('播放源已解析完成，点击播放器即可观看。');
        });
        hlsInstance.on(window.Hls.Events.ERROR, function (eventName, data) {
          if (data && data.fatal) {
            setMessage('当前网络环境无法加载播放源，请刷新页面后重试。');
          }
        });
        return Promise.resolve();
      }

      video.src = source;
      setMessage('浏览器可能不支持 HLS 播放，请使用支持 m3u8 的浏览器访问。');
      return Promise.resolve();
    }

    function playVideo() {
      initPlayer().then(function () {
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(function () {
            setMessage('播放器已绑定播放源，请再次点击播放按钮或使用浏览器控件播放。');
          });
        }
      });
    }

    if (button) {
      button.addEventListener('click', playVideo);
    }

    video.addEventListener('click', function () {
      if (video.paused) {
        playVideo();
      }
    });

    video.addEventListener('play', function () {
      if (layer) {
        layer.classList.add('is-hidden');
      }
    });

    video.addEventListener('pause', function () {
      if (layer && video.currentTime === 0) {
        layer.classList.remove('is-hidden');
      }
    });

    video.addEventListener('ended', function () {
      if (layer) {
        layer.classList.remove('is-hidden');
      }
    });

    initPlayer();
  }

  ready(function () {
    setupMenu();
    setupHero();
    setupFiltering();
    setupPlayer();
  });
})();
