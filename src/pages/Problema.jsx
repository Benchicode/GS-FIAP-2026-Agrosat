import { Link } from 'react-router-dom';
import dados from '../data/dados.json';

export default function Problema() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grade"></div>
        <div className="hero-orbita"></div>
        <div className="hero-orbita"></div>
        <div className="hero-orbita"></div>
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-tag">🛰️ Indústria Espacial · ODS 2 · ODS 13</div>
            <h1 className="hero-titulo">
              O campo precisa<br/>do que o <em>espaço</em><br/>já tem a oferecer
            </h1>
            <p className="hero-desc">
              Enquanto satélites coletam dados precisos de toda a superfície terrestre,
              milhões de agricultores ainda tomam decisões no escuro. O AgroSat conecta
              a tecnologia orbital à realidade do campo.
            </p>
            <div className="hero-acoes">
              <Link to="/tecnologia" className="btn-primario">Ver a solução →</Link>
              <Link to="/objetivos"  className="btn-secundario">Nossos objetivos</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">40%</div>
                <div className="stat-label">das perdas evitáveis</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">4bi</div>
                <div className="stat-label">sem internet confiável</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">6000+</div>
                <div className="stat-label">satélites ativos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">⚠️ O Problema</div>
            <h2 className="secao-titulo">Por que o campo ainda perde tanto?</h2>
            <p className="secao-sub">Três desafios críticos afetam a produtividade agrícola no Brasil — todos com solução tecnológica disponível, mas ainda inacessível para a maioria.</p>
          </div>
          <div className="grid-3">
            {dados.problema.cards.map(card => (
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
            <div className="tag">📊 Dados do Impacto</div>
            <h2 className="secao-titulo">Números que provam a urgência</h2>
          </div>
          <div className="grid-3">
            {dados.problema.impacto.map(item => (
              <div className="card card-destaque" key={item.id}>
                <div className="card-numero">
                  {item.prefixo}{item.valor}{item.sufixo}
                </div>
                <div className="card-numero-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">🌱 ODS da ONU</div>
            <h2 className="secao-titulo">Conectado aos ODS da ONU</h2>
          </div>
          <div className="ods-grid">
            <div className="ods-badge"><span className="ods-num">ODS 2</span> Fome zero e agricultura sustentável</div>
            <div className="ods-badge"><span className="ods-num">ODS 9</span> Inovação e infraestrutura</div>
            <div className="ods-badge"><span className="ods-num">ODS 10</span> Redução das desigualdades</div>
            <div className="ods-badge"><span className="ods-num">ODS 13</span> Ação climática</div>
          </div>
        </div>
      </section>
    </main>
  );
}
