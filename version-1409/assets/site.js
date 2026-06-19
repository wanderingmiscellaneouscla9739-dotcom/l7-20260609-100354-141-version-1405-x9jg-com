(function () {
    const toggle = document.querySelector('.mobile-toggle');
    const panel = document.querySelector('.mobile-panel');

    if (toggle && panel) {
        toggle.addEventListener('click', function () {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            panel.hidden = expanded;
        });
    }

    const hero = document.querySelector('[data-hero]');

    if (hero) {
        const slides = Array.from(hero.querySelectorAll('.hero-slide'));
        const dots = Array.from(hero.querySelectorAll('.hero-dot'));
        const prev = hero.querySelector('[data-hero-prev]');
        const next = hero.querySelector('[data-hero-next]');
        let index = 0;
        let timer = null;

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('active', slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('active', dotIndex === index);
            });
        }

        function restart() {
            if (timer) {
                window.clearInterval(timer);
            }
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5000);
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                show(Number(dot.dataset.heroTarget || 0));
                restart();
            });
        });

        if (prev) {
            prev.addEventListener('click', function () {
                show(index - 1);
                restart();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(index + 1);
                restart();
            });
        }

        restart();
    }

    const filterScopes = document.querySelectorAll('[data-filter-scope]');

    filterScopes.forEach(function (scope) {
        const input = scope.querySelector('[data-card-filter]');
        const chips = Array.from(scope.querySelectorAll('[data-filter-value]'));
        const list = scope.parentElement.querySelector('[data-card-list]');
        const cards = list ? Array.from(list.querySelectorAll('.movie-card')) : [];
        let chipValue = '';

        function normalize(value) {
            return String(value || '').trim().toLowerCase();
        }

        function applyFilter() {
            const keyword = normalize(input ? input.value : '');
            cards.forEach(function (card) {
                const content = normalize([
                    card.dataset.title,
                    card.dataset.region,
                    card.dataset.type,
                    card.dataset.year,
                    card.dataset.genre,
                    card.dataset.category,
                    card.textContent
                ].join(' '));
                const keywordMatch = !keyword || content.includes(keyword);
                const chipMatch = !chipValue || content.includes(normalize(chipValue));
                card.classList.toggle('is-filtered-out', !(keywordMatch && chipMatch));
            });
        }

        if (input) {
            input.addEventListener('input', applyFilter);
        }

        chips.forEach(function (chip) {
            chip.addEventListener('click', function () {
                chipValue = chip.dataset.filterValue || '';
                chips.forEach(function (item) {
                    item.classList.toggle('active', item === chip && chipValue !== '');
                });
                applyFilter();
            });
        });
    });
})();
