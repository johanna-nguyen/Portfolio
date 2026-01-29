let contactFormInitialized = false;

function initContactForm() {
  if (contactFormInitialized) return;
  contactFormInitialized = true;

  const form = document.getElementById("contact-form");
  if (!form) return;

  const popup = document.getElementById("success-popup");
  const closeBtn = document.getElementById("popup-close");
  const fields = form.querySelectorAll(".field");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    fields.forEach(field => {
      field.querySelector(".error").textContent = "";
    });

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      showError("name", "Name is required");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError("email", "Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      showError("email", "Invalid email format");
      isValid = false;
    }

    if (!message) {
      showError("message", "Message cannot be empty");
      isValid = false;
    }

    if (!isValid) return;

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    }).then(res => {
      if (res.ok) {
        popup.classList.add("active");
        form.reset();
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  function showError(fieldName, message) {
    const field = form.querySelector(`[name="${fieldName}"]`).parentElement;
    field.querySelector(".error").textContent = message;
  }
}
