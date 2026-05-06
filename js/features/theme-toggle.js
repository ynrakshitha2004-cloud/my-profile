const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save the preference so it stays on page refresh
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
document.body.classList.toggle("dark-mode");