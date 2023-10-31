export function initVideo() {
  const buttonVideo = document.querySelector('[data-validate="play-video"]');
  let container = document.querySelector('[data-validate="container-video"]');

  buttonVideo.addEventListener('click', function () {
    /*
    if (buttonVideo.classList.contains('ready')) {
      return;
    }

    buttonVideo.classList.add('ready');*/
    container.innerHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?si=VTjj2qUjkgYfiWLC&amp;autoplay=1" preload="auto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

    buttonVideo.style.display = 'none';
  });
}
