(function () {
  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function loadHls(callback) {
    if (window.Hls) {
      callback();
      return;
    }
    var script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.5.20/dist/hls.min.js";
    script.onload = callback;
    document.head.appendChild(script);
  }

  ready(function () {
    Array.prototype.slice.call(document.querySelectorAll(".video-shell")).forEach(function (shell) {
      var video = shell.querySelector("video");
      var cover = shell.querySelector(".video-cover");
      if (!video) {
        return;
      }
      var stream = video.getAttribute("data-stream");
      var started = false;

      function playNow() {
        shell.classList.add("playing");
        var promise = video.play();
        if (promise && promise.catch) {
          promise.catch(function () {});
        }
      }

      function start() {
        if (!stream) {
          return;
        }
        if (started) {
          playNow();
          return;
        }
        started = true;
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = stream;
          playNow();
          return;
        }
        loadHls(function () {
          if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls({ enableWorker: true });
            hls.loadSource(stream);
            hls.attachMedia(video);
            hls.on(window.Hls.Events.MANIFEST_PARSED, playNow);
          } else {
            video.src = stream;
            playNow();
          }
        });
      }

      if (cover) {
        cover.addEventListener("click", start);
      }
      video.addEventListener("click", function () {
        if (video.paused) {
          start();
        }
      });
      video.addEventListener("play", function () {
        shell.classList.add("playing");
      });
    });
  });
})();
