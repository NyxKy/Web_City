// js/main.js

// Traduzioni per le diverse lingue
const translations = {
    it: {
        // Navbar
        "navbar_brand": "Pyongyang",
        "nav_home": "Home",
        "nav_monuments": "Monumenti",
        "nav_iconic_places": "Luoghi Iconici",
        "nav_info": "Informazioni",
        "current_lang": "IT",
        
        // Hero Section
        "hero_new": "Nuovo!",
        "hero_title": "Pyongyang",
        "hero_lead": "Scopri la capitale della Corea del Nord: architettura monumentale, grandi viali e panorami urbani unici.",
        
        // Sezioni Monumenti
        "monuments_title": "Monumenti Principali",
        "monuments_subtitle": "I simboli più iconici della capitale nordcoreana",
        "monument_arch": "Arco di Trionfo",
        "monument_arch_desc": "Il più grande arco di trionfo al mondo, costruito per celebrare la resistenza coreana",
        "monument_juche": "Torre Juche",
        "monument_juche_desc": "Simbolo dell'ideologia Juche, offre una vista panoramica sulla città",
        "monument_victory": "Monumento alla Vittoria",
        "monument_victory_desc": "Celebra la vittoria nella guerra di liberazione della patria",
        
        // Sezioni Luoghi Iconici
        "iconic_title": "Luoghi Iconici",
        "iconic_subtitle": "Le location più rappresentative di Pyongyang",
        "place_ryomyong": "Ryomyong Street",
        "place_ryomyong_desc": "Moderno quartiere residenziale con architettura avanguardista",
        "place_kimilsung": "Piazza Kim Il-sung",
        "place_kimilsung_desc": "La piazza principale per parate e celebrazioni nazionali",
        "place_moranbong": "Moranbong Park",
        "place_moranbong_desc": "Parco storico nel cuore della città, luogo di relax e cultura",
        
        // Sezione Informazioni
        "info_title": "Informazioni Utili",
        "info_lead": "Tutto ciò che devi sapere per visitare Pyongyang: trasporti, tour guidati, prenotazioni e attrazioni principali.",
        "info_button": "Pianifica la tua visita",
        
        // Feature Boxes
        "feature_transport": "Trasporti",
        "feature_transport_desc": "Come raggiungere la città",
        "feature_visa": "Visto & Documenti",
        "feature_visa_desc": "Requisiti di ingresso",
        "feature_tours": "Tour Guidati",
        "feature_tours_desc": "Esperienze organizzate",
        "feature_info": "Informazioni",
        "feature_info_desc": "Guide e consigli utili",
        
        // Footer
        "footer_copyright": "© 2025 Visit Pyongyang. Tutti i diritti riservati."
    },
    en: {
        // Navbar
        "navbar_brand": "Pyongyang",
        "nav_home": "Home",
        "nav_monuments": "Monuments",
        "nav_iconic_places": "Iconic Places",
        "nav_info": "Information",
        "current_lang": "EN",
        
        // Hero Section
        "hero_new": "New!",
        "hero_title": "Pyongyang",
        "hero_lead": "Discover the capital of North Korea: monumental architecture, grand avenues and unique urban landscapes.",
        
        // Sezioni Monumenti
        "monuments_title": "Main Monuments",
        "monuments_subtitle": "The most iconic symbols of the North Korean capital",
        "monument_arch": "Arch of Triumph",
        "monument_arch_desc": "The largest triumphal arch in the world, built to celebrate Korean resistance",
        "monument_juche": "Juche Tower",
        "monument_juche_desc": "Symbol of the Juche ideology, offering a panoramic view of the city",
        "monument_victory": "Victory Monument",
        "monument_victory_desc": "Celebrates the victory in the Fatherland Liberation War",
        
        // Sezioni Luoghi Iconici
        "iconic_title": "Iconic Places",
        "iconic_subtitle": "The most representative locations in Pyongyang",
        "place_ryomyong": "Ryomyong Street",
        "place_ryomyong_desc": "Modern residential district with avant-garde architecture",
        "place_kimilsung": "Kim Il-sung Square",
        "place_kimilsung_desc": "The main square for parades and national celebrations",
        "place_moranbong": "Moranbong Park",
        "place_moranbong_desc": "Historic park in the heart of the city, a place of relaxation and culture",
        
        // Sezione Informazioni
        "info_title": "Useful Information",
        "info_lead": "Everything you need to know to visit Pyongyang: transport, guided tours, bookings and main attractions.",
        "info_button": "Plan your visit",
        
        // Feature Boxes
        "feature_transport": "Transport",
        "feature_transport_desc": "How to reach the city",
        "feature_visa": "Visa & Documents",
        "feature_visa_desc": "Entry requirements",
        "feature_tours": "Guided Tours",
        "feature_tours_desc": "Organized experiences",
        "feature_info": "Information",
        "feature_info_desc": "Guides and useful tips",
        
        // Footer
        "footer_copyright": "© 2025 Visit Pyongyang. All rights reserved."
    },
    kp: {
        // Navbar
        "navbar_brand": "평양",
        "nav_home": "홈",
        "nav_monuments": "기념물",
        "nav_iconic_places": "상징적인 장소",
        "nav_info": "정보",
        "current_lang": "KO",
        
        // Hero Section
        "hero_new": "새로운!",
        "hero_title": "평양",
        "hero_lead": "기념비적 건축물, 웅장한 대로와 독특한 도시 경관을 자랑하는 북한의 수도 평양을 발견하세요.",
        
        // Sezioni Monumenti
        "monuments_title": "주요 기념물",
        "monuments_subtitle": "북한 수도에서 가장 상징적인 명소",
        "monument_arch": "개선문",
        "monument_arch_desc": "한국 전쟁의 저항을 기리기 위해 건설된 세계에서 가장 큰 개선문",
        "monument_juche": "주체사상탑",
        "monument_juche_desc": "주체 사상의 상징으로 도시의 전경을 조망할 수 있는 탑",
        "monument_victory": "승리기념탑",
        "monument_victory_desc": "조국 해방 전쟁의 승리를 기리는 기념탑",
        
        // Sezioni Luoghi Iconici
        "iconic_title": "상징적인 장소",
        "iconic_subtitle": "평양에서 가장 대표적인 장소들",
        "place_ryomyong": "려명거리",
        "place_ryomyong_desc": "전위적인 건축물이 있는 현대적인 주거 지역",
        "place_kimilsung": "김일성광장",
        "place_kimilsung_desc": "퍼레이드와 국가적 행사를 위한 주요 광장",
        "place_moranbong": "모란봉공원",
        "place_moranbong_desc": "도시 중심부에 위치한 휴식과 문화의 장소인 역사적인 공원",
        
        // Sezione Informazioni
        "info_title": "유용한 정보",
        "info_lead": "평양을 방문하기 위해 알아야 할 모든 것: 교통, 가이드 투어, 예약 및 주요 명소.",
        "info_button": "방문 계획하기",
        
        // Feature Boxes
        "feature_transport": "교통",
        "feature_transport_desc": "도시 이동 방법",
        "feature_visa": "비자 & 서류",
        "feature_visa_desc": "입국 요건",
        "feature_tours": "가이드 투어",
        "feature_tours_desc": "구성된 경험",
        "feature_info": "정보",
        "feature_info_desc": "가이드 및 유용한 팁",
        
        // Footer
        "footer_copyright": "© 2025 Visit Pyongyang. 모든 권리 보유."
    },
    pl: {
        // Navbar
        "navbar_brand": "Pyongyang",
        "nav_home": "Home",
        "nav_monuments": "Monumenti",
        "nav_iconic_places": "Znane krajobrazy",
        "nav_info": "Informacje",
        "current_lang": "PL",
        
        // Hero Section
        "hero_new": "Nowy!",
        "hero_title": "Pyongyang",
        "hero_lead": "Scopri la capitale della Corea del Nord: architettura monumentale, grandi viali e panorami urbani unici.",
        
        // Sezioni Monumenti
        "monuments_title": "Monumenti Principali",
        "monuments_subtitle": "I simboli più iconici della capitale nordcoreana",
        "monument_arch": "Arco di Trionfo",
        "monument_arch_desc": "Il più grande arco di trionfo al mondo, costruito per celebrare la resistenza coreana",
        "monument_juche": "Torre Juche",
        "monument_juche_desc": "Simbolo dell'ideologia Juche, offre una vista panoramica sulla città",
        "monument_victory": "Monumento alla Vittoria",
        "monument_victory_desc": "Celebra la vittoria nella guerra di liberazione della patria",
        
        // Sezioni Luoghi Iconici
        "iconic_title": "Luoghi Iconici",
        "iconic_subtitle": "Le location più rappresentative di Pyongyang",
        "place_ryomyong": "Ryomyong Street",
        "place_ryomyong_desc": "Moderno quartiere residenziale con architettura avanguardista",
        "place_kimilsung": "Piazza Kim Il-sung",
        "place_kimilsung_desc": "La piazza principale per parate e celebrazioni nazionali",
        "place_moranbong": "Moranbong Park",
        "place_moranbong_desc": "Parco storico nel cuore della città, luogo di relax e cultura",
        
        // Sezione Informazioni
        "info_title": "Informazioni Utili",
        "info_lead": "Tutto ciò che devi sapere per visitare Pyongyang: trasporti, tour guidati, prenotazioni e attrazioni principali.",
        "info_button": "Pianifica la tua visita",
        
        // Feature Boxes
        "feature_transport": "Trasporti",
        "feature_transport_desc": "Come raggiungere la città",
        "feature_visa": "Visto & Documenti",
        "feature_visa_desc": "Requisiti di ingresso",
        "feature_tours": "Tour Guidati",
        "feature_tours_desc": "Esperienze organizzate",
        "feature_info": "Informazioni",
        "feature_info_desc": "Guide e consigli utili",
        
        // Footer
        "footer_copyright": "© 2025 Visit Pyongyang. Tutti i diritti riservati."
    },
};

// Funzione per cambiare lingua
function changeLanguage(lang) {
    // Aggiorna tutti gli elementi con attributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Aggiorna l'attributo lang del documento html
    document.documentElement.lang = lang;
    
    // Aggiorna il titolo della pagina
    document.title = lang === 'it' ? 'Pyongyang - Scopri la Capitale' : 
                     lang === 'en' ? 'Pyongyang - Discover the Capital' : 
                     '평양 - 수도 발견하기';
    
    // Aggiorna il selettore della lingua
    updateLanguageSelector(lang);
    
    // Salva la preferenza della lingua
    localStorage.setItem('preferred_lang', lang);
    
    // Mostra un feedback visivo
    showLanguageFeedback(lang);
}

// Aggiorna il selettore della lingua
function updateLanguageSelector(lang) {
    const currentBtn = document.querySelector('.language-current');
    const flagSpan = currentBtn.querySelector('.language-flag');
    const textSpan = currentBtn.querySelector('.language-text');
    
    const flags = { 'it': '🇮🇹', 'en': '🇬🇧', 'kp': '🇰🇵' };
    const texts = { 'it': 'IT', 'en': 'EN', 'kp': 'KO' };
    
    flagSpan.textContent = flags[lang];
    textSpan.textContent = texts[lang];
}

// Mostra feedback visivo per il cambio lingua
function showLanguageFeedback(lang) {
    // Rimuovi feedback precedente se esiste
    const existingFeedback = document.querySelector('.language-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    const feedback = document.createElement('div');
    feedback.className = 'language-feedback';
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--secondary-bg);
        border: 1px solid rgba(61, 139, 255, 0.3);
        border-radius: 12px;
        padding: 15px 20px;
        color: var(--text-primary);
        font-weight: 500;
        z-index: 9999;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    const langNames = {
        'it': 'Italiano',
        'en': 'English', 
        'kp': '조선말'
    };
    
    feedback.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2rem;">${lang === 'it' ? '🇮🇹' : lang === 'en' ? '🇬🇧' : '🇰🇵'}</span>
            <span>Lingua cambiata: ${langNames[lang]}</span>
        </div>
    `;
    
    document.body.appendChild(feedback);
    
    // Animazione di entrata
    setTimeout(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateX(0)';
    }, 100);
    
    // Rimuovi dopo 3 secondi
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateX(100px)';
        setTimeout(() => feedback.remove(), 300);
    }, 3000);
}

// Inizializzazione al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    // Imposta la lingua salvata o default (italiano)
    const savedLang = localStorage.getItem('preferred_lang') || 'it';
    changeLanguage(savedLang);
    
    // Event listener per i pulsanti della lingua
    document.querySelectorAll('.language-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // Smooth scroll per i link di navigazione
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Rimuovi classe active da tutti i link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Aggiungi classe active al link corrente
                this.classList.add('active');
                
                // Scroll smooth
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Gestione navbar scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Highlight sezione attiva nella navbar
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Animazioni al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Osserva gli elementi per le animazioni
    document.querySelectorAll('.card-modern, .section-header, .feature-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Inizializza le animazioni per gli elementi già visibili
    setTimeout(() => {
        document.querySelectorAll('.card-modern, .section-header, .feature-box').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }, 100);
});

// Gestione errori di caricamento immagini
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWMyYjRhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iI2YwZjNmYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
            this.alt = 'Immagine non disponibile';
        });
    });
});

// Funzione per migliorare gli effetti blur su diversi browser
function enhanceBlurEffects() {
    // Controlla il supporto per backdrop-filter
    const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(10px)') || 
                                  CSS.supports('-webkit-backdrop-filter', 'blur(10px)');
    
    if (!supportsBackdropFilter) {
        // Fallback per browser che non supportano backdrop-filter
        document.querySelectorAll('.card-modern, .navbar-blur, .language-dropdown').forEach(element => {
            element.style.backgroundColor = 'rgba(26, 36, 61, 0.95)';
        });
        
        // Aggiungi un warning nello console
        console.warn('Backdrop-filter non supportato. Applicati fallback CSS.');
    }
    
    // Aggiungi effetti luce dinamici
    const lightEffect1 = document.createElement('div');
    lightEffect1.className = 'light-effect light-effect-1';
    document.body.appendChild(lightEffect1);
    
    const lightEffect2 = document.createElement('div');
    lightEffect2.className = 'light-effect light-effect-2';
    document.body.appendChild(lightEffect2);
}

// Chiama la funzione all'avvio
document.addEventListener('DOMContentLoaded', function() {
    enhanceBlurEffects();
    // ... il resto del tuo codice JavaScript esistente
});