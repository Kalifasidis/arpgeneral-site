const currentPage = (() => {
  const path = window.location.pathname.split("/").pop();
  return path && path.trim() !== "" ? path : "index.html";
})();

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
        title: "ARP GENERAL I.K.E. | Έργα σε δίκτυα διανομής ηλεκτρικής ενέργειας",
        description:
          "Η ARP GENERAL I.K.E. δραστηριοποιείται στον τομέα των έργων σε δίκτυα διανομής ηλεκτρικής ενέργειας, με σύγχρονη εταιρική παρουσία, τεχνογνωσία και οργανωμένη προσέγγιση.",
        selectors: {
          ".hero .eyebrow": "ARP GENERAL I.K.E.",
          ".hero h1": "Έργα σε δίκτυα διανομής ηλεκτρικής ενέργειας",
          ".hero .hero-text":
            "Σύγχρονη εταιρική παρουσία με τεχνογνωσία, οργάνωση και ουσιαστική γνώση του αντικειμένου.",
          ".hero .primary-btn": "Επικοινωνία",
          ".hero-card h2": "Σοβαρή και οργανωμένη προσέγγιση",
          ".hero-card p":
            "Η εταιρεία δραστηριοποιείται στον τομέα των έργων σε δίκτυα διανομής ηλεκτρικής ενέργειας, με σταθερή παρουσία τα τελευταία χρόνια και επαγγελματική εικόνα.",
          ".intro-section .section-label": "Η ARP GENERAL I.K.E.",
          ".intro-section h2":
            "Σύγχρονη εταιρική παρουσία με οργανωτική και τεχνική προσέγγιση",
          ".intro-section .section-text":
            "Η ARP GENERAL I.K.E. δραστηριοποιείται στον τομέα των έργων σε δίκτυα διανομής ηλεκτρικής ενέργειας, με προσανατολισμό στη συνέπεια, στην οργάνωση και στη σωστή υποστήριξη του έργου.",
          ".highlights-section .section-label": "Βασικοί άξονες",
          ".highlights-section h2": "Καθαρή και στοχευμένη εταιρική παρουσία",
          ".cards-grid .info-card:nth-child(1) h3":
            "Δίκτυα διανομής ηλεκτρικής ενέργειας",
          ".cards-grid .info-card:nth-child(1) p":
            "Εστίαση σε έργα που εντάσσονται στον ευρύτερο τομέα των δικτύων διανομής ηλεκτρικής ενέργειας.",
          ".cards-grid .info-card:nth-child(2) h3":
            "Οργάνωση και υποστήριξη έργων",
          ".cards-grid .info-card:nth-child(2) p":
            "Επαγγελματική προσέγγιση με έμφαση στον συντονισμό, στην παρακολούθηση και στην ομαλή εξέλιξη του έργου.",
          ".cards-grid .info-card:nth-child(3) h3":
            "Τεχνογνωσία και λειτουργικός συντονισμός",
          ".cards-grid .info-card:nth-child(3) p":
            "Γνώση του αντικειμένου και ουσιαστική κατανόηση των απαιτήσεων που συνοδεύουν τεχνικά έργα πεδίου.",
          ".sectors-preview .section-label": "Τομέας Δραστηριότητας",
          ".sectors-preview h2":
            "Ο βασικός τομέας στον οποίο επικεντρώνεται η δραστηριότητα της εταιρείας",
          ".sectors-grid .sector-box:nth-child(1) h3":
            "Δίκτυα διανομής ηλεκτρικής ενέργειας Χαμηλής και Μέσης Τάσης",
          ".approach-section .section-label": "Η προσέγγισή μας",
          ".approach-section h2":
            "Επαγγελματική προσέγγιση με έμφαση στην οργάνωση και τη συνέπεια",
          ".approach-section .section-text":
            "Η εταιρική παρουσία της ARP GENERAL I.K.E. βασίζεται στη σοβαρότητα, στη σαφή επαγγελματική εικόνα και στην οργανωμένη υποστήριξη έργων που απαιτούν τεχνική κατανόηση και λειτουργικό συντονισμό.",
          ".contact-cta .section-label": "Επικοινωνία",
          ".contact-cta h2": "Επικοινωνήστε μαζί μας",
          ".contact-cta .primary-btn": "Αποστολή Μηνύματος",
          ".footer-brand .footer-title": "ARP GENERAL I.K.E.",
          ".footer-links .footer-heading": "Πλοήγηση",
        },
        listItems: [
          {
            selector: ".contact-cta .contact-list li",
            values: ["Νέα Σμύρνη, Αττική", "6978441042", "info@arpgeneral.com"],
          },
          {
            selector: ".footer-brand p",
            values: ["Νέα Σμύρνη, Αττική", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },
      "contact.html": {
        title: "Επικοινωνία | ARP GENERAL I.K.E.",
        description:
          "Επικοινωνήστε με την ARP GENERAL I.K.E. για πληροφορίες σχετικά με έργα σε δίκτυα διανομής ηλεκτρικής ενέργειας.",
        selectors: {
          ".page-hero .section-label": "Επικοινωνία",
          ".page-hero h1": "Επικοινωνήστε με την ARP GENERAL I.K.E.",
          ".page-hero .page-hero-text":
            "Για πληροφορίες σχετικά με την εταιρική παρουσία και τον τομέα δραστηριότητας της ARP GENERAL I.K.E., μπορείτε να επικοινωνήσετε μαζί μας μέσω των παρακάτω στοιχείων ή της φόρμας επικοινωνίας.",
          ".content-main .section-label": "Στοιχεία επικοινωνίας",
          ".content-main .contact-page-title": "ARP GENERAL I.K.E.",
          ".contact-form-card .section-label": "Φόρμα Επικοινωνίας",
          "label[for='full-name']": "Ονοματεπώνυμο",
          "label[for='email']": "Email",
          "label[for='phone']": "Τηλέφωνο",
          "label[for='message']": "Μήνυμα",
          ".form-btn": "Αποστολή",
          ".contact-cta .section-label": "ARP GENERAL I.K.E.",
          ".contact-cta h2":
            "Σύγχρονη εταιρική παρουσία με καθαρή επαγγελματική εικόνα",
          ".contact-cta .primary-btn": "Αποστολή Email",
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
            selector: ".contact-cta .contact-list li",
            values: ["Νέα Σμύρνη, Αττική", "6978441042", "info@arpgeneral.com"],
          },
          {
            selector: ".footer-brand p",
            values: ["Νέα Σμύρνη, Αττική", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },
      "company.html": {
        title: "Η Εταιρεία | ARP GENERAL I.K.E.",
        description:
          "Η ARP GENERAL I.K.E. αποτελεί σύγχρονη εταιρική παρουσία στον τομέα των έργων σε δίκτυα διανομής ηλεκτρικής ενέργειας.",
      },
      "services.html": {
        title: "Υπηρεσίες | ARP GENERAL I.K.E.",
        description:
          "Δείτε τις υπηρεσίες και τη συνολική επαγγελματική προσέγγιση της ARP GENERAL I.K.E. στον τομέα των έργων σε δίκτυα διανομής ηλεκτρικής ενέργειας.",
      },
      "sectors.html": {
        title: "Τομείς Δραστηριότητας | ARP GENERAL I.K.E.",
        description:
          "Η ARP GENERAL I.K.E. επικεντρώνεται στον τομέα των δικτύων διανομής ηλεκτρικής ενέργειας Χαμηλής και Μέσης Τάσης.",
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
        title: "ARP GENERAL I.K.E. | Electrical power distribution network projects",
        description:
          "ARP GENERAL I.K.E. is active in electrical power distribution network projects, with a modern corporate presence, know-how and an organized approach.",
        selectors: {
          ".hero .eyebrow": "ARP GENERAL I.K.E.",
          ".hero h1": "Electrical power distribution network projects",
          ".hero .hero-text":
            "Modern corporate presence with know-how, organization and solid understanding of the field.",
          ".hero .primary-btn": "Contact",
          ".hero-card h2": "Serious and organized approach",
          ".hero-card p":
            "The company is active in electrical power distribution network projects, with a steady presence in recent years and a professional image.",
          ".intro-section .section-label": "ARP GENERAL I.K.E.",
          ".intro-section h2":
            "Modern corporate presence with an organizational and technical approach",
          ".intro-section .section-text":
            "ARP GENERAL I.K.E. is active in electrical power distribution network projects, focusing on consistency, organization and proper project support.",
          ".highlights-section .section-label": "Key pillars",
          ".highlights-section h2": "Clear and focused corporate presence",
          ".cards-grid .info-card:nth-child(1) h3":
            "Electrical power distribution networks",
          ".cards-grid .info-card:nth-child(1) p":
            "Focus on projects that fall within the broader field of electrical power distribution networks.",
          ".cards-grid .info-card:nth-child(2) h3":
            "Project organization and support",
          ".cards-grid .info-card:nth-child(2) p":
            "Professional approach with emphasis on coordination, monitoring and smooth project progress.",
          ".cards-grid .info-card:nth-child(3) h3":
            "Know-how and operational coordination",
          ".cards-grid .info-card:nth-child(3) p":
            "Knowledge of the field and substantial understanding of the requirements that accompany technical on-site projects.",
          ".sectors-preview .section-label": "Sector of activity",
          ".sectors-preview h2":
            "The main sector in which the company's activity is focused",
          ".sectors-grid .sector-box:nth-child(1) h3":
            "Low and Medium Voltage electrical power distribution networks",
          ".approach-section .section-label": "Our approach",
          ".approach-section h2":
            "Professional approach with emphasis on organization and consistency",
          ".approach-section .section-text":
            "The corporate presence of ARP GENERAL I.K.E. is based on seriousness, a clear professional image and organized support for projects that require technical understanding and operational coordination.",
          ".contact-cta .section-label": "Contact",
          ".contact-cta h2": "Get in touch with us",
          ".contact-cta .primary-btn": "Send Message",
          ".footer-brand .footer-title": "ARP GENERAL I.K.E.",
          ".footer-links .footer-heading": "Navigation",
        },
        listItems: [
          {
            selector: ".contact-cta .contact-list li",
            values: ["Nea Smyrni, Attica", "6978441042", "info@arpgeneral.com"],
          },
          {
            selector: ".footer-brand p",
            values: ["Nea Smyrni, Attica", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },
      "contact.html": {
        title: "Contact | ARP GENERAL I.K.E.",
        description:
          "Contact ARP GENERAL I.K.E. for information regarding electrical power distribution network projects.",
        selectors: {
          ".page-hero .section-label": "Contact",
          ".page-hero h1": "Contact ARP GENERAL I.K.E.",
          ".page-hero .page-hero-text":
            "For information regarding the company's profile and sector of activity, you can contact ARP GENERAL I.K.E. through the details below or via the contact form.",
          ".content-main .section-label": "Contact details",
          ".content-main .contact-page-title": "ARP GENERAL I.K.E.",
          ".contact-form-card .section-label": "Contact Form",
          "label[for='full-name']": "Full Name",
          "label[for='email']": "Email",
          "label[for='phone']": "Phone",
          "label[for='message']": "Message",
          ".form-btn": "Send",
          ".contact-cta .section-label": "ARP GENERAL I.K.E.",
          ".contact-cta h2": "Modern corporate presence with a clear professional image",
          ".contact-cta .primary-btn": "Send Email",
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
            selector: ".contact-cta .contact-list li",
            values: ["Nea Smyrni, Attica", "6978441042", "info@arpgeneral.com"],
          },
          {
            selector: ".footer-brand p",
            values: ["Nea Smyrni, Attica", "info@arpgeneral.com", "6978441042"],
          },
        ],
      },
      "company.html": {
        title: "Company | ARP GENERAL I.K.E.",
        description:
          "ARP GENERAL I.K.E. presents its corporate profile, organizational approach and activity in the electrical power distribution network sector.",
      },
      "services.html": {
        title: "Services | ARP GENERAL I.K.E.",
        description:
          "Explore the services and the overall professional approach of ARP GENERAL I.K.E. in electrical power distribution network projects.",
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
  updateCommonContent(lang);
  updatePageContent(lang);
}

document.querySelectorAll(".lang-switch .lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const language = btn.textContent.trim().toLowerCase();
    applyLanguage(language);
  });
});

applyLanguage(getSavedLanguage());