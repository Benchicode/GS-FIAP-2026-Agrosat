// =============================================
// AGROSAT — JavaScript Principal
// Animações, Barras de Progresso, Contadores
// Nota: Navbar (scroll, hamburger, link ativo)
// é gerenciada pelo React (react-components.jsx)
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // Intersection Observer: revelar elementos
  const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visivel');
        }, i * 80);
        observador.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.revelar, .timeline-item').forEach(el => {
    observador.observe(el);
  });

  // Barras de Progresso animadas
  const observadorBarra = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progresso-fill');
        if (fill) {
          const meta = fill.dataset.meta;
          setTimeout(() => { fill.style.width = meta + '%'; }, 200);
        }
        observadorBarra.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progresso-item').forEach(item => {
    observadorBarra.observe(item);
  });

  // Contador animado
  function animarContador(el, destino, duracao = 1500) {
    const inicio = performance.now();
    const update = (agora) => {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      const ease = 1 - Math.pow(1 - progresso, 3);
      el.textContent = Math.floor(destino * ease);
      if (progresso < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const observadorContador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const val = parseInt(entry.target.dataset.valor);
        if (!isNaN(val)) animarContador(entry.target, val);
        observadorContador.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-valor]').forEach(el => {
    observadorContador.observe(el);
  });

  // Hover nas barras do mockup
  document.querySelectorAll('.mockup-barra-g').forEach(barra => {
    const alturas = [40, 60, 35, 75, 50, 85, 45, 70, 55, 90];
    const i = Math.floor(Math.random() * alturas.length);
    barra.style.height = alturas[i] + '%';
  });

});
