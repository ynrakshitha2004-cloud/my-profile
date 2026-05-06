alert("Welcome to Rakshitha's Portfolio!");
document.addEventListener("DOMContentLoaded",function(){
    // Render features dynamically
   
    
    initModal();
    renderAboutMe();
    renderSkills();
    initContactValidation();
    initThemeToggle();
    searchProjects();
    renderEducation();
    renderExperience();
    renderCertifications();
    loadCertificates();
    // renderHackathons();

    initScrollProgress();
    initScrollSpy();
    initBackToTop();
    initTypingAnimation();
    initRecentlyViewed();
    initDynamicGreeting();
    initGeolocation();
})