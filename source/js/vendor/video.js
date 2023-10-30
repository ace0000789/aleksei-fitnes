export function initVideo() {
  let buttonVideo = document.querySelector('.about-us__video-button');
  let container = document.querySelector('.about-us__video');

  buttonVideo.addEventListener('click', function () {

    if (buttonVideo.classList.contains('ready')) {
      return;
    }

    buttonVideo.classList.add('ready');
    container.innerHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?si=VTjj2qUjkgYfiWLC&amp;autoplay=1" preload="auto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

    buttonVideo.style.display = 'none';
  });
}
