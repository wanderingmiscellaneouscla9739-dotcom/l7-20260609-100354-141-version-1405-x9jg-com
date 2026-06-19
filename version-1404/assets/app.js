(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function setupMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var panel = document.querySelector("[data-nav-panel]");
    if (!toggle || !panel) {
      return;
    }
    toggle.addEventListener("click", function () {
      panel.classList.toggle("open");
    });
  }

  function setupSiteSearch() {
    document.querySelectorAll("[data-site-search]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = form.querySelector("input[name='q']");
        var query = input ? input.value.trim() : "";
        var target = "./search.html";
        if (query) {
          target += "?q=" + encodeURIComponent(query);
        }
        window.location.href = target;
      });
    });
  }

  function setupHero() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll("[data-hero-slide]"));
    var prev = hero.querySelector("[data-hero-prev]");
    var next = hero.querySelector("[data-hero-next]");
    var dotsBox = hero.querySelector("[data-hero-dots]");
    if (!slides.length) {
      return;
    }
    var current = 0;
    var dots = [];

    function go(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === current);
      });
    }

    if (dotsBox) {
      slides.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", "切换到第" + (i + 1) + "屏");
        dot.addEventListener("click", function () {
          go(i);
        });
        dotsBox.appendChild(dot);
        dots.push(dot);
      });
    }
    if (prev) {
      prev.addEventListener("click", function () {
        go(current - 1);
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        go(current + 1);
      });
    }
    go(0);
    window.setInterval(function () {
      go(current + 1);
    }, 5200);
  }

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function setupFilters() {
    document.querySelectorAll("[data-filter-scope]").forEach(function (scope) {
      var textInput = scope.querySelector("[data-local-search]");
      var yearSelect = scope.querySelector("[data-year-filter]");
      var typeSelect = scope.querySelector("[data-type-filter]");
      var categorySelect = scope.querySelector("[data-category-filter]");
      var cards = Array.prototype.slice.call(scope.querySelectorAll(".filter-card"));
      var empty = scope.querySelector("[data-empty-state]");
      var params = new URLSearchParams(window.location.search);
      var initialQuery = params.get("q") || "";

      if (textInput && initialQuery) {
        textInput.value = initialQuery;
      }

      function matchCard(card) {
        var query = normalize(textInput ? textInput.value : "");
        var year = yearSelect ? yearSelect.value : "";
        var type = typeSelect ? typeSelect.value : "";
        var category = categorySelect ? categorySelect.value : "";
        var haystack = normalize([
          card.dataset.title,
          card.dataset.year,
          card.dataset.type,
          card.dataset.category,
          card.dataset.genre,
          card.textContent
        ].join(" "));
        var queryOk = !query || haystack.indexOf(query) !== -1;
        var yearOk = !year || card.dataset.year === year;
        var typeOk = !type || normalize(card.dataset.type).indexOf(normalize(type)) !== -1;
        var categoryOk = !category || card.dataset.category === category;
        return queryOk && yearOk && typeOk && categoryOk;
      }

      function apply() {
        var shown = 0;
        cards.forEach(function (card) {
          var ok = matchCard(card);
          card.style.display = ok ? "" : "none";
          if (ok) {
            shown += 1;
          }
        });
        if (empty) {
          empty.classList.toggle("show", shown === 0);
        }
      }

      [textInput, yearSelect, typeSelect, categorySelect].forEach(function (control) {
        if (control) {
          control.addEventListener("input", apply);
          control.addEventListener("change", apply);
        }
      });
      apply();
    });
  }

  window.initStaticPlayer = function (source) {
    var video = document.querySelector("[data-player-video]");
    var overlay = document.querySelector("[data-play-overlay]");
    var attached = false;

    if (!video) {
      return;
    }

    function attach() {
      if (attached) {
        return;
      }
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = source;
      } else if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(source);
        hls.attachMedia(video);
        video.hlsInstance = hls;
      } else {
        video.src = source;
      }
      attached = true;
    }

    function start() {
      attach();
      video.controls = true;
      if (overlay) {
        overlay.classList.add("hidden");
      }
      var play = video.play();
      if (play && typeof play.catch === "function") {
        play.catch(function () {});
      }
    }

    if (overlay) {
      overlay.addEventListener("click", start);
    }
    video.addEventListener("click", function () {
      if (!attached) {
        start();
      }
    });
  };

  ready(function () {
    setupMenu();
    setupSiteSearch();
    setupHero();
    setupFilters();
  });
})();
