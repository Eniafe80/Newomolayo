document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const ham = document.querySelector('.hamburger');
  const side = document.querySelector('.sidebar');
  ham.addEventListener('click', () => side.classList.toggle('open'));

  // Hero slider
  const slider = document.getElementById('heroSlider');
  const images = ['placeholder1.jpg','placeholder2.jpg','placeholder3.jpg'];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % images.length;
    slider.style.backgroundImage = `url(${images[idx]})`;
  }, 4000);
});
