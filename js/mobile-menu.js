// Fecha o menu móvel depois que uma seção da própria página é selecionada.
// O elemento <details> continua funcionando sem JavaScript para abrir e fechar manualmente.
const mobileMenu = document.querySelector('.mobile-nav');

if (mobileMenu) {
  mobileMenu.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.open = false;
    });
  });

  // Fecha o menu com Escape e devolve o foco ao controle que o abriu.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector('summary')?.focus();
    }
  });
}
