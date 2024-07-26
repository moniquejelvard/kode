document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const nav = document.getElementById("nav");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
    burgerMenu.classList.toggle("toggle");
  });

  const languageLinks = document.querySelectorAll(".lang-link");
  const elementsToTranslate = document.querySelectorAll(
    "[data-lang-da], [data-lang-en]"
  );

  function applyLanguage(selectedLang) {
    elementsToTranslate.forEach((element) => {
      const langDa = element.getAttribute("data-lang-da");
      const langEn = element.getAttribute("data-lang-en");
      if (selectedLang === "da") {
        element.textContent = langDa || element.textContent;
      } else if (selectedLang === "en") {
        element.textContent = langEn || element.textContent;
      }
    });

    // Update active class
    languageLinks.forEach((link) => {
      if (link.getAttribute("data-lang") === selectedLang) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  languageLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      const selectedLang = this.getAttribute("data-lang");
      localStorage.setItem("preferredLanguage", selectedLang);
      applyLanguage(selectedLang);
    });
  });

  // Initial language setup
  const savedLang = localStorage.getItem("preferredLanguage");
  const initialLang = savedLang ? savedLang : document.documentElement.lang;
  applyLanguage(initialLang);
});
