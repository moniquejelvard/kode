document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const nav = document.getElementById("nav");

  burgerMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
    burgerMenu.classList.toggle("toggle");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const languageLinks = document.querySelectorAll(".lang-link");
  const elementsToTranslate = document.querySelectorAll(
    "[data-lang-da], [data-lang-en]"
  );

  languageLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Forhindrer standard linkadfærd
      const selectedLang = this.getAttribute("data-lang");

      elementsToTranslate.forEach((element) => {
        const langDa = element.getAttribute("data-lang-da");
        const langEn = element.getAttribute("data-lang-en");
        if (selectedLang === "da") {
          element.textContent = langDa || element.textContent;
        } else if (selectedLang === "en") {
          element.textContent = langEn || element.textContent;
        }
      });

      // Opdater aktiv klasse
      languageLinks.forEach((link) => {
        if (link.getAttribute("data-lang") === selectedLang) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    });
  });

  // Initial language setup
  const currentLang = document.documentElement.lang;
  languageLinks.forEach((link) => {
    if (link.getAttribute("data-lang") === currentLang) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
