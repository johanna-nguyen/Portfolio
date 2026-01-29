function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

loadHTML("header", "components/header.html");
loadHTML("cv-section", "components/cv-section.html", initCVSection);
loadHTML("projects-section", "components/projects-section.html", initProjectSlider);
loadHTML("contact-section", "components/contact-section.html", initContactForm);
loadHTML("footer", "components/footer.html");


