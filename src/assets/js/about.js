// ============================================
// ANIMATIONS PAGE À PROPOS
// ============================================

(function() {
    // Timeline items + progress bar
    const tlObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                // Animer les items un par un
                document.querySelectorAll('.tl-item').forEach((item, i) => {
                    setTimeout(() => item.classList.add('visible'), i * 180);
                });
                
                // Animer la barre de progression
                const prog = document.getElementById('tlProgress');
                if (prog) {
                    prog.style.width = '100%';
                }
                
                tlObs.disconnect();
            }
        });
    }, { threshold: 0.3 });

    const tlSection = document.querySelector('.timeline-h');
    if (tlSection) tlObs.observe(tlSection);

    // Chiffres reveal
    const chifObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                document.querySelectorAll('.chiffre-item').forEach((item, i) => {
                    setTimeout(() => item.classList.add('visible'), i * 130);
                });
                chifObs.disconnect();
            }
        });
    }, { threshold: 0.4 });

    const chifSection = document.querySelector('.chiffres');
    if (chifSection) chifObs.observe(chifSection);

    // Scroll reveal général
    const revealObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
})();