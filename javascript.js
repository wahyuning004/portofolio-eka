// Data Terjemahan
const translations = {
    en: {
        "nav-home": "Home",
        "nav-projects": "Projects",
        "nav-achievements": "Achievements",
        "nav-contact": "Contact"
    },
    id: {
        "nav-home": "Beranda",
        "nav-projects": "Proyek",
        "nav-achievements": "Prestasi",
        "nav-contact": "Kontak"
    }
};

// Inisialisasi Fitur (Dipanggil oleh loader.js setelah nav dimuat)
function initNavFeatures() {
    const themeBtn = document.getElementById('theme-toggle');
    const langSelect = document.getElementById('lang-select');
    const body = document.body;

    // 1. Logika Dark/Light Mode
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const icon = themeBtn.querySelector('i');
        
        // Ganti Icon
        if(body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // 2. Logika Ganti Bahasa
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    });
}

// Update loader.js Anda untuk memanggil initNavFeatures() 
// setelah loadComponent('nav-placeholder', ...) selesai.