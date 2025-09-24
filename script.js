(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================
       SELETORES GLOBAIS
    ===========================================*/
    const header = document.querySelector(".header");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".main-nav");
    const navLinks = document.querySelectorAll(".main-nav a");
    const toggleBtn = document.getElementById("toggle-theme");
    const sections = document.querySelectorAll("section[id]");
    const smoothLinks = document.querySelectorAll(
      ".main-nav a, .hero-ctas a, .btn-donate"
    );
    const carousel = document.querySelector(".eventos-carousel");
    const cards = document.querySelectorAll(".atividades-item");

    const isMobile = () => window.innerWidth <= 768;

    const safeSetColor = (el, color) => {
      if (el) el.style.color = color;
    };

    /* ==========================================
       NAVIGATION COLORS
    ===========================================*/
    const applyNavColors = () => {
      if (!navMenu || !header) return;
      const isOpen = navMenu.classList.contains("open");
      const isDark = document.body.classList.contains("dark");
      const scroll = window.scrollY;

      if (isOpen) {
        navMenu.style.backgroundColor = isDark ? "#111" : "#fff";
      } else {
        navMenu.style.removeProperty("background-color");
      }

      if (!isOpen && scroll === 0) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
        safeSetColor(hamburger, isDark ? "#fff" : "#fff");
      } else {
        if (isDark) {
          header.style.backgroundColor = "rgba(0,0,0,0.9)";
          header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
          safeSetColor(hamburger, "#fff");
        } else {
          header.style.backgroundColor = "rgba(255,255,255,0.9)";
          header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          safeSetColor(hamburger, "#000");
        }
      }

      // cores dos links
      navLinks.forEach((link) => {
        if (isDark) {
          safeSetColor(link, isOpen || scroll > 50 ? "#fff" : "#fff");
        } else {
          safeSetColor(link, isOpen || scroll > 50 ? "#000" : "#fff");
        }
      });
    };

    /* ==========================================
       HEADER SCROLL EFFECT
    ===========================================*/
    const onScrollHeader = () => {
      if (!header) return;
      const maxScroll = 250;
      const scroll = window.scrollY;
      const opacity = Math.min(scroll / maxScroll, 1);

      header.style.transition = "background-color 0.3s, box-shadow 0.3s";

      if (document.body.classList.contains("dark")) {
        header.style.backgroundColor = `rgba(0, 0, 0, ${opacity * 0.9})`;
        header.style.boxShadow = `0 4px 12px rgba(0,0,0,${0.5 * opacity})`;
        safeSetColor(hamburger, "#fff");
      } else {
        header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
        header.style.boxShadow = `0 4px 12px rgba(0,0,0,${0.1 * opacity})`;
        safeSetColor(hamburger, scroll > 50 ? "#000" : "#fff");
      }

      header.classList.toggle("scrolled", scroll > 50);
      applyNavColors();
    };
    window.addEventListener("scroll", onScrollHeader);

    /* ==========================================
       ACTIVE NAV LINK
    ===========================================*/
    const setActiveLink = () => {
      if (!sections || !navLinks) return;
      let index = sections.length;

      while (--index && window.scrollY + 80 < sections[index].offsetTop) {}

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (document.body.classList.contains("dark")) {
          safeSetColor(
            link,
            navMenu.classList.contains("open") || window.scrollY > 50
              ? "#fff"
              : "#fff"
          );
        } else {
          safeSetColor(
            link,
            navMenu.classList.contains("open") || window.scrollY > 50
              ? "#000"
              : "#fff"
          );
        }
      });

      if (navLinks[index]) {
        navLinks[index].classList.add("active");
        safeSetColor(
          navLinks[index],
          document.body.classList.contains("dark") ? "#0b7a3a" : "#13a551"
        );
      }
    };
    window.addEventListener("scroll", setActiveLink);
    setActiveLink();

    /* ==========================================
       SMOOTH SCROLL
    ===========================================*/
    smoothLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth",
          });
        }
        if (navMenu && navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          hamburger.classList.remove("open");
          if (hamburger) hamburger.textContent = "☰";
          applyNavColors();
        }
      });
    });

    /* ==========================================
       ANIMAÇÃO SEÇÕES
    ===========================================*/
    const animateSobre = () => {
      const elements = document.querySelectorAll(
        ".sobre-text p, .sobre-img img, .mvv"
      );
      const windowHeight = window.innerHeight;
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.transition = "all 0.8s ease-out";
        }
      });
    };
    window.addEventListener("scroll", animateSobre);
    window.addEventListener("load", animateSobre);

    /* ==========================================
       HAMBURGER
    ===========================================*/
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        if (!navMenu) return;
        const isOpen = navMenu.classList.toggle("open");
        hamburger.classList.toggle("open", isOpen);
        hamburger.textContent = isOpen ? "✖" : "☰";
        applyNavColors();
        updateDarkTogglePosition();
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (!navMenu) return;
        navMenu.classList.remove("open");
        hamburger.classList.remove("open");
        if (hamburger) hamburger.textContent = "☰";
        applyNavColors();
      });
    });

    /* ==========================================
       EVENTOS CAROUSEL
    ===========================================*/
    if (carousel) {
      const items = Array.from(carousel.children);
      items.forEach((item) => carousel.appendChild(item.cloneNode(true)));
      let scrollPos = 0;
      const speed = 0.5;
      const scrollCarousel = () => {
        scrollPos += speed;
        if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;
        carousel.scrollLeft = scrollPos;
        requestAnimationFrame(scrollCarousel);
      };
      scrollCarousel();
    }

    /* ==========================================
       CARDS ROTATION
    ===========================================*/
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * 5;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * -5;
        card.style.setProperty("--rx", `${rotateX}deg`);
        card.style.setProperty("--ry", `${rotateY}deg`);
      });
      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--rx", `0deg`);
        card.style.setProperty("--ry", `0deg`);
      });
    });

    /* ==========================================
       SCROLL REVEAL ATIVIDADES
    ===========================================*/
    const revealAtividades = () => {
      document.querySelectorAll(".atividades-item").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add("reveal");
        }
      });
    };
    window.addEventListener("scroll", revealAtividades);
    window.addEventListener("load", revealAtividades);

    /* ==========================================
       AUTO-HIGHLIGHT ATIVIDADES
    ===========================================*/
    let autoI = 0;
    const itens = document.querySelectorAll(".atividades-item");
    if (itens.length) {
      if (!isMobile()) {
        setInterval(() => {
          itens.forEach((el) => el.classList.remove("auto-hover"));
          itens[autoI].classList.add("auto-hover");
          autoI = (autoI + 1) % itens.length;
        }, 3000);

        itens.forEach((card, idx) => {
          card.addEventListener("mouseenter", () => {
            card.style.zIndex = 20;
          });
          card.addEventListener("mouseleave", () => {
            card.style.zIndex = card.classList.contains("auto-hover")
              ? 10
              : 5 - idx;
          });
        });
      } else {
        itens.forEach((card) => {
          card.style.transform = "none";
          card.style.zIndex = 1;
        });
      }
    }

    /* ==========================================
       DARK MODE
    ===========================================*/
    const initDarkModeFromStorage = () => {
      if (!toggleBtn) return;
      const stored = localStorage.getItem("theme");
      if (!stored) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.body.classList.add("dark");
          toggleBtn.textContent = "☀️";
        } else {
          toggleBtn.textContent = "🌙";
        }
      } else if (stored === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "☀️";
      } else {
        toggleBtn.textContent = "🌙";
      }
      applyNavColors();
    };
    initDarkModeFromStorage();

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          document.body.classList.contains("dark") ? "dark" : "light"
        );
        toggleBtn.textContent = document.body.classList.contains("dark")
          ? "☀️"
          : "🌙";
        applyNavColors();
        onScrollHeader();
        setActiveLink();
      });
    }

/* ==========================================
   MOVE DARK MODE BUTTON
===========================================*/
const themeWrapper = document.querySelector(".theme-toggle-wrapper");

const updateDarkTogglePosition = () => {
  if (!toggleBtn || !navMenu || !themeWrapper) return;

  if (window.innerWidth <= 768) {
    if (!navMenu.contains(toggleBtn)) {
      navMenu.appendChild(toggleBtn);
      toggleBtn.style.fontSize = "1.2rem";
    }
  } else {
    if (!themeWrapper.contains(toggleBtn)) {
      themeWrapper.appendChild(toggleBtn);
      toggleBtn.style.fontSize = "1.5rem";
    }
  }
  applyNavColors();
};

window.addEventListener("resize", updateDarkTogglePosition);
window.addEventListener("load", updateDarkTogglePosition);
updateDarkTogglePosition();

onScrollHeader();
setActiveLink();
revealAtividades();
animateSobre();
  });
})();
