document.addEventListener('DOMContentLoaded', () => {
    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.routes a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Stats counter animation
    const statCounters = document.querySelectorAll('.stats-count');
    statCounters.forEach(counter => {
        const target = parseInt(counter.getAttribute('num'), 10) || 0;
        let count = 0;
        const duration = 1500;
        const stepTime = Math.max(20, Math.floor(duration / (target || 1)));

        const timer = setInterval(() => {
            count += 1;
            if (count >= target) {
                counter.innerText = `+${target}`;
                clearInterval(timer);
            } else {
                counter.innerText = `+${count}`;
            }
        }, stepTime);
    });

    // Mobile menu toggle
    const openBtn = document.getElementById('open-nav');
    const overlay = document.getElementById('nav-modal-overlay');

    if (openBtn && overlay) {
        openBtn.addEventListener('click', () => {
            overlay.classList.toggle('hidden');
        });
    }
});
