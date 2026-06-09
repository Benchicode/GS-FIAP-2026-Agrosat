// dados.js — fonte de dados local do AgroSat
// Consumido pelos componentes React em todas as páginas

const DADOS = {

  problema: {
    cards: [
      {
        id: 1,
        icone: "💧",
        titulo: "Irrigação às cegas",
        descricao: "Agricultores irrigam sem saber o real nível de umidade do solo. Resultado: desperdício de até 50% da água usada na agricultura, o maior consumidor hídrico do planeta."
      },
      {
        id: 2,
        icone: "🐛",
        titulo: "Pragas detectadas tarde",
        descricao: "Sem monitoramento contínuo, pragas e doenças são percebidas somente quando o dano já é visível. A detecção precoce por satélite pode antecipar o alerta em até 2 semanas."
      },
      {
        id: 3,
        icone: "📡",
        titulo: "Sem acesso à tecnologia",
        descricao: "Pequenos agricultores em regiões remotas não têm acesso à internet ou a plataformas de dados. A conectividade via satélite muda essa realidade sem depender de infraestrutura local."
      }
    ],
    impacto: [
      { id: 1, prefixo: "",   valor: 850, sufixo: "bi", label: "pessoas passam fome no mundo hoje" },
      { id: 2, prefixo: "",   valor: 70,  sufixo: "%",  label: "da água doce consumida na agricultura" },
      { id: 3, prefixo: "R$", valor: 30,  sufixo: "bi", label: "perdidos por pragas no Brasil por ano" }
    ]
  },

  tecnologia: {
    cards: [
      {
        id: 1,
        icone: "🛰️",
        titulo: "Satélites INPE, ESA & NASA",
        descricao: "Imagens multiespectrais gratuitas dos satélites Sentinel-2 (ESA) e Landsat (NASA) com resolução de 10 metros. O INPE disponibiliza dados específicos do território brasileiro via API pública. Capturam a reflectância da vegetação em diferentes comprimentos de onda."
      },
      {
        id: 2,
        icone: "🌿",
        titulo: "Índice NDVI",
        descricao: "O Normalized Difference Vegetation Index mede a saúde da vegetação usando a diferença entre luz infravermelha e vermelha refletida. Valores entre -1 e +1 indicam desde solo exposto (0) até vegetação densa e saudável (+0.8). Cálculo simples com dados orbitais."
      },
      {
        id: 3,
        icone: "📡",
        titulo: "IoT via Satélite (MQTT)",
        descricao: "Sensores ESP32 no solo coletam umidade, temperatura e luminosidade e transmitem via protocolo MQTT através de módulos de comunicação satelital. Permite cobertura em regiões remotas sem infraestrutura de internet terrestre — funcionando até no Cerrado profundo."
      },
      {
        id: 4,
        icone: "🏗️",
        titulo: "FIWARE como Back-End",
        descricao: "A plataforma FIWARE (usada pela União Europeia em projetos de cidades inteligentes) gerencia o contexto dos dados em tempo real via Orion Context Broker. Permite armazenar, consultar e notificar sobre mudanças nos dados dos sensores e das imagens satelitais."
      },
      {
        id: 5,
        icone: "🐍",
        titulo: "Python para Análise de Dados",
        descricao: "Scripts Python processam as imagens satelitais, calculam o NDVI, detectam anomalias e geram alertas. Bibliotecas como NumPy, Pandas e Rasterio permitem análise eficiente de grandes volumes de dados geoespaciais com lógica de threshold configurável."
      },
      {
        id: 6,
        icone: "📊",
        titulo: "Dashboard Web (HTML/CSS/JS)",
        descricao: "Interface responsiva que exibe mapas de calor NDVI, gráficos históricos de vegetação, alertas em tempo real e recomendações de irrigação. Acessível via browser — sem necessidade de instalação. Funciona em celular de entrada."
      }
    ]
  },

  objetivos: {
    cards: [
      {
        id: 1,
        icone: "🌿",
        titulo: "Monitorar NDVI em tempo real",
        descricao: "Processar imagens satelitais a cada 5 dias (ciclo do Sentinel-2) e calcular o índice de vegetação de cada talhão cadastrado, identificando variações que indicam stress hídrico ou doenças."
      },
      {
        id: 2,
        icone: "🚨",
        titulo: "Alertar antes da perda",
        descricao: "Enviar notificações automáticas quando o NDVI cair abaixo do limiar configurado, dando ao agricultor janela de ação antes que o dano se torne irreversível e a colheita seja comprometida."
      },
      {
        id: 3,
        icone: "💧",
        titulo: "Otimizar uso da água",
        descricao: "Recomendar irrigação apenas onde e quando o solo realmente precisa, cruzando dados de umidade dos sensores IoT com previsão climática e mapa de necessidade hídrica da cultura."
      },
      {
        id: 4,
        icone: "🌐",
        titulo: "Conectar regiões remotas",
        descricao: "Usar conectividade via satélite para levar dados de precisão a agricultores em áreas sem cobertura de internet terrestre, rompendo a barreira geográfica que exclui pequenos produtores."
      },
      {
        id: 5,
        icone: "📖",
        titulo: "Democratizar dados abertos",
        descricao: "Tornar acessível o que já existe: APIs gratuitas da NASA, ESA e INPE têm dados valiosos que poucos sabem usar. O AgroSat transforma esses dados em insights simples para qualquer agricultor."
      },
      {
        id: 6,
        icone: "📉",
        titulo: "Reduzir uso de defensivos",
        descricao: "Com detecção precoce de anomalias, é possível tratar pontos específicos da lavoura em vez de toda a área — reduzindo custos com agrotóxicos e impacto ambiental no solo e na água."
      }
    ]
  },

  beneficios: {
    impacto: [
      { id: 1, valor: 30, sufixo: "%",     label: "menos água usada na irrigação com decisão orientada por dados" },
      { id: 2, valor: 20, sufixo: "%",     label: "de aumento médio na produtividade da lavoura monitorada" },
      { id: 3, valor: 14, sufixo: " dias", label: "de antecipação na detecção de pragas e doenças" },
      { id: 4, valor: 25, sufixo: "%",     label: "redução no uso de agrotóxicos com aplicação localizada" },
      { id: 5, valor: 10, sufixo: "k+",    label: "pequenos produtores em regiões remotas alcançados" },
      { id: 6, valor: null, numero: "4+",  label: "APIs orbitais abertas integradas sem custo para o usuário" }
    ],
    perfis: [
      {
        id: 1,
        avatar: "👨‍🌾",
        nome: "João Ferreira",
        cargo: "Pequeno Produtor Rural",
        descricao: "Cultiva 50 hectares de soja no interior do Mato Grosso. Sem internet confiável, usava estimativas visuais para decidir quando irrigar. Com o AgroSat, recebe alertas direto no celular via satélite."
      },
      {
        id: 2,
        avatar: "👩‍💼",
        nome: "Marina Costa",
        cargo: "Gestora de Cooperativa",
        descricao: "Coordena 200 produtores associados no Paraná. Usa o dashboard do AgroSat para monitorar todas as propriedades em um único painel, identificar tendências e orientar decisões coletivas de manejo."
      },
      {
        id: 3,
        avatar: "🔬",
        nome: "Dr. Paulo Mendes",
        cargo: "Pesquisador Ambiental — INPE",
        descricao: "Utiliza os dados históricos do AgroSat para correlacionar padrões de vegetação com mudanças climáticas, contribuindo para políticas públicas de uso sustentável do solo no Brasil."
      }
    ],
    dimensoes: [
      {
        id: 1,
        icone: "💰",
        titulo: "Econômico",
        descricao: "Redução de custos com insumos, água e mão-de-obra. Aumento de produtividade sem ampliar área plantada. Menor perda por pragas e clima adverso. ROI positivo já no primeiro ciclo de uso."
      },
      {
        id: 2,
        icone: "🌱",
        titulo: "Ambiental",
        descricao: "Menos água desperdiçada em bacias hidrográficas já pressionadas. Menos agrotóxico lixiviando para rios e lençóis freáticos. Solo tratado com precisão tem maior longevidade produtiva."
      },
      {
        id: 3,
        icone: "🤝",
        titulo: "Social",
        descricao: "Democratiza tecnologia que antes só grandes fazendas acessavam. Conecta regiões excluídas da revolução digital. Fortalece a agricultura familiar e aumenta a segurança alimentar local."
      }
    ]
  },

  aplicacao: {
    timeline: [
      {
        id: 1,
        passo: "Passo 01",
        titulo: "🛰️ Satélite captura a imagem",
        descricao: "A cada 5 dias, o satélite Sentinel-2 da ESA passa sobre a área monitorada e registra imagens multiespectrais em 13 bandas. As bandas do infravermelho próximo e do vermelho são usadas para calcular o NDVI da plantação."
      },
      {
        id: 2,
        passo: "Passo 02",
        titulo: "☁️ API processa os dados orbitais",
        descricao: "A imagem é baixada via API Copernicus Open Access Hub e processada pelo script Python do AgroSat. O NDVI é calculado pixel a pixel, gerando um mapa de saúde da vegetação para cada talhão cadastrado."
      },
      {
        id: 3,
        passo: "Passo 03",
        titulo: "📡 Sensores no solo complementam",
        descricao: "Ao mesmo tempo, sensores ESP32 distribuídos pelo campo medem umidade do solo, temperatura e luminosidade em tempo real. Os dados chegam ao FIWARE via MQTT por conexão satelital — sem precisar de internet local."
      },
      {
        id: 4,
        passo: "Passo 04",
        titulo: "🧠 Sistema identifica anomalias",
        descricao: "O FIWARE Orion Context Broker cruza NDVI baixo com umidade insuficiente. Se ambos estiverem abaixo dos limiares configurados para aquela cultura, um trigger automático é disparado gerando um alerta classificado por urgência."
      },
      {
        id: 5,
        passo: "Passo 05",
        titulo: "📱 Agricultor recebe o alerta",
        descricao: "Uma notificação chega no app do agricultor com a localização exata do problema, a causa provável (déficit hídrico, praga, solo compactado) e a ação recomendada. Funciona mesmo em regiões sem internet terrestre."
      },
      {
        id: 6,
        passo: "Passo 06",
        titulo: "✅ Agricultor age com precisão",
        descricao: "Com a informação correta, o produtor irriga só o talhão com déficit, aplica defensivo só na área afetada, ou chama o técnico para a gleba certa. Resultado: menos custo, menos desperdício, mais colheita."
      }
    ]
  }

};
