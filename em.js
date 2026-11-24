(function () {
  const revealTargets = document.querySelectorAll(
    ".card, .step, .price-card, .mini-panel, .hero-stats"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((target, index) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(18px)";
      target.style.transition =
        "opacity 0.55s ease " + (index % 4) * 0.07 + "s, transform 0.55s ease " +
        (index % 4) * 0.07 +
        "s";
      observer.observe(target);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();