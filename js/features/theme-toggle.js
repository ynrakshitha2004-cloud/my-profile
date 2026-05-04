function initThemeToggle() {
    const toggleBtn = document.getElementById("theme-toggle");
    const root = document.documentElement;

    if (!toggleBtn) {
        console.error("❌ Theme toggle button not found");
        return;
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }

    // Toggle theme
    toggleBtn.addEventListener("click", () => {
        root.classList.toggle("dark");

        const isDark = root.classList.contains("dark");

        localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

        console.log(isDark ? "🌙 Dark Mode ON" : "☀️ Light Mode ON");
    });
}