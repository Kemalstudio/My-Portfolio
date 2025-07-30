document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav a');
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const languageSwitcher = document.getElementById('language-switcher');
    const body = document.body;
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    const translations = {
        ru: {
            page_title: "Атаев Кемал - Портфолио",
            nav_home: "Главная",
            nav_services: "Услуги",
            nav_resume: "Резюме",
            nav_work: "Работы",
            nav_contact: "Контакты",
            hire_me_btn: "Нанять меня",
            home_subtitle: "Разработчик ПО",
            home_title_part1: "Привет, я Kemal",
            home_title_part2: "Атаев Кемал",
            home_description: "Я преуспеваю в создании элегантных цифровых решений и владею различными языками программирования и технологиями.",
            download_cv_btn: "СКАЧАТЬ CV",
            stats_years_experience: "Лет опыта",
            stats_projects_completed: "Завершенных проектов",
            stats_technologies_mastered: "Освоенных технологий",
            stats_code_commits: "Код-коммитов",
            services_title: "Мои Услуги",
            service_web_dev_title: "Веб-Разработка",
            service_web_dev_description: "Разработка современных, адаптивных и высокопроизводительных веб-сайтов и приложений.",
            service_ui_ux_title: "UI/UX Дизайн",
            service_ui_ux_description: "Создание интуитивно понятных и привлекательных пользовательских интерфейсов для лучшего опыта.",
            service_logo_design_title: "Дизайн Логотипов",
            service_logo_design_description: "Разработка уникальных и запоминающихся логотипов, отражающих суть вашего бренда.",
            service_seo_title: "SEO Оптимизация",
            service_seo_description: "Повышение видимости вашего сайта в поисковых системах для привлечения большего трафика.",
            resume_why_hire_me_title: "Почему меня нанять?",
            resume_why_hire_me_description: "Подробная информация о моем опыте, образовании, навыках и личных качествах.",
            resume_tab_experience: "Опыт",
            resume_tab_education: "Образование",
            resume_tab_skills: "Навыки",
            resume_tab_about_me: "Обо мне",
            resume_experience_title: "Мой опыт",
            resume_experience_description: "Здесь вы найдете хронологию моей профессиональной деятельности.",
            present_text: "Настоящее время",
            exp_fullstack_dev_title: "Full Stack Разработчик",
            exp_fullstack_dev_company: "Tech Solutions Inc.",
            exp_frontend_intern_title: "Front-End Разработчик, Стажер",
            exp_frontend_intern_company: "Web Design Studio",
            exp_freelance_web_dev_title: "Фриланс Веб-Разработчик",
            exp_freelance_web_dev_company: "E-commerce Startup",
            exp_teaching_assistant_title: "Ассистент преподавателя",
            exp_teaching_assistant_company: "Tech Academy",
            exp_ui_ux_designer_title: "UI/UX Дизайнер",
            exp_ui_ux_designer_company: "Digital Agency",
            exp_junior_dev_title: "Младший Разработчик",
            exp_junior_dev_company: "Full Stack Developer",
            // New Education Translations (shortened)
            edu_title: "Мое Образование",
            edu_description: "Мой путь обучения и ключевые области знаний.",
            edu_frontend_fundamentals_title: "Основы Frontend (HTML, CSS, JavaScript)",
            edu_frontend_fundamentals_platform: "Самостоятельное изучение / Онлайн-курс",
            edu_ui_ux_basics_title: "Основы UI/UX Дизайна",
            edu_ui_ux_basics_platform: "Самостоятельное изучение / Короткий курс",
            edu_backend_immersion_title: "Погружение в Backend-Разработку",
            edu_backend_immersion_platform: "Самостоятельное изучение / Онлайн-курс",
            skills_title: "Мои Навыки",
            skills_description: "Мои основные технические навыки и инструменты, которые я использую в работе.",
            about_me_title: "Обо Мне",
            about_me_description: "Подробная информация обо мне и моих личных данных.",
            about_name_label: "Имя:",
            about_phone_label: "Телефон:",
            about_phone_value: "+99364005374", // Updated phone number
            about_experience_label: "Опыт:",
            about_experience_value: "1+ Год",
            about_skype_label: "Whatsapp:",
            about_nationality_label: "Национальность:",
            about_nationality_value: "Туркмен",
            about_email_label: "Email:",
            about_freelance_label: "Фриланс:",
            about_freelance_value_unavailable: "Недоступен", // Updated freelance status
            about_languages_label: "Языки:",
            about_languages_value: "Русский, Английский", // Removed Turkmen
            work_title: "Мои Работы",
            proj1_title: "Фронтенд Проект 1",
            proj1_description: "Пример описания для проекта веб-разработки.",
            proj1_tech: "HTML5, CSS3, JavaScript",
            proj2_title: "UI/UX Кейс 2",
            proj2_description: "Пример описания для проекта UI/UX дизайна.",
            proj2_tech: "Figma, Sketch, Adobe XD",
            proj3_title: "Логотип для Стартапа 3",
            proj3_description: "Пример описания для проекта дизайна логотипа.",
            proj3_tech: "Adobe Illustrator, Photoshop",
            proj4_title: "Веб-сайт Aura Computers", // New project
            proj4_description: "Разработка современного веб-са йта для компьютерного магазина.",
            proj4_tech: "Bootstrap Tailwind JavaScript PHP Laravel Blade MySQL PostgreSQL AJAX API Postman Apaxe.js",
            proj5_title: "Интернет-магазин Burder", // New project
            proj5_description: "Создание онлайн-платформы для магазина Burder с каталогом товаров.",
            proj5_tech: "HTML, CSS, Javascript",
            live_project_btn: "Демо",
            github_btn: "GitHub",
            contact_title: "Давайте работать вместе",
            form_firstname_placeholder: "Имя",
            form_lastname_placeholder: "Фамилия",
            form_email_placeholder: "Email адрес",
            form_phone_placeholder: "Номер телефона",
            form_select_service_placeholder: "Выберите услугу",
            form_message_placeholder: "Напишите ваше сообщение здесь.",
            form_send_message_btn: "Отправить сообщение",
            contact_phone_label: "Телефон:",
            contact_phone_value: "+99364005374", // Updated phone number
            contact_email_label: "Email:",
            contact_email_value: "kemalatayew913@gmail.com", // Keeping a generic email here for display
            contact_address_label: "Адрес:",
            contact_address_value: "Ашхабад, Туркменистан",
            contact_telegram_label: "Telegram:",
            contact_teams_label: "Whatsapp:",
            contact_gmail_label: "Gmail:"
        },
        en: {
            page_title: "Atayew Kemal - Portfolio",
            nav_home: "Home",
            nav_services: "Services",
            nav_resume: "Resume",
            nav_work: "Work",
            nav_contact: "Contact",
            hire_me_btn: "Hire me",
            home_subtitle: "Full Stack Developer",
            home_title_part1: "Hello I'm Kemal",
            home_title_part2: "Atayew Kemal",
            home_description: "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
            download_cv_btn: "DOWNLOAD CV",
            stats_years_experience: "Years of experience",
            stats_projects_completed: "Projects completed",
            stats_technologies_mastered: "Technologies mastered",
            stats_code_commits: "Code commits",
            services_title: "My Services",
            service_web_dev_title: "Web Development",
            service_web_dev_description: "Developing modern, responsive, and high-performance websites and applications.",
            service_ui_ux_title: "UI/UX Design",
            service_ui_ux_description: "Creating intuitive and appealing user interfaces for a better experience.",
            service_logo_design_title: "Logo Design",
            service_logo_design_description: "Designing unique and memorable logos that capture the essence of your brand.",
            service_seo_title: "SEO Optimization",
            service_seo_description: "Improving your website's visibility in search engines to attract more traffic.",
            resume_why_hire_me_title: "Why hire me?",
            resume_why_hire_me_description: "Detailed information about my experience, education, skills, and personal attributes.",
            resume_tab_experience: "Experience",
            resume_tab_education: "Education",
            resume_tab_skills: "Skills",
            resume_tab_about_me: "About me",
            resume_experience_title: "My Experience",
            resume_experience_description: "Here you will find a chronological overview of my professional journey.",
            present_text: "Present",
            exp_fullstack_dev_title: "Full Stack Developer",
            exp_fullstack_dev_company: "Tech Solutions Inc.",
            exp_frontend_intern_title: "Front-End Developer Intern",
            exp_frontend_intern_company: "Web Design Studio",
            exp_freelance_web_dev_title: "Freelance Web Developer",
            exp_freelance_web_dev_company: "E-commerce Startup",
            exp_teaching_assistant_title: "Teaching Assistant",
            exp_teaching_assistant_company: "Tech Academy",
            exp_ui_ux_designer_title: "UI/UX Designer",
            exp_ui_ux_designer_company: "Digital Agency",
            exp_junior_dev_title: "Junior Developer",
            exp_junior_dev_company: "Full Stack Developer",
            // New Education Translations (shortened)
            edu_title: "My Education",
            edu_description: "My learning journey and key areas of knowledge.",
            edu_frontend_fundamentals_title: "Frontend Fundamentals (HTML, CSS, JavaScript)",
            edu_frontend_fundamentals_platform: "Self-study / Online Course",
            edu_ui_ux_basics_title: "UI/UX Design Basics",
            edu_ui_ux_basics_platform: "Self-study / Short Course",
            edu_backend_immersion_title: "Backend Development Immersion",
            edu_backend_immersion_platform: "Self-study / Online Course",
            skills_title: "My Skills",
            skills_description: "My core technical skills and tools I utilize in my work.",
            about_me_title: "About Me",
            about_me_description: "Detailed information about me and my personal data.",
            about_name_label: "Name:",
            about_phone_label: "Phone:",
            about_phone_value: "+99364005374", // Updated phone number
            about_experience_label: "Experience:",
            about_experience_value: "1+ Years",
            about_skype_label: "Whatsapp:",
            about_nationality_label: "Nationality:",
            about_nationality_value: "Turkmen",
            about_email_label: "Email:",
            about_freelance_label: "Freelance:",
            about_freelance_value_unavailable: "Not Available", // Updated freelance status
            about_languages_label: "Languages:",
            about_languages_value: "Russian, English", // Removed Turkmen
            work_title: "My Work",
            proj1_title: "Frontend Project 1",
            proj1_description: "An example description for a web development project.",
            proj1_tech: "HTML5, CSS3, JavaScript",
            proj2_title: "UI/UX Case 2",
            proj2_description: "An example description for a UI/UX design project.",
            proj2_tech: "Figma, Sketch, Adobe XD",
            proj3_title: "Startup Logo 3",
            proj3_description: "An example description for a logo design project.",
            proj3_tech: "Adobe Illustrator, Photoshop",
            proj4_title: "Aura Computers Website", // New project
            proj4_description: "Development of a modern website for a computer store.",
            proj4_tech: "Bootstrap, Tailwind, JavaScript, PHP, Laravel, Blade, MySQL, PostgreSQL, AJAX, API, Postman, Apaxe.js",
            proj5_title: "Burder Online Shop", // New project
            proj5_description: "Creation of an online platform for Burder shop with a product catalog.",
            proj5_tech: "HTML, CSS, Javascript",
            live_project_btn: "Live project",
            github_btn: "GitHub",
            contact_title: "Let's work together",
            form_firstname_placeholder: "Firstname",
            form_lastname_placeholder: "Lastname",
            form_email_placeholder: "Email address",
            form_phone_placeholder: "Phone number",
            form_select_service_placeholder: "Select a service",
            form_message_placeholder: "Type your message here.",
            form_send_message_btn: "Send message",
            contact_phone_label: "Phone:",
            contact_phone_value: "+99364005374", // Updated phone number
            contact_email_label: "Email:",
            contact_email_value: "kemalatayew913@gmail.com", // Keeping a generic email here for display
            contact_address_label: "Address:",
            contact_address_value: "Ashgabat, Turkmenistan",
            contact_telegram_label: "Telegram:",
            contact_teams_label: "Whatsapp:",
            contact_gmail_label: "Gmail:"
        }
    };

    // Cursor Logic
    window.addEventListener('mousemove', e => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const interactiveElements = document.querySelectorAll('a, button, .theme-switch, .service-card, .skill-item, .resume-tab-btn, .project-btn, .slider-btn, .info-block');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursorDot.style.transform = 'scale(0.7)';
            cursorOutline.style.transform = 'scale(1.5)';
            cursorOutline.style.borderColor = 'var(--text-color)';
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = '';
            cursorOutline.style.transform = '';
            cursorOutline.style.borderColor = 'var(--highlight-color)';
        });
    });

    const setLanguage = (lang) => {
        document.querySelectorAll('[data-i18n-key]').forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            let text = translations[lang][key];
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', text);
            } else if (element.tagName === 'OPTION' && element.closest('SELECT#language-switcher')) {
                // Do nothing, language selector options are hardcoded
            }
            else if (element.tagName === 'OPTION' && element.closest('.contact-form')) {
                element.textContent = text;
            }
            else {
                element.textContent = text;
            }
        });
        document.title = translations[lang]['page_title'];
        localStorage.setItem('portfolioLanguage', lang);
    };

    const savedLanguage = localStorage.getItem('portfolioLanguage') || 'ru';
    languageSwitcher.value = savedLanguage;
    setLanguage(savedLanguage);

    languageSwitcher.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    const animateNumbers = () => {
        document.querySelectorAll('.stat-number').forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            let current = 0;
            const duration = 2000;
            const stepTime = Math.max(10, Math.floor(duration / target));

            const timer = setInterval(() => {
                current += Math.ceil(target / (duration / stepTime));
                if (current >= target) {
                    clearInterval(timer);
                    stat.textContent = target;
                } else {
                    stat.textContent = current;
                }
            }, stepTime);
        });
    };
    animateNumbers();

    const switchPage = (targetId) => {
        const currentPage = document.querySelector('.page-section.active');
        const targetPage = document.getElementById(targetId);

        if (currentPage && currentPage.id === targetId) return;

        if (currentPage) {
            currentPage.classList.add('exit');
            currentPage.classList.remove('active');
        }

        setTimeout(() => {
            if (currentPage) {
                currentPage.classList.remove('exit');
            }
            targetPage.classList.add('active');
        }, 600);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            switchPage(targetId);

            navLinks.forEach(nav => nav.classList.remove('active-link'));
            e.target.classList.add('active-link');
        });
    });

    const initialPage = window.location.hash ? window.location.hash.substring(1) : 'home';
    const initialNavLink = document.querySelector(`.nav a[href="#${initialPage}"]`);
    if (initialNavLink) {
        initialNavLink.classList.add('active-link');
        switchPage(initialPage);
    } else {
        document.querySelector('.nav a[href="#home"]').classList.add('active-link');
        switchPage('home');
    }

    // Theme Toggle Logic
    themeToggleCheckbox.addEventListener('change', () => {
        body.classList.toggle('light-theme');
        const isLightTheme = body.classList.contains('light-theme');
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggleCheckbox.checked = true;
    } else {
        body.classList.remove('light-theme');
        themeToggleCheckbox.checked = false;
    }

    // Resume Tabs Logic
    const resumeTabButtons = document.querySelectorAll('.resume-tab-btn');
    const resumeTabContents = document.querySelectorAll('.resume-details .tab-content');
    const resumeDetailsTitle = document.querySelector('.resume-details .details-title');
    const resumeDetailsDescription = document.querySelector('.resume-details .details-description');

    const getResumeContentForTab = (tabId, lang) => {
        const titleKey = `${tabId}_title`;
        const descriptionKey = `${tabId}_description`;
        return {
            title: translations[lang][titleKey],
            description: translations[lang][descriptionKey]
        };
    };

    const updateResumeContent = (tabId) => {
        const currentLang = localStorage.getItem('portfolioLanguage') || 'ru';
        const content = getResumeContentForTab(tabId, currentLang);

        resumeTabContents.forEach(cont => cont.classList.remove('active'));
        document.getElementById(`${tabId}-content`).classList.add('active');

        resumeTabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.resume-tab-btn[data-tab="${tabId}"]`).classList.add('active');

        resumeDetailsTitle.textContent = content.title;
        resumeDetailsDescription.textContent = content.description;
    };

    languageSwitcher.addEventListener('change', (e) => {
        const newLang = e.target.value;
        setLanguage(newLang);
        const activeTabId = document.querySelector('.resume-tab-btn.active').getAttribute('data-tab');
        updateResumeContent(activeTabId);
    });


    resumeTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            updateResumeContent(tabId);
        });
    });

    updateResumeContent('experience'); // Default active tab

    // Work Slider Logic
    const workSlider = document.querySelector('.work-slider');
    const prevBtn = document.querySelector('.slider-btn.prev-btn');
    const nextBtn = document.querySelector('.slider-btn.next-btn');
    const slides = document.querySelectorAll('.work-slide');
    let currentIndex = 0;

    const updateSlider = () => {
        const offset = -currentIndex * 100;
        workSlider.style.transform = `translateX(${offset}%)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });
});