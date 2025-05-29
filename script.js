document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;
    const header = document.getElementById('main-header');
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIcon = themeSwitcher.querySelector('i');
    const langButtons = document.querySelectorAll('.lang-btn');
    const currentYearSpan = document.getElementById('current-year');
    const typedGreetingSpan = document.getElementById('typed-greeting');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section[id]');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('#main-header .nav-links');

    const translations = {
        en: {
            headerName: "Luiz Felipe",
            navHome: "Home",
            navAbout: "About Me",
            navSkills: "Skills",
            navProjects: "Projects",
            navCertifications: "Certifications",
            navContact: "Contact",
            heroGreeting: "Hi, I'm Luiz Felipe",
            heroTagline: "Software Engineering Student & Cybersecurity Enthusiast!",
            heroBtnProjects: "View Projects",
            heroBtnLinkedIn: "Connect on LinkedIn",
            aboutTitle: "About Me",
            aboutDesc1: "I'm Luiz Felipe, a Software Engineering student focusing on back-end development and cybersecurity. What motivates me is the possibility of evolving daily, transforming technical knowledge into useful and secure solutions. Currently, I'm looking to consolidate my foundation in secure development to work internationally in the digital security field.",
            aboutCareerGoalsTitle: "Career Goals",
            aboutDesc2: "I aim to work with cybersecurity and Cloud Security in international companies, especially in Germany, Japan, or the USA. I seek to develop secure solutions and intelligent automations.",
            aboutTimelineTitle: "My Journey",
            timelineEvent1Title: "First Studies",
            timelineEvent1Desc: "Exploring hardware, basic scripts, and programming logic",
            timelineEvent2Title: "Early Projects",
            timelineEvent2Desc: "Applying object-oriented programming with Python in basic projects.",
            timelineEvent3Title: "Current Focus",
            timelineEvent3Desc: "Deepening knowledge in Back-end, Cybersecurity, and Cloud Security.",
            timelineEvent4Title: "Future Goals",
            timelineEvent4Desc: "International career in digital security and secure development.",
            skillsTitle: "Technical Skills",
            skillsLangTitle: "Languages",
            skillsFrameworksTitle: "Frameworks/Technologies",
            skillsToolsTitle: "Tools",
            skillsOtherTitle: "Other Skills",
            projectsTitle: "Projects",
            project1Title: "Task Manager",
            project1Desc: "RESTful API for task management with JWT authentication and refresh tokens. Clean architecture, validations, and unit tests. Frontend under development.",
            projectRepoLink: "View on GitHub",
            project2TitlePlaceholder: "Ongoing Project",
            project2DescPlaceholder: "Movie recommendations based on user preferences",
            projectsViewMore: "See more on GitHub",
            certificationsTitle: "Certifications",
            cert1Title: "OOP with Python",
            cert1Issuer: "Alura",
            cert2Title: "Introduction to Cybersecurity",
            cert2Issuer: "Cisco",
            cert3Title: "Starting with Linux",
            cert3Issuer: "Alura",
            contactTitle: "Contact",
            contactIntro: "Interested in collaborating or have a question?",
            contactClosingMessage: "Let's talk about technology, cybersecurity, or impactful ideas.",
            footerQuote: "Purposeful souls don't bargain with hardship.",
            footerRights: "All rights reserved."
        },
        pt: {
            headerName: "Luiz Felipe",
            navHome: "Início",
            navAbout: "Sobre Mim",
            navSkills: "Habilidades",
            navProjects: "Projetos",
            navCertifications: "Certificações",
            navContact: "Contato",
            heroGreeting: "Olá, eu sou o Luiz Felipe",
            heroTagline: "Estudante de Engenharia de Software & Foco em Cibersegurança!",
            heroBtnProjects: "Ver Projetos",
            heroBtnLinkedIn: "Conectar no LinkedIn",
            aboutTitle: "Sobre Mim",
            aboutDesc1: "Sou Luiz Felipe, estudante de Engenharia de Software com foco em desenvolvimento back-end e cibersegurança. O que me motiva é a possibilidade de evoluir diariamente, transformando conhecimento técnico em soluções úteis e seguras. No momento, busco consolidar minha base em desenvolvimento seguro para atuar internacionalmente na área de segurança digital.",
            aboutCareerGoalsTitle: "Objetivos de Carreira",
            aboutDesc2: "Quero trabalhar com cibersegurança e Cloud Security em empresas internacionais, especialmente na Alemanha, Japão ou EUA. Busco atuar no desenvolvimento de soluções seguras e automações inteligentes.",
            aboutTimelineTitle: "Minha Jornada",
            timelineEvent1Title: "Início dos Estudos",
            timelineEvent1Desc: "Explorando hardware, scripts básicos e lógica de programação",
            timelineEvent2Title: "Primeiros Projetos",
            timelineEvent2Desc: "Aplicando orientação objetos com Python em projetos básicos.",
            timelineEvent3Title: "Foco Atual",
            timelineEvent3Desc: "Aprofundar o conhecimento em Back-end, Cibersegurança e Cloud Security.",
            timelineEvent4Title: "Metas Futuras",
            timelineEvent4Desc: "Atuação internacional em segurança digital e desenvolvimento seguro.",
            skillsTitle: "Habilidades Técnicas",
            skillsLangTitle: "Linguagens",
            skillsFrameworksTitle: "Frameworks/Tecnologias",
            skillsToolsTitle: "Ferramentas",
            skillsOtherTitle: "Outros Conhecimentos",
            projectsTitle: "Projetos",
            project1Title: "Gerenciador de Tarefas",
            project1Desc: "API RESTful para gerenciamento de tarefas com autenticação JWT e refresh tokens. Arquitetura limpa, validações e testes unitários. Frontend em desenvolvimento.",
            projectRepoLink: "Ver no GitHub",
            project2TitlePlaceholder: "Projeto em andamento",
            project2DescPlaceholder: "Indicação de filmes com base nas preferências do usuário.",
            projectsViewMore: "Ver mais no GitHub",
            certificationsTitle: "Certificações",
            cert1Title: "POO com Python",
            cert1Issuer: "Alura",
            cert2Title: "Introduction to Cybersecurity",
            cert2Issuer: "Cisco",
            cert3Title: "Começando em Linux",
            cert3Issuer: "Alura",
            contactTitle: "Contato",
            contactIntro: "Interessado em colaborar ou tem alguma pergunta?",
            contactClosingMessage: "Vamos conversar sobre tecnologia, cibersegurança ou ideias que causem impacto.",
            footerQuote: "Quem tem propósito não negocia com a dor.",
            footerRights: "Todos os direitos reservados."
        }
    };


    let currentLang = localStorage.getItem('portfolioLang') || 'pt';
    let currentTheme = localStorage.getItem('portfolioTheme') || 'light';

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('portfolioTheme', theme);
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    themeSwitcher.addEventListener('click', () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });


    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('portfolioLang', lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        const elementsToTranslate = document.querySelectorAll('[data-lang]');
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-switch') === lang);
        });


        if (typedGreetingSpan && translations[lang] && translations[lang].heroGreeting) {
            typeGreeting(translations[lang].heroGreeting);
        }
    }

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang-switch');
            setLanguage(lang);
        });
    });


    let typeIndex = 0;
    let currentGreetingText = '';
    function typeGreeting(textToType) {
        if (!textToType || !typedGreetingSpan) return;
        typeIndex = 0;
        currentGreetingText = textToType;
        typedGreetingSpan.textContent = ''; 
        typedGreetingSpan.style.borderRight = '3px solid var(--primary-vibrant)'; 
        function type() {
            if (typeIndex < currentGreetingText.length) {
                typedGreetingSpan.textContent += currentGreetingText.charAt(typeIndex);
                typeIndex++;
                setTimeout(type, 100); 
            } else {
            }
        }
        type();
    }



    function handleScroll() {

        if (window.scrollY > header.offsetHeight / 2) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }


        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - header.offsetHeight - 50) { 
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        if (window.scrollY < sections[0].offsetTop - header.offsetHeight - 50) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('.nav-link[href="#home"]').classList.add('active');
        }
    }
    window.addEventListener('scroll', handleScroll);


    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {

                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                    mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });


    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });


    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    
    AOS.init({
        duration: 800, 
        easing: 'ease-in-out',
        once: true, 
        mirror: false,
        anchorPlacement: 'top-bottom',
    });


    setTheme(currentTheme);
    setLanguage(currentLang);
    handleScroll();

});