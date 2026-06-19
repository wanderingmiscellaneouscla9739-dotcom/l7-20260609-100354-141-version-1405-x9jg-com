(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var toggle = document.querySelector(".nav-toggle");
    var panel = document.querySelector(".nav-panel");
    if (toggle && panel) {
      toggle.addEventListener("click", function () {
        var open = panel.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
    var current = 0;

    function showSlide(index) {
      if (!slides.length) {
        return;
      }
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("active", i === current);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        showSlide(parseInt(dot.getAttribute("data-hero-dot"), 10));
      });
    });

    if (slides.length > 1) {
      window.setInterval(function () {
        showSlide(current + 1);
      }, 5200);
    }

    var params = new URLSearchParams(window.location.search);
    var q = params.get("q") || "";
    var searchQuery = document.querySelector(".search-query");
    var globalSearchInput = document.querySelector(".global-search-input");
    var listInputs = Array.prototype.slice.call(document.querySelectorAll(".list-filter-input"));
    var listSelects = Array.prototype.slice.call(document.querySelectorAll(".list-filter-select"));

    if (searchQuery) {
      searchQuery.value = q;
    }
    if (globalSearchInput && q) {
      globalSearchInput.value = q;
    }

    function normalize(value) {
      return String(value || "").toLowerCase().trim();
    }

    function applyListFilters() {
      var activeInput = "";
      listInputs.forEach(function (input) {
        if (input.value.trim()) {
          activeInput = input.value;
        }
      });
      var keyword = normalize(activeInput);
      var yearValue = "";
      listSelects.forEach(function (select) {
        if (select.value) {
          yearValue = select.value;
        }
      });
      var cards = Array.prototype.slice.call(document.querySelectorAll(".movie-card"));
      var visible = 0;
      cards.forEach(function (card) {
        var text = normalize(card.getAttribute("data-search"));
        var year = card.getAttribute("data-year") || "";
        var matchText = !keyword || text.indexOf(keyword) !== -1;
        var matchYear = true;
        if (yearValue === "2020") {
          matchYear = parseInt(year, 10) >= 2020;
        } else if (yearValue) {
          matchYear = year.indexOf(yearValue) === 0;
        }
        var show = matchText && matchYear;
        card.hidden = !show;
        if (show) {
          visible += 1;
        }
      });
      var empty = document.querySelector(".empty-state");
      if (empty) {
        empty.hidden = visible !== 0;
      }
    }

    listInputs.forEach(function (input) {
      input.addEventListener("input", applyListFilters);
    });
    listSelects.forEach(function (select) {
      select.addEventListener("change", applyListFilters);
    });
    if (q) {
      applyListFilters();
    }

    Array.prototype.slice.call(document.querySelectorAll("img")).forEach(function (img) {
      img.addEventListener("error", function () {
        img.classList.add("is-empty");
      });
    });
  });
})();
