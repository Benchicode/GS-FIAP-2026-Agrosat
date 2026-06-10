## AgroSat — Web Development (React + Vite)

**Global Solution 2026 · FIAP · Engenharia de Software · 1º Ano**

## Integrantes

| Nome                    | RM     |
|-------------------------|--------|
| Michel Lima Benchimol   | 567345 |
| Yuri Aroste Fukamachi   | 567314 |

**Turma:** 1ESRP · Agosto 2026

## Instalação e execução

```bash
npm install
npm run dev
```

Acesse em: `http://localhost:5173`

## Build de produção

```bash
npm run build
```

## Estrutura

```
src/
├── components/
│   ├── Navbar.jsx     — Navegação com React Router DOM
│   └── Footer.jsx     — Rodapé padrão
├── pages/
│   ├── Problema.jsx   — Página 1: O Problema
│   ├── Tecnologia.jsx — Página 2: Stack Tecnológico
│   ├── Objetivos.jsx  — Página 3: Metas e barras de progresso
│   ├── Beneficios.jsx — Página 4: Impacto e perfis
│   ├── Aplicacao.jsx  — Página 5: Fluxo e timeline
│   └── Beta.jsx       — Página 6: Dashboard de talhões
├── data/
│   └── dados.json     — Dados fictícios locais
├── style.css          — CSS principal do projeto
├── reset.css          — Reset CSS
└── main.jsx           — Entry point
```

## Critérios atendidos

- **Cards com dados da ideia** — cards de problemas, tecnologias, objetivos, benefícios e talhões vindos do `dados.json`
- **React Router DOM** — 6 rotas: `/`, `/tecnologia`, `/objetivos`, `/beneficios`, `/aplicacao`, `/beta`
- **JSON local** — `src/data/dados.json` com todos os dados fictícios

 https://gsagrosat.vercel.app
