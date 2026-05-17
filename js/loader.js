async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
        
        // Jika yang dimuat adalah nav, jalankan fungsi pendukungnya
        if (elementId === 'nav-placeholder') {
            initNavFeatures(); 
        }
    } catch (error) {
        console.error("Gagal memuat: " + filePath, error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        loadComponent('nav-placeholder', 'components/nav.html'),
        loadComponent('hero-placeholder', 'components/hero.html'),
        loadComponent('projects-placeholder', 'components/projects.html'),
        loadComponent('about-placeholder', 'components/about.html'),
        loadComponent('achievements-placeholder', 'components/achievements.html'),
        loadComponent('contact-placeholder', 'components/contact.html')
    ]);
    
    // Check if splash is already hidden or will be hidden
    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
});