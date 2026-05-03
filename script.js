const currentPage = (() => {
  const path = window.location.pathname.split("/").pop();
  return path && path.trim() !== "" ? path : "index.html";
})();

const pageBodyClassMap = {
  "index.html": "page-home",
  "company.html": "page-company",
  "services.html": "page-services",
  "sectors.html": "page-sectors",
  "contact.html": "page-contact",
};

const translations = {
  gr: {
    nav: {
      home: "Αρχική",
      company: "Η Εταιρεία",
      services: "Υπηρεσίες",
      sectors: "Τομείς Δραστηριότητας",
      contact: "Επικοινωνία",
    },
    pages: {
      "index.html": {
        title: "ARP GENERAL I.K.E. | Δίκτυα διανομής ηλεκτρικής ενέργειας",
        description:
          "Υποστήριξη, οργάνωση και τεχνικός συντονισμός έργων δικτύων διανομής ηλεκτρικής ενέργειας Χαμηλής και Μέσης Τάσης.",
        selectors: {
          ".hero-home-copy .eyebrow": "ARP GENERAL I.K.E.",
          ".hero-home-copy h1":
            "Υποστήριξη και οργάνωση έργων δικτύων διανομής ηλεκτρικής ενέργειας",
          ".hero-home-copy .hero-text":
            "Δραστηριοποίηση στον τομέα της Χαμηλής και Μέσης Τάσης, με έμφαση στον τεχνικό συντονισμό, την οργάνωση και τη συνεπή επαγγελματική προσέγγιση.",
          ".hero-home-copy .primary-btn": "Επικοινωνήστε μαζί μας",

          ".hero-home-visual-panel h2": "Σαφής επαγγελματική κατεύθυνση",
          ".hero-home-visual-panel > p":
            "Στόχος είναι η οργανωμένη υποστήριξη έργων, με καθαρή δομή, συνέπεια και σωστή παρακολούθηση.",

          ".hero-home-stats .hero-home-stat:nth-child(1) .hero-home-stat-label": "Τομέας",
          ".hero-home-stats .hero-home-stat:nth-child(1) strong": "ΧΤ / ΜΤ",
          ".hero-home-stats .hero-home-stat:nth-child(2) .hero-home-stat-label": "Αντικείμενο",
          ".hero-home-stats .hero-home-stat:nth-child(2) strong": "Δίκτυα διανομής",
          ".hero-home-stats .hero-home-stat:nth-child(3) .hero-home-stat-label": "Εστίαση",
          ".hero-home-stats .hero-home-stat:nth-child(3) strong": "Οργάνωση & συντονισμός",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) h3": "Η Εταιρεία",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) p":
            "Σύντομη παρουσίαση της δομής και της επαγγελματικής κατεύθυνσης.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) .text-link": "Δείτε περισσότερα",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) h3": "Υπηρεσίες",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) p":
            "Υποστήριξη, οργάνωση και τεχνικός συντονισμός έργων.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) .text-link": "Δείτε περισσότερα",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) h3": "Τομείς Δραστηριότητας",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) p":
            "Εστίαση στα δίκτυα διανομής ηλεκτρικής ενέργειας.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) .text-link": "Δείτε περισσότερα",

          ".intro-section .section-label": "Εμπειρία στον τομέα",
          ".intro-section h2":
            "Οργανωμένη προσέγγιση σε πραγματικές απαιτήσεις έργων",
          ".intro-section .section-text":
            "Η δραστηριότητα επικεντρώνεται στην κατανόηση του αντικειμένου, στη σωστή υποστήριξη έργων και στη διατήρηση μιας καθαρής και αξιόπιστης επαγγελματικής εικόνας.",

          ".footer-brand .footer-title": "ARP GENERAL I.K.E.",
          ".footer-links .footer-heading": "Πλοήγηση",
        },
        listItems: [
          {
            selector: ".footer-brand > p:not(.footer-title)",
            values: ["Νέα Σμύρνη, Αττική", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },

      "contact.html": {
        title: "Επικοινωνία | ARP GENERAL I.K.E.",
        description:
          "Επικοινωνήστε με την ARP GENERAL I.K.E. για πληροφορίες σχετικά με τον τομέα δραστηριότητάς της.",
        selectors: {
          ".page-hero .section-label": "Επικοινωνία",
          ".page-hero h1": "Επικοινωνήστε με την ARP GENERAL I.K.E.",
          ".page-hero .page-hero-text":
            "Για περισσότερες πληροφορίες, μπορείτε να επικοινωνήσετε μαζί μας μέσω των παρακάτω στοιχείων ή της φόρμας επικοινωνίας.",
          ".content-main .section-label": "Στοιχεία επικοινωνίας",
          ".content-main .contact-page-title": "ARP GENERAL I.K.E.",
          ".contact-form-card .section-label": "Φόρμα Επικοινωνίας",
          "label[for='full-name']": "Ονοματεπώνυμο",
          "label[for='email']": "Email",
          "label[for='phone']": "Τηλέφωνο",
          "label[for='message']": "Μήνυμα",
          ".form-btn": "Αποστολή",
          ".footer-brand .footer-title": "ARP GENERAL I.K.E.",
          ".footer-links .footer-heading": "Πλοήγηση",
        },
        placeholders: {
          "#full-name": "Το ονοματεπώνυμό σας",
          "#email": "Το email σας",
          "#phone": "Το τηλέφωνό σας",
          "#message": "Γράψτε το μήνυμά σας",
        },
        listItems: [
          {
            selector: ".contact-details-list li",
            values: [
              ["Έδρα", "Νέα Σμύρνη, Αττική"],
              ["Τηλέφωνο", "6978441042"],
              ["Email", "info@arpgeneral.com"],
            ],
          },
          {
            selector: ".footer-brand > p:not(.footer-title)",
            values: ["Νέα Σμύρνη, Αττική", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },

      "company.html": {
        title: "Η Εταιρεία | ARP GENERAL I.K.E.",
        description:
          "Η ARP GENERAL I.K.E. αποτελεί σύγχρονη εταιρική παρουσία στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας.",
      },

      "services.html": {
        title: "Υπηρεσίες | ARP GENERAL I.K.E.",
        description:
          "Υπηρεσίες υποστήριξης, οργάνωσης και τεχνικού συντονισμού στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας από την ARP GENERAL I.K.E.",
      },

      "sectors.html": {
        title: "Τομείς Δραστηριότητας | ARP GENERAL I.K.E.",
        description:
          "Η ARP GENERAL I.K.E. εστιάζει στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας Χαμηλής και Μέσης Τάσης.",
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      company: "Company",
      services: "Services",
      sectors: "Sectors",
      contact: "Contact",
    },
    pages: {
      "index.html": {
        title: "ARP GENERAL I.K.E. | Electrical power distribution networks",
        description:
          "Support, organization and technical coordination of Low and Medium Voltage electrical power distribution network projects.",
        selectors: {
          ".hero-home-copy .eyebrow": "ARP GENERAL I.K.E.",
          ".hero-home-copy h1":
            "Support and organization of electrical power distribution network projects",
          ".hero-home-copy .hero-text":
            "Activity in the Low and Medium Voltage sector, with emphasis on technical coordination, organization and a consistent professional approach.",
          ".hero-home-copy .primary-btn": "Contact us",

          ".hero-home-visual-panel h2": "Clear professional direction",
          ".hero-home-visual-panel > p":
            "The goal is organized project support, with clear structure, consistency and proper monitoring.",

          ".hero-home-stats .hero-home-stat:nth-child(1) .hero-home-stat-label": "Sector",
          ".hero-home-stats .hero-home-stat:nth-child(1) strong": "LV / MV",
          ".hero-home-stats .hero-home-stat:nth-child(2) .hero-home-stat-label": "Field",
          ".hero-home-stats .hero-home-stat:nth-child(2) strong": "Distribution networks",
          ".hero-home-stats .hero-home-stat:nth-child(3) .hero-home-stat-label": "Focus",
          ".hero-home-stats .hero-home-stat:nth-child(3) strong": "Organization & coordination",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) h3": "Company",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) p":
            "A brief presentation of the company structure and professional direction.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) .text-link": "Learn more",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) h3": "Services",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) p":
            "Support, organization and technical coordination of projects.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) .text-link": "Learn more",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) h3": "Sectors",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) p":
            "Focus on electrical power distribution networks.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) .text-link": "Learn more",

          ".intro-section .section-label": "Field experience",
          ".intro-section h2":
            "Organized approach to real project requirements",
          ".intro-section .section-text":
            "The activity focuses on understanding the field, proper project support and maintaining a clear and reliable professional image.",

          ".footer-brand .footer-title": "ARP GENERAL I.K.E.",
          ".footer-links .footer-heading": "Navigation",
        },
        listItems: [
          {
            selector: ".footer-brand > p:not(.footer-title)",
            values: ["Nea Smyrni, Attica", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },

      "contact.html": {
        title: "Contact | ARP GENERAL I.K.E.",
        description:
          "Contact ARP GENERAL I.K.E. for more information regarding its field of activity.",
        selectors: {
          ".page-hero .section-label": "Contact",
          ".page-hero h1": "Contact ARP GENERAL I.K.E.",
          ".page-hero .page-hero-text":
            "For more information, you can contact us through the details below or via the contact form.",
          ".content-main .section-label": "Contact details",
          ".content-main .contact-page-title": "ARP GENERAL I.K.E.",
          ".contact-form-card .section-label": "Contact Form",
          "label[for='full-name']": "Full Name",
          "label[for='email']": "Email",
          "label[for='phone']": "Phone",
          "label[for='message']": "Message",
          ".form-btn": "Send",
          ".footer-brand .footer-title": "ARP GENERAL I.K.E.",
          ".footer-links .footer-heading": "Navigation",
        },
        placeholders: {
          "#full-name": "Your full name",
          "#email": "Your email",
          "#phone": "Your phone number",
          "#message": "Write your message",
        },
        listItems: [
          {
            selector: ".contact-details-list li",
            values: [
              ["Registered Office", "Nea Smyrni, Attica"],
              ["Phone", "6978441042"],
              ["Email", "info@arpgeneral.com"],
            ],
          },
          {
            selector: ".footer-brand > p:not(.footer-title)",
            values: ["Nea Smyrni, Attica", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },

      "company.html": {
        title: "Company | ARP GENERAL I.K.E.",
        description:
          "ARP GENERAL I.K.E. is a modern corporate presence in the field of electrical power distribution networks.",
      },

      "services.html": {
        title: "Services | ARP GENERAL I.K.E.",
        description:
          "Support, organization and technical coordination services in the field of electrical power distribution networks by ARP GENERAL I.K.E.",
      },

      "sectors.html": {
        title: "Sectors | ARP GENERAL I.K.E.",
        description:
          "ARP GENERAL I.K.E. focuses on Low and Medium Voltage electrical power distribution networks.",
      },
    },
  },
};

function getSavedLanguage() {
  const saved = localStorage.getItem("arp-language");
  return saved === "en" ? "en" : "gr";
}

function saveLanguage(language) {
  localStorage.setItem("arp-language", language);
}

function syncBodyPageClass() {
  const allPageClasses = Object.values(pageBodyClassMap);
  document.body.classList.remove(...allPageClasses);

  const currentClass = pageBodyClassMap[currentPage];
  if (currentClass) {
    document.body.classList.add(currentClass);
  }
}

function setMetaContent(name, content) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) meta.setAttribute("content", content);
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setPlaceholder(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("placeholder", value);
}

function setListValues(listConfig) {
  listConfig.forEach((entry) => {
    const items = document.querySelectorAll(entry.selector);
    if (!items.length) return;

    entry.values.forEach((value, index) => {
      const item = items[index];
      if (!item) return;

      if (Array.isArray(value)) {
        const label = item.querySelector(".contact-details-label");
        const fieldValue = item.querySelector(".contact-details-value");
        if (label) label.textContent = value[0];
        if (fieldValue) fieldValue.textContent = value[1];
      } else {
        item.textContent = value;
      }
    });
  });
}

function updateDesktopNav(language) {
  const navLinks = document.querySelectorAll(".main-nav a");
  if (navLinks.length < 5) return;

  navLinks[0].textContent = translations[language].nav.home;
  navLinks[1].textContent = translations[language].nav.company;
  navLinks[2].textContent = translations[language].nav.services;
  navLinks[3].textContent = translations[language].nav.sectors;
  navLinks[4].textContent = translations[language].nav.contact;
}

function updateFooterNav(language) {
  const footerLinks = document.querySelectorAll(".footer-links a");
  if (footerLinks.length < 5) return;

  footerLinks[0].textContent = translations[language].nav.home;
  footerLinks[1].textContent = translations[language].nav.company;
  footerLinks[2].textContent = translations[language].nav.services;
  footerLinks[3].textContent = translations[language].nav.sectors;
  footerLinks[4].textContent = translations[language].nav.contact;
}

function createMobileNav() {
  const menuToggle = document.querySelector(".menu-toggle");
  const headerInner = document.querySelector(".header-inner");

  if (!menuToggle || !headerInner) return null;

  let mobileNav = document.querySelector(".mobile-nav");
  if (mobileNav) return mobileNav;

  mobileNav = document.createElement("div");
  mobileNav.className = "mobile-nav";
  headerInner.after(mobileNav);

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });

  return mobileNav;
}

function updateMobileNav(language) {
  const mobileNav = createMobileNav();
  if (!mobileNav) return;

  mobileNav.innerHTML = `
    <a href="index.html">${translations[language].nav.home}</a>
    <a href="company.html">${translations[language].nav.company}</a>
    <a href="services.html">${translations[language].nav.services}</a>
    <a href="sectors.html">${translations[language].nav.sectors}</a>
    <a href="contact.html">${translations[language].nav.contact}</a>
    <div class="mobile-lang-switch">
      <button type="button" class="lang-btn ${language === "gr" ? "active" : ""}" data-lang="gr">GR</button>
      <button type="button" class="lang-btn ${language === "en" ? "active" : ""}" data-lang="en">EN</button>
    </div>
  `;

  mobileNav.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      const menuToggle = document.querySelector(".menu-toggle");
      if (menuToggle) menuToggle.classList.remove("open");
    });
  });
}

function updateLanguageButtons(language) {
  document.querySelectorAll(".lang-switch .lang-btn").forEach((btn) => {
    const isActive = btn.textContent.trim().toLowerCase() === language;
    btn.classList.toggle("active", isActive);
  });
}

function updateCommonContent(language) {
  updateDesktopNav(language);
  updateFooterNav(language);
  updateMobileNav(language);
  updateLanguageButtons(language);
}

function updatePageContent(language) {
  const pageTranslations = translations[language].pages[currentPage];
  if (!pageTranslations) return;

  document.documentElement.lang = language === "en" ? "en" : "el";

  if (pageTranslations.title) {
    document.title = pageTranslations.title;
  }

  if (pageTranslations.description) {
    setMetaContent("description", pageTranslations.description);
  }

  if (pageTranslations.selectors) {
    Object.entries(pageTranslations.selectors).forEach(([selector, value]) => {
      setText(selector, value);
    });
  }

  if (pageTranslations.placeholders) {
    Object.entries(pageTranslations.placeholders).forEach(([selector, value]) => {
      setPlaceholder(selector, value);
    });
  }

  if (pageTranslations.listItems) {
    setListValues(pageTranslations.listItems);
  }
}

function applyLanguage(language) {
  const lang = language === "en" ? "en" : "gr";
  saveLanguage(lang);
  syncBodyPageClass();
  updateCommonContent(lang);
  updatePageContent(lang);
}

document.querySelectorAll(".lang-switch .lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const language = btn.textContent.trim().toLowerCase();
    applyLanguage(language);
  });
});

syncBodyPageClass();
applyLanguage(getSavedLanguage());
