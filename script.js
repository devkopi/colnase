document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  // Cambiar color del header al hacer scroll
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Mostrar/ocultar menú hamburguesa
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
    menuToggle.classList.toggle("active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Si el enlace clicado es el de "Consejos", no cierres el menú
      if (item.id === "consejos-link") {
        e.preventDefault(); // evita navegación
        return; // no cerrar menú
      }

      // Cerrar el menú normalmente
      navLinks.classList.remove("show");
      document.body.classList.remove("no-scroll");
      menuToggle.classList.remove("active");
    });
  });

  // Dropdown de "Consejos"
  const consejosLink = document.getElementById("consejos-link");
  const consejosDropdown = consejosLink?.parentElement;

  if (consejosLink && consejosDropdown) {
    consejosLink.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); //  IMPORTANTE para móviles: evita que el evento burbujee
      consejosDropdown.classList.toggle("show");
    });

    // Cerrar si se hace clic fuera
    window.addEventListener("click", function (e) {
      if (!consejosDropdown.contains(e.target)) {
        consejosDropdown.classList.remove("show");
      }
    });
  }

  // Carrusel
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const intervalTime = 5000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  if (slides.length > 0 && dots.length > 0) {
    let slideInterval = setInterval(nextSlide, intervalTime);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      });
    });

    showSlide(currentIndex);
  }
});
