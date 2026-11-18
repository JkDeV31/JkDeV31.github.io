// Fecha o menu móvel depois que uma seção da própria página é selecionada.
// O elemento <details> continua funcionando sem JavaScript para abrir e fechar manualmente.
const mobileMenu = document.querySelector('.mobile-nav');

if (mobileMenu) {
  mobileMenu.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.open = false;
    });
  });
}
