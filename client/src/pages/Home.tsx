import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  Compass,
  Cpu,
  FileCheck2,
  Gauge,
  Globe,
  Layers3,
  Linkedin,
  MapPin,
  Menu,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";

const navItems = [
  { id: "visao", label: "Visão & Tese" },
  { id: "comparativo", label: "Tradicional vs Agêntico" },
  { id: "percurso", label: "Percurso (8 Etapas)" },
  { id: "presencial", label: "Imersão Presencial" },
  { id: "virtual", label: "Imersão Virtual" },
  { id: "entregaveis", label: "Entregáveis" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "areas", label: "Áreas & Segmentos" },
  { id: "fundamentos", label: "Fundamentos IA" },
  { id: "quem-conduz", label: "Quem Conduz" },
  { id: "cidades", label: "Próximas Edições" },
];

const capabilities = ["PLANEJAR", "INTERPRETAR", "COORDENAR", "EXECUTAR", "AVALIAR"];

const traditionalVsAgentic = {
  traditional: [
    "Depende de processos manuais",
    "Execução limitada pelo tempo",
    "Foco em tarefas repetitivas",
    "Baixa capacidade de escala",
  ],
  agenticRoles: [
    {
      title: "PLANEJA",
      badge: "Estratégia e Decisão",
      description: "Analisa cenários, define prioridades e antecipa ações.",
    },
    {
      title: "EXECUTA",
      badge: "Operação e Entregas",
      description: "Usa ferramentas, produz entregas e resolve problemas.",
    },
    {
      title: "COORDENA",
      badge: "Alinhamento e Fluxos",
      description: "Alinha pessoas, integra informações e entrega valor.",
    },
  ],
};

const journey = [
  {
    number: "01",
    title: "Profissional",
    subtitle: "Ponto de partida",
    description: "O profissional no centro da entrega de valor, conhecendo a rotina, os critérios e decisões.",
  },
  {
    number: "02",
    title: "Fluxo de Trabalho Tradicional",
    subtitle: "Processos manuais",
    description: "Processos lineares com baixa automação e visibilidade antes da modelagem agêntica.",
  },
  {
    number: "03",
    title: "Fluxo de Trabalho Agêntico",
    subtitle: "Reimaginação de fluxos",
    description: "Fluxos reimaginados com agentes de IA executando, orquestrando e aprendendo continuamente.",
  },
  {
    number: "04",
    title: "Infraestrutura Agêntica",
    subtitle: "Sustentação tecnológica",
    description: "Plataformas, dados, integrações e governança que dão suporte aos agentes.",
  },
  {
    number: "05",
    title: "Funcionário Agêntico",
    subtitle: "Capacidade amplificada",
    description: "Cada colaborador potencializado por agentes que amplificam sua capacidade de execução.",
  },
  {
    number: "06",
    title: "Profissional Agêntico",
    subtitle: "Evolução do líder/gestor",
    description: "O profissional evolui: decide melhor, mais rápido e com impacto exponencial.",
  },
  {
    number: "07",
    title: "Times de Funcionários Agênticos",
    subtitle: "Orquestração de equipes",
    description: "Times coordenados por agentes, entregando mais valor com consistência e governança.",
  },
  {
    number: "08",
    title: "Departamento Agêntico",
    subtitle: "Escala organizacional",
    description: "Departamentos integrados, orientados a resultados e com governança inteligente.",
  },
];

const e4Pillars = [
  {
    title: "Educação",
    badge: "Fundamentos & Arquitetura",
    description: "Fundamentos essenciais de Inteligência Artificial conectados diretamente à arquitetura que será experimentada na prática. Modelagem de Fluxos Tradicionais em Fluxos Agênticos.",
  },
  {
    title: "Experimentação",
    badge: "Laboratório Prático",
    description: "Laboratório aplicado ao trabalho real dos participantes. Projeção da Sala de Comando e Controle, ambiente de interação, delegação, acompanhamento e governança.",
  },
  {
    title: "Expertise",
    badge: "Parametrização do Agente",
    description: "Aperfeiçoamento do Funcionário Agêntico: contexto, instruções, conhecimento, memória, habilidades, ferramentas, limites e qualidade dos resultados.",
  },
  {
    title: "Escala",
    badge: "Rotina & Organização",
    description: "Leitura das oportunidades para ampliar a capacidade em times, áreas e processos com governança e acompanhamento de indicadores de impacto.",
  },
];

const presencialSteps = [
  {
    title: "Fundamentos e Arquitetura",
    subtitle: "Módulo 01",
    points: [
      "Fundamentos essenciais de Inteligência Artificial, conectados diretamente à arquitetura que será experimentada na prática.",
      "Modelagem de Fluxos de Trabalho, transformando Fluxos Tradicionais em Fluxos Agênticos.",
    ],
  },
  {
    title: "Laboratório Prático",
    subtitle: "Módulo 02",
    points: [
      "Laboratório prático, aplicando os conceitos ao trabalho real dos participantes.",
      "Projeção da Sala de Comando e Controle, ambiente de interação, delegação, acompanhamento e governança.",
    ],
  },
  {
    title: "Construção dos Funcionários Agênticos",
    subtitle: "Módulo 03",
    points: [
      "Construção dos primeiros Funcionários Agênticos.",
      "Parametrização dos Funcionários Agênticos, definindo identidade, função, responsabilidades, capacidades e limites.",
      "Configuração dos Espaços de Trabalho, estruturando contexto, conhecimento, memória, habilidades, ferramentas, arquivos e instruções.",
    ],
  },
  {
    title: "Treinamento e Supervisão",
    subtitle: "Módulo 04",
    points: [
      "Treinamento dos Funcionários Agênticos para execução dos primeiros Fluxos Agênticos.",
      "Delegação, experimentação e supervisão, acompanhando a execução e avaliando os artefatos produzidos.",
    ],
  },
];

const virtualSteps = [
  {
    title: "Aperfeiçoar",
    tagline: "Aumentar capacidade antes de ampliar responsabilidade",
    description: "Revisamos os Funcionários Agênticos iniciados durante a Imersão Presencial e trabalhamos: contexto, instruções, conhecimento, habilidades, ferramentas, limites e qualidade dos resultados.",
    focus: ["Contexto e instruções", "Conhecimento e habilidades", "Ferramentas e limites", "Qualidade dos resultados"],
  },
  {
    title: "Aplicar",
    tagline: "Delegação em rotinas reais de trabalho",
    description: "Os participantes começam a delegar Fluxos Agênticos reais da sua rotina aos Funcionários Agênticos.",
    focus: ["O que funciona → onde falha", "Quanto exige supervisão", "Artefatos produzidos", "Valor gerado na rotina"],
  },
  {
    title: "Evoluir",
    tagline: "Leitura de valor e preparação para escala",
    description: "Consolidamos os aprendizados para identificar o que deve ser aperfeiçoado, quais fluxos redesenhar, quais agentes treinar e quais oportunidades têm potencial para ganhar escala.",
    focus: ["Aperfeiçoamento contínuo", "Redesenho de fluxos", "Treinamento de agentes", "Potencial de escala"],
  },
];

const deliverables = [
  "Funcionário Agêntico iniciado, parametrizado e em processo de treinamento.",
  "Fluxos de Trabalho mapeados, com identificação de oportunidades para transformação em Fluxos Agênticos.",
  "Primeiros artefatos produzidos pelos Funcionários Agênticos durante a experimentação.",
  "Materiais de apoio para continuidade da jornada.",
  "Frameworks utilizados na metodologia, apoiando modelagem, construção, treinamento, delegação e governança.",
  "Comunidade no WhatsApp para troca de experiência e dúvidas.",
  "Certificados de participação.",
  "2 encontros online para aperfeiçoar, aplicar e evoluir os Funcionários Agênticos.",
  "Atividades práticas entre os encontros.",
  "Acompanhamento dos indicadores de impacto.",
];

const differentials = [
  {
    title: "Não é treinamento de IA.",
    description: "É desenvolvimento de capacidade para trabalhar com Funcionários Agênticos.",
  },
  {
    title: "Não começa pela ferramenta.",
    description: "Começa pelo profissional.",
  },
  {
    title: "Não começa pela automação.",
    description: "Começa pela modelagem.",
  },
  {
    title: "Não fica na teoria.",
    description: "Existe laboratório e construção prática.",
  },
  {
    title: "Não mede apenas produtividade.",
    description: "Mede qualidade, quantidade, tempo, custo e inteligência humana.",
  },
  {
    title: "Não trata o profissional como espectador.",
    description: "O profissional permanece como governador.",
  },
  {
    title: "Não termina no Funcionário Agêntico isolado.",
    description: "Existe uma jornada até times de Funcionários Agênticos e Organização Agêntica.",
  },
];

const storage = "/assets/agent-areas/";

const areas = [
  { key: "lideranca", name: "Liderança e Gestão", short: "Visão, decisão e governança", avatar: "lideranca_42630989.png", environment: "ambiente-lideranca_0905b1dd.png", icon: Compass, color: "#5B8BB8" },
  { key: "comercial", name: "Comercial", short: "Ritmo, relacionamento e conversão", avatar: "comercial_d1f3a0a4.png", environment: "ambiente-comercial_4fdc1499.png", icon: Target, color: "#5B8BB8" },
  { key: "marketing", name: "Marketing", short: "Narrativa, criação e distribuição", avatar: "marketing_99922f3f.png", environment: "ambiente-marketing_91c123d6.png", icon: Sparkles, color: "#5B8BB8" },
  { key: "financeiro", name: "Financeiro", short: "Precisão, análise e controle", avatar: "financeiro_956b218f.png", environment: "ambiente-financeiro_4be78b78.png", icon: Gauge, color: "#5B8BB8" },
  { key: "rh", name: "Recursos Humanos", short: "Pessoas, cultura e desenvolvimento", avatar: "rh_ff6290f2.png", environment: "ambiente-rh_99bdec64.png", icon: UsersRound, color: "#5B8BB8" },
  { key: "operacoes", name: "Operações", short: "Fluxo, eficiência e execução", avatar: "operacoes_df934ad8.png", environment: "ambiente-operacoes_72150d5e.png", icon: Network, color: "#5B8BB8" },
  { key: "administrativo", name: "Administrativo", short: "Ordem, apoio e continuidade", avatar: "administrativo_6d890917.png", environment: "ambiente-administrativo_184e1107.png", icon: FileCheck2, color: "#5B8BB8" },
  { key: "tecnologia", name: "Tecnologia", short: "Arquitetura, integração e escala", avatar: "tecnologia_0eb51785.png", environment: "ambiente-tecnologia_47641162.png", icon: Cpu, color: "#5B8BB8" },
  { key: "projetos", name: "Projetos", short: "Prioridade, cadência e entrega", avatar: "projetos_cc5ddf81.png", environment: "ambiente-projetos_81c551cf.png", icon: Layers3, color: "#5B8BB8" },
  { key: "juridico", name: "Jurídico e Conhecimento", short: "Risco, contexto e conhecimento", avatar: "juridico_1e47e39a.png", environment: "ambiente-juridico_e652623c.png", icon: ShieldCheck, color: "#5B8BB8" },
];

const segments = [
  "Alimentação e restaurantes",
  "Consultoria e RH",
  "Agronegócio",
  "Indústria",
  "Distribuição B2B",
  "Educação",
  "Contabilidade",
  "Construção",
  "Eventos",
  "Mobilidade",
  "Mídia",
  "Varejo",
  "Serviços empresariais",
];

const fundamentals = [
  {
    title: "Fundamentos de IA & LLMs",
    description: "Modelos de linguagem, arquiteturas fundamentais e tipos de LLMs aplicados aos negócios.",
  },
  {
    title: "Modelos, Preços e Contexto",
    description: "Seleção de modelos, precificação, janela de contexto e otimização de custo/performance.",
  },
  {
    title: "Memória & Recuperação (RAG)",
    description: "Memória de curto, médio e longo prazo, recuperação de contexto e conhecimento organizacional.",
  },
  {
    title: "Token Budget & Gestão de Custos",
    description: "Orçamento de tokens, precificação de chamadas e eficiência financeira das automações.",
  },
  {
    title: "Agent Loop & Tool Calling",
    description: "Ciclo de decisão dos agentes e execução autônoma através de uso de ferramentas externas.",
  },
  {
    title: "Single Agent & Multi-Agent",
    description: "Arquiteturas de agente único vs. times de agentes especialistas coordenados.",
  },
  {
    title: "Workflows & Intervenção Humana",
    description: "Fluxos agênticos estruturados com pontos estratégicos de aprovação e supervisão humana (Human-in-the-loop).",
  },
  {
    title: "Observabilidade & Evals",
    description: "Métricas de qualidade, testes automatizados, auditoria de respostas e avaliação contínua de desempenho.",
  },
  {
    title: "Memória Persistente & Armazenamento",
    description: "Manutenção de estado e histórico de contexto entre diferentes execuções e interações.",
  },
  {
    title: "Skills & Extensões Agênticas",
    description: "Empacotamento de capacidades específicas em habilidades reutilizáveis pelos Funcionários Agênticos.",
  },
  {
    title: "MCP, Containers & Segurança",
    description: "Model Context Protocol, isolamento em containers, controle de acessos e protocolos de segurança.",
  },
  {
    title: "Automações & Agentes 24/7",
    description: "Execução contínua, agendamento de tarefas e agentes operando em segundo plano.",
  },
];

const cities = [
  { city: "Aracaju", status: "próxima edição", detail: "Imersão presencial para gestores, profissionais liberais e equipes que querem começar com método." },
  { city: "Foz do Iguaçu", status: "próxima edição", detail: "Experiência prática para transformar processos locais em fluxos agênticos supervisionados." },
  { city: "Recife", status: "próxima edição", detail: "Jornada para negócios que querem sair da experimentação solta e criar capacidade operacional." },
  { city: "Garanhuns", status: "próxima edição", detail: "Turma regional com aplicação em rotinas comerciais, administrativas e operacionais." },
];

const immersionPhotos = [
  { src: "/assets/immersions/imersao-01.webp", alt: "Participantes da imersão IA PhD em sala, trabalhando com notebooks" },
  { src: "/assets/immersions/imersao-02.webp", alt: "Condução da imersão IA PhD durante explicação presencial" },
  { src: "/assets/immersions/imersao-03.webp", alt: "Participantes acompanhando uma atividade prática da imersão IA PhD" },
  { src: "/assets/immersions/imersao-04.webp", alt: "Turma da imersão IA PhD em momento de discussão e aprendizagem" },
  { src: "/assets/immersions/imersao-05.webp", alt: "Notebook com interface agêntica durante uma atividade da imersão IA PhD" },
];

const conductors = [
  {
    name: "Bruno Bessa, Ph.D.",
    dimension: "PROFISSIONAIS E TRANSFORMAÇÃO AGÊNTICA",
    text: "Atua na conexão entre pessoas, trabalho, tecnologia e Inteligência Artificial. Na Imersão: conduz a metodologia, os fundamentos, a experiência prática e o desenvolvimento do profissional para modelar Fluxos de Trabalho, delegar, supervisionar e governar Funcionários Agênticos.",
    linkedin: "https://linkedin.com/in/bruno-bessa-ph-d-94a33120",
    image: "/assets/conductors/bruno-bessa.webp",
    icon: UsersRound,
  },
  {
    name: "Elder Fireman",
    dimension: "NEGÓCIOS, LIDERANÇA E TRANSFORMAÇÃO ORGANIZACIONAL",
    text: "Atua em estratégia, desenvolvimento de liderança, negociação, formação de equipes e gestão de mudanças. Na jornada: conecta a transformação ao negócio, apoiando a leitura de oportunidades e a evolução dos Fluxos Agênticos para uma visão de Arquitetura de Negócios Agêntica.",
    linkedin: "https://linkedin.com/in/elder-fireman-42a82b2a",
    image: "/assets/conductors/elder-fireman.jpg",
    icon: BriefcaseBusiness,
  },
  {
    name: "Dheiver Santos, Ph.D.",
    dimension: "INTELIGÊNCIA ARTIFICIAL E INFRAESTRUTURA AGÊNTICA",
    text: "Professor e profissional de Inteligência Artificial, com experiência em Machine Learning, LLMs, GenAI, RAG, MLOps e engenharia de sistemas de IA. Na jornada: conecta os Funcionários Agênticos à engenharia necessária para modelos de IA, tecnologias open source, provisionamento, frameworks, integrações e Infraestrutura Agêntica.",
    linkedin: "https://linkedin.com/in/dheiver-santos",
    image: "/assets/conductors/dheiver-santos.jpg",
    icon: Cpu,
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Brand() {
  return (
    <span className="brand-lockup">
      <img src="/assets/logo.png" alt="IA PhD Logo" />
      <span><strong>IA PhD ACADEMY</strong><small>imersões agênticas</small></span>
    </span>
  );
}

export default function Home() {
  const [activeArea, setActiveArea] = useState(areas[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  const cssVars = useMemo(() => ({ "--area-color": activeArea.color } as React.CSSProperties), [activeArea.color]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % immersionPhotos.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    document.documentElement.classList.add("motion-ready");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section-pad, .metric-strip, .journey-map article, .e4-grid article, .immersion-grid article, .city-grid article, .area-grid button, .deliverables-list div, .conductor-card"
      )
    );

    targets.forEach((target, index) => {
      target.classList.add("motion-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 70, 280)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="lp-app">
      <aside className="side-rail">
        <button onClick={() => scrollToId("topo")} className="brand-button" aria-label="Voltar ao início">
          <Brand />
        </button>
        <nav>
          {navItems.map((item, index) => (
            <button key={item.id} onClick={() => scrollToId(item.id)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="rail-status"><i /> governança humana</div>
      </aside>

      <header className="mobile-header">
        <button onClick={() => scrollToId("topo")} className="brand-button">
          <Brand />
        </button>
        <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
        {mobileOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToId(item.id);
                  setMobileOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main id="topo" className="lp-main">
        {/* HERO SECTION - SLIDE 1 */}
        <section className="hero section-pad" id="visao">
          <div className="hero-copy">
            <p className="eyebrow"><span /> IA PhD ACADEMY • IMERSÃO PRESENCIAL E VIRTUAL</p>
            <h1>DO PROFISSIONAL TRADICIONAL AO <em>DEPARTAMENTO AGÊNTICO</em></h1>
            <p className="lead">
              Uma experiência de educação, construção e experimentação para preparar profissionais capazes de <strong>GOVERNAR</strong> a era dos Funcionários Agênticos.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollToId("presencial")}>
                <Play size={16} fill="currentColor" /> Conhecer a Imersão
              </button>
              <button className="button ghost" onClick={() => scrollToId("cidades")}>
                Próximas turmas <ArrowRight size={16} />
              </button>
            </div>
            <div className="hero-note">
              <CircleDot size={14} /> EDUCAÇÃO <b>→</b> EXPERIMENTAÇÃO <b>→</b> EXPERTISE <b>→</b> ESCALA
            </div>
          </div>

          <div className="command-hero" aria-label="Registro visual das imersões IA PhD">
            <div className="console-top">
              <span>IA PhD / MÉTODOS</span>
              <strong>SALA DE COMANDO E CONTROLE</strong>
            </div>
            <div className="immersion-photo-stage">
              {immersionPhotos.map((photo, index) => (
                <img key={photo.src} src={photo.src} alt={photo.alt} className={index === activePhoto ? "active" : ""} />
              ))}
              <div className="photo-scanline" />
            </div>
            <div className="command-overlay-grid">
              <div className="screen"><span>experiência</span><strong>1 dia presencial</strong></div>
              <div className="screen"><span>acompanhamento</span><strong>2 encontros online</strong></div>
            </div>
            <div className="photo-progress" aria-hidden="true">
              {immersionPhotos.map((photo, index) => (
                <i key={photo.src} className={index === activePhoto ? "active" : ""} />
              ))}
            </div>
            <div className="hero-card">
              <small>TESE CENTRAL</small>
              <strong>Governe a Era dos Funcionários Agênticos.</strong>
              <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", opacity: 0.9 }}>
                A IA amplia a capacidade de execução. O Profissional tradicional amplia sua capacidade de governança.
              </p>
            </div>
          </div>
        </section>

        {/* METRIC STRIP */}
        <section className="metric-strip">
          <div><span>Formato</span><strong>1 dia presencial + 2 encontros online</strong></div>
          <div><span>Pilares da Capacidade</span><strong>{capabilities.join(" • ")}</strong></div>
          <div><span>Próximas Cidades</span><strong>Aracaju, Foz do Iguaçu, Recife e Garanhuns</strong></div>
        </section>

        {/* TRADICIONAL VS AGÊNTICO - SLIDE 2 */}
        <section className="section-pad dark" id="comparativo">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">01 / A PERGUNTA QUE MOVE A IMERSÃO</span>
              <h2>Os profissionais estão preparados para governar essa capacidade?</h2>
            </div>
            <p>
              Os Funcionários Agênticos ampliam a capacidade de execução: <em>interpretar, planejar, usar ferramentas, produzir, executar e coordenar</em>. A imersão prepara o profissional para liderar e governar este novo cenário.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <UsersRound size={24} style={{ color: "#ef4444" }} />
                <h3 style={{ margin: 0, fontSize: "1.3rem", color: "#fff" }}>Profissional Tradicional</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {traditionalVsAgentic.traditional.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "12px", padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <Cpu size={24} style={{ color: "#3b82f6" }} />
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.3rem", color: "#fff" }}>Funcionários Agênticos</h3>
                  <small style={{ color: "rgba(255,255,255,0.6)" }}>Ampliação de execução e governança</small>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {traditionalVsAgentic.agenticRoles.map((role) => (
                  <div key={role.title} style={{ background: "rgba(255,255,255,0.04)", padding: "1rem", borderRadius: "8px", borderLeft: "3px solid #3b82f6" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.3rem" }}>
                      <strong style={{ color: "#60a5fa", fontSize: "1rem" }}>{role.title}</strong>
                      <span style={{ fontSize: "0.75rem", background: "rgba(59,130,246,0.2)", color: "#93c5fd", padding: "2px 8px", borderRadius: "4px" }}>{role.badge}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NOSSA VISÃO & 8 ETAPAS - SLIDE 3 */}
        <section className="section-pad white" id="percurso">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">02 / NOSSA VISÃO & PERCURSO DE MATURIDADE</span>
              <h2>Não é substituir o profissional. <em>É ampliar o que ele consegue governar.</em></h2>
            </div>
            <p>
              Do indivíduo ao departamento: uma jornada contínua de evolução e governança. Primeiro desenvolvemos os profissionais. Depois transformamos a capacidade da organização.
            </p>
          </div>

          <div className="quote-panel" style={{ margin: "2rem 0" }}>
            <span style={{ fontWeight: 600, color: "#3b82f6" }}>DE ONDE VIEMOS:</span> Profissionais com ferramentas e processos limitados.
            <br />
            <span style={{ fontWeight: 600, color: "#10b981" }}>PARA ONDE VAMOS:</span> Profissionais ampliando o que conseguem governar com IA.
          </div>

          <h3 style={{ fontSize: "1.2rem", color: "#64748b", margin: "2rem 0 1rem 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Jornada do Indivíduo ao Departamento (8 Etapas)
          </h3>

          <div className="journey-map" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {journey.map((step, index) => (
              <article key={step.number}>
                <div className="journey-node">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < journey.length - 1 && <ArrowRight className="journey-arrow" />}
              </article>
            ))}
          </div>

          <div className="e4-panel" style={{ marginTop: "3rem" }}>
            <div className="e4-intro">
              <span className="section-index">MÉTODO IA PhD</span>
              <h3>Educação, Experimentação, Expertise e Escala.</h3>
              <p>O método E4 organiza a transformação em etapas estruturadas para garantir aprendizado com governança real.</p>
            </div>
            <div className="e4-grid">
              {e4Pillars.map((pillar, index) => (
                <article key={pillar.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div style={{ fontSize: "0.75rem", background: "rgba(59,130,246,0.1)", color: "#2563eb", padding: "2px 8px", borderRadius: "4px", width: "fit-content", marginBottom: "0.5rem" }}>
                    {pillar.badge}
                  </div>
                  <strong>{pillar.title}</strong>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IMERSÃO PRESENCIAL - SLIDE 4 */}
        <section className="section-pad dark" id="presencial">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">03 / IMERSÃO PRESENCIAL</span>
              <h2>1 dia presencial de educação, construção e experimentação prática.</h2>
            </div>
            <p>O participante aprende os fundamentos e imediatamente os transforma em experiência prática no seu trabalho real.</p>
          </div>

          <div className="immersion-grid">
            {presencialSteps.map((step, index) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0 0", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {step.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
                      <Check size={16} style={{ color: "#3b82f6", flexShrink: 0, marginTop: "3px" }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "2rem", padding: "1.2rem 1.5rem", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", borderRadius: "8px", color: "#93c5fd", display: "flex", alignItems: "center", gap: "1rem" }}>
            <Sparkles size={20} />
            <strong style={{ color: "#fff" }}>O participante aprende os fundamentos e imediatamente os transforma em experiência prática.</strong>
          </div>
        </section>

        {/* IMERSÃO VIRTUAL - SLIDE 5 */}
        <section className="section-pad white" id="virtual">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">04 / IMERSÃO VIRTUAL</span>
              <h2>Do laboratório para a <em>rotina real.</em></h2>
            </div>
            <p>
              Após a Imersão Presencial, a jornada continua com uma Imersão Virtual, voltada a aperfeiçoar os Funcionários Agênticos e colocá-los em contato com Fluxos de Trabalho reais da organização. <strong>2 encontros online</strong>, com aplicação prática entre os encontros.
            </p>
          </div>

          <div className="journey-map" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {virtualSteps.map((step, index) => (
              <article key={step.title}>
                <div className="journey-node">{String(index + 1).padStart(2, "0")}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div style={{ marginTop: "1rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                  <strong style={{ fontSize: "0.8rem", color: "#475569", textTransform: "uppercase" }}>Foco de observação:</strong>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0.4rem 0 0 0", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {step.focus.map((f) => (
                      <li key={f} style={{ fontSize: "0.85rem", color: "#64748b", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#2563eb" }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < virtualSteps.length - 1 && <ArrowRight className="journey-arrow" />}
              </article>
            ))}
          </div>

          <div className="quote-panel" style={{ marginTop: "2rem" }}>
            A Imersão Presencial inicia a capacidade. A Imersão Virtual aproxima essa capacidade do trabalho real.
            <span style={{ display: "block", marginTop: "0.5rem", fontSize: "0.85rem", color: "#64748b" }}>
              Aperfeiçoar → Aplicar → Evoluir → Rotina Real → Aprendizado → Oportunidades de Escala
            </span>
          </div>
        </section>

        {/* ENTREGÁVEIS - SLIDE 6 */}
        <section className="section-pad deliverables white" id="entregaveis">
          <div className="section-copy">
            <span className="section-index">05 / ENTREGÁVEIS CONCRETOS</span>
            <h2>Ao final da jornada, os profissionais levam resultados concretos.</h2>
            <p>Imersão Presencial + Imersão Virtual: resultados tangíveis da experiência para sustentar a evolução agêntica.</p>
          </div>
          <div className="deliverables-list">
            {deliverables.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Check size={16} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DIFERENCIAIS - SLIDE 7 */}
        <section className="section-pad white" id="diferenciais">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">06 / DIFERENCIAIS IA PhD</span>
              <h2>Não é treinamento de IA. <em>É desenvolvimento de capacidade.</em></h2>
            </div>
            <p>Uma proposta orientada ao profissional, à governança e aos resultados de negócio.</p>
          </div>

          <div className="journey-map" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {differentials.map((item, index) => (
              <article key={item.title}>
                <div className="journey-node">{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <span className="hero-note" style={{ display: "inline-flex" }}>
              EDUCAÇÃO → EXPERIMENTAÇÃO → EXPERTISE → ESCALA → RESULTADO
            </span>
          </div>
        </section>

        {/* ÁREAS & SEGMENTOS - SLIDES 6 & 9 */}
        <section className="section-pad areas" id="areas">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">07 / PARA QUEM É & CAMPOS DE APLICAÇÃO</span>
              <h2>O ponto de partida é o profissional.</h2>
            </div>
            <p>
              Selecione uma área para visualizar como os Funcionários Agênticos se adaptam às demandas específicas de cada departamento e setor.
            </p>
          </div>

          <div className="area-stage" style={cssVars}>
            <div className="area-scenario">
              <img className="area-reference-bg" src={`${storage}${activeArea.environment}`} alt={`Cenário de trabalho de ${activeArea.name}`} />
              <div className="scenario-label">
                <span>espaço de trabalho / {activeArea.key}</span>
                <strong>{activeArea.name}</strong>
              </div>
            </div>
            <div className="area-avatar">
              <div className="avatar-glow" />
              <img className="mascot-agent-img" src={`${storage}${activeArea.avatar}`} alt={`Avatar 3D de ${activeArea.name}`} />
              <div className="avatar-tag">
                <small>agente em configuração</small>
                <strong>{activeArea.name}</strong>
                <span>{activeArea.short}</span>
              </div>
            </div>
          </div>

          <div className="area-grid">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <button
                  key={area.key}
                  className={activeArea.key === area.key ? "active" : ""}
                  onClick={() => setActiveArea(area)}
                  style={{ "--card-color": area.color } as React.CSSProperties}
                >
                  <Icon size={17} />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{area.name}</strong>
                  <small>{area.short}</small>
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: "3.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "2rem" }}>
            <div style={{ marginBottom: "1.2rem" }}>
              <span className="section-index" style={{ color: "#60a5fa" }}>EXPERIÊNCIA DAS IMERSÕES</span>
              <h3 style={{ color: "#fff", margin: "0.3rem 0", fontSize: "1.3rem" }}>Segmentos de Mercado Representados</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "0.95rem" }}>
                Diferentes negócios. Diferentes profissões. O mesmo princípio: começar pelo Profissional. A metodologia já foi validada em organizações de diversos setores.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {segments.map((seg) => (
                <span
                  key={seg}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "20px",
                    padding: "6px 14px",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.85rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Building2 size={13} style={{ color: "#60a5fa" }} />
                  {seg}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FUNDAMENTOS DE IA APLICADOS - SLIDE 9 */}
        <section className="section-pad dark" id="fundamentos">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">08 / FUNDAMENTOS DE IA APLICADOS</span>
              <h2>Conhecimentos técnicos integrados à prática.</h2>
            </div>
          </div>
          <div className="fundamentals-grid">
            {fundamentals.map((item, index) => (
              <article key={item.title}>
                <span className="fundamental-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* QUEM CONDUZ A TRANSFORMAÇÃO - SLIDE 8 */}
        <section className="section-pad people" id="quem-conduz">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">09 / QUEM CONDUZ A TRANSFORMAÇÃO</span>
              <h2>Pessoas + Negócios + Tecnologia</h2>
            </div>
            <p>
              A Imersão IA PhD conecta três dimensões essenciais para desenvolver Profissionais Agênticos e apoiar a evolução das empresas em direção a Organizações Agênticas: desenvolvimento humano, arquitetura de negócios e profundidade tecnológica.
            </p>
          </div>
          <div className="conductors-grid">
            {conductors.map((conductor, index) => {
              const ConductorIcon = conductor.icon;
              return (
                <article className="conductor-card" key={conductor.name}>
                  <span className="conductor-number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="conductor-photo-wrap">
                    <img src={conductor.image} alt={conductor.name} />
                  </div>
                  <div className="conductor-icon">
                    <ConductorIcon size={22} />
                  </div>
                  <h3>{conductor.name}</h3>
                  <span style={{ color: "#3b82f6", fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0.3rem 0 0.8rem 0", display: "block" }}>
                    {conductor.dimension}
                  </span>
                  <p>{conductor.text}</p>
                  <a
                    href={conductor.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.8rem",
                      color: "#60a5fa",
                      marginTop: "1rem",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    <Linkedin size={14} /> Ver Perfil no LinkedIn
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* CIDADES & EDIÇÕES PREVISTAS - SLIDE 9 */}
        <section className="section-pad white" id="cidades">
          <div className="split-heading reveal-soft">
            <div>
              <span className="section-index">10 / EDIÇÕES PREVISTAS</span>
              <h2>Quatro cidades. <em>A mesma jornada prática.</em></h2>
            </div>
            <p>
              As próximas edições levam a metodologia IA PhD para diferentes regiões, mantendo o foco no que realmente importa: transformar conhecimento em aplicação supervisionada no trabalho real.
            </p>
          </div>
          <div className="city-grid">
            {cities.map((item) => (
              <article key={item.city}>
                <MapPin size={20} />
                <small>{item.status}</small>
                <h3>{item.city}</h3>
                <p>{item.detail}</p>
                <button>
                  Quero ser avisado <ChevronRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION FINAL & CONDIÇÕES COMERCIAIS - SLIDE 9 */}
        <section className="section-pad final-cta" id="cta">
          <div>
            <span className="section-index">11 / PRÓXIMO PASSO</span>
            <h2>Primeiro desenvolvemos os profissionais. Depois transformamos a capacidade da organização.</h2>
            <p style={{ fontSize: "1.1rem", margin: "1rem 0" }}>
              Governe a Era dos Funcionários Agênticos. Entre na lista de interesse e receba informações sobre as próximas edições presenciais e in-company da Imersão IA PhD.
            </p>
            <div style={{ margin: "1.5rem 0" }}>
              <button className="button primary" onClick={() => scrollToId("cidades")}>
                <CalendarDays size={16} /> Quero ser avisado das próximas edições
              </button>
            </div>
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1rem" }}>
              * Condições comerciais sob proposta. Despesas de deslocamento, hospedagem, alimentação e infraestrutura logística, quando aplicáveis, são personalizadas para edições in-company.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
