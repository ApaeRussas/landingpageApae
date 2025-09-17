// Menu mobile
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Formulário de contato
const form = document.querySelector(".contato-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
  form.reset();
});
