(function () {
    function setupPlayer(options) {
        var video = document.getElementById(options.videoId);
        var overlay = document.getElementById(options.overlayId);
        var button = document.getElementById(options.buttonId);
        var loaded = false;
        var hlsInstance = null;

        if (!video) {
            return;
        }

        function loadVideo() {
            if (loaded) {
                return;
            }

            loaded = true;

            if (video.canPlayType("application/vnd.apple.mpegurl")) {
                video.src = options.url;
                return;
            }

            if (window.Hls && window.Hls.isSupported()) {
                hlsInstance = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hlsInstance.loadSource(options.url);
                hlsInstance.attachMedia(video);
                return;
            }

            video.src = options.url;
        }

        function start() {
            loadVideo();
            video.controls = true;
            if (overlay) {
                overlay.classList.add("is-hidden");
            }
            var promise = video.play();
            if (promise && typeof promise.catch === "function") {
                promise.catch(function () {
                    if (overlay) {
                        overlay.classList.remove("is-hidden");
                    }
                });
            }
        }

        if (button) {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                start();
            });
        }

        if (overlay) {
            overlay.addEventListener("click", start);
        }

        video.addEventListener("click", function () {
            if (!loaded || video.paused) {
                start();
            }
        });

        video.addEventListener("ended", function () {
            if (overlay) {
                overlay.classList.remove("is-hidden");
            }
        });

        window.addEventListener("pagehide", function () {
            if (hlsInstance) {
                hlsInstance.destroy();
            }
        });
    }

    window.setupPlayer = setupPlayer;
})();
