(function () {
    function toggleMenu() {
        var button = document.querySelector('[data-menu-button]');
        var nav = document.querySelector('[data-mobile-nav]');
        if (!button || !nav) {
            return;
        }
        button.addEventListener('click', function () {
            nav.classList.toggle('is-open');
            document.body.classList.toggle('menu-open', nav.classList.contains('is-open'));
        });
    }

    function setupHero() {
        var carousel = document.querySelector('[data-hero-carousel]');
        if (!carousel) {
            return;
        }
        var slides = Array.prototype.slice.call(carousel.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-slide-dot]'));
        if (slides.length < 2) {
            return;
        }
        var index = 0;
        var timer;
        function show(next) {
            index = (next + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === index);
            });
        }
        function start() {
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5600);
        }
        dots.forEach(function (dot, dotIndex) {
            dot.addEventListener('click', function () {
                window.clearInterval(timer);
                show(dotIndex);
                start();
            });
        });
        start();
    }

    function setupFilters() {
        var areas = Array.prototype.slice.call(document.querySelectorAll('[data-filter-area]'));
        areas.forEach(function (area) {
            var input = area.querySelector('[data-search-input]');
            var yearSelect = area.querySelector('[data-filter-year]');
            var typeSelect = area.querySelector('[data-filter-type]');
            var empty = area.querySelector('[data-empty-state]');
            var cards = Array.prototype.slice.call(area.querySelectorAll('.movie-card'));
            function currentValue(element) {
                return element ? element.value.trim().toLowerCase() : '';
            }
            function run() {
                var keyword = currentValue(input);
                var year = currentValue(yearSelect);
                var type = currentValue(typeSelect);
                var visible = 0;
                cards.forEach(function (card) {
                    var text = [
                        card.getAttribute('data-title'),
                        card.getAttribute('data-year'),
                        card.getAttribute('data-region'),
                        card.getAttribute('data-type'),
                        card.getAttribute('data-genre'),
                        card.getAttribute('data-tags')
                    ].join(' ').toLowerCase();
                    var matchKeyword = !keyword || text.indexOf(keyword) !== -1;
                    var matchYear = !year || (card.getAttribute('data-year') || '').toLowerCase() === year;
                    var matchType = !type || (card.getAttribute('data-type') || '').toLowerCase() === type;
                    var showCard = matchKeyword && matchYear && matchType;
                    card.classList.toggle('is-hidden', !showCard);
                    if (showCard) {
                        visible += 1;
                    }
                });
                if (empty) {
                    empty.classList.toggle('is-visible', visible === 0);
                }
            }
            [input, yearSelect, typeSelect].forEach(function (element) {
                if (element) {
                    element.addEventListener('input', run);
                    element.addEventListener('change', run);
                }
            });
            var params = new URLSearchParams(window.location.search);
            var query = params.get('q');
            if (query && input) {
                input.value = query;
                run();
            }
        });
    }

    function setupPlayers() {
        var boxes = Array.prototype.slice.call(document.querySelectorAll('[data-video-box]'));
        boxes.forEach(function (box) {
            var video = box.querySelector('video');
            var button = box.querySelector('[data-play-button]');
            if (!video || !button) {
                return;
            }
            var stream = video.getAttribute('data-stream');
            var started = false;
            var hlsInstance = null;
            function playVideo() {
                var attempt = video.play();
                if (attempt && typeof attempt.catch === 'function') {
                    attempt.catch(function () {});
                }
            }
            function start() {
                if (!stream) {
                    return;
                }
                if (started) {
                    playVideo();
                    return;
                }
                started = true;
                button.classList.add('is-hidden');
                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = stream;
                    playVideo();
                    return;
                }
                if (window.Hls && window.Hls.isSupported()) {
                    hlsInstance = new window.Hls({
                        lowLatencyMode: true,
                        backBufferLength: 90
                    });
                    hlsInstance.loadSource(stream);
                    hlsInstance.attachMedia(video);
                    hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, function () {
                        playVideo();
                    });
                    hlsInstance.on(window.Hls.Events.ERROR, function (event, data) {
                        if (data && data.fatal && hlsInstance) {
                            hlsInstance.destroy();
                            hlsInstance = null;
                            video.src = stream;
                            playVideo();
                        }
                    });
                    return;
                }
                video.src = stream;
                playVideo();
            }
            button.addEventListener('click', start);
            video.addEventListener('click', function () {
                if (!started) {
                    start();
                }
            });
            video.addEventListener('play', function () {
                button.classList.add('is-hidden');
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        toggleMenu();
        setupHero();
        setupFilters();
        setupPlayers();
    });
}());
