(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("#navLinks");

  const setMenuOpen = (open) => {
    if (!menuToggle || !navLinks) return;
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) setMenuOpen(false);
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
