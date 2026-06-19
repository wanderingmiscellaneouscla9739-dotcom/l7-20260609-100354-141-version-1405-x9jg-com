(function () {
    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function normalText(value) {
        return String(value || "").toLowerCase().trim();
    }

    function filterCards(query) {
        var text = normalText(query);
        var cards = document.querySelectorAll(".movie-card");
        cards.forEach(function (card) {
            var keywords = normalText(card.getAttribute("data-keywords"));
            var genre = normalText(card.getAttribute("data-genre"));
            var matched = !text || keywords.indexOf(text) !== -1 || genre.indexOf(text) !== -1;
            card.classList.toggle("is-filtered-out", !matched);
        });
    }

    function setupSearch() {
        var params = new URLSearchParams(window.location.search);
        var initial = params.get("search") || "";
        var inputs = document.querySelectorAll(".js-search-input");
        inputs.forEach(function (input) {
            if (initial) {
                input.value = initial;
            }
        });
        if (initial) {
            filterCards(initial);
        }
        document.querySelectorAll(".js-search-form").forEach(function (form) {
            form.addEventListener("submit", function (event) {
                var input = form.querySelector(".js-search-input");
                if (!input) {
                    return;
                }
                if (document.querySelector(".movie-card")) {
                    event.preventDefault();
                    filterCards(input.value);
                }
            });
        });
    }

    function setupFilters() {
        document.querySelectorAll(".filter-chip").forEach(function (button) {
            button.addEventListener("click", function () {
                var filter = button.getAttribute("data-filter") || "";
                document.querySelectorAll(".filter-chip").forEach(function (item) {
                    item.classList.remove("active");
                });
                button.classList.add("active");
                filterCards(filter);
            });
        });
    }

    function setupMenu() {
        var button = document.querySelector(".js-menu-button");
        var menu = document.querySelector(".js-mobile-nav");
        if (!button || !menu) {
            return;
        }
        button.addEventListener("click", function () {
            menu.classList.toggle("open");
        });
    }

    function setupHero() {
        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        if (slides.length < 2) {
            return;
        }
        var index = 0;
        window.setInterval(function () {
            slides[index].classList.add("is-hidden");
            index = (index + 1) % slides.length;
            slides[index].classList.remove("is-hidden");
        }, 5200);
    }

    function setupImages() {
        document.querySelectorAll("img.cover-img").forEach(function (img) {
            img.addEventListener("error", function () {
                img.classList.add("is-hidden");
            });
        });
    }

    ready(function () {
        setupSearch();
        setupFilters();
        setupMenu();
        setupHero();
        setupImages();
    });
})();

function initMoviePlayer(videoId, buttonId, url) {
    var video = document.getElementById(videoId);
    var button = document.getElementById(buttonId);
    if (!video || !button || !url) {
        return;
    }
    var hlsInstance = null;
    var started = false;

    function start() {
        if (started) {
            video.play().catch(function () {});
            return;
        }
        started = true;
        button.classList.add("is-hidden");
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = url;
            video.play().catch(function () {});
            return;
        }
        if (window.Hls && window.Hls.isSupported()) {
            hlsInstance = new window.Hls({
                enableWorker: true,
                lowLatencyMode: false
            });
            hlsInstance.loadSource(url);
            hlsInstance.attachMedia(video);
            hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
                video.play().catch(function () {});
            });
            hlsInstance.on(window.Hls.Events.ERROR, function (eventName, data) {
                if (data && data.fatal && hlsInstance) {
                    hlsInstance.destroy();
                    hlsInstance = null;
                    video.src = url;
                    video.play().catch(function () {});
                }
            });
            return;
        }
        video.src = url;
        video.play().catch(function () {});
    }

    button.addEventListener("click", start);
    video.addEventListener("click", function () {
        if (!started) {
            start();
        }
    });
}
