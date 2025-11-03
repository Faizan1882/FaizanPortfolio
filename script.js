// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
}
