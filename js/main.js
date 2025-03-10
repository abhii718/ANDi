
// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Initialize Theme
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') document.body.classList.add('light-theme');

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Banner Slider
let currentBanner = 0;
const banners = document.querySelectorAll('.banner');
const indicators = document.querySelector('.banner-indicators');

if (indicators) {
    // Create indicators
    banners.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('banner-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => showBanner(index));
        indicators.appendChild(indicator);
    });

    function showBanner(index) {
        banners[currentBanner].classList.remove('active');
        indicators.children[currentBanner].classList.remove('active');

        currentBanner = (index + banners.length) % banners.length;

        banners[currentBanner].classList.add('active');
        indicators.children[currentBanner].classList.add('active');
    }

    // Auto-rotate banners
    setInterval(() => {
        showBanner(currentBanner + 1);
    }, 5000);
}

// Active link handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        if (navLinks && hamburger) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
