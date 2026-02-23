// ============================================
// PORTFOLIO - FILTRES ET ANIMATIONS
// ============================================

(function() {
    // Filtres
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.chantier-card');
    const countEl = document.getElementById('count');
    const noRes = document.getElementById('noResults');

    if (btns.length) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                let visibleCount = 0;

                cards.forEach(card => {
                    if (filter === 'tous' || card.dataset.cat === filter) {
                        card.classList.remove('hidden');
                        card.classList.remove('visible');
                        setTimeout(() => card.classList.add('visible'), 50);
                        visibleCount++;
                    } else {
                        card.classList.add('hidden');
                    }
                });

                if (countEl) countEl.textContent = visibleCount;
                if (noRes) noRes.classList.toggle('visible', visibleCount === 0);
            });
        });
    }

    // Animations reveal
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
})();