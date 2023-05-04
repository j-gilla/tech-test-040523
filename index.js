var slideIndex = 0;
var slides = document.querySelectorAll('#carousel .slide');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  for (var i = 0; i < slides.length; i++) {
    var offset = (i - index) * 100;
    if (i == 0 && index == slides.length - 1) {
      offset += slides.length * 100;
    } else if (i == slides.length - 1 && index == 0) {
      offset -= slides.length * 100;
    }
    slides[i].style.transform = 'translateX(' + offset + '%)';
  }
}

function nextSlide() {
  slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : 0;
  showSlide(slideIndex);
}

function setBackgroundImageForCTASquares() {
  const ctaBoxes = document.querySelectorAll('.cta-box');

  ctaBoxes.forEach((ctaBox) => {
    const imageUrl = ctaBox.getAttribute('data-image');
    ctaBox.style.backgroundImage = `url(${imageUrl})`;
    ctaBox.addEventListener('click', function () {
      const slideIndex = parseInt(ctaBox.getAttribute('data-slide-index'));
      showSlide(slideIndex);
    });
  });
}

setBackgroundImageForCTASquares();

showSlide(slideIndex);

document.getElementById('previous').addEventListener('click', function () {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : slides.length - 1;
  showSlide(slideIndex);
});

document.getElementById('next').addEventListener('click', function () {
  slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : 0;
  showSlide(slideIndex);
});
