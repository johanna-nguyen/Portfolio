function initProjectSlider() {
  const slides = document.querySelector(".slides");
  const slideItems = document.querySelectorAll(".slide");
  const rightBtn = document.querySelector(".arrow.right");
  const leftBtn = document.querySelector(".arrow.left");

  if (!slides || slideItems.length === 0) return;

  let index = 0;
  let interval = null;

  function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % slideItems.length;
    showSlide();
    resetAuto();
  }

  function prevSlide() {
    index = (index - 1 + slideItems.length) % slideItems.length;
    showSlide();
    resetAuto();
  }

  function startSlider() {
    if (interval) return;
    interval = setInterval(() => {
      nextSlide();
    }, 2000);
  }

  function stopSlider() {
    clearInterval(interval);
    interval = null;
  }

  function resetAuto() {
    stopSlider();
    startSlider();
  }

  // Hover pause
  slides.addEventListener("mouseenter", stopSlider);
  slides.addEventListener("mouseleave", startSlider);

  // Arrow buttons
  if (rightBtn && leftBtn) {
    rightBtn.onclick = nextSlide;
    leftBtn.onclick = prevSlide;
  }

  // Keyboard control
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  startSlider();
}
