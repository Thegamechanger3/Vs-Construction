// Curseur personnalisé
(function() {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    
    if (!cursor || !ring) return;
    
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    
    // Position du curseur
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Animation fluide pour l'anneau
    function animateRing() {
        ringX += (mouseX - ringX) * 1;
        ringY += (mouseY - ringY) * 1;
        
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        
        requestAnimationFrame(animateRing);
    }
    
    animateRing();
    
    // Effet au survol des éléments cliquables
    const hoverElements = document.querySelectorAll(
        'a, button, .btn-primary, .btn-secondary, .cs-li-link, .cs-button-solid, .service-card, .project-card, .process-step, .why-feature, .cs-item'
    );
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            ring.classList.remove('hover');
        });
    });
    
    // Cacher le curseur quand on quitte la fenêtre
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        ring.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        ring.style.opacity = '1';
    });
    
    // Désactiver sur mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        ring.style.display = 'none';
    }
})();