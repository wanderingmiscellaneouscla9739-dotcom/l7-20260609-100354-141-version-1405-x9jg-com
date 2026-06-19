(function () {
    const shells = document.querySelectorAll('.player-shell');

    shells.forEach(function (shell) {
        const video = shell.querySelector('.video-player');
        const overlay = shell.querySelector('.player-overlay');
        let hls = null;
        let initialized = false;

        function start() {
            if (!video) {
                return;
            }

            const stream = video.dataset.stream || '';

            if (!stream) {
                return;
            }

            if (!initialized) {
                initialized = true;

                if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = stream;
                } else if (window.Hls && window.Hls.isSupported()) {
                    hls = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hls.loadSource(stream);
                    hls.attachMedia(video);
                    hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
                        video.play().catch(function () {});
                    });
                    hls.on(window.Hls.Events.ERROR, function (event, data) {
                        if (!data || !data.fatal || !hls) {
                            return;
                        }
                        if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
                            hls.startLoad();
                        } else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
                            hls.recoverMediaError();
                        } else {
                            hls.destroy();
                        }
                    });
                }
            }

            if (overlay) {
                overlay.classList.add('is-hidden');
            }

            video.play().catch(function () {});
        }

        if (overlay) {
            overlay.addEventListener('click', start);
        }

        if (video) {
            video.addEventListener('click', function () {
                if (video.paused) {
                    start();
                } else {
                    video.pause();
                }
            });
        }
    });
})();
