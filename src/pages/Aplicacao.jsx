import { Link } from 'react-router-dom';
import dados from '../data/dados.json';

export default function Aplicacao() {
  return (
    <main>
      <section className="hero hero-subpage">
        <div className="hero-grade"></div>
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-tag">📱 No campo, na prática</div>
            <h1 className="hero-titulo">Um dia com<br/>o <em>AgroSat</em></h1>
            <p className="hero-desc">Do satélite passando pelo sensor no solo até o celular do agricultor — veja como a tecnologia orbital se torna uma decisão prática no campo.</p>
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">🔄 Fluxo do Sistema</div>
            <h2 className="secao-titulo">Como funciona passo a passo</h2>
          </div>
          <div className="timeline">
            {dados.aplicacao.timeline.map(item => (
              <div className="timeline-item" key={item.id}>
                <div className="timeline-num">{item.passo}</div>
                <h3 className="timeline-titulo">{item.titulo}</h3>
                <p className="timeline-desc">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{textAlign:'center'}}>
          <div style={{maxWidth:'600px', margin:'0 auto'}}>
            <div className="hero-tag" style={{justifyContent:'center', marginBottom:'2rem'}}>
              🌍 Global Solution 2026 · FIAP
            </div>
            <h2 className="secao-titulo">
              O campo merece tecnologia de <em style={{color:'var(--cor-verde)', fontStyle:'normal'}}>ponta</em>
            </h2>
            <p className="secao-sub" style={{margin:'0 auto 2.5rem', textAlign:'center'}}>
              O AgroSat prova que dados espaciais já disponíveis, combinados com engenharia de software acessível, podem transformar a agricultura brasileira.
            </p>
            <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
              <Link to="/"           className="btn-secundario">← Voltar ao início</Link>
              <Link to="/tecnologia" className="btn-primario">Ver a tecnologia</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
