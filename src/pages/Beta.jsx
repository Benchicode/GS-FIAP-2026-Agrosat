export default function Beta() {
  return (
    <main>
      <section className="hero hero-subpage">
        <div className="hero-grade"></div>
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-tag" style={{background:'rgba(14,207,207,0.1)', borderColor:'rgba(14,207,207,0.25)', color:'#0ecfcf'}}>
              🧪 Versão Beta — Acesso Antecipado
            </div>
            <h1 className="hero-titulo">Painel de Controle <em>AgroSat</em></h1>
            <p className="hero-desc">Protótipo funcional do sistema. Monitore talhões, analise índices NDVI e receba recomendações baseadas em dados orbitais e sensores IoT.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="secao-header">
            <div className="tag">📊 Dashboard</div>
            <h2 className="secao-titulo">Talhões monitorados</h2>
          </div>
          <div className="grid-3">
            {[
              {id:'A1', cultura:'Soja',  ndvi:0.74, umidade:68, status:'ok'},
              {id:'A2', cultura:'Milho', ndvi:0.61, umidade:55, status:'ok'},
              {id:'B1', cultura:'Soja',  ndvi:0.52, umidade:42, status:'atencao'},
              {id:'B2', cultura:'Cana',  ndvi:0.80, umidade:72, status:'ok'},
              {id:'B3', cultura:'Soja',  ndvi:0.38, umidade:28, status:'critico'},
              {id:'C1', cultura:'Milho', ndvi:0.67, umidade:60, status:'ok'},
            ].map(t => {
              const cor = t.status === 'ok' ? 'var(--cor-verde)' : t.status === 'atencao' ? 'var(--cor-alerta)' : '#ff5f57';
              const label = t.status === 'ok' ? '✅ Ótimo' : t.status === 'atencao' ? '⚠️ Atenção' : '🚨 Crítico';
              return (
                <div className="card" key={t.id} style={{borderColor: cor + '44'}}>
                  <div style={{display:'flex', justifyContent:'space-between', marginBottom:'1rem'}}>
                    <span style={{fontFamily:'var(--fonte-titulo)', fontWeight:700, fontSize:'1.1rem'}}>{t.id}</span>
                    <span style={{fontSize:'0.75rem', color: cor, fontWeight:600}}>{label}</span>
                  </div>
                  <div style={{fontSize:'0.85rem', color:'var(--cor-texto-suave)', marginBottom:'0.8rem'}}>{t.cultura}</div>
                  <div style={{marginBottom:'0.4rem'}}>
                    <span style={{fontSize:'0.75rem', color:'var(--cor-texto-suave)'}}>NDVI: </span>
                    <span style={{fontFamily:'var(--fonte-titulo)', fontWeight:700, color: cor}}>{t.ndvi}</span>
                  </div>
                  <div>
                    <span style={{fontSize:'0.75rem', color:'var(--cor-texto-suave)'}}>Umidade: </span>
                    <span style={{fontFamily:'var(--fonte-titulo)', fontWeight:700, color: cor}}>{t.umidade}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
