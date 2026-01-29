const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

const leftZone = document.querySelector(".hover-zone.left");
const rightZone = document.querySelector(".hover-zone.right");

let index = 0;
let isHovering = false;

function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateSlide();
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1;
  }
  updateSlide();
}

let hoverTimeout;

rightZone.addEventListener("mouseenter", () => {
  hoverTimeout = setTimeout(nextSlide, 300);
});

leftZone.addEventListener("mouseenter", () => {
  hoverTimeout = setTimeout(prevSlide, 300);
});

rightZone.addEventListener("mouseleave", () => {
  clearTimeout(hoverTimeout);
});

leftZone.addEventListener("mouseleave", () => {
  clearTimeout(hoverTimeout);
});
