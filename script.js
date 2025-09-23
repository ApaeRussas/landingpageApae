/* ==========================================
   SELETORES GLOBAIS
========================================== */
const header    = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const navMenu   = document.querySelector(".main-nav");
const navLinks  = document.querySelectorAll(".main-nav a");
const toggleBtn = document.getElementById("toggle-theme");


/* ==========================================
   HEADER SCROLL EFFECT
========================================== */
window.addEventListener("scroll", () => {
  const maxScroll = 250;
  const scroll = window.scrollY;
  const opacity = Math.min(scroll / maxScroll, 1);

  header.style.transition = "background-color 0.3s, box-shadow 0.3s";

  if (document.body.classList.contains("dark")) {
    header.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.9})`;
    header.style.boxShadow = `0 4px 12px rgba(0,0,0,${0.5 * opacity})`;
    hamburger.style.color = "#fff";
  } else {
    header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    header.style.boxShadow = `0 4px 12px rgba(0,0,0,${0.1 * opacity})`;
    hamburger.style.color = scroll > 50 ? "#000" : "#fff";
  }

  header.classList.toggle("scrolled", scroll > 50);
});


/* ==========================================
   ACTIVE NAV LINK
========================================== */
const sections = document.querySelectorAll("section[id]");

function setActiveLink() {
  let index = sections.length;
  while (--index && window.scrollY + 80 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove("active"));
  if (sections[index]) {
    navLinks[index].classList.add("active");
  }
}
setActiveLink();
window.addEventListener("scroll", setActiveLink);


/* ==========================================
   SMOOTH SCROLL
========================================== */
const smoothLinks = document.querySelectorAll('.main-nav a, .hero-ctas a, .btn-donate');

smoothLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({ top: targetSection.offsetTop - 70, behavior: "smooth" });
    }
  });
});


/* ==========================================
   ANIMAÇÃO SEÇÕES SOBRE NÓS E MVV
========================================== */
const animateSobre = () => {
  const elements = document.querySelectorAll(".sobre-text p, .sobre-img img, .mvv");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "all 0.8s ease-out";
    }
  });
};
window.addEventListener("scroll", animateSobre);
window.addEventListener("load", animateSobre);


/* ==========================================
   HAMBURGER MENU
========================================== */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
  hamburger.textContent = hamburger.classList.contains("open") ? "✖" : "☰";
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.textContent = "☰";
  });
});


/* ==========================================
   EVENTOS CAROUSEL
========================================== */
const carousel = document.querySelector(".eventos-carousel");
if (carousel) {
  const items = Array.from(carousel.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  let scrollPos = 0;
  const speed = 0.5;

  function scrollCarousel() {
    scrollPos += speed;
    if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;
    carousel.scrollLeft = scrollPos;
    requestAnimationFrame(scrollCarousel);
  }
  scrollCarousel();
}


/* ========= ROTATION (mouse) usando CSS vars ======== */
const cards = document.querySelectorAll(".atividades-item");
cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * -5;
    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
  });
});


/* ========= SCROLL REVEAL para atividades ======== */
function revealAtividades() {
  document.querySelectorAll(".atividades-item").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("reveal");
    }
  });
}
window.addEventListener("scroll", revealAtividades);
window.addEventListener("load", revealAtividades);


/* ========= AUTO-HIGHLIGHT ATIVIDADES ======== */
let i = 0;
const itens = document.querySelectorAll(".atividades-item");

if (itens.length) {
  setInterval(() => {
    itens.forEach(el => el.classList.remove("auto-hover"));
    itens[i].classList.add("auto-hover");
    i = (i + 1) % itens.length;
  }, 3000);

  itens.forEach((card) => {
    card.addEventListener("mouseenter", () => { card.style.zIndex = 20; });
    card.addEventListener("mouseleave", () => {
      if (!card.classList.contains("auto-hover")) {
        card.style.zIndex = 5 - Array.from(itens).indexOf(card);
      } else {
        card.style.zIndex = 10;
      }
    });
  });
}


/* ==========================================
   DARK MODE TOGGLE
========================================== */
if (!localStorage.getItem("theme")) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }
} else if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});


/* ========= ATIVIDADES MOBILE (sem hover/auto-hover) ======== */
function isMobile() { return window.innerWidth <= 768; }

if (isMobile()) {
  const mobileItems = document.querySelectorAll(".atividades-item");
  mobileItems.forEach(card => { card.style.transform = "none"; card.style.zIndex = 1; });
}


/* ========= MOVE DARK MODE TOGGLE PARA MENU HAMBURGER EM MOBILE ======== */
function updateDarkTogglePosition() {
  if (window.innerWidth <= 768) {
    if (toggleBtn && navMenu && !navMenu.contains(toggleBtn)) {
      navMenu.appendChild(toggleBtn);
      toggleBtn.style.fontSize = "1.2rem";
    }
  } else {
    if (toggleBtn && header && !header.contains(toggleBtn)) {
      header.appendChild(toggleBtn);
      toggleBtn.style.fontSize = "1.5rem";
    }
  }
}
window.addEventListener("resize", updateDarkTogglePosition);
window.addEventListener("load", updateDarkTogglePosition);
