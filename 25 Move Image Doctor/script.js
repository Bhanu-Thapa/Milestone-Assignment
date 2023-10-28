let slides = document.querySelectorAll('.slide');

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    preimg();
  } else if (e.code === 'ArrowRight') {
    nextimg();
  }
});

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let count = 0;

let preimg = () => {
  if (count != 0) {
    --count;
    imgslider();
  }
};

function nextimg() {
  if (count != slides.length - 1) {
    ++count;
    imgslider();
  }
}

function imgslider() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
