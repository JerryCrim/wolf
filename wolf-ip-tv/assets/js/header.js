document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  if (!header) return;

  function updateHeaderOpacity() {
    const scrollY = window.scrollY;
    
    const maxScroll = 300; 
    const maxOpacity = 0.6;
    
    let opacity = Math.min((scrollY / maxScroll) * maxOpacity, maxOpacity);
    
    if (scrollY === 0) {
      opacity = 0;
    }
    
    header.style.background = `rgba(0, 0, 0, ${opacity})`;
  }

  window.addEventListener('scroll', updateHeaderOpacity);
  
  updateHeaderOpacity();
});