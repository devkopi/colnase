document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.querySelector('.loading-text'); // Seleccionar por clase
    const progress = document.querySelector('.progress'); // Seleccionar por clase
    const loadingContainer = document.querySelector('.loading-container'); // Seleccionar por clase

    let dots = '', progressWidth = 0;

    // Animación del texto de carga
    const textInterval = setInterval(() => {
        loadingText.textContent = 'Cargando' + (dots = dots.length < 3 ? dots + '.' : '');
    }, 500);

    // Animación de la barra de progreso
    const progressInterval = setInterval(() => {
        progressWidth += 5; // Incrementamos en 5 cada vez
        progress.style.width = `${progressWidth}%`;

        if (progressWidth >= 100) {
            clearInterval(textInterval);
            clearInterval(progressInterval);
            loadingText.textContent = '¡Carga Completa!';

            // Agregar la clase para la animación de salida
            loadingContainer.classList.add('fade-out');

            // Esperar a que termine la animación y luego eliminar el contenedor
            loadingContainer.addEventListener('transitionend', () => {
                loadingContainer.remove();
            });
        }
    }, 200);
});



document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll("#nav-links li a");

    // Cambiar color del header al hacer scroll
    window.addEventListener("scroll", function () {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Mostrar/ocultar menú hamburguesa
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Cerrar menú al hacer clic en un enlace
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("show");
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const intervalTime = 5000; // Cambia cada 5 segundos

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Cambia de imagen automáticamente
    let slideInterval = setInterval(nextSlide, intervalTime);

    // Cambia de imagen al hacer clic en los puntos
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        });
    });

    // Carga inicial de la primera imagen
    showSlide(currentIndex);
});


// Mostrar / ocultar submenú al hacer click
const consejosLink = document.getElementById("consejos-link");
const dropdown = consejosLink.parentElement;

consejosLink.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("show");
});

// Cerrar el submenú al hacer click fuera
window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});

// Desplegar menú ENTREVISTAS
document.getElementById("entrevistas-link").addEventListener("click", function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle("show");
});




// Movimiento del robot al pasar el mouse
document.querySelector('.hero').addEventListener('mousemove', function (e) {
    const robot = document.querySelector('.robot');
    const robotHead = document.querySelector('.robot-head');
    const eyes = document.querySelectorAll('.eye');

    // Mover robot
    const moveX = (e.clientX / window.innerWidth) - 0.5;
    const moveY = (e.clientY / window.innerHeight) - 0.5;

    robot.style.transform = `rotate(${moveX * 20}deg)`;
    robotHead.style.transform = `rotate(${moveY * 10}deg)`;

    // Mover los ojos del robot
    eyes.forEach(eye => {
        eye.style.transform = `translate(${moveX * 10}px, ${moveY * 10}px)`;
    });
});

