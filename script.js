const menuToggle = document.querySelector(".menu-toggle");
const headerInner = document.querySelector(".header-inner");

if (menuToggle && headerInner) {
  const mobileNav = document.createElement("div");
  mobileNav.className = "mobile-nav";
  mobileNav.innerHTML = `
    <a href="index.html">Αρχική</a>
    <a href="company.html">Η Εταιρεία</a>
    <a href="services.html">Υπηρεσίες</a>
    <a href="sectors.html">Τομείς Δραστηριότητας</a>
    <a href="contact.html">Επικοινωνία</a>
    <div class="mobile-lang-switch">
      <button type="button" class="lang-btn active">GR</button>
      <button type="button" class="lang-btn">EN</button>
    </div>
  `;

  headerInner.after(mobileNav);

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
}