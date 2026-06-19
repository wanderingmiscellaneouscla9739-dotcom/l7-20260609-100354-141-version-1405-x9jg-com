(function () {
    function ready(callback) {
        if (document.readyState !== "loading") {
            callback();
            return;
        }
        document.addEventListener("DOMContentLoaded", callback);
    }

    function normalize(value) {
        return String(value || "").toLowerCase().trim();
    }

    ready(function () {
        var menuToggle = document.querySelector("[data-menu-toggle]");
        var mobilePanel = document.querySelector("[data-mobile-panel]");

        if (menuToggle && mobilePanel) {
            menuToggle.addEventListener("click", function () {
                mobilePanel.classList.toggle("is-open");
            });
        }

        var slides = Array.prototype.slice.call(document.querySelectorAll(".hero-slide"));
        var dots = Array.prototype.slice.call(document.querySelectorAll(".hero-dot"));
        var activeSlide = 0;

        function showSlide(index) {
            if (!slides.length) {
                return;
            }
            activeSlide = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("active", slideIndex === activeSlide);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("active", dotIndex === activeSlide);
            });
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                showSlide(index);
            });
        });

        if (slides.length > 1) {
            setInterval(function () {
                showSlide(activeSlide + 1);
            }, 5200);
        }

        var searchInputs = Array.prototype.slice.call(document.querySelectorAll("[data-search-input]"));

        searchInputs.forEach(function (input) {
            var holder = input.parentElement.querySelector("[data-search-results]");

            input.addEventListener("input", function () {
                var query = normalize(input.value);
                if (!holder) {
                    return;
                }

                holder.innerHTML = "";

                if (query.length < 1) {
                    holder.classList.remove("is-open");
                    return;
                }

                var data = Array.isArray(window.searchMovies) ? window.searchMovies : [];
                var hits = data.filter(function (movie) {
                    return normalize(movie.title + " " + movie.genre + " " + movie.region + " " + movie.year + " " + movie.type).indexOf(query) !== -1;
                }).slice(0, 10);

                hits.forEach(function (movie) {
                    var link = document.createElement("a");
                    link.href = movie.url;
                    link.className = "search-hit";
                    link.innerHTML = "<strong>" + movie.title + "</strong><span>" + movie.year + " · " + movie.region + " · " + movie.genre + "</span>";
                    holder.appendChild(link);
                });

                holder.classList.toggle("is-open", hits.length > 0);
            });
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest(".header-search") && !event.target.closest(".mobile-search")) {
                document.querySelectorAll("[data-search-results]").forEach(function (holder) {
                    holder.classList.remove("is-open");
                });
            }
        });

        var localInput = document.querySelector("[data-local-filter]");
        var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter-button]"));
        var cards = Array.prototype.slice.call(document.querySelectorAll(".movie-card"));
        var activeFilter = "all";

        function applyLocalFilter() {
            var query = normalize(localInput ? localInput.value : "");

            cards.forEach(function (card) {
                var text = normalize(card.getAttribute("data-title") + " " + card.getAttribute("data-type") + " " + card.getAttribute("data-year") + " " + card.getAttribute("data-genre") + " " + card.getAttribute("data-region"));
                var type = card.getAttribute("data-type") || "";
                var year = card.getAttribute("data-year") || "";
                var typeMatch = activeFilter === "all" || type.indexOf(activeFilter) !== -1 || year === activeFilter;
                var queryMatch = !query || text.indexOf(query) !== -1;
                card.style.display = typeMatch && queryMatch ? "" : "none";
            });
        }

        if (localInput) {
            localInput.addEventListener("input", applyLocalFilter);
        }

        filterButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                activeFilter = button.getAttribute("data-filter-button") || "all";
                filterButtons.forEach(function (item) {
                    item.classList.toggle("active", item === button);
                });
                applyLocalFilter();
            });
        });
    });
})();
