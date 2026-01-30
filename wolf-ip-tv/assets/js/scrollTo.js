document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('[data-scroll-to]').forEach(trigger => {
        
        const targetId = trigger.getAttribute('data-scroll-to');
        const target = document.querySelector(`[data-scroll-target="${targetId}"]`);
        
        if (!target) {
            console.warn(`Aucun élément trouvé avec data-scroll-target="${targetId}"`);
            return;
        }
        
        trigger.style.cursor = 'pointer';
        trigger.setAttribute('role', 'button');
        trigger.setAttribute('tabindex', '0');
        
        const handleScroll = function (e) {
            e.preventDefault();
            
            const offset = trigger.getAttribute('data-scroll-offset') || 0;
            const behavior = trigger.getAttribute('data-scroll-behavior') || 'smooth';
            
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - parseInt(offset);
            
            window.scrollTo({
                top: targetPosition,
                behavior: behavior
            });
        };
        
        trigger.addEventListener('click', handleScroll);
        
        trigger.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                handleScroll.call(this, e);
            }
        });
    });
});