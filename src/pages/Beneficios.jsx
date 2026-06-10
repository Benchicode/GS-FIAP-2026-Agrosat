import dados from '../data/dados.json';

export default function Beneficios() {
  return (
    <main>
      <section className="hero hero-subpage">
        <div className="hero-grade"></div>
        <div className="container">
          <div className="hero-conteudo">
            <div className="hero-tag">✨ Impacto Real</div>
            <h1 className="hero-titulo">O que muda com<br/>o <em>AgroSat</em> no campo</h1>
            <p className="hero-desc">Benefícios concretos para o agricultor, para o planeta e para a segurança alimentar de toda a sociedade.</p>
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">📊 Números de Impacto</div>
            <h2 className="secao-titulo">Resultados que se medem</h2>
          </div>
          <div className="grid-3">
            {dados.beneficios.impacto.map(item => (
              <div className="card card-destaque" key={item.id}>
                <div className="card-numero">
                  {item.valor !== null ? `${item.valor}${item.sufixo}` : item.numero}
                </div>
                <div className="card-numero-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="secao-header">
            <div className="tag">👥 Usuários</div>
            <h2 className="secao-titulo">Quem se beneficia do AgroSat</h2>
          </div>
          <div className="grid-3">
            {dados.beneficios.perfis.map(perfil => (
              <div className="perfil" key={perfil.id}>
                <div className="perfil-avatar">{perfil.avatar}</div>
                <div>
                  <div className="perfil-nome">{perfil.nome}</div>
                  <div className="perfil-cargo">{perfil.cargo}</div>
                  <p className="perfil-desc">{perfil.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao-destaque">
        <div className="container">
          <div className="secao-header">
            <div className="tag">🌍 Dimensões do Impacto</div>
            <h2 className="secao-titulo">Benefícios em três dimensões</h2>
          </div>
          <div className="grid-3">
            {dados.beneficios.dimensoes.map(dim => (
              <div className="card" key={dim.id}>
                <div className="card-icone">{dim.icone}</div>
                <h3 className="card-titulo">{dim.titulo}</h3>
                <p className="card-desc">{dim.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="secao-header">
            <div className="tag">🌱 ODS da ONU</div>
            <h2 className="secao-titulo">Conexão com os objetivos globais</h2>
          </div>
          <div className="ods-grid">
            <div className="ods-badge"><span className="ods-num">ODS 2</span> Fome zero e agricultura sustentável</div>
            <div className="ods-badge"><span className="ods-num">ODS 6</span> Água potável e saneamento</div>
            <div className="ods-badge"><span className="ods-num">ODS 9</span> Inovação e infraestrutura</div>
            <div className="ods-badge"><span className="ods-num">ODS 10</span> Redução das desigualdades</div>
            <div className="ods-badge"><span className="ods-num">ODS 13</span> Ação climática</div>
            <div className="ods-badge"><span className="ods-num">ODS 15</span> Vida terrestre</div>
          </div>
        </div>
      </section>
    </main>
  );
}
