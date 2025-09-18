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

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove classe active de todos os links
        navLinks.forEach(l => l.classList.remove('active'));

        // Adiciona classe active no link clicado
        this.classList.add('active');

        // Pega o destino do href (id da section)
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if(targetSection) {
            // Rola suavemente até a section
            window.scrollTo({
                top: targetSection.offsetTop - 70, // ajusta para o header fixo
                behavior: 'smooth'
            });
        }
    });
});
