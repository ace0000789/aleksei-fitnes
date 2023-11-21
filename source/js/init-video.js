export function initVideo() {
  const buttonVideo = document.querySelector('[data-validate="play-video"]');
  const container = document.querySelector('[data-validate="container-video"]');

  if (!container || !buttonVideo) {
    return;
  }

  function handleVideoButtonClick() {
    container.innerHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?si=VTjj2qUjkgYfiWLC&amp;autoplay=1" preload="auto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    buttonVideo.style.display = 'none';
  }
  buttonVideo.addEventListener('click', handleVideoButtonClick);
}
