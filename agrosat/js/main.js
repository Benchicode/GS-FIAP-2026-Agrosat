// =============================================
// AGROSAT — JavaScript Principal
// Navbar, Scroll, Animações, Barras de Progresso
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Navbar: scroll ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ── Navbar: link ativo ──
  const pagAtual = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === pagAtual || (pagAtual === '' && href === 'index.html')) {
      link.classList.add('ativo');
    }
  });

  // ── Hamburger mobile ──
  const hamburger = document.querySelector('.nav-hamburger');
  const navMobile = document.querySelector('.nav-mobile');
  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('aberto');
      navMobile.classList.toggle('visivel');
    });

    // Fechar ao clicar em link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('aberto');
        navMobile.classList.remove('visivel');
      });
    });
  }

  // ── Intersection Observer: revelar elementos ──
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

  // ── Barras de Progresso animadas ──
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

  // ── Contador animado ──
  function animarContador(el, destino, duracao = 1500) {
    const inicio = performance.now();
    const inicioVal = 0;
    const update = (agora) => {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      const ease = 1 - Math.pow(1 - progresso, 3);
      el.textContent = Math.floor(inicioVal + (destino - inicioVal) * ease);
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

  // ── Hover nos cards do mockup ──
  document.querySelectorAll('.mockup-barra-g').forEach(barra => {
    const alturas = [40, 60, 35, 75, 50, 85, 45, 70, 55, 90];
    const i = Math.floor(Math.random() * alturas.length);
    barra.style.height = alturas[i] + '%';
  });

});
