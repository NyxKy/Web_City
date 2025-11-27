/* ===============================
   TRADUZIONI
================================*/
const translations = {
    it: {
        navbar_brand: "Pyongyang",
        nav_home: "Home",
        nav_monuments: "Monumenti",
        nav_iconic_places: "Luoghi Iconici",
        nav_info: "Informazioni",
        hero_new: "Nuovo!",
        hero_title: "Pyongyang",
        hero_lead: "Scopri la capitale della Corea del Nord: architettura monumentale, grandi viali e panorami urbani unici.",
        monuments_title: "Monumenti Principali",
        monuments_subtitle: "I simboli più iconici della capitale nordcoreana",
        monument_arch: "Arco di Trionfo",
        monument_arch_desc: "Il più grande arco di trionfo al mondo, costruito per celebrare la resistenza coreana",
        monument_juche: "Torre Juche",
        monument_juche_desc: "Simbolo dell'ideologia Juche, offre una vista panoramica sulla città",
        monument_victory: "Monumento alla Vittoria",
        monument_victory_desc: "Celebra la vittoria nella guerra di liberazione della patria",
        iconic_title: "Luoghi Iconici",
        iconic_subtitle: "Le location più rappresentative di Pyongyang",
        place_ryomyong: "Ryomyong Street",
        place_ryomyong_desc: "Moderno quartiere residenziale con architettura avanguardista",
        place_kimilsung: "Piazza Kim Il-sung",
        place_kimilsung_desc: "La piazza principale per parate e celebrazioni nazionali",
        place_moranbong: "Moranbong Park",
        place_moranbong_desc: "Parco storico nel cuore della città",
        footer_copyright: "© 2025 Visit Pyongyang. Tutti i diritti riservati."
    },

    en: {
        navbar_brand: "Pyongyang",
        nav_home: "Home",
        nav_monuments: "Monuments",
        nav_iconic_places: "Iconic Places",
        nav_info: "Information",
        hero_new: "New!",
        hero_title: "Pyongyang",
        hero_lead: "Discover the capital of North Korea.",
        monuments_title: "Main Monuments",
        monuments_subtitle: "The most iconic symbols",
        monument_arch: "Arch of Triumph",
        monument_arch_desc: "The largest triumphal arch in the world",
        monument_juche: "Juche Tower",
        monument_juche_desc: "Symbol of Juche ideology",
        monument_victory: "Victory Monument",
        monument_victory_desc: "Celebrates victory",
        iconic_title: "Iconic Places",
        iconic_subtitle: "Representative locations",
        place_ryomyong: "Ryomyong Street",
        place_ryomyong_desc: "Modern residential area",
        place_kimilsung: "Kim Il-sung Square",
        place_kimilsung_desc: "Main square for parades",
        place_moranbong: "Moranbong Park",
        place_moranbong_desc: "Historic central park",
        footer_copyright:
            "© 2025 Visit Pyongyang. All rights reserved."
    },

    kp: {
        navbar_brand: "평양",
        nav_home: "홈",
        nav_monuments: "기념물",
        nav_iconic_places: "상징적인 장소",
        nav_info: "정보",
        hero_new: "새로운!",
        hero_title: "평양",
        hero_lead: "북한의 수도 평양.",
        monuments_title: "주요 기념물",
        monuments_subtitle: "가장 상징적인 장소",
        monument_arch: "개선문",
        monument_arch_desc: "세계에서 가장 큰 개선문",
        monument_juche: "주체탑",
        monument_juche_desc: "주체사상의 상징",
        monument_victory: "승리기념탑",
        monument_victory_desc: "승리를 기념",
        iconic_title: "상징적인 장소",
        iconic_subtitle: "대표적인 지역",
        place_ryomyong: "려명거리",
        place_ryomyong_desc: "현대적인 건축",
        place_kimilsung: "김일성광장",
        place_kimilsung_desc: "주요 광장",
        place_moranbong: "모란봉공원",
        place_moranbong_desc: "역사적인 공원",
        footer_copyright:
            "© 2025 Visit Pyongyang. 모든 권리 보유."
    }
};

/* =====================================
   CAMBIO LINGUA
=====================================*/
function changeLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key] || "";
    });

    document.querySelector(".flag").textContent =
        lang === "it" ? "🇮🇹" :
        lang === "en" ? "🇬🇧" : "🇰🇵";

    document.querySelector(".lang-text").textContent =
        lang.toUpperCase();

    document.title =
        lang === "it" ? "Pyongyang - Scopri la Capitale" :
        lang === "en" ? "Pyongyang - Discover the Capital" :
        "평양 - 수도";
}

/* ======================================================
   FUNZIONE CAMBIO LINGUA – versione stabile
====================================================== */
function changeLang(lang) {
    if (!translations[lang]) lang = "it";

    // salva lingua
    localStorage.setItem("lang", lang);

    // traduci ogni elemento con data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // aggiorna bandiera
    const flag = document.querySelector(".flag");
    if (flag) {
        flag.textContent = lang === "it" ? "🇮🇹" :
                           lang === "en" ? "🇬🇧" : "🇰🇵";
    }

    // aggiorna testo lingua
    const langText = document.querySelector(".lang-text");
    if (langText) langText.textContent = lang.toUpperCase();

    // aggiorna tag <html lang="">
    document.documentElement.setAttribute("lang", lang);

    // aggiorna titolo pagina
    document.title =
        lang === "it" ? "Pyongyang - Scopri la Capitale" :
        lang === "en" ? "Pyongyang - Discover the Capital" :
        "평양 - 수도";
}


/* ======================================================
   FADE-IN ANIMATION
====================================================== */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

/* ======================================================
   EVENTI DOM READY
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // imposta lingua salvata
    const saved = localStorage.getItem("lang") || "it";
    changeLang(saved);

    // click sul menu lingue
    document.querySelectorAll(".lang-option").forEach(btn => {
        btn.addEventListener("click", () => {
            changeLang(btn.dataset.lang);
        });
    });
});