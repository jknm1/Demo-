document.addEventListener("DOMContentLoaded", () => {
  // ===== Fade-in on scroll =====
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:0.15, rootMargin:"0px 0px -50px 0px"});
  fadeElements.forEach(el => observer.observe(el));

  // ===== Smooth scrolling =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if(target) {
        e.preventDefault();
        window.scrollTo({top: target.offsetTop - 100, behavior:"smooth"});
      }
      const navToggle = document.getElementById("nav-toggle");
      if(navToggle) navToggle.checked = false;
    });
  });

  // ===== Dark Mode =====
  const themeToggle = document.getElementById("theme-toggle");
  if(localStorage.getItem("darkMode") === "enabled") document.body.classList.add("dark");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark")?"enabled":"disabled");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // ===== FAQ Toggle =====
  document.querySelectorAll(".faq-item h3").forEach(h => {
    h.addEventListener("click", () => {
      const p = h.nextElementSibling;
      p.style.display = p.style.display === "block" ? "none" : "block";
    });
  });

  // ===== Founder Modal =====
  window.openFounderNote = () => document.getElementById("founderModal").classList.add("show");
  window.closeFounderNote = () => document.getElementById("founderModal").classList.remove("show");
});
