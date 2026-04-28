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
          "Η ARP GENERAL I.K.E. δραστηριοποιείται στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας, με σύγχρονη και οργανωμένη επαγγελματική προσέγγιση.",
        selectors: {
          ".hero-home-copy .eyebrow": "ARP GENERAL I.K.E.",
          ".hero-home-copy h1": "Δίκτυα διανομής ηλεκτρικής ενέργειας",
          ".hero-home-copy .hero-text":
            "Σύγχρονη επαγγελματική παρουσία με οργανωμένη και σοβαρή προσέγγιση.",
          ".hero-home-copy .primary-btn": "Επικοινωνία",

          ".hero-home-visual-panel h2": "Σοβαρή και οργανωμένη προσέγγιση",
          ".hero-home-visual-panel > p":
            "Η εταιρεία δραστηριοποιείται στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας, με έμφαση στη συνέπεια και στην επαγγελματική εικόνα.",

          ".hero-home-points .hero-point:nth-child(1) h3": "Συνέπεια",
          ".hero-home-points .hero-point:nth-child(1) p":
            "Σταθερή και υπεύθυνη επαγγελματική παρουσία.",
          ".hero-home-points .hero-point:nth-child(2) h3": "Οργάνωση",
          ".hero-home-points .hero-point:nth-child(2) p":
            "Καθαρή και μεθοδική προσέγγιση σε κάθε συνεργασία.",
          ".hero-home-points .hero-point:nth-child(3) h3": "Κατανόηση αντικειμένου",
          ".hero-home-points .hero-point:nth-child(3) p":
            "Εστίαση στις πραγματικές απαιτήσεις του τομέα.",

          ".hero-home-stats .hero-home-stat:nth-child(1) .hero-home-stat-label": "Τομέας",
          ".hero-home-stats .hero-home-stat:nth-child(1) strong": "ΧΤ / ΜΤ",
          ".hero-home-stats .hero-home-stat:nth-child(2) .hero-home-stat-label": "Εστίαση",
          ".hero-home-stats .hero-home-stat:nth-child(2) strong": "Υποστήριξη & συντονισμός",
          ".hero-home-stats .hero-home-stat:nth-child(3) .hero-home-stat-label": "Προσέγγιση",
          ".hero-home-stats .hero-home-stat:nth-child(3) strong": "Οργάνωση & συνέπεια",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) h3":
            "Δίκτυα διανομής ηλεκτρικής ενέργειας",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) p":
            "Εστίαση στον τομέα της Χαμηλής και Μέσης Τάσης.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) h3":
            "Οργάνωση και υποστήριξη",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) p":
            "Λειτουργική προσέγγιση με έμφαση στη σωστή παρακολούθηση.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) h3":
            "Τεχνικός συντονισμός",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) p":
            "Καθαρή επαγγελματική εικόνα και ουσιαστική κατανόηση του αντικειμένου.",

          ".intro-section .section-label": "Η ARP GENERAL I.K.E.",
          ".intro-section h2":
            "Σύγχρονη εταιρική παρουσία με καθαρή επαγγελματική κατεύθυνση",
          ".intro-section .section-text":
            "Η ARP GENERAL I.K.E. δραστηριοποιείται στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας, με έμφαση στην οργάνωση, στη συνέπεια και στη σωστή συνεργασία.",

          ".highlights-section .section-label": "Βασικά σημεία",
          ".highlights-section h2": "Απλή, σοβαρή και στοχευμένη παρουσία",
          ".highlights-section .cards-grid .info-card:nth-child(1) h3":
            "Χαμηλή και Μέση Τάση",
          ".highlights-section .cards-grid .info-card:nth-child(1) p":
            "Εστίαση στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας.",
          ".highlights-section .cards-grid .info-card:nth-child(2) h3":
            "Οργάνωση έργου",
          ".highlights-section .cards-grid .info-card:nth-child(2) p":
            "Έμφαση στη σωστή υποστήριξη και στην καθαρή παρακολούθηση.",
          ".highlights-section .cards-grid .info-card:nth-child(3) h3":
            "Επαγγελματική προσέγγιση",
          ".highlights-section .cards-grid .info-card:nth-child(3) p":
            "Σοβαρότητα, υπευθυνότητα και σαφής αντίληψη του αντικειμένου.",

          ".sectors-preview .section-label": "Τομέας Δραστηριότητας",
          ".sectors-preview h2": "Εστίαση σε έναν σαφή και συγκεκριμένο τομέα",
          ".sectors-preview .sector-box h3":
            "Δίκτυα διανομής ηλεκτρικής ενέργειας Χαμηλής και Μέσης Τάσης",

          ".approach-section .section-label": "Η προσέγγισή μας",
          ".approach-section h2": "Οργάνωση, συνέπεια και επαγγελματική εικόνα",
          ".approach-section .section-text":
            "Η προσέγγιση της ARP GENERAL I.K.E. βασίζεται στη σοβαρότητα, στη σωστή συνεργασία και στην καθαρή επαγγελματική παρουσία.",

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
          "ARP GENERAL I.K.E. is active in the field of electrical power distribution networks, with a modern and organized professional approach.",
        selectors: {
          ".hero-home-copy .eyebrow": "ARP GENERAL I.K.E.",
          ".hero-home-copy h1": "Electrical power distribution networks",
          ".hero-home-copy .hero-text":
            "Modern professional presence with an organized and serious approach.",
          ".hero-home-copy .primary-btn": "Contact",

          ".hero-home-visual-panel h2": "Serious and organized approach",
          ".hero-home-visual-panel > p":
            "The company is active in the field of electrical power distribution networks, with emphasis on consistency and a professional image.",

          ".hero-home-points .hero-point:nth-child(1) h3": "Consistency",
          ".hero-home-points .hero-point:nth-child(1) p":
            "Stable and responsible professional presence.",
          ".hero-home-points .hero-point:nth-child(2) h3": "Organization",
          ".hero-home-points .hero-point:nth-child(2) p":
            "Clear and methodical approach in every cooperation.",
          ".hero-home-points .hero-point:nth-child(3) h3": "Field understanding",
          ".hero-home-points .hero-point:nth-child(3) p":
            "Focus on the real requirements of the sector.",

          ".hero-home-stats .hero-home-stat:nth-child(1) .hero-home-stat-label": "Sector",
          ".hero-home-stats .hero-home-stat:nth-child(1) strong": "LV / MV",
          ".hero-home-stats .hero-home-stat:nth-child(2) .hero-home-stat-label": "Focus",
          ".hero-home-stats .hero-home-stat:nth-child(2) strong": "Support & coordination",
          ".hero-home-stats .hero-home-stat:nth-child(3) .hero-home-stat-label": "Approach",
          ".hero-home-stats .hero-home-stat:nth-child(3) strong": "Organization & consistency",

          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) h3":
            "Electrical power distribution networks",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(1) p":
            "Focus on the Low and Medium Voltage sector.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) h3":
            "Organization and support",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(2) p":
            "Functional approach with emphasis on proper monitoring.",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) h3":
            "Technical coordination",
          ".hero-home-bottom .hero-home-bottom-card:nth-child(3) p":
            "Clear professional image and meaningful understanding of the field.",

          ".intro-section .section-label": "ARP GENERAL I.K.E.",
          ".intro-section h2":
            "Modern corporate presence with a clear professional direction",
          ".intro-section .section-text":
            "ARP GENERAL I.K.E. is active in the field of electrical power distribution networks, with emphasis on organization, consistency and proper cooperation.",

          ".highlights-section .section-label": "Key points",
          ".highlights-section h2": "Simple, serious and focused presence",
          ".highlights-section .cards-grid .info-card:nth-child(1) h3":
            "Low and Medium Voltage",
          ".highlights-section .cards-grid .info-card:nth-child(1) p":
            "Focus on the field of electrical power distribution networks.",
          ".highlights-section .cards-grid .info-card:nth-child(2) h3":
            "Project organization",
          ".highlights-section .cards-grid .info-card:nth-child(2) p":
            "Emphasis on proper support and clear monitoring.",
          ".highlights-section .cards-grid .info-card:nth-child(3) h3":
            "Professional approach",
          ".highlights-section .cards-grid .info-card:nth-child(3) p":
            "Seriousness, responsibility and clear understanding of the field.",

          ".sectors-preview .section-label": "Sector of activity",
          ".sectors-preview h2": "Focus on one clear and specific sector",
          ".sectors-preview .sector-box h3":
            "Low and Medium Voltage electrical power distribution networks",

          ".approach-section .section-label": "Our approach",
          ".approach-section h2": "Organization, consistency and professional image",
          ".approach-section .section-text":
            "ARP GENERAL I.K.E.'s approach is based on seriousness, proper cooperation and a clear professional presence.",

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