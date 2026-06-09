// react-components.jsx
// Componentes React do AgroSat
// Requer React, ReactDOM e ReactRouterDOM via CDN (incluídos em cada HTML)

const { useState, useEffect } = React;
const { MemoryRouter, Routes, Route, NavLink } = ReactRouterDOM;

// ─────────────────────────────────────────────────────
// NAVBAR — usa NavLink do React Router DOM para link ativo
// ─────────────────────────────────────────────────────
function NavbarInterna() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '../index.html',      to: '/',           label: 'Problema'   },
    { href: 'tecnologia.html',    to: '/tecnologia', label: 'Tecnologia' },
    { href: 'objetivos.html',     to: '/objetivos',  label: 'Objetivos'  },
    { href: 'beneficios.html',    to: '/beneficios', label: 'Benefícios' },
    { href: 'aplicacao.html',     to: '/aplicacao',  label: 'Aplicação'  },
    { href: 'beta.html',          to: '/beta',        label: 'Beta'       },
  ];

  // Para a index.html o href de Problema é 'index.html' (sem ../)
  const ehIndex = !window.location.pathname.includes('/pages/');
  if (ehIndex) links[0].href = 'index.html';

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href={ehIndex ? 'index.html' : '../index.html'} className="nav-logo">
          <span></span> AgroSat
        </a>
        <ul className="nav-links">
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => isActive ? 'ativo' : ''}
                onClick={e => { e.preventDefault(); window.location.href = link.href; }}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className={`nav-hamburger${menuAberto ? ' aberto' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`nav-mobile${menuAberto ? ' visivel' : ''}`}>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'ativo' : ''}
            onClick={e => { e.preventDefault(); setMenuAberto(false); window.location.href = link.href; }}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}

function Navbar() {
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  const rotaInicial = {
    'index.html':      '/',
    'tecnologia.html': '/tecnologia',
    'objetivos.html':  '/objetivos',
    'beneficios.html': '/beneficios',
    'aplicacao.html':  '/aplicacao',
    'beta.html':       '/beta',
  }[paginaAtual] || '/';

  return (
    <MemoryRouter initialEntries={[rotaInicial]}>
      <Routes>
        <Route path="*" element={<NavbarInterna />} />
      </Routes>
    </MemoryRouter>
  );
}

// ─────────────────────────────────────────────────────
// CARDS DO PROBLEMA — index.html
// ─────────────────────────────────────────────────────
function CardsProblema() {
  return (
    <div className="grid-3">
      {DADOS.problema.cards.map(card => (
        <div className="card revelar" key={card.id}>
          <div className="card-icone">{card.icone}</div>
          <h3 className="card-titulo">{card.titulo}</h3>
          <p className="card-desc">{card.descricao}</p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// CARDS DE IMPACTO — index.html
// ─────────────────────────────────────────────────────
function CardsImpacto() {
  return (
    <div className="grid-3">
      {DADOS.problema.impacto.map(item => (
        <div className="card card-destaque revelar" key={item.id}>
          <div className="card-numero">
            {item.prefixo}
            {item.valor !== null
              ? <span data-valor={item.valor}>0</span>
              : item.numero
            }
            {item.valor !== null ? item.sufixo : ''}
          </div>
          <div className="card-numero-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// CARDS DE TECNOLOGIA — tecnologia.html
// ─────────────────────────────────────────────────────
function CardsTecnologia() {
  return (
    <div className="grid-2">
      {DADOS.tecnologia.cards.map(card => (
        <div className="card revelar" key={card.id}>
          <div className="card-icone">{card.icone}</div>
          <h3 className="card-titulo">{card.titulo}</h3>
          <p className="card-desc">{card.descricao}</p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// CARDS DE OBJETIVOS — objetivos.html
// ─────────────────────────────────────────────────────
function CardsObjetivos() {
  return (
    <div className="grid-3">
      {DADOS.objetivos.cards.map(card => (
        <div className="card revelar" key={card.id}>
          <div className="card-icone">{card.icone}</div>
          <h3 className="card-titulo">{card.titulo}</h3>
          <p className="card-desc">{card.descricao}</p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// CARDS IMPACTO BENEFÍCIOS — beneficios.html
// ─────────────────────────────────────────────────────
function CardsImpactoBeneficios() {
  return (
    <div className="grid-3">
      {DADOS.beneficios.impacto.map(item => (
        <div className="card card-destaque revelar" key={item.id}>
          <div className="card-numero">
            {item.valor !== null
              ? <><span data-valor={item.valor}>0</span>{item.sufixo}</>
              : item.numero
            }
          </div>
          <div className="card-numero-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// PERFIS — beneficios.html
// ─────────────────────────────────────────────────────
function CardsPerfis() {
  return (
    <div className="grid-3">
      {DADOS.beneficios.perfis.map(perfil => (
        <div className="perfil revelar" key={perfil.id}>
          <div className="perfil-avatar">{perfil.avatar}</div>
          <div>
            <div className="perfil-nome">{perfil.nome}</div>
            <div className="perfil-cargo">{perfil.cargo}</div>
            <p className="perfil-desc">{perfil.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// DIMENSÕES DO IMPACTO — beneficios.html
// ─────────────────────────────────────────────────────
function CardsDimensoes() {
  return (
    <div className="grid-3">
      {DADOS.beneficios.dimensoes.map(dim => (
        <div className="card revelar" key={dim.id}>
          <div className="card-icone">{dim.icone}</div>
          <h3 className="card-titulo">{dim.titulo}</h3>
          <p className="card-desc">{dim.descricao}</p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// TIMELINE — aplicacao.html
// ─────────────────────────────────────────────────────
function Timeline() {
  return (
    <div className="timeline">
      {DADOS.aplicacao.timeline.map(item => (
        <div className="timeline-item" key={item.id}>
          <div className="timeline-num">{item.passo}</div>
          <h3 className="timeline-titulo">{item.titulo}</h3>
          <p className="timeline-desc">{item.descricao}</p>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// MONTAGEM — detecta containers e monta cada componente
// ─────────────────────────────────────────────────────
function montar(id, Componente) {
  const el = document.getElementById(id);
  if (el) ReactDOM.createRoot(el).render(<Componente />);
}

// Navbar em todas as páginas
const navEl = document.getElementById('react-navbar');
if (navEl) ReactDOM.createRoot(navEl).render(<Navbar />);

// index.html
montar('react-cards-problema', CardsProblema);
montar('react-cards-impacto',  CardsImpacto);

// tecnologia.html
montar('react-cards-tecnologia', CardsTecnologia);

// objetivos.html
montar('react-cards-objetivos', CardsObjetivos);

// beneficios.html
montar('react-cards-impacto-beneficios', CardsImpactoBeneficios);
montar('react-perfis',                   CardsPerfis);
montar('react-dimensoes',                CardsDimensoes);

// aplicacao.html
montar('react-timeline', Timeline);
