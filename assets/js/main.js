/* =====================================================================
   Enzzo Gomes — Portfólio "desktop"
   ===================================================================== */
(() => {
    'use strict';

    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const desktopMQ = window.matchMedia('(min-width: 961px) and (pointer: fine)');

    const hasGsap = typeof window.gsap !== 'undefined';
    if (hasGsap) {
        gsap.registerPlugin(ScrollTrigger);
        if (window.Draggable) gsap.registerPlugin(Draggable);
        if (window.InertiaPlugin) gsap.registerPlugin(InertiaPlugin);
    }

    let lang = 'pt';
    try {
        const saved = localStorage.getItem('lang');
        if (saved === 'pt' || saved === 'en') lang = saved;
    } catch (e) { /* storage indisponível */ }

    // ------------------------------------------------------------------
    // CONTEÚDO
    // ------------------------------------------------------------------
    const LINKS = {
        github: 'https://github.com/EnzzoGomes',
        linkedin: 'https://www.linkedin.com/in/enzzo-gomes-42b531396/',
        cv: 'https://drive.google.com/file/d/1coFOFsgyHSxg7jTD3ZXMiDGr9eSajHJH/view?usp=drive_link'
    };

    const i18n = {
        pt: {
            page_title: 'Portfólio | Enzzo Gomes',
            nav_about: 'Sobre',
            nav_projects: 'Projetos',
            nav_contact: 'Contato',
            status: 'Disponível',
            hero_role: 'Dados · IA · Desenvolvimento Web',
            hero_sub: 'Ciência de Dados e IA na Uniso. Transformo dados brutos em decisões e ideias em produtos que funcionam.',
            desktop_hint: 'arraste as pastas · clique para abrir',
            about_title: 'Quem sou eu',
            projects_title: 'Projetos',
            col_name: 'Nome',
            col_type: 'Tipo',
            contact_label: 'Contato',
            contact_title: 'Bora construir<br>algo <span>sério?</span>',
            cv_btn: 'Currículo (PDF)',
            footer_made: 'feito à mão · HTML, CSS & GSAP',
            back_top: 'voltar ao topo ↑',
            items: 'itens',
            open_site: 'Abrir site',
            view_code: 'Ver código',
            cursor_drag: 'arrastar · abrir',
            cursor_open: 'abrir',
            cursor_move: 'mover',
            close: 'Fechar',
            maximize: 'Maximizar',
            file_about: 'sobre.txt',
            file_cv: 'curriculo.pdf',
            tidy: 'organizar',
            link_cv: 'Currículo',
            link_cv_sub: 'PDF · Google Drive',
            link_about: 'Sobre mim',
            link_about_sub: 'formação e objetivos',
            no_preview: 'prévia indisponível',
            portfolio_folder: 'abrir projetos'
        },
        en: {
            page_title: 'Portfolio | Enzzo Gomes',
            nav_about: 'About',
            nav_projects: 'Projects',
            nav_contact: 'Contact',
            status: 'Available',
            hero_role: 'Data · AI · Web Development',
            hero_sub: 'Data Science & AI student at Uniso. I turn raw data into decisions and ideas into products that work.',
            desktop_hint: 'drag the folders · click to open',
            about_title: 'Who I am',
            projects_title: 'Projects',
            col_name: 'Name',
            col_type: 'Type',
            contact_label: 'Contact',
            contact_title: "Let's build<br>something <span>real?</span>",
            cv_btn: 'Resume (PDF)',
            footer_made: 'handmade · HTML, CSS & GSAP',
            back_top: 'back to top ↑',
            items: 'items',
            open_site: 'Open site',
            view_code: 'View code',
            cursor_drag: 'drag · open',
            cursor_open: 'open',
            cursor_move: 'move',
            close: 'Close',
            maximize: 'Maximize',
            file_about: 'about.txt',
            file_cv: 'resume.pdf',
            tidy: 'tidy up',
            link_cv: 'Resume',
            link_cv_sub: 'PDF · Google Drive',
            link_about: 'About me',
            link_about_sub: 'education and goals',
            no_preview: 'preview unavailable',
            portfolio_folder: 'open projects'
        }
    };

    const IMG = 'assets/images/projects/';

    const projects = [
        {
            id: 'ai-english-tutor',
            pos: [0, 0],
            title: { pt: 'AI English Tutor', en: 'AI English Tutor' },
            type: { pt: 'IA / Educação', en: 'AI / Education' },
            desc: {
                pt: 'Tutor de inglês com inteligência artificial: monta um plano de estudos personalizado, simula conversas em cenários reais e tira dúvidas na hora.',
                en: 'AI-powered English tutor: builds a personalized study plan, simulates real-life conversations and answers questions on the spot.'
            },
            stack: ['Python', 'LLM', 'Hugging Face', 'TypeScript'],
            site: 'https://huggingface.co/spaces/Enzzozink/tutor-ingles-ia',
            code: 'https://github.com/EnzzoGomes/ai-english-tutor',
            shots: []
        },
        {
            id: 'mercado-de-missoes',
            pos: [1, 0],
            title: { pt: 'Mercado de Missões', en: 'Mission Market' },
            type: { pt: 'Web App / Gamificação', en: 'Web App / Gamification' },
            desc: {
                pt: 'Aplicação web gamificada: o usuário completa missões e ganha recompensas. Foco em UX, fluxo claro e organização de dados.',
                en: 'Gamified web app where users complete missions and earn rewards. Focused on UX, clear flows and data organization.'
            },
            stack: ['TypeScript', 'Vercel'],
            site: 'https://projeto-app-iota.vercel.app/',
            code: 'https://github.com/EnzzoGomes/projeto-app',
            shots: [IMG + 'mercado-de-missoes.jpg']
        },
        {
            id: 'conecta-uniso',
            pos: [2, 0],
            title: { pt: 'conecta.uniso', en: 'conecta.uniso' },
            type: { pt: 'Landing Page', en: 'Landing Page' },
            desc: {
                pt: 'Landing page do projeto de voluntariado conecta.uniso — Conectando Jovens ao Futuro Digital — com estatísticas animadas, rolagem suave e animações de entrada.',
                en: 'Landing page for the conecta.uniso volunteering project — Connecting Young People to the Digital Future — with animated stats, smooth scrolling and entrance animations.'
            },
            stack: ['HTML', 'CSS', 'JavaScript'],
            site: 'https://unisoconecta.vercel.app',
            code: 'https://github.com/EnzzoGomes/unisoconecta',
            shots: [IMG + 'conecta-uniso.jpg', IMG + 'conecta-uniso-2.jpg', IMG + 'conecta-uniso-3.jpg']
        },
        {
            id: 'area-do-aluno',
            pos: [0, 1],
            title: { pt: 'conecta.uniso — Área do Aluno', en: 'conecta.uniso — Student Portal' },
            type: { pt: 'Web App', en: 'Web App' },
            desc: {
                pt: 'Portal do aluno do conecta.uniso, com login, cadastro de novos alunos e recuperação de senha.',
                en: 'Student portal for conecta.uniso, with sign-in, new student registration and password recovery.'
            },
            stack: ['HTML', 'CSS', 'JavaScript'],
            site: 'https://site-letramento.vercel.app',
            code: 'https://github.com/EnzzoGomes/site-letramento',
            shots: [IMG + 'area-do-aluno.jpg']
        },
        {
            id: 'c2system',
            pos: [1, 1],
            title: { pt: 'C²SYSTEM', en: 'C²SYSTEM' },
            type: { pt: 'SaaS / Gestão', en: 'SaaS / Management' },
            desc: {
                pt: 'Plataforma SaaS multiempresa para gestão de mídia exterior (OOH/DOOH): placas e painéis de LED, clientes, contratos, reservas bi-semanais, financeiro com fluxo de caixa, relatórios em Excel/CSV/PDF e importação inteligente de planilhas. Cada empresa tem seus dados isolados.',
                en: 'Multi-tenant SaaS for out-of-home media management (OOH/DOOH): billboards and LED panels, clients, contracts, bi-weekly bookings, finance with cash flow, Excel/CSV/PDF reports and smart spreadsheet import. Each company’s data is fully isolated.'
            },
            stack: ['PHP 8', 'MySQL', 'PDO', 'JavaScript', 'InfinityFree'],
            site: null,
            code: null,
            shots: [IMG + 'c-system-1.jpg', IMG + 'c-system-2.jpg', IMG + 'c-system-3.jpg', IMG + 'c-system-4.jpg', IMG + 'c-system-5.jpg']
        },
        {
            id: 'estufa-powerbi',
            pos: [2, 1],
            title: { pt: 'Estufa — Power BI', en: 'Greenhouse — Power BI' },
            type: { pt: 'Dados / BI', en: 'Data / BI' },
            desc: {
                pt: 'Painel de monitoramento da estufa com login. Os sensores enviam leituras ao ThingSpeak; o site em PHP grava médias de 15 minutos no MySQL e um script Python no GitHub Actions envia os dados para o Power BI Web.',
                en: 'Greenhouse monitoring dashboard with sign-in. Sensors send readings to ThingSpeak; the PHP site stores 15-minute averages in MySQL and a Python script on GitHub Actions pushes the data to Power BI Web.'
            },
            stack: ['Python', 'PHP', 'MySQL', 'ThingSpeak', 'Power BI', 'GitHub Actions'],
            site: 'https://estufa.freedev.app',
            code: 'https://github.com/EnzzoGomes/estufa-powerbi',
            shots: [IMG + 'estufa-powerbi-1.jpg', IMG + 'estufa-powerbi-2.jpg']
        },
        {
            id: 'estufa-trovao',
            pos: [0, 2],
            title: { pt: 'Estufa Trovão', en: 'Estufa Trovão' },
            type: { pt: 'IoT / Dados', en: 'IoT / Data' },
            desc: {
                pt: 'Sistema web da estufa com sensores IoT: área com login, gráficos em tempo real do ThingSpeak e tabela com as leituras dos sensores.',
                en: 'Web system for an IoT greenhouse: signed-in area, real-time ThingSpeak charts and a table with the sensor readings.'
            },
            stack: ['PHP', 'MySQL', 'ThingSpeak', 'IoT'],
            site: 'https://estufa-trovao.freedev.app',
            code: null,
            shots: [IMG + 'estufa-trovao-1.jpg']
        },
        {
            id: 'sites-profissionais',
            pos: [1, 2],
            title: { pt: 'Sites Profissionais', en: 'Professional Websites' },
            type: { pt: 'Freelance', en: 'Freelance' },
            desc: {
                pt: 'Minha página de serviços como freelancer: desenvolvimento de sites modernos, rápidos e otimizados para transformar visitantes em clientes.',
                en: 'My freelance services page: modern, fast websites built to turn visitors into customers.'
            },
            stack: ['HTML', 'CSS', 'JavaScript'],
            site: 'https://vendasenzzogomes.vercel.app',
            code: 'https://github.com/EnzzoGomes/vendas',
            shots: [IMG + 'sites-profissionais.jpg', IMG + 'sites-profissionais-2.jpg', IMG + 'sites-profissionais-3.jpg']
        }
    ];

    const files = [
        { id: 'portfolio', kind: 'folder', label: 'portfolio', pos: [2, 2] }
    ];

    const techs = [
        { short: 'Py', name: 'Python', pt: 'Pandas e NumPy para tratar, analisar e automatizar dados.', en: 'Pandas and NumPy to clean, analyze and automate data.' },
        { short: 'SQL', name: 'SQL', pt: 'Consultas e modelagem para relatórios financeiros e operacionais.', en: 'Queries and modeling for financial and operational reports.' },
        { short: 'BI', name: 'Power BI', pt: 'Painéis que transformam números em decisões — inclusive com dados em tempo real.', en: 'Dashboards that turn numbers into decisions — including real-time data.' },
        { short: 'Tb', name: 'Tableau', pt: 'Visualização de dados exploratória e storytelling com dados.', en: 'Exploratory data visualization and data storytelling.' },
        { short: 'R', name: 'R', pt: 'Estatística aplicada e análise exploratória.', en: 'Applied statistics and exploratory analysis.' },
        { short: 'Jv', name: 'Java', pt: 'Base de orientação a objetos e desenvolvimento técnico.', en: 'Object-oriented foundations and technical development.' },
        { short: 'AI', name: 'OpenAI API', pt: 'Integração de LLMs em apps: geração de texto, busca semântica e automação.', en: 'Integrating LLMs into apps: text generation, semantic search and automation.' },
        { short: 'TS', name: 'TypeScript', pt: 'Tipagem para aplicações web mais seguras e fáceis de manter.', en: 'Type safety for web apps that are safer and easier to maintain.' },
        { short: 'Re', name: 'React', pt: 'Interfaces dinâmicas com arquitetura de componentes.', en: 'Dynamic interfaces with component-based architecture.' },
        { short: 'Nd', name: 'Node.js', pt: 'APIs e serviços no servidor com JavaScript.', en: 'Server-side APIs and services with JavaScript.' },
        { short: 'GA', name: 'GitHub Actions', pt: 'Automação de rotinas: coleta e envio de dados agendados.', en: 'Automating routines: scheduled data collection and delivery.' }
    ];

    const aboutText = {
        pt: `<p><strong>Formação:</strong> Ciência de Dados e IA — Uniso.</p>
<p><strong>Objetivo:</strong> consolidar o domínio em ferramentas de IA e automação, aplicando ética e responsabilidade no desenvolvimento de modelos, e integrar times de dados onde eu converta desafios operacionais em fluxos automatizados e insights estratégicos.</p>
<p><strong>Experiência:</strong> suporte a áreas financeiras e operacionais com SQL, Python e ferramentas de BI, criando automações e relatórios que geram clareza e eficiência.</p>
<p><strong>Filosofia:</strong> tecnologia tem que ser prática e ética. Construo soluções que não só processam dados, mas encontram oportunidades reais de negócio.</p>`,
        en: `<p><strong>Education:</strong> Data Science & AI — Uniso.</p>
<p><strong>Goal:</strong> master AI and automation tools, applying ethics and responsibility to model development, and join data teams where I turn operational challenges into automated workflows and strategic insights.</p>
<p><strong>Experience:</strong> supporting finance and operations teams with SQL, Python and BI tools, building automations and reports that bring clarity and efficiency.</p>
<p><strong>Philosophy:</strong> technology must be practical and ethical. I build solutions that don't just process data, but find real business opportunities.</p>`
    };

    const terminalScript = {
        pt: [
            { cmd: 'whoami', out: '<strong>Enzzo Gomes</strong> — estudante de Ciência de Dados e IA na Uniso.' },
            { cmd: 'cat objetivo.txt', out: 'Consolidar o domínio em IA e automação, com ética e responsabilidade no desenvolvimento de modelos. Quero integrar times de dados e converter desafios operacionais em fluxos automatizados e insights estratégicos.' },
            { cmd: 'ls skills/', out: 'python/  sql/  power-bi/  tableau/  r/  java/  openai-api/' },
            { cmd: 'cat experiencia.txt', out: 'Suporte a áreas financeiras e operacionais com SQL, Python e BI — automações e relatórios que geram clareza e eficiência.' },
            { cmd: 'cat filosofia.txt', out: 'Tecnologia tem que ser <strong>prática e ética</strong>. Dados brutos só valem quando viram decisão.' }
        ],
        en: [
            { cmd: 'whoami', out: '<strong>Enzzo Gomes</strong> — Data Science & AI student at Uniso.' },
            { cmd: 'cat goal.txt', out: 'Master AI and automation with ethics and responsibility in model development. I want to join data teams and turn operational challenges into automated workflows and strategic insights.' },
            { cmd: 'ls skills/', out: 'python/  sql/  power-bi/  tableau/  r/  java/  openai-api/' },
            { cmd: 'cat experience.txt', out: 'Supporting finance and operations with SQL, Python and BI — automations and reports that bring clarity and efficiency.' },
            { cmd: 'cat philosophy.txt', out: 'Technology must be <strong>practical and ethical</strong>. Raw data only matters once it becomes a decision.' }
        ]
    };

    const t = (key) => (i18n[lang] && i18n[lang][key]) || i18n.pt[key] || key;

    // ------------------------------------------------------------------
    // ÍCONES (SVG)
    // ------------------------------------------------------------------
    const folderSVG = () => `
<svg class="icon__art" viewBox="0 0 58 48" aria-hidden="true">
  <path d="M1 6a3 3 0 0 1 3-3h15l5 5h30a3 3 0 0 1 3 3v6H1z" fill="#2b3036"/>
  <rect x="1" y="12" width="56" height="35" rx="2" fill="#1f2328" stroke="#3a4048"/>
  <rect x="1" y="12" width="56" height="3" fill="#d4ff00"/>
  <path d="M8 38h18" stroke="#5c636b" stroke-width="2"/>
</svg>`;

    const fileSVG = (kind) => {
        const tag = { txt: 'TXT', pdf: 'PDF', lnk: 'URL' }[kind] || 'FILE';
        const fill = kind === 'pdf' ? '#d4ff00' : '#e9ebed';
        const ink = '#0c0d0e';
        return `
<svg class="icon__art" viewBox="0 0 58 48" aria-hidden="true">
  <path d="M15 1h20l10 10v35a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" fill="#1f2328" stroke="#3a4048"/>
  <path d="M35 1v10h10" fill="none" stroke="#3a4048"/>
  <rect x="9" y="27" width="28" height="12" fill="${fill}"/>
  <text x="23" y="36" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="8" font-weight="700" fill="${ink}">${tag}</text>
</svg>`;
    };

    const smallFolderSVG = () => `
<svg viewBox="0 0 28 23" aria-hidden="true">
  <path d="M1 3a2 2 0 0 1 2-2h7l2.5 2.5H25a2 2 0 0 1 2 2V8H1z" fill="#2b3036"/>
  <rect x="1" y="6" width="26" height="16" rx="1" fill="#1f2328" stroke="#3a4048"/>
  <rect x="1" y="6" width="26" height="2" fill="#d4ff00"/>
</svg>`;

    // ------------------------------------------------------------------
    // LENIS (rolagem suave)
    // ------------------------------------------------------------------
    let lenis = null;
    if (hasGsap && typeof window.Lenis !== 'undefined' && !reduceMotion) {
        try {
            lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
        } catch (e) {
            console.error('Lenis init failed:', e);
            lenis = null;
        }
    }

    // Links internos (#sobre etc.) com rolagem suave
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        const target = id === '#top' ? 0 : $(id);
        if (target === null) return;
        e.preventDefault();
        if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.2 });
        else if (target === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
        else target.scrollIntoView({ behavior: 'smooth' });
    });

    // ------------------------------------------------------------------
    // RELÓGIO
    // ------------------------------------------------------------------
    const clockEl = $('#clock');
    function tickClock() {
        if (!clockEl) return;
        const now = new Date();
        const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
        const day = now.toLocaleDateString(locale, { weekday: 'short' }).replace('.', '');
        const time = now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
        clockEl.textContent = `${day} ${time}`;
    }
    tickClock();
    setInterval(tickClock, 15000);

    // ------------------------------------------------------------------
    // DESKTOP: ícones arrastáveis
    // ------------------------------------------------------------------
    const iconsLayer = $('#desktopIcons');
    const desktop = $('#desktop');
    let iconZ = 10;
    let draggables = [];

    function iconLabel(item) {
        if (item.title) return item.id;
        return item.labelKey ? t(item.labelKey) : item.label;
    }

    function renderIcons() {
        if (!iconsLayer) return;
        const items = [...projects.map((p) => ({ ...p, kind: 'folder' })), ...files];
        iconsLayer.innerHTML = items.map((item) => `
<button type="button" class="icon" data-id="${item.id}" data-kind="${item.kind}"
    style="--col:${item.pos[0]};--row:${item.pos[1]}" data-cursor-label="drag"
    aria-label="${item.title ? item.title[lang] : iconLabel(item)}">
  ${item.kind === 'folder' ? folderSVG() : fileSVG(item.kind)}
  <span class="icon__label">${iconLabel(item)}</span>
</button>`).join('');
    }

    function updateIconLabels() {
        $$('.icon', iconsLayer).forEach((el) => {
            const id = el.dataset.id;
            const p = projects.find((x) => x.id === id);
            const f = files.find((x) => x.id === id);
            const label = p ? p.id : iconLabel(f);
            $('.icon__label', el).textContent = label;
            el.setAttribute('aria-label', p ? p.title[lang] : label);
        });
    }

    function selectIcon(el) {
        $$('.icon.is-selected', iconsLayer).forEach((x) => x !== el && x.classList.remove('is-selected'));
        if (el) el.classList.add('is-selected');
    }

    function activateIcon(el) {
        const id = el.dataset.id;
        const project = projects.find((p) => p.id === id);
        if (project) return openProjectWindow(project, el);
        const file = files.find((f) => f.id === id);
        if (!file) return;
        if (file.id === 'about') return openAboutWindow(el);
        if (file.id === 'portfolio') {
            const target = $('#projetos');
            if (lenis) lenis.scrollTo(target, { duration: 1.2 });
            else target.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        if (file.href) window.open(file.href, '_blank', 'noopener');
    }

    function enableDrag() {
        if (!hasGsap || !window.Draggable || !desktopMQ.matches) return;
        draggables = $$('.icon', iconsLayer).map((el) => Draggable.create(el, {
            type: 'x,y',
            bounds: desktop,
            inertia: !!window.InertiaPlugin && !reduceMotion,
            edgeResistance: 0.75,
            dragClickables: true,
            minimumMovement: 4,
            zIndexBoost: false,
            onPress() {
                iconZ += 1;
                el.style.zIndex = iconZ;
                selectIcon(el);
            },
            onDragStart() {
                el.classList.add('is-dragging');
                gsap.to(el, { scale: 1.06, duration: 0.25, ease: 'power3.out' });
            },
            onRelease() {
                el.classList.remove('is-dragging');
                gsap.to(el, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.6)' });
            },
            onClick() {
                activateIcon(el);
            }
        })[0]);
    }

    function disableDrag() {
        draggables.forEach((d) => d.kill());
        draggables = [];
        $$('.icon', iconsLayer).forEach((el) => gsap.set(el, { clearProps: 'transform,zIndex' }));
    }

    renderIcons();
    enableDrag();
    if (desktopMQ.addEventListener) {
        desktopMQ.addEventListener('change', () => { disableDrag(); enableDrag(); });
    }

    // Teclado e toque (sem Draggable) usam o clique normal
    iconsLayer && iconsLayer.addEventListener('click', (e) => {
        const el = e.target.closest('.icon');
        if (!el) return;
        const dragOn = draggables.length > 0;
        if (!dragOn || e.detail === 0) {
            selectIcon(el);
            activateIcon(el);
        }
    });

    desktop && desktop.addEventListener('pointerdown', (e) => {
        if (!e.target.closest('.icon')) selectIcon(null);
    });

    // Botão "organizar": devolve as pastas para a grade
    const tidyBtn = $('#tidyIcons');
    tidyBtn && tidyBtn.addEventListener('click', () => {
        if (!hasGsap) return;
        gsap.to($$('.icon', iconsLayer), {
            x: 0, y: 0, duration: 0.7, ease: 'expo.out', stagger: 0.04,
            onComplete() { draggables.forEach((d) => d.update()); }
        });
    });

    // Atalho "Sobre mim"
    $$('[data-open="about"]').forEach((b) => b.addEventListener('click', () => openAboutWindow(b)));

    // ------------------------------------------------------------------
    // GERENCIADOR DE JANELAS
    // ------------------------------------------------------------------
    const windowsLayer = $('#windows');
    const tpl = $('#windowTemplate');
    const openWindows = new Map(); // key -> { el, render, opener, drag }
    let winZ = 1;
    let cascade = 0;

    function focusWindow(el) {
        winZ += 1;
        el.style.zIndex = winZ;
        $$('.window--float', windowsLayer).forEach((w) => w.classList.toggle('is-active', w === el));
    }

    function openWindow(key, path, render, opener) {
        if (openWindows.has(key)) {
            const w = openWindows.get(key);
            focusWindow(w.el);
            w.el.focus({ preventScroll: true });
            if (hasGsap && !reduceMotion) {
                gsap.fromTo(w.el, { scale: 0.98 }, { scale: 1, duration: 0.3, ease: 'power3.out' });
            }
            return;
        }

        const el = tpl.content.firstElementChild.cloneNode(true);
        el.dataset.key = key;
        $('.window__path', el).textContent = path;
        const body = $('.window__body', el);
        body.innerHTML = render();
        $('[data-action="close"]', el).setAttribute('aria-label', t('close'));
        $('[data-action="max"]', el).setAttribute('aria-label', t('maximize'));
        el.setAttribute('aria-label', path);
        $('[data-drag-handle]', el).dataset.cursorLabel = 'move';
        windowsLayer.appendChild(el);

        const isDesktop = desktopMQ.matches;
        let drag = null;

        if (hasGsap && isDesktop) {
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            const menubar = 44;
            const offset = (cascade % 6) * 28;
            cascade += 1;
            const x = Math.max(16, (window.innerWidth - w) / 2 - 80 + offset);
            const y = Math.max(menubar + 16, Math.min((window.innerHeight - h) / 2 - 40 + offset, window.innerHeight - h - 16));
            gsap.set(el, { x, y });

            if (window.Draggable) {
                drag = Draggable.create(el, {
                    type: 'x,y',
                    trigger: $('[data-drag-handle]', el),
                    bounds: { minX: -w + 120, maxX: window.innerWidth - 120, minY: menubar, maxY: window.innerHeight - 60 },
                    inertia: !!window.InertiaPlugin && !reduceMotion,
                    edgeResistance: 0.85,
                    onPress() { focusWindow(el); }
                })[0];
            }
        }

        focusWindow(el);
        el.addEventListener('pointerdown', () => focusWindow(el));

        $('[data-action="close"]', el).addEventListener('click', () => closeWindow(key));
        $('[data-action="max"]', el).addEventListener('click', () => toggleMax(key));
        $('[data-drag-handle]', el).addEventListener('dblclick', (e) => {
            if (!e.target.closest('button')) toggleMax(key);
        });

        openWindows.set(key, { el, render, opener, drag });

        if (hasGsap && !reduceMotion) {
            if (isDesktop) {
                gsap.fromTo(el, { autoAlpha: 0, scale: 0.88 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'expo.out' });
            } else {
                gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3 });
            }
        }

        el.focus({ preventScroll: true });
    }

    function toggleMax(key) {
        const w = openWindows.get(key);
        if (!w || !hasGsap || !desktopMQ.matches) return;
        const el = w.el;
        if (!el.classList.contains('is-max')) {
            w.prev = { x: gsap.getProperty(el, 'x'), y: gsap.getProperty(el, 'y') };
            el.classList.add('is-max');
            gsap.to(el, { x: 16, y: 44 + 16, duration: 0.45, ease: 'expo.out' });
            if (w.drag) w.drag.disable();
        } else {
            el.classList.remove('is-max');
            gsap.to(el, { x: w.prev.x, y: w.prev.y, duration: 0.45, ease: 'expo.out' });
            if (w.drag) w.drag.enable();
        }
    }

    function closeWindow(key) {
        const w = openWindows.get(key);
        if (!w) return;
        openWindows.delete(key);
        const done = () => {
            if (w.drag) w.drag.kill();
            w.el.remove();
            if (w.opener && document.contains(w.opener)) w.opener.focus({ preventScroll: true });
            const remaining = $$('.window--float', windowsLayer);
            if (remaining.length) focusWindow(remaining[remaining.length - 1]);
        };
        if (hasGsap && !reduceMotion) {
            gsap.to(w.el, { autoAlpha: 0, scale: 0.92, duration: 0.25, ease: 'power2.in', onComplete: done });
        } else {
            done();
        }
    }

    function showShot(fig, index) {
        const win = fig.closest('.window--float');
        const p = win && projects.find((x) => `project:${x.id}` === win.dataset.key);
        if (!p) return;
        const total = p.shots.length;
        const i = (index + total) % total;
        fig.dataset.index = i;
        const img = $('.pw__main', fig);
        if (hasGsap && !reduceMotion) {
            gsap.fromTo(img, { autoAlpha: 0.2 }, { autoAlpha: 1, duration: 0.35 });
        }
        img.src = p.shots[i];
        $$('.pw__thumb', fig).forEach((b, k) => b.classList.toggle('is-active', k === i));
        const count = $('.pw__count', fig);
        if (count) count.textContent = `${i + 1} / ${total}`;
    }

    windowsLayer.addEventListener('click', (e) => {
        const thumb = e.target.closest('[data-shot]');
        const step = e.target.closest('[data-step]');
        const fig = e.target.closest('.pw__shot');
        if (!fig) return;
        if (thumb) showShot(fig, +thumb.dataset.shot);
        else if (step) showShot(fig, +fig.dataset.index + +step.dataset.step);
    });

    document.addEventListener('keydown', (e) => {
        const activeWin = $('.window--float.is-active', windowsLayer);
        const fig = activeWin && $('.pw__shot[data-total]', activeWin);
        if (fig && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
            showShot(fig, +fig.dataset.index + (e.key === 'ArrowRight' ? 1 : -1));
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        const active = $('.window--float.is-active', windowsLayer);
        if (active) closeWindow(active.dataset.key);
    });

    function projectBody(p) {
        const actions = [
            p.site ? `<a class="btn btn--neon btn--sm" data-magnetic href="${p.site}" target="_blank" rel="noopener">${t('open_site')} ↗</a>` : '',
            p.code ? `<a class="btn btn--sm" data-magnetic href="${p.code}" target="_blank" rel="noopener">${t('view_code')} ↗</a>` : ''
        ].join('');
        const host = (p.site || '').replace(/^https?:\/\//, '').replace(/\/$/, '') || (lang === 'pt' ? 'versão de demonstração' : 'demo version');
        const shots = p.shots || [];
        let preview;
        if (shots.length) {
            const thumbs = shots.length > 1
                ? `<div class="pw__thumbs">${shots.map((src, i) => `<button type="button" class="pw__thumb${i === 0 ? ' is-active' : ''}" data-shot="${i}" aria-label="Print ${i + 1}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>`
                : '';
            const nav = shots.length > 1
                ? `<button type="button" class="pw__nav pw__nav--prev" data-step="-1" aria-label="Anterior">‹</button><button type="button" class="pw__nav pw__nav--next" data-step="1" aria-label="Próximo">›</button><span class="pw__count">1 / ${shots.length}</span>`
                : '';
            preview = `<figure class="pw__shot" data-index="0" data-total="${shots.length}"><div class="pw__shot-bar"><i></i><i></i><i></i><span>${host}</span></div><div class="pw__stage"><img class="pw__main" src="${shots[0]}" alt="${p.title[lang]}">${nav}</div>${thumbs}</figure>`;
        } else {
            preview = `<figure class="pw__shot pw__shot--empty">${folderSVG()}<span>${t('no_preview')}</span></figure>`;
        }
        return `
${preview}
<p class="pw__cat">${p.type[lang]}</p>
<h3 class="pw__title">${p.title[lang]}</h3>
<p class="pw__desc">${p.desc[lang]}</p>
<ul class="chips">${p.stack.map((s) => `<li>${s}</li>`).join('')}</ul>
<div class="pw__actions">${actions}</div>`;
    }

    function openProjectWindow(p, opener) {
        openWindow(`project:${p.id}`, `~/projetos/${p.id}`, () => projectBody(p), opener);
        bindMagnetic($(`.window--float[data-key="project:${p.id}"]`, windowsLayer));
    }

    function openAboutWindow(opener) {
        openWindow('about', `~/${t('file_about')}`, () => `<div class="txt">${aboutText[lang]}</div>`, opener);
    }

    function rerenderWindows() {
        openWindows.forEach((w, key) => {
            $('.window__body', w.el).innerHTML = w.render();
            if (key === 'about') $('.window__path', w.el).textContent = `~/${t('file_about')}`;
            bindMagnetic(w.el);
        });
    }

    // ------------------------------------------------------------------
    // LISTA DE PROJETOS (explorador)
    // ------------------------------------------------------------------
    const listEl = $('#projectList');
    const countEl = $('#projectCount');

    function renderList() {
        if (!listEl) return;
        listEl.innerHTML = projects.map((p) => `
<li>
  <button type="button" class="explorer__row" data-id="${p.id}" data-cursor-label="open">
    <span class="explorer__name">${smallFolderSVG()}<span>${p.title[lang]}</span></span>
    <span class="explorer__type">${p.type[lang]}</span>
    <span class="explorer__stack">${p.stack.slice(0, 3).join(' · ')}</span>
    <span class="explorer__arrow" aria-hidden="true">↗</span>
  </button>
</li>`).join('');
        if (countEl) countEl.textContent = `${projects.length} ${t('items')}`;
    }
    renderList();

    // Prévia que segue o mouse ao passar pela lista
    const peek = document.createElement('div');
    peek.className = 'peek';
    peek.setAttribute('aria-hidden', 'true');
    document.body.appendChild(peek);

    if (listEl && hasGsap && finePointer && !reduceMotion) {
        const px = gsap.quickTo(peek, 'x', { duration: 0.5, ease: 'power3.out' });
        const py = gsap.quickTo(peek, 'y', { duration: 0.5, ease: 'power3.out' });
        let current = null;

        listEl.addEventListener('pointermove', (e) => {
            px(e.clientX + 24);
            py(e.clientY - 90);
            const row = e.target.closest('.explorer__row');
            const p = row && projects.find((x) => x.id === row.dataset.id);
            if (p && p.shots && p.shots.length) {
                if (current !== p.id) {
                    current = p.id;
                    peek.style.backgroundImage = `url("${p.shots[0]}")`;
                }
                peek.classList.add('is-visible');
            } else {
                peek.classList.remove('is-visible');
                current = null;
            }
        });
        listEl.addEventListener('pointerleave', () => {
            peek.classList.remove('is-visible');
            current = null;
        });
    }

    listEl && listEl.addEventListener('click', (e) => {
        const row = e.target.closest('.explorer__row');
        if (!row) return;
        const p = projects.find((x) => x.id === row.dataset.id);
        if (p) openProjectWindow(p, row);
    });

    // ------------------------------------------------------------------
    // DOCK (stack) com ampliação estilo macOS
    // ------------------------------------------------------------------
    const dock = $('#dock');
    const dockName = $('#dockName');
    const dockDesc = $('#dockDesc');
    let activeTech = 0;

    function renderDock() {
        if (!dock) return;
        dock.innerHTML = techs.map((tech, i) => `
<li><button type="button" class="dock__item${i === activeTech ? ' is-active' : ''}" data-index="${i}" aria-label="${tech.name}">${tech.short}</button></li>`).join('');
        showTech(activeTech);
    }

    function showTech(i) {
        activeTech = i;
        const tech = techs[i];
        if (dockName) dockName.textContent = tech.name;
        if (dockDesc) dockDesc.textContent = tech[lang];
        $$('.dock__item', dock).forEach((b, idx) => b.classList.toggle('is-active', idx === i));
    }

    renderDock();

    if (dock) {
        dock.addEventListener('pointerover', (e) => {
            const b = e.target.closest('.dock__item');
            if (b) showTech(+b.dataset.index);
        });
        dock.addEventListener('focusin', (e) => {
            const b = e.target.closest('.dock__item');
            if (b) showTech(+b.dataset.index);
        });
        dock.addEventListener('click', (e) => {
            const b = e.target.closest('.dock__item');
            if (b) showTech(+b.dataset.index);
        });

        if (hasGsap && finePointer && !reduceMotion) {
            const BASE = 60;
            const MAX = 96;
            const RANGE = 150;
            const sizers = () => $$('.dock__item', dock).map((b) => ({
                b,
                w: gsap.quickTo(b, 'width', { duration: 0.3, ease: 'power3.out' }),
                h: gsap.quickTo(b, 'height', { duration: 0.3, ease: 'power3.out' })
            }));
            let items = sizers();

            dock.addEventListener('pointermove', (e) => {
                if (!desktopMQ.matches) return;
                items.forEach(({ b, w, h }) => {
                    const r = b.getBoundingClientRect();
                    const d = Math.abs(e.clientX - (r.left + r.width / 2));
                    const s = BASE + (MAX - BASE) * Math.max(0, 1 - d / RANGE) ** 1.6;
                    w(s); h(s);
                });
            });
            dock.addEventListener('pointerleave', () => {
                items.forEach(({ w, h }) => { w(BASE); h(BASE); });
            });
            dock._resetSizers = () => { items = sizers(); };
        }
    }

    // ------------------------------------------------------------------
    // TERMINAL (digitando)
    // ------------------------------------------------------------------
    const term = $('#terminal');
    let termRun = 0;
    let termState = 'idle'; // idle | typing | done

    function renderTerminalStatic() {
        if (!term) return;
        term.innerHTML = terminalScript[lang].map((s) => `
<p class="term-line term-cmd"><span class="prompt">$</span> ${s.cmd}</p>
<p class="term-line term-out">${s.out}</p>`).join('') + '<p class="term-line term-cmd"><span class="prompt">$</span> <span class="caret"></span></p>';
        termState = 'done';
    }

    function typeTerminal() {
        if (!term) return;
        const run = ++termRun;
        termState = 'typing';
        term.innerHTML = '';
        const script = terminalScript[lang];
        const wait = (ms) => new Promise((r) => setTimeout(r, ms));
        const alive = () => run === termRun;

        (async () => {
            for (const step of script) {
                if (!alive()) return;
                const cmd = document.createElement('p');
                cmd.className = 'term-line term-cmd';
                cmd.innerHTML = '<span class="prompt">$</span> <span class="typed"></span><span class="caret"></span>';
                term.appendChild(cmd);
                const typed = $('.typed', cmd);
                for (const ch of step.cmd) {
                    if (!alive()) return;
                    typed.textContent += ch;
                    await wait(32 + Math.random() * 40);
                }
                await wait(220);
                if (!alive()) return;
                $('.caret', cmd).remove();
                const out = document.createElement('p');
                out.className = 'term-line term-out';
                out.innerHTML = step.out;
                term.appendChild(out);
                if (hasGsap) gsap.from(out, { autoAlpha: 0, y: 6, duration: 0.35, ease: 'power2.out' });
                await wait(420);
            }
            if (!alive()) return;
            const end = document.createElement('p');
            end.className = 'term-line term-cmd';
            end.innerHTML = '<span class="prompt">$</span> <span class="caret"></span>';
            term.appendChild(end);
            termState = 'done';
        })();
    }

    if (term) {
        if (reduceMotion || !hasGsap) {
            renderTerminalStatic();
        } else {
            term.innerHTML = '<p class="term-line term-cmd"><span class="prompt">$</span> <span class="caret"></span></p>';
            ScrollTrigger.create({
                trigger: term,
                start: 'top 75%',
                once: true,
                onEnter: typeTerminal
            });
        }
    }

    // ------------------------------------------------------------------
    // IDIOMA
    // ------------------------------------------------------------------
    function setLanguage(next) {
        lang = next;
        try { localStorage.setItem('lang', next); } catch (e) { /* ignore */ }
        document.documentElement.lang = next === 'pt' ? 'pt-br' : 'en';
        document.title = t('page_title');

        $$('[data-i18n]').forEach((el) => {
            const value = t(el.dataset.i18n);
            if (value.includes('<')) el.innerHTML = value;
            else el.textContent = value;
        });

        $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === next)));

        updateIconLabels();
        renderList();
        showTech(activeTech);
        rerenderWindows();
        tickClock();

        if (termState === 'done') renderTerminalStatic();
        else if (termState === 'typing') typeTerminal();

        if (hasGsap) ScrollTrigger.refresh();
    }

    $$('.lang button').forEach((b) => b.addEventListener('click', () => setLanguage(b.dataset.lang)));
    setLanguage(lang);

    // ------------------------------------------------------------------
    // ANIMAÇÕES DE ENTRADA
    // ------------------------------------------------------------------
    if (hasGsap && !reduceMotion) {
        const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });
        heroTl
            .from('.hero__line', { yPercent: 40, autoAlpha: 0, duration: 1.1, stagger: 0.12 })
            .from('.hero__role, .hero__sub', { autoAlpha: 0, y: 14, duration: 0.8, stagger: 0.08 }, '-=0.7')
            .from('.icon', { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.06, ease: 'power3.out', clearProps: 'y' }, '-=0.6')
            .from('.widget', { autoAlpha: 0, x: 24, duration: 0.8 }, '<0.1')
            .from('.desktop__hint', { autoAlpha: 0, duration: 0.6 }, '-=0.3');

        $$('.reveal').forEach((el) => {
            gsap.from(el, {
                autoAlpha: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 88%', once: true }
            });
        });

        // Título gigante do rodapé desliza com a rolagem
        gsap.fromTo('.footer__giant', { xPercent: -6 }, {
            xPercent: 6,
            ease: 'none',
            scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: true }
        });
    }

    if (document.fonts && document.fonts.ready && hasGsap) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    // ------------------------------------------------------------------
    // CURSOR + PARALLAX
    // ------------------------------------------------------------------
    const ringEl = $('.cursor-ring');
    const dotEl = $('.cursor-dot');
    const labelEl = $('.cursor-label');
    const gridEl = $('.desktop__grid');
    const glowEl = $('.desktop__glow');
    const root = document.documentElement;

    if (hasGsap && finePointer && !reduceMotion && ringEl && dotEl) {
        root.classList.add('has-cursor', 'cursor-hidden');

        const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
        const ring = { x: mouse.x, y: mouse.y, s: 1 };
        const par = { x: 0, y: 0 };
        let targetScale = 1;
        let pressed = false;

        const setRing = gsap.quickSetter(ringEl, 'css');
        const setDot = gsap.quickSetter(dotEl, 'css');
        const setLabel = labelEl ? gsap.quickSetter(labelEl, 'css') : null;
        const setGrid = gridEl ? gsap.quickSetter(gridEl, 'css') : null;
        const setGlow = glowEl ? gsap.quickSetter(glowEl, 'css') : null;

        window.addEventListener('pointermove', (e) => {
            if (e.pointerType !== 'mouse') return;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            root.classList.remove('cursor-hidden');
        }, { passive: true });

        root.addEventListener('pointerleave', () => root.classList.add('cursor-hidden'));
        window.addEventListener('blur', () => root.classList.add('cursor-hidden'));
        window.addEventListener('pointerdown', () => { pressed = true; });
        window.addEventListener('pointerup', () => { pressed = false; });

        const HOVER = 'a, button, [data-cursor-label]';
        const labelKeys = { drag: 'cursor_drag', open: 'cursor_open', move: 'cursor_move' };

        document.addEventListener('pointerover', (e) => {
            const el = e.target.closest && e.target.closest(HOVER);
            if (!el) return;
            targetScale = 1.7;
            ringEl.classList.add('is-hover');
            const lk = el.closest('[data-cursor-label]');
            if (labelEl && lk && labelKeys[lk.dataset.cursorLabel]) {
                labelEl.textContent = t(labelKeys[lk.dataset.cursorLabel]);
                labelEl.classList.add('is-visible');
            }
        });
        document.addEventListener('pointerout', (e) => {
            const from = e.target.closest && e.target.closest(HOVER);
            const to = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest(HOVER) : null;
            if (from && from !== to) {
                targetScale = 1;
                ringEl.classList.remove('is-hover');
                if (labelEl && !(to && to.closest('[data-cursor-label]'))) labelEl.classList.remove('is-visible');
            }
        });

        const lerp = (a, b, k) => a + (b - a) * k;
        gsap.ticker.add((time, deltaTime) => {
            const dt = Math.min(deltaTime, 50) / 16.667;
            const k = (speed) => 1 - Math.pow(1 - speed, dt);

            ring.x = lerp(ring.x, mouse.x, k(0.2));
            ring.y = lerp(ring.y, mouse.y, k(0.2));
            ring.s = lerp(ring.s, pressed ? targetScale * 0.75 : targetScale, k(0.25));

            setDot({ x: mouse.x, y: mouse.y });
            setRing({ x: ring.x, y: ring.y, scale: ring.s });
            if (setLabel) setLabel({ x: ring.x, y: ring.y });

            const nx = (mouse.x / innerWidth) * 2 - 1;
            const ny = (mouse.y / innerHeight) * 2 - 1;
            par.x = lerp(par.x, nx, k(0.06));
            par.y = lerp(par.y, ny, k(0.06));
            if (setGrid) setGrid({ x: par.x * -22, y: par.y * -22 });
            if (setGlow) setGlow({ x: par.x * 40, y: par.y * 40 });
        });
    }

    // ------------------------------------------------------------------
    // BOTÕES MAGNÉTICOS
    // ------------------------------------------------------------------
    function bindMagnetic(scope) {
        if (!hasGsap || !finePointer || reduceMotion || !scope) return;
        $$('[data-magnetic]', scope).forEach((el) => {
            if (el._magnetic) return;
            el._magnetic = true;
            const strength = parseFloat(el.dataset.magnetic) || 0.3;
            const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
            const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
            el.addEventListener('pointermove', (e) => {
                const r = el.getBoundingClientRect();
                xTo((e.clientX - (r.left + r.width / 2)) * strength);
                yTo((e.clientY - (r.top + r.height / 2)) * strength);
            });
            el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
        });
    }
    bindMagnetic(document);
})();
