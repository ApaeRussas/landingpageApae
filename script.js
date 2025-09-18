window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const maxScroll = 250;
    const scroll = window.scrollY;

    const opacity = Math.min(scroll / maxScroll, 1);

    // efeito suave no background e sombra
    header.style.transition = 'background-color 0.3s, box-shadow 0.3s';
    header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    header.style.boxShadow = `0 4px 12px rgba(0,0,0,${0.1 * opacity})`;

    if(scroll > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll("section[id]");

// Função para atualizar link ativo conforme scroll
function setActiveLink() {
  let index = sections.length;

  while(--index && window.scrollY + 80 < sections[index].offsetTop) {}

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

// Atualiza ativo no scroll
setActiveLink();
window.addEventListener('scroll', setActiveLink);

// Smooth scroll nos links do menu e hero
const smoothLinks = document.querySelectorAll('.main-nav a, .hero-ctas a, .btn-donate');

smoothLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
});


// Carousel Eventos
const carousel = document.querySelector('.eventos-carousel');
const items = Array.from(carousel.children);

// Clona os itens para o efeito contínuo
items.forEach(item => {
  const clone = item.cloneNode(true);
  carousel.appendChild(clone);
});

let scrollPos = 0;
const speed = 0.5;

function scrollCarousel() {
  scrollPos += speed;
  if(scrollPos >= carousel.scrollWidth / 2) {
    scrollPos = 0;
  }
  carousel.scrollLeft = scrollPos;
  requestAnimationFrame(scrollCarousel);
}

scrollCarousel();

