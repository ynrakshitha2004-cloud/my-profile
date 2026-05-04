document.addEventListener("DOMContentLoaded", () => {
    const greetingEl = document.getElementById("greeting");

    function getGreeting() {
        const hour = new Date().getHours();

        if (hour < 12) {
            return "🌅 Good Morning! Welcome to my Portfolio";
        } else if (hour < 17) {
            return "☀️ Good Afternoon! Welcome to my Portfolio";
        } else if (hour < 21) {
            return "🌇 Good Evening! Welcome to my Portfolio";
        } else {
            return "🌙 Working late? Welcome to my Portfolio";
        }
    }

    // Set greeting
    greetingEl.textContent = getGreeting();

    // Optional: small animation effect
    greetingEl.style.opacity = 0;
    greetingEl.style.transform = "translateY(-10px)";

    setTimeout(() => {
        greetingEl.style.transition = "all 0.8s ease";
        greetingEl.style.opacity = 1;
        greetingEl.style.transform = "translateY(0)";
    }, 200);
});