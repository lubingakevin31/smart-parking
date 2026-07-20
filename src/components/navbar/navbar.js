
document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) lucide.createIcons();

    // Gestion du Thème (Dark/Light Mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const iconDark = document.querySelector('.theme-icon-dark');
    const iconLight = document.querySelector('.theme-icon-light');

    if (themeToggleBtn) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            if(iconDark) iconDark.style.display = 'none';
            if(iconLight) iconLight.style.display = 'block';
        }

        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            if (isDark) {
                if(iconDark) iconDark.style.display = 'none';
                if(iconLight) iconLight.style.display = 'block';
            } else {
                if(iconDark) iconDark.style.display = 'block';
                if(iconLight) iconLight.style.display = 'none';
            }
        });
    }

    // Menu Hamburger
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('open');
        });
    }

    // Dropdown Profil
    const profileMenuContainer = document.getElementById('profile-menu-container');
    const userProfileDropdown = document.getElementById('user-profile-dropdown');
    if (profileMenuContainer && userProfileDropdown) {
        profileMenuContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            userProfileDropdown.classList.toggle('open');
        });
        document.addEventListener('click', () => {
            userProfileDropdown.classList.remove('open');
        });
    }
});