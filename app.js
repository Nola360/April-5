const headerbg = document.querySelector('#bg');

window.addEventListener('scroll', function () {
  headerbg.style.opacity = 1 - +window.pageYOffset / 550 + '';
  headerbg.style.top = +window.pageOffset + 'px';
  headerbg.style.backgroundPositionY = + window.pageYOffset / 2 + 'px';
})