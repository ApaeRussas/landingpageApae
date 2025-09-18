window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const maxScroll = 250; // altura em que o header ficará totalmente branco
    const scroll = window.scrollY;

    // calcula opacidade proporcional ao scroll
    const opacity = Math.min(scroll / maxScroll, 1);

    header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    header.style.boxShadow = `0 4px 12px rgba(0,0,0,${0.1 * opacity})`;

    // alterna classe scrolled se quiser manter efeitos de links
    if(scroll > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Seleciona todos os links do menu
const navLinks = document.querySelectorAll('.main-nav a');

// Função para atualizar link ativo conforme o scroll
function setActiveLink() {
  let index = sections.length;

  while(--index && window.scrollY + 80 < sections[index].offsetTop) {} // 80px pra compensar header

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

// Pega todas as seções com id (sobre, projetos, etc)
const sections = document.querySelectorAll("section[id]");

// Atualiza ativo no scroll
setActiveLink();
window.addEventListener('scroll', setActiveLink);

// Smooth scroll nos cliques
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Smooth scroll nos botões do hero
const heroCtas = document.querySelectorAll('.hero-ctas a');

heroCtas.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 0.5; // mais lento
  if(scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  }
  carousel.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}

autoScroll();


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');      // abre/fecha menu
  hamburger.classList.toggle('open');    // muda ícone
});


