const root = document.documentElement;
const themeBtn = document.getElementById("theme");

const savedTheme = localStorage.getItem("apae-theme");

function setTheme(theme) {
  root.dataset.theme = theme;

  if (themeBtn) {
    themeBtn.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  }

  localStorage.setItem("apae-theme", theme);
}

// Define o tema inicial
setTheme(savedTheme || "light");

// Alterna entre tema claro e escuro
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const currentTheme = root.dataset.theme;

    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

const newsTrack = document.getElementById('newsTrack');
const prevBtn = document.querySelector('.news-prev');
const nextBtn = document.querySelector('.news-next');

if (newsTrack && prevBtn && nextBtn) {
  const scrollAmount = () => newsTrack.querySelector('.news-card').offsetWidth + 24; // largura do card + gap

  prevBtn.addEventListener('click', () => {
    newsTrack.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    newsTrack.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });

  // opcional: desabilita os botões nas pontas do scroll
  const updateButtons = () => {
    prevBtn.disabled = newsTrack.scrollLeft <= 0;
    nextBtn.disabled = newsTrack.scrollLeft + newsTrack.clientWidth >= newsTrack.scrollWidth - 1;
  };
  newsTrack.addEventListener('scroll', updateButtons);
  window.addEventListener('load', updateButtons);
}


document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('header nav');

    if (!menuBtn || !nav) return;

    function fecharMenu() {
        nav.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Abrir menu');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    function abrirMenu() {
        nav.classList.add('active');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', 'Fechar menu');
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }

    menuBtn.addEventListener('click', function () {
        if (nav.classList.contains('active')) {
            fecharMenu();
        } else {
            abrirMenu();
        }
    });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', fecharMenu);
    });

    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            fecharMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            fecharMenu();
        }
    });

    fecharMenu();
});
