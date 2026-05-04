const translations = {
  en: {
    title: "Rakshitha Y N",
    subtitle: "Full-Stack Developer | MERN Enthusiast | Competitive Programmer",
    projects: "My Projects",
    projectsDesc: "Enterprise scale full-stack applications built with modern frameworks",
    experience: "Education and Experience",
    skills: "Skills",
    contact: "Contact Me",
    theme: "Theme",
    language: "EN"
  },
  hi: {
    title: "रक्षिता वाई एन",
    subtitle: "फुल-स्टैक डेवलपर | MERN उत्साही | प्रतिस्पर्धी प्रोग्रामर",
    projects: "मेरे प्रोजेक्ट्स",
    projectsDesc: "आधुनिक फ्रेमवर्क के साथ बनाए गए एंटरप्राइज स्केल फुल-स्टैक एप्लिकेशन",
    experience: "शिक्षा और अनुभव",
    skills: "कौशल",
    contact: "संपर्क करें",
    theme: "थीम",
    language: "HI"
  }
};

let currentLanguage = localStorage.getItem("lang") || "en";

function updateLanguageUI() {
  const t = translations[currentLanguage];

  // Hero
  const title = document.querySelector("h1");
  if (title) title.textContent = t.title;

  const subtitle = document.querySelector("p.text-xl, p.lg\\:text-2xl");
  if (subtitle) subtitle.textContent = t.subtitle;

  // Sections
  const map = {
    "#projects h2": t.projects,
    "#projects p": t.projectsDesc,
    "#experience h2": t.experience,
    "#skills h2": t.skills,
    "#contact-modal h3": t.contact
  };

  Object.keys(map).forEach(selector => {
    const el = document.querySelector(selector);
    if (el) el.textContent = map[selector];
  });

  // Theme button
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.textContent = t.theme;

  // Language button
  const langBtn = document.getElementById("language-toggle");
  if (langBtn) langBtn.textContent = t.language;

  localStorage.setItem("lang", currentLanguage);
}

function initLanguageSwitcher() {
  const langBtn = document.getElementById("language-toggle");

  if (!langBtn) {
    console.warn("⚠ Language toggle button missing");
    return;
  }

  langBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "hi" : "en";
    updateLanguageUI();
  });

  // initial render
  updateLanguageUI();

  console.log("🚀 Language switcher deployed successfully");
}

// IMPORTANT: call this after DOM loads
document.addEventListener("DOMContentLoaded", initLanguageSwitcher);