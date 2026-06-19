(function () {
    const input = document.getElementById('searchPageInput');
    const form = document.getElementById('searchPageForm');
    const results = document.getElementById('searchResults');
    const title = document.getElementById('searchResultsTitle');
    const data = Array.isArray(window.MOVIE_SEARCH_DATA) ? window.MOVIE_SEARCH_DATA : MOVIE_SEARCH_DATA;
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q') || '';

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function normalize(value) {
        return String(value || '').trim().toLowerCase();
    }

    function render(query) {
        const keyword = normalize(query);
        const matched = keyword
            ? data.filter(function (item) {
                return normalize([
                    item.title,
                    item.year,
                    item.region,
                    item.type,
                    item.genre,
                    item.category,
                    item.description,
                    (item.tags || []).join(' ')
                ].join(' ')).includes(keyword);
            }).slice(0, 120)
            : data.slice(0, 60);

        if (title) {
            title.textContent = keyword ? '搜索结果：' + query : '推荐内容';
        }

        if (!results) {
            return;
        }

        results.innerHTML = matched.map(function (item) {
            const tags = (item.tags || []).slice(0, 3).map(function (tag) {
                return '<span>' + escapeHtml(tag) + '</span>';
            }).join('');
            return [
                '<article class="movie-card">',
                '    <a class="poster-shell" href="' + escapeHtml(item.href) + '">',
                '        <img src="' + escapeHtml(item.cover) + '" alt="' + escapeHtml(item.title) + '" loading="lazy">',
                '        <span class="card-play">▶</span>',
                '        <span class="card-duration">' + escapeHtml(item.duration) + '</span>',
                '    </a>',
                '    <div class="card-body">',
                '        <a class="card-title" href="' + escapeHtml(item.href) + '">' + escapeHtml(item.title) + '</a>',
                '        <p class="card-desc">' + escapeHtml(item.description) + '</p>',
                '        <div class="card-meta">',
                '            <span>' + escapeHtml(item.year) + '</span>',
                '            <span>' + escapeHtml(item.region) + '</span>',
                '            <span>' + escapeHtml(item.type) + '</span>',
                '        </div>',
                '        <div class="tag-row">' + tags + '</div>',
                '    </div>',
                '</article>'
            ].join('');
        }).join('');
    }

    if (input) {
        input.value = initialQuery;
    }

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const query = input ? input.value.trim() : '';
            const nextUrl = query ? 'search.html?q=' + encodeURIComponent(query) : 'search.html';
            window.history.replaceState(null, '', nextUrl);
            render(query);
        });
    }

    if (input) {
        input.addEventListener('input', function () {
            render(input.value.trim());
        });
    }

    render(initialQuery);
})();
