import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">AgroSat</div>
            <p className="footer-desc">Plataforma de agricultura de precisão via satélite. Dados orbitais a serviço do campo.</p>
          </div>
          <div>
            <div className="footer-col-titulo">Páginas</div>
            <nav className="footer-links">
              <NavLink to="/">Problema</NavLink>
              <NavLink to="/tecnologia">Tecnologia</NavLink>
              <NavLink to="/objetivos">Objetivos</NavLink>
              <NavLink to="/beneficios">Benefícios</NavLink>
              <NavLink to="/aplicacao">Aplicação</NavLink>
            </nav>
          </div>
          <div>
            <div className="footer-col-titulo">Tecnologias</div>
            <nav className="footer-links">
              <a href="#">API NASA / INPE</a>
              <a href="#">Índice NDVI</a>
              <a href="#">IoT via Satélite</a>
              <a href="#">FIWARE</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 AgroSat · FIAP Engenharia de Software · 1º Ano</p>
          <div className="footer-tags">
            <span className="footer-tag">ODS 2</span>
            <span className="footer-tag">ODS 13</span>
            <span className="footer-tag">Global Solution 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
