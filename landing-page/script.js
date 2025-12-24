/**
 * Ohana Real Estate - Coming Soon Page
 * Minimal JavaScript for enhanced interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class for any future CSS hooks
    document.body.classList.add('page-loaded');
    
    // Smooth scroll for any anchor links (future-proofing)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add subtle parallax effect to background on mouse move (desktop only)
    if (window.matchMedia('(min-width: 1024px)').matches) {
        const backgroundImage = document.querySelector('.background-image');
        
        if (backgroundImage) {
            let ticking = false;
            
            document.addEventListener('mousemove', (e) => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const xPos = (e.clientX / window.innerWidth - 0.5) * 10;
                        const yPos = (e.clientY / window.innerHeight - 0.5) * 10;
                        
                        backgroundImage.style.transform = `scale(1.04) translate(${xPos}px, ${yPos}px)`;
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }
    }
    
    // Console branding
    console.log(
        '%c🌺 Ohana Real Estate %c Coming Soon ',
        'background: linear-gradient(135deg, #8B2D5B, #A84073); color: white; padding: 8px 12px; border-radius: 4px 0 0 4px; font-weight: bold;',
        'background: #2C2C2C; color: #FAF8F5; padding: 8px 12px; border-radius: 0 4px 4px 0;'
    );
});
