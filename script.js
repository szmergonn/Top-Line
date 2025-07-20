const burgerCheckbox = document.querySelector(".burger-checkbox");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".header__link");
const body = document.body;
const header = document.querySelector(".header");

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

// Закрытие меню при клике на ссылки
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerCheckbox.checked = false;
    menu.classList.remove("active");
    header.classList.remove("menu-open");
    body.classList.remove("no-scroll");
  });
});

// Закрытие меню при клике вне его области
menu.addEventListener("click", (e) => {
  if (e.target === menu) {
    burgerCheckbox.checked = false;
    menu.classList.remove("active");
    header.classList.remove("menu-open");
    body.classList.remove("no-scroll");
  }
});

// Закрытие меню при нажатии Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && burgerCheckbox.checked) {
    burgerCheckbox.checked = false;
    menu.classList.remove("active");
    header.classList.remove("menu-open");
    body.classList.remove("no-scroll");
  }
});

// Плавная прокрутка к якорным ссылкам
document.addEventListener('DOMContentLoaded', () => {
  // Сброс состояния мобильного меню при загрузке страницы
  burgerCheckbox.checked = false;
  menu.classList.remove("active");
  header.classList.remove("menu-open");
  body.classList.remove("no-scroll");
  
  const anchorLinks = document.querySelectorAll('.header__link[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const targetId = href.substring(1); // убираем #
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});