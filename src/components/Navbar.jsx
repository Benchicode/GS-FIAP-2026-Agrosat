import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [scrolled,   setScrolled]  = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { to: '/',           label: 'Problema'   },
    { to: '/tecnologia', label: 'Tecnologia' },
    { to: '/objetivos',  label: 'Objetivos'  },
    { to: '/beneficios', label: 'Benefícios' },
    { to: '/aplicacao',  label: 'Aplicação'  },
    { to: '/beta',       label: 'Beta'       },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <NavLink to="/" className="nav-logo">
          <span></span> AgroSat
        </NavLink>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to==='/'} className={({isActive}) => isActive ? 'ativo' : ''}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className={`nav-hamburger${menuAberto ? ' aberto' : ''}`} aria-label="Menu" onClick={() => setMenuAberto(!menuAberto)}>
          <span/><span/><span/>
        </button>
      </nav>
      <div className={`nav-mobile${menuAberto ? ' visivel' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive}) => isActive ? 'ativo' : ''} onClick={() => setMenuAberto(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
