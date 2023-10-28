let img = document.querySelector('img');

window.addEventListener('load', () => {
  img.style.position = 'absolute';
  img.style.top = 0;
  img.style.left = 0;
});

let move = 5;
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      img.style.left = parseInt(img.style.left) - move + 'px';
      break;
    case 'ArrowRight':
      img.style.left = parseInt(img.style.left) + move + 'px';
      break;
    case 'ArrowUp':
      img.style.top = parseInt(img.style.top) - move + 'px';
      break;
    case 'ArrowDown':
      img.style.top = parseInt(img.style.top) + move + 'px';
      break;
  }
});
