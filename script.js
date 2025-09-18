/* ==========================================
   HEADER SCROLL EFFECT
   Altera a cor de fundo e sombra do header
   conforme o usuário rola a página
========================================== */
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const maxScroll = 250;
    const scroll = window.scrollY;

    const opacity = Math.min(scroll / maxScroll, 1);
    header.style.transition = 'background-color 0.3s, box-shadow 0.3s';
    header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    header.style.boxShadow = `0 4px 12px rgba(0,0,0,${0.1 * opacity})`;

    if(scroll > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* ==========================================
   ACTIVE NAV LINK
   Define qual link da navegação deve estar ativo
   com base na seção visível no scroll
========================================== */
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll("section[id]");

function setActiveLink() {
  let index = sections.length;

  while(--index && window.scrollY + 80 < sections[index].offsetTop) {}

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

setActiveLink();
window.addEventListener('scroll', setActiveLink);


/* ==========================================
   SMOOTH SCROLL
   Anima a rolagem para a seção ao clicar nos links
========================================== */
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

/* ==========================================
   ANIMAÇÃO SEÇÕES SOBRE NÓS E MVV
   Faz elementos aparecerem ao entrar na tela
========================================== */
const animateSobre = () => {
    const elements = document.querySelectorAll('.sobre-text p, .sobre-img img, .mvv');
    const windowHeight = window.innerHeight;
  
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) { // 100px antes de chegar ao topo
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'all 0.8s ease-out';
      }
    });
  };
  
  window.addEventListener('scroll', animateSobre);
  window.addEventListener('load', animateSobre);
  


/* ==========================================
   HAMBURGER MENU
   Abre e fecha o menu em telas menores
========================================== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
});


/* ==========================================
   EVENTOS CAROUSEL
   Clona itens para rolagem infinita
   e anima o scroll horizontal
========================================== */
const carousel = document.querySelector('.eventos-carousel');
const items = Array.from(carousel.children);

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



const cards = document.querySelectorAll('.atividades-item');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // posição do mouse dentro do card
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5; // intensidade
    const rotateY = ((x - centerX) / centerX) * -5;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
});

