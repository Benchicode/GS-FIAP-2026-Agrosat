import dados from '../data/dados.json';

export default function Tecnologia() {
  const fluxo = [
    { icone: '🛰️', label: 'Satélite INPE / ESA' },
    { icone: '☁️', label: 'API NASA / Copernicus' },
    { icone: '🧠', label: 'Processamento NDVI' },
    { icone: '🖥️', label: 'Back-end FIWARE' },
    { icone: '📱', label: 'App do Agricultor' },
  ];

  return (
    <main>
      <section className="hero hero-subpage">
        <div className="hero-grade"></div>
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-tag">🔬 Stack Tecnológico</div>
            <h1 className="hero-titulo">Como o <em>espaço</em><br/>chega até o campo</h1>
            <p className="hero-desc">Combinamos dados orbitais abertos, IoT embarcado e análise inteligente para entregar informação precisa onde e quando o agricultor precisa.</p>
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">🏗️ Arquitetura da Solução</div>
            <h2 className="secao-titulo">Do satélite ao celular do agricultor</h2>
          </div>
          <div className="diagrama">
            {fluxo.map((item, i) => (
              <div key={i} style={{display:'flex', alignItems:'center'}}>
                <div className="diagrama-item">
                  <div className="diagrama-icone">{item.icone}</div>
                  <div className="diagrama-label">{item.label}</div>
                </div>
                {i < fluxo.length - 1 && <div className="diagrama-seta">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="secao-header">
            <div className="tag">⚙️ Tecnologias Utilizadas</div>
            <h2 className="secao-titulo">Cada peça com um propósito</h2>
          </div>
          <div className="grid-2">
            {dados.tecnologia.cards.map(card => (
              <div className="card" key={card.id}>
                <div className="card-icone">{card.icone}</div>
                <h3 className="card-titulo">{card.titulo}</h3>
                <p className="card-desc">{card.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">🖥️ Interface</div>
            <h2 className="secao-titulo">O dashboard em ação</h2>
          </div>
          <div className="mockup">
            <div className="mockup-barra">
              <div className="mockup-circulo"></div>
              <div className="mockup-circulo"></div>
              <div className="mockup-circulo"></div>
              <div className="mockup-url">agrosat.app/dashboard</div>
            </div>
            <div className="mockup-corpo">
              <div className="mockup-cards">
                <div className="mockup-card"><div className="mockup-card-val">0.74</div><div className="mockup-card-label">NDVI médio — Talhão A</div></div>
                <div className="mockup-card"><div className="mockup-card-val">68%</div><div className="mockup-card-label">Umidade do solo</div></div>
                <div className="mockup-card mockup-card-alerta"><div className="mockup-card-val mockup-val-alerta">⚠ 0.41</div><div className="mockup-card-label">NDVI baixo — Talhão C</div></div>
              </div>
              <div className="mockup-grafico">
                {[45,60,55,80,70,65,75,90,50,40].map((h,i) => (
                  <div key={i} className={`mockup-barra-g mockup-b-${h}${h>=80?' destaque':''}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80"
            alt="Satélite em órbita terrestre capturando dados multiespectrais da superfície"
            className="secao-imagem"/>
          <p className="imagem-legenda">Cada passagem gera imagens multiespectrais usadas para calcular o NDVI da lavoura</p>
        </div>
      </section>
    </main>
  );
}
