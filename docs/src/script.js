document.addEventListener('DOMContentLoaded', function () {
    typeWriter();
    renderizarProjetosAcademicos();
    renderizarProjetosPessoais();
    configurarModal();
    atualizarAnoRodape();
});

/* ----------- Typewriter (Hello World, I'm) ----------- */
function typeWriter() {
    const text = "Ola, eu sou";
    const element = document.querySelector('.typed-text');
    const cursor = document.querySelector('.cursor');
    let index = 0;

    if (!element || !cursor) {
        return;
    }

    function escrever() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            cursor.style.left = `${element.offsetWidth}px`;
            setTimeout(escrever, 250);
        }
    }

    escrever();
}

const projetosAcademicos = [
    {
        nome: "🌊 Projeto Derivadores – IoT & Visualização em Tempo Real",
        descricao: `Os derivadores são amplamente utilizados em estudos oceanográficos, como análise de correntes,
        dispersão de óleo e operações de resgate. Projetados para seguir as correntes locais, permitem o
        cálculo de velocidade e outros parâmetros cinemáticos e dinâmicos a partir de suas posições ao
        longo do tempo.
        Atualmente, a estrutura externa desses dispositivos tem sido construída de forma eficiente com
        impressoras 3D. No entanto, a carga útil composta por localizador GPS e sistema de transmissão de
        dados via telefonia celular ainda depende de soluções importadas. O desafio, portanto, é desenvolver
        uma solução própria baseada em IoT, que possibilite o rastreamento dos derivadores e ofereça uma
        interface gráfica para visualização em tempo real dos dados transmitidos.`,
        imagem: "./src/img/g.png",
        tecnologias: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        ]
    },
    {
        nome: "📚 Projeto Ensino Scrum – Front-End Educacional",
        descricao: `Projeto desenvolvido com foco em ensinar de forma simples e interativa como funciona o framework Scrum.
        Criado utilizando HTML, CSS, JavaScript e TailwindCSS, todo o projeto é Front-End, buscando entregar uma
        experiência prática e didática para quem deseja compreender os papéis, cerimônias e artefatos do Scrum.
        A plataforma simula cenários reais, tornando o aprendizado mais dinâmico e acessível.`,
        imagem: "./src/img/g.png",
        tecnologias: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
        ]
    },
];

const projetosPessoais = [
    {
        nome: "🥗 Projeto Controle de Alimentação – App de Calorias",
        descricao: `Aplicação voltada para o controle de alimentação e monitoramento de calorias ingeridas diariamente.
        Desenvolvido com React (Front-End) e TypeScript, integrando um banco de dados MongoDB para armazenamento
        dos dados dos usuários.
        O app permite cadastrar refeições, monitorar os macronutrientes, acompanhar a evolução e ter relatórios
        sobre hábitos alimentares, proporcionando uma gestão eficiente da saúde nutricional.`,
        imagem: "./src/img/g.png",
        tecnologias: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        ]
    },
    {
        nome: "🛠️ WorcaFlow - Plataforma de Solicitação de Serviços",
        descricao: `Sistema completo de marketplace de serviços residenciais conectando clientes a prestadores,
        com Machine Learning para previsão de preços e categorias. O projeto utiliza FastAPI no backend,
        Supabase/PostgreSQL no banco de dados e Flutter no frontend multiplataforma.
        Inclui autenticação JWT com bcrypt, API REST, sistema de avaliações, arquitetura em camadas
        e práticas de TDD/CI com GitHub Actions para garantir qualidade contínua.`,
        imagem: "./src/img/g.png",
        tecnologias: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        ]
    },
    {
        nome: "📱 Bot Procon Jacareí – WhatsApp",
        descricao: `Chatbot em TypeScript para atendimento do Procon de Jacareí via WhatsApp usando whatsapp-web.js.
        O bot oferece orientação ao consumidor, informações sobre reclamações, contato institucional,
        direitos básicos do CDC e fluxo de agendamento com consentimento LGPD.
        Também possui histórico para atendentes, métricas de protocolos e integração opcional com Outlook
        para criação de eventos no calendário.`,
        imagem: "./src/img/g.png",
        tecnologias: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        ]
    }
];

function renderizarProjetosAcademicos() {
    const container = document.getElementById("projetos-academicos-container");

    if (!container) {
        return;
    }

    projetosAcademicos.forEach((projeto) => {
        const projetoDiv = document.createElement("div");
        projetoDiv.className = "projeto";

        // Título centralizado acima
        const titulo = document.createElement("p");
        titulo.className = "nome-projeto";
        titulo.innerText = projeto.nome;
        projetoDiv.appendChild(titulo);

        // Container que alterna imagem/texto
        const contentDiv = document.createElement("div");
        contentDiv.className = "projeto-content";

        const texto = document.createElement("div");
        texto.className = "projeto-texto";
        texto.innerHTML = projeto.descricao.replace(/\n/g, '<br>');

        contentDiv.appendChild(texto);

        projetoDiv.appendChild(contentDiv);
        container.appendChild(projetoDiv);
    });
}

function renderizarProjetosPessoais() {
    const container = document.getElementById("projetos-pessoais-container");

    if (!container) {
        return;
    }

    projetosPessoais.forEach((projeto) => {
        const projetoDiv = document.createElement("div");
        projetoDiv.className = "projeto";

        // Título centralizado acima
        const titulo = document.createElement("p");
        titulo.className = "nome-projeto";
        titulo.innerText = projeto.nome;
        projetoDiv.appendChild(titulo);

        // Container que vai alternar imagem/texto
        const contentDiv = document.createElement("div");
        contentDiv.className = "projeto-content";

        const texto = document.createElement("div");
        texto.className = "projeto-texto";
        texto.innerHTML = projeto.descricao.replace(/\n/g, '<br>');

        contentDiv.appendChild(texto);

        projetoDiv.appendChild(contentDiv);
        container.appendChild(projetoDiv);
    });
}

/* ----------- Modal de Imagem ----------- */
function configurarModal() {
    const modal = document.getElementById("imagemModal");
    const fecharBtn = document.querySelector('.fechar');

    if (!modal || !fecharBtn) {
        return;
    }

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            fecharModal();
        }
    });

    fecharBtn.addEventListener('click', fecharModal);
}

function configurarEventosImagens() {
    const imagens = document.querySelectorAll('.projeto-imagem img');
    imagens.forEach(imagem => {
        imagem.addEventListener('click', function () {
            abrirModal(imagem);
        });
    });
}

function abrirModal(imgElement) {
    const modal = document.getElementById("imagemModal");
    const modalImg = document.getElementById("imgModal");

    if (!modal || !modalImg) {
        return;
    }

    modal.classList.add("ativo");
    modalImg.src = imgElement.src;
}

function fecharModal() {
    const modal = document.getElementById("imagemModal");
    if (!modal) {
        return;
    }
    modal.classList.remove("ativo");
}

function atualizarAnoRodape() {
    const anoAtual = new Date().getFullYear();
    const rodapeTexto = document.querySelector('.rodape p');
    if (rodapeTexto) {
        rodapeTexto.innerHTML = `&copy; ${anoAtual} Renan Ming. Todos os direitos reservados.`;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const cabecalho = document.querySelector('.cabecalho');
        const yOffset = cabecalho ? -(cabecalho.offsetHeight + 8) : -72;
        if (href === "#home") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const destino = document.querySelector(href);
        if (destino) {
            const y = destino.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

