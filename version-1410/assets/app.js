(function () {
    function all(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function one(selector, root) {
        return (root || document).querySelector(selector);
    }

    function normalize(value) {
        return (value || '').toString().trim().toLowerCase();
    }

    function initYear() {
        all('[data-year]').forEach(function (node) {
            node.textContent = new Date().getFullYear();
        });
    }

    function initMenu() {
        var toggle = one('.menu-toggle');
        var panel = one('.mobile-panel');
        if (!toggle || !panel) {
            return;
        }
        toggle.addEventListener('click', function () {
            var open = panel.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.textContent = open ? '×' : '☰';
        });
    }

    function initSearchForms() {
        all('form.search-form').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var input = one('input[name="q"]', form);
                if (!input || !input.value.trim()) {
                    event.preventDefault();
                    return;
                }
                event.preventDefault();
                window.location.href = 'search.html?q=' + encodeURIComponent(input.value.trim());
            });
        });
    }

    function filterCards(value) {
        var keyword = normalize(value);
        var cards = all('.movie-card');
        var visible = 0;
        cards.forEach(function (card) {
            var text = normalize(card.getAttribute('data-search') || card.textContent);
            var matched = !keyword || text.indexOf(keyword) !== -1;
            var item = card.closest('.rank-entry') || card;
            item.style.display = matched ? '' : 'none';
            if (matched) {
                visible += 1;
            }
        });
        var empty = one('.empty-state');
        if (empty) {
            empty.classList.toggle('is-visible', visible === 0);
        }
    }

    function initFilter() {
        var input = one('[data-filter-input]');
        if (!input) {
            return;
        }
        var params = new URLSearchParams(window.location.search);
        var query = params.get('q') || '';
        if (query) {
            input.value = query;
        }
        filterCards(input.value);
        input.addEventListener('input', function () {
            filterCards(input.value);
        });
    }

    function initHero() {
        var carousel = one('.hero-carousel');
        if (!carousel) {
            return;
        }
        var slides = all('.hero-slide', carousel);
        var dots = all('.hero-dots button', carousel);
        var prev = one('.hero-prev', carousel);
        var next = one('.hero-next', carousel);
        var index = 0;
        var timer;

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle('is-active', i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle('is-active', i === index);
            });
        }

        function move(step) {
            show(index + step);
        }

        function restart() {
            clearInterval(timer);
            timer = setInterval(function () {
                move(1);
            }, 5000);
        }

        if (prev) {
            prev.addEventListener('click', function () {
                move(-1);
                restart();
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                move(1);
                restart();
            });
        }
        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                show(i);
                restart();
            });
        });
        show(0);
        restart();
    }

    function initPlayer() {
        var video = one('.player-video');
        var trigger = one('.player-trigger');
        if (!video || !trigger) {
            return;
        }
        var source = video.getAttribute('data-video');
        var started = false;
        var hlsInstance = null;

        function playVideo() {
            var result = video.play();
            if (result && typeof result.catch === 'function') {
                result.catch(function () {});
            }
        }

        function start() {
            trigger.classList.add('is-hidden');
            if (started) {
                playVideo();
                return;
            }
            started = true;
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = source;
                playVideo();
                return;
            }
            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({ enableWorker: true });
                hlsInstance.loadSource(source);
                hlsInstance.attachMedia(video);
                hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
                    playVideo();
                });
                return;
            }
            video.src = source;
            playVideo();
        }

        trigger.addEventListener('click', start);
        video.addEventListener('click', start, { once: true });
        window.addEventListener('pagehide', function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initYear();
        initMenu();
        initSearchForms();
        initFilter();
        initHero();
        initPlayer();
    });
})();
