const burgerCheckbox = document.querySelector(".burger-checkbox");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__link");
const body = document.body;
const header = document.querySelector(".header");

// HTML templates for modals
const modalTemplates = [
  // Template for Druk UV (first modal)
  `<h3 class="modal__title">Druk UV</h3>
   <p class="modal__paragraph">Druk UV na wszelkich materiałach sztywnych, takich jak np. PCV, karton, dibond, plexi, szkło, sklejka i temu podobne.</p>
   <p class="modal__paragraph">Max. szerokość płyt 205cm, długość bez ograniczeń.</p>
   <p class="modal__paragraph">Drukujemy również białym kolorem, robimy wydruki do podświetleń (podwójne nałożenie atramentu w jednym przebiegu)</p>
   <ul class="modal__list">
     <li class="modal__item">Rozdzielczość 1000 dpi, wydajność 60m2/1h</li>
     <li class="modal__item">System rolkowy do 200 cm szerokość rolki</li>
     <li class="modal__item">Druk świetnie poddaje się termoformowaniu</li>
   </ul>
   <p class="modal__paragraph">To jedna z najlepszych technologi druku na świecie stosunek jakości do szybkości produkcji czyni to urządzenie w pełni przemysłowym. Fabryka Dursta to ośrodek badawczo produkcyjny wykorzystujący najnowsze dostępne technologie.</p>`,

  // Template for Frezowanie CNC (second modal)
  `<h3 class="modal__title">Frezowanie CNC</h3>
   <p class="modal__paragraph">Podchodząc do każdego zlecenia z wielkim zainteresowaniem i zapałem, oferujemy Państwu profesjonalne frezowanie, wycinanie i wiercenie CNC 2D oraz 3D. <strong>Posiadamy trzyosiowe centrum obróbcze CNC o polu roboczym 4100x2100x200mm.</strong> Nasz ploter pozwala nam realizować najbardziej skomplikowane zamówienia.</p>
   <span>Materiały, które jesteśmy w stanie poddać obróbce to:</span>
   <ul class="modal__list">
    <li class="modal__item">płyty kompozytowe</li>
    <li class="modal__item">tworzywa sztuczne</li>
    <li class="modal__item">drewno i drewnopochodne</li>
    <li class="modal__item">metale kolorowe</li>
   </ul>`,

  // Template for Reklama wizualna (third modal)
  `<h3 class="modal__title">Reklama wizualna</h3>
  <span>W ofercie posiadamy kasetony reklamowe wykonane między innymi:</span>
   <ul class="modal__list">
    <li class="modal__item">z płyt kompozytowych dibond</li>
    <li class="modal__item">z aluminium</li>
    <li class="modal__item">z plexi</li>
    <li class="modal__item">na ramie aluminiowej z wymiennym licem z plexi lub poliwęglanu</li>
    <li class="modal__item">z napinanym licem (dowolny rozmiar)</li>
   </ul>
  <p class="modal__paragraph">Tworzymy również meble reklamowe. Dzięki kompleksowemu podejściu do potrzeb klienta proponujemy gotowe zestawy  dostosowane do wymogów zleceniodawców zarówno pod kątem szerokości jak i głębokości półek, kolorystyki asortymentu uzupełniającego, tj. haków, listew do umieszczenia cen czy też wykonywanych na zmówienie  specjalnych uchwytów pod określony produkt. Nasze regały są malowane  proszkowo, natomiast klient ma możliwość wyboru kolorystyki według  palety RAL.</p>`,
];

// Images for modals
const modalImages = [
  "img/modal1.webp", // for Druk UV
  "img/modal2.webp", // for Frezowanie CNC
  "img/modal3.webp", // for Reklama wizualna
  "img/modal1__1000.webp", // for Druk UV 1000px
  "img/modal2__1000.webp", // for Frezowanie CNC 1000px
  "img/modal3__1000.webp", // for Reklama wizualna 1000px
];

// Variable to track the current open modal window
let currentModalIndex = null;

// Check if menu elements exist before adding event handlers
if (burgerCheckbox && menu && header) {
  burgerCheckbox.addEventListener("change", () => {
    if (burgerCheckbox.checked) {
      menu.classList.add("active");
      header.classList.add("menu-open");
      body.classList.add("no-scroll");
    } else {
      menu.classList.remove("active");
      header.classList.remove("menu-open");
      body.classList.remove("no-scroll");
    }
  });

  // close menu by click on link
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      burgerCheckbox.checked = false;
      menu.classList.remove("active");
      header.classList.remove("menu-open");
      body.classList.remove("no-scroll");
    });
  });

  // close menu by click on free space
  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      burgerCheckbox.checked = false;
      menu.classList.remove("active");
      header.classList.remove("menu-open");
      body.classList.remove("no-scroll");
    }
  });

  // close menu by click on free escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && burgerCheckbox.checked) {
      burgerCheckbox.checked = false;
      menu.classList.remove("active");
      header.classList.remove("menu-open");
      body.classList.remove("no-scroll");
    }
  });
}

// smooth scroll by links
document.addEventListener("DOMContentLoaded", () => {
  // reset the current menu state when the page is launched
  if (burgerCheckbox && menu && header) {
    burgerCheckbox.checked = false;
    menu.classList.remove("active");
    header.classList.remove("menu-open");
    body.classList.remove("no-scroll");
  }

  const anchorLinks = document.querySelectorAll('.header__link[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      const targetId = href.substring(1); // deleting "#"
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Initialize Splide only if the element exists and the library is loaded
  const portfolioElement = document.querySelector("#portfolio");
  if (portfolioElement && typeof Splide !== "undefined") {
    new Splide("#portfolio", {
      arrows: false,
      pagination: true,
      perPage: 4,
      gap: "20px",
      breakpoints: {
        768: {
          perPage: 2,
        },
      },
    }).mount();
  }

  const modal = document.querySelector(".modal");
  const modalItems = document.querySelectorAll(".production__item");

  // Add click event listeners with index
  modalItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      fillModal(index);
      openModal(modal);
    });
  });
  preloadModalImages();
});

// Function to preload all modal images
function preloadModalImages() {
  modalImages.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
}

// Function to determine the correct image index
function getImageIndex(modalIndex) {
  // If screen width is less than 1000px, use images with __1000px suffix
  return window.innerWidth < 1000 ? modalIndex + 3 : modalIndex;
}

function fillModal(modalIndex) {
  const modal = document.querySelector(".modal");
  const modalText = modal.querySelector(".modal__text");
  const modalImage = modal.querySelector("img");

  // Save the current modal index
  currentModalIndex = modalIndex;

  modalText.innerHTML = modalTemplates[modalIndex];

  // Determine image index based on screen width
  const imageIndex = getImageIndex(modalIndex);
  modalImage.src = modalImages[imageIndex];
}

// Function to update image in the open modal window
function updateModalImage() {
  if (currentModalIndex !== null) {
    const modal = document.querySelector(".modal");
    const modalImage = modal.querySelector("img");

    if (modal.classList.contains("popup_is-opened")) {
      const imageIndex = getImageIndex(currentModalIndex);
      modalImage.src = modalImages[imageIndex];
    }
  }
}

function openModal(modal) {
  document.addEventListener("keydown", closeModalByEscape);
  modal.addEventListener("click", handleCloseModalByClick);

  // Add close button event listener
  const closeButton = modal.querySelector(".modal__close");
  if (closeButton) {
    closeButton.addEventListener("click", () => closeModal(modal));
  }

  modal.classList.add("popup_is-opened");
  body.classList.add("no-scroll");
}

function closeModal(modal) {
  document.removeEventListener("keydown", closeModalByEscape);
  modal.removeEventListener("click", handleCloseModalByClick);

  // Remove close button event listener
  const closeButton = modal.querySelector(".modal__close");
  if (closeButton) {
    closeButton.removeEventListener("click", () => closeModal(modal));
  }

  modal.classList.remove("popup_is-opened");
  body.classList.remove("no-scroll");

  // Reset the current modal index
  currentModalIndex = null;
}

function closeModalByEscape(event) {
  if (event.key === "Escape") {
    const openPopup = document.querySelector(".popup.popup_is-opened");
    if (openPopup) {
      closeModal(openPopup);
    }
  }
}

function handleCloseModalByClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("popup__close") ||
    evt.target.closest(".modal__close")
  ) {
    closeModal(evt.currentTarget);
  }
}

// Window resize event handler to update image in modal window
window.addEventListener("resize", () => {
  updateModalImage();
});

// Validation form
const contactForm = document.forms.form;

const emailField = contactForm.email;
const phoneField = contactForm.phone;
const messageField = contactForm.message;
const submitBtn = contactForm.querySelector(".form-submit");

const emailError = contactForm.querySelector("#emailError");
const phoneError = contactForm.querySelector("#phoneError");
const messageError = contactForm.querySelector("#messageError");

const emailRequired = contactForm.querySelector(".email-required");
const phoneRequired = contactForm.querySelector(".phone-required");

const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRe = /^(?:\+48|0048|48)?[4-8]\d{8}$/;

// Function to check the validity of all fields
function checkFormValidity() {
  const isEmailValid = emailField.value.trim() && emailRe.test(emailField.value.trim());
  const isPhoneValid = phoneField.value.trim() && phoneRe.test(phoneField.value.trim());
  const isMessageValid = messageField.value.trim();

  // If all fields are valid, remove the inactive class
  if (isEmailValid && isPhoneValid && isMessageValid) {
    submitBtn.classList.remove("form-submit-inactive");
  } else {
    submitBtn.classList.add("form-submit-inactive");
  }
}

// Email validation function
function validateEmail() {
  if (!emailField.value.trim()) {
    emailRequired.style.display = "block";
    emailError.style.display = "none";
    return false;
  } else if (!emailRe.test(emailField.value.trim())) {
    emailRequired.style.display = "none";
    emailError.style.display = "block";
    return false;
  } else {
    emailRequired.style.display = "none";
    emailError.style.display = "none";
    return true;
  }
}

// Phone validation function
function validatePhone() {
  if (!phoneField.value.trim()) {
    phoneRequired.style.display = "block";
    phoneError.style.display = "none";
    return false;
  } else if (!phoneRe.test(phoneField.value.trim())) {
    phoneRequired.style.display = "none";
    phoneError.style.display = "block";
    return false;
  } else {
    phoneRequired.style.display = "none";
    phoneError.style.display = "none";
    return true;
  }
}

// Message validation function
function validateMessage() {
  if (!messageField.value.trim()) {
    messageError.style.display = "block";
    return false;
  } else {
    messageError.style.display = "none";
    return true;
  }
}

// Event handlers for real-time verification
emailField.addEventListener("input", () => {
  validateEmail();
  checkFormValidity();
});

emailField.addEventListener("blur", () => {
  validateEmail();
  checkFormValidity();
});

phoneField.addEventListener("input", () => {
  validatePhone();
  checkFormValidity();
});

phoneField.addEventListener("blur", () => {
  validatePhone();
  checkFormValidity();
});

messageField.addEventListener("input", () => {
  validateMessage();
  checkFormValidity();
});

messageField.addEventListener("blur", () => {
  validateMessage();
  checkFormValidity();
});

// Form submission handler with reCAPTCHA
contactForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  // Validation of all fields
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  // Checking the status of the button
  checkFormValidity();

  // If all fields are valid, doing reCAPTCHA
  if (isEmailValid && isPhoneValid && isMessageValid) {
    await executeRecaptchaAndSubmit();
  }
});

// Form submission function with reCAPTCHA
async function submitForm(recaptchaToken) {
  const formStatus = document.getElementById("formStatus");

  try {
    // Showing that sending is in progress
    formStatus.textContent = "Wysyłanie...";
    submitBtn.disabled = true;

    // Create form data
    const formData = new FormData(contactForm);

    // Send to Formspree
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Sent successfully
      formStatus.textContent = "Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.";
      formStatus.style.color = "green";

      // Hide reCAPTCHA status after successful submission
      if (recaptchaStatus) {
        recaptchaStatus.style.display = "none";
      }

      contactForm.reset(); // Clear the form
      checkFormValidity(); // Update button status
    } else {
      throw new Error("Network error");
    }
  } catch (error) {
    // Error sending
    formStatus.textContent = "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.";
    formStatus.style.color = "red";
  } finally {
    // Turn the button back on
    submitBtn.disabled = false;
  }
}

// Initial check when loading the page
checkFormValidity();

// ========== NEW FEATURES FOR reCAPTCHA ==========
const SITE_KEY = "6Lcdtc8rAAAAAGL9YbULdZNBsOQMrt5WZ09Haa6p";
const recaptchaStatus = document.getElementById("recaptchaStatus");

// Main function for executing reCAPTCHA and sending
async function executeRecaptchaAndSubmit() {
  try {
    // Block the button without showing the status
    submitBtn.disabled = true;

    // Perform reCAPTCHA
    const token = await executeRecaptcha();

    // If the token is received, send the form
    if (token) {
      await submitForm(token);
    }
  } catch (error) {
    console.error("reCAPTCHA error:", error);
    const formStatus = document.getElementById("formStatus");
    formStatus.textContent = "Wystąpił błąd. Spróbuj ponownie.";
    formStatus.style.color = "red";
    submitBtn.disabled = false;
  }
}

// Performing reCAPTCHA
function executeRecaptcha() {
  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(SITE_KEY, { action: "contact_form" })
        .then((token) => {
          console.log("reCAPTCHA token received:", token);
          resolve(token);
        })
        .catch(reject);
    });
  });
}

// Display reCAPTCHA status
function showRecaptchaStatus(type, message) {}
