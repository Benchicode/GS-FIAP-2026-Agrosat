import { useEffect, useRef } from 'react';
import dados from '../data/dados.json';

const metas = [
  { label: 'Redução no consumo de água',         valor: 'até 30%',   meta: 30 },
  { label: 'Antecipação na detecção de pragas',   valor: '2 semanas', meta: 70 },
  { label: 'Aumento médio de produtividade',      valor: 'até 20%',   meta: 20 },
  { label: 'Redução no uso de defensivos',        valor: 'até 25%',   meta: 25 },
  { label: 'Produtores alcançados em regiões remotas', valor: '+10 mil', meta: 85 },
];

function ProgressBar({ label, valor, meta }) {
  const fillRef = useRef(null);
  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => { el.style.width = meta + '%'; }, 200); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el.parentElement);
    return () => obs.disconnect();
  }, [meta]);
  return (
    <div className="progresso-item">
      <div className="progresso-header">
        <span className="progresso-label">{label}</span>
        <span className="progresso-valor">{valor}</span>
      </div>
      <div className="progresso-barra">
        <div className="progresso-fill" ref={fillRef} style={{width:0}}></div>
      </div>
    </div>
  );
}

export default function Objetivos() {
  return (
    <main>
      <section className="hero hero-subpage">
        <div className="hero-grade"></div>
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-tag">🎯 Objetivos do Projeto</div>
            <h1 className="hero-titulo">O que o <em>AgroSat</em><br/>quer alcançar</h1>
            <p className="hero-desc">Metas claras, mensuráveis e conectadas a impacto real no campo e no planeta.</p>
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">🎯 Objetivos Principais</div>
            <h2 className="secao-titulo">Seis metas que guiam o projeto</h2>
          </div>
          <div className="grid-3">
            {dados.objetivos.cards.map(card => (
              <div className="card" key={card.id}>
                <div className="card-icone">{card.icone}</div>
                <h3 className="card-titulo">{card.titulo}</h3>
                <p className="card-desc">{card.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="secao-header">
            <div className="tag">📈 Metas de Impacto</div>
            <h2 className="secao-titulo">Resultados esperados com a solução</h2>
          </div>
          <div style={{maxWidth:'640px'}}>
            {metas.map((m, i) => <ProgressBar key={i} {...m}/>)}
          </div>
        </div>
      </section>
    </main>
  );
}
