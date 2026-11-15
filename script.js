const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");
const savedTheme = localStorage.getItem("aziza-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("aziza-theme", nextTheme);
});

document.querySelector("#year").textContent = new Date().getFullYear();
