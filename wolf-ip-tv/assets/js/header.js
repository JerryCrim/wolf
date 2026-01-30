document.addEventListener('DOMContentLoaded', function () {
  
  // Injection de base.css
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/assets/css/base.css';
    document.head.appendChild(linkElement);
    
  const header = document.querySelector('header');

  if (!header) return;

  function updateHeaderOpacity() {
    const scrollY = window.scrollY;

    const maxScroll = 300;
    const maxOpacity = 0.6;

    let opacity = Math.min((scrollY / maxScroll) * maxOpacity, maxOpacity);
    header.style.padding = "1rem 0";
    if (scrollY === 0) {
      opacity = 0;
      header.style.padding = "0 0";
    }

    header.style.background = `rgba(0, 0, 0, ${opacity})`;
  }

  window.addEventListener('scroll', updateHeaderOpacity);

  updateHeaderOpacity();









  // ========================= Décoration ================================ //
  (function () {
    const ellipses = [
      {
        class: 'elipse-1',
        styles: {
          position: 'absolute',
          width: '672px',
          height: '672px',
          left: '156px',
          top: '5%',
          background: '#D90713',
          mixBlendMode: 'lighten',
          opacity: '0.15',
          filter: 'blur(290.35px)',
          pointerEvents: 'none',
          zIndex: '-1'
        }
      },
      {
        class: 'elipse-2',
        styles: {
          position: 'absolute',
          width: '672px',
          height: '672px',
          left: '880px',
          top: '0%',
          background: '#025D87',
          mixBlendMode: 'plus-lighter',
          opacity: '0.15',
          filter: 'blur(290.35px)',
          pointerEvents: 'none',
          zIndex: '-1'
        }
      },
      {
        class: 'elipse-3',
        styles: {
          position: 'absolute',
          width: '672px',
          height: '672px',
          left: 0,
          bottom: '70%',
          background: '#025D87',
          opacity: '0.2',
          filter: 'blur(290.35px)',
          transform: 'rotate(-138.82deg)',
          pointerEvents: 'none',
          zIndex: '-1'
        }
      },
      {
        class: 'elipse-4',
        styles: {
          position: 'absolute',
          width: '629.94px',
          height: '616.47px',
          right: 0,
          bottom: '45%',
          background: '#D90713',
          opacity: '0.15',
          filter: 'blur(290.35px)',
          pointerEvents: 'none',
          zIndex: '-1'
        }
      },
      {
        class: 'elipse-5',
        styles: {
          position: 'absolute',
          width: '600.35px',
          height: '664.01px',
          left: '-3px',
          bottom: '37%',
          background: '#D90713',
          opacity: '0.15',
          filter: 'blur(290.35px)',
          transform: 'matrix(0.34, 0.94, -0.97, 0.25, 0, 0)',
          pointerEvents: 'none',
          zIndex: '-1'
        }
      },
      {
        class: 'elipse-6',
        styles: {
          position: 'absolute',
          width: '579.62px',
          height: '664.01px',
          right: '5%',
          bottom: '10%',
          background: '#025D87',
          opacity: '0.15',
          filter: 'blur(290.35px)',
          transform: 'matrix(0.34, 0.94, -0.97, 0.25, 0, 0)',
          pointerEvents: 'none',
          zIndex: '-1'
        }
      },
      {
        class: 'elipse-7',
        styles: {
          position: 'absolute',
          width: '579.62px',
          height: '664.01px',
          left: '16px',
          bottom: '0%',
          background: '#D90713',
          opacity: '0.15',
          filter: 'blur(290.35px)',
          transform: 'matrix(0.34, 0.94, -0.97, 0.25, 0, 0)',
          pointerEvents: 'none',
          zIndex: '-1'
        }
      }
    ];

    function createEllipses() {
      const body = document.body;

      ellipses.forEach(ellipse => {
        const div = document.createElement('div');
        div.className = ellipse.class;

        Object.assign(div.style, ellipse.styles);

        body.appendChild(div);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createEllipses);
    } else {
      createEllipses();
    }
  })();


});


