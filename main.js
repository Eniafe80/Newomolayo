const slider = document.getElementById("heroSlider");

const images = [
  "placeholder1.jpg",
  "placeholder2.jpg",
  "placeholder3.jpg"
];

let current = 0;

function changeSlide() {
  current = (current + 1) % images.length;
  slider.style.backgroundImage = `url(${images[current]})`;
}

slider.style.backgroundImage = `url(${images[0]})`;
setInterval(changeSlide, 4000);
