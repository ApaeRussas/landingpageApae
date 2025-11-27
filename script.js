(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
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
    const themeWrapper = document.querySelector(".theme-toggle-wrapper");

    const isMobile = () => window.innerWidth <= 768;
    const safeSetColor = (el, color) => {
      if (el) el.style.color = color;
    };

    /* NAV COLORS */
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
        safeSetColor(hamburger, "#fff");
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

      navLinks.forEach((link) => {
        safeSetColor(
          link,
          isDark
            ? isOpen || scroll > 50
              ? "#fff"
              : "#fff"
            : isOpen || scroll > 50
            ? "#000"
            : "#fff"
        );
      });
    };

    /* HEADER SCROLL */
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

    /* ACTIVE LINK */
    const setActiveLink = () => {
      if (!sections || !navLinks) return;
      let current = "";
      const middle = window.innerHeight / 2;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= middle && rect.bottom >= middle) {
          current = sec.getAttribute("id");
        }
      });

      navLinks.forEach((link) => link.classList.remove("active"));
      applyNavColors();

      if (current) {
        const activeLink = document.querySelector(
          `.main-nav a[href="#${current}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
          safeSetColor(
            activeLink,
            document.body.classList.contains("dark") ? "#0b7a3a" : "#13a551"
          );
        }
      }
    };

    window.addEventListener("scroll", setActiveLink);
    window.addEventListener("resize", setActiveLink);
    window.addEventListener("load", setActiveLink);

    /* SMOOTH SCROLL */
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

    /* ANIMAÇÃO SOBRE */
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

    /* HAMBURGER */
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

    /* CAROUSEL COM AUTOPLAY */
    if (carousel) {
      const items = Array.from(carousel.children);
      items.forEach((item) => carousel.appendChild(item.cloneNode(true)));

      let speed = 0.5;
      let isDragging = false;
      let startX;
      let scrollStart;
      let autoplay = true;

      const autoScroll = () => {
        if (autoplay) {
          carousel.scrollLeft += speed;

          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
          }
        }
        requestAnimationFrame(autoScroll);
      };
      autoScroll();

      carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        autoplay = false;
        startX = e.pageX;
        scrollStart = carousel.scrollLeft;
        carousel.style.cursor = "grabbing";
      });

      carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const walk = (e.pageX - startX) * 1.5;
        carousel.scrollLeft = scrollStart - walk;
      });

      const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.cursor = "grab";

        setTimeout(() => (autoplay = true), 800);
      };

      carousel.addEventListener("mouseup", stopDrag);
      carousel.addEventListener("mouseleave", stopDrag);

      carousel.addEventListener("touchstart", (e) => {
        autoplay = false;
        isDragging = true;
        startX = e.touches[0].pageX;
        scrollStart = carousel.scrollLeft;
      });

      carousel.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const walk = (e.touches[0].pageX - startX) * 1.5;
        carousel.scrollLeft = scrollStart - walk;
      });

      carousel.addEventListener("touchend", () => {
        isDragging = false;
        setTimeout(() => (autoplay = true), 800);
      });
    }

    /* CARD ROTATION */
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
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });

    const revealAtividades = () => {
      document.querySelectorAll(".atividades-item").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
          el.classList.add("reveal");
        }
      });
    };
    window.addEventListener("scroll", revealAtividades);
    window.addEventListener("load", revealAtividades);

    /* DARK MODE STORAGE */
    const initDarkModeFromStorage = () => {
      if (!toggleBtn) return;
      const stored = localStorage.getItem("theme");
      if (!stored) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.body.classList.add("dark");
        }
      } else if (stored === "dark") {
        document.body.classList.add("dark");
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
        applyNavColors();
        onScrollHeader();
        setActiveLink();
      });
    }

    /* MOVE DARK MODE BUTTON */
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

    /* INITIAL CALLS */
    onScrollHeader();
    setActiveLink();
    revealAtividades();
    animateSobre();
  });
})();
