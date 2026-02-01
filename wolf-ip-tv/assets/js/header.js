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

    // ========================= Chargement GSAP et ScrollTrigger ========== //
    function loadGSAP(callback) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
      script.onload = function () {
        const st = document.createElement('script');
        st.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
        st.onload = callback;
        document.head.appendChild(st);
      };
      document.head.appendChild(script);
    }

    function animateEllipses() {
      const configs = [
        { selector: '.elipse-1', x: 18, y: -12, scale: 1.04, dur: 6 },
        { selector: '.elipse-2', x: -14, y: 10,  scale: 1.03, dur: 7.5 },
        { selector: '.elipse-3', x: 12, y: 16,   scale: 1.05, dur: 8 },
        { selector: '.elipse-4', x: -20, y: -10, scale: 1.04, dur: 6.5 },
        { selector: '.elipse-5', x: 16, y: -18,  scale: 1.03, dur: 9 },
        { selector: '.elipse-6', x: -12, y: 14,  scale: 1.05, dur: 7 },
        { selector: '.elipse-7', x: 10, y: -14,  scale: 1.04, dur: 8.5 }
      ];

      configs.forEach(({ selector, x, y, scale, dur }) => {
        const el = document.querySelector(selector);
        if (!el) return;

        gsap.to(el, {
          x: x,
          y: y,
          scale: scale,
          duration: dur,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true
        });
      });
    }

    function animateDOM() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo('h1', {
        opacity: 0,
        y: 40,
        filter: 'blur(14px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: 'h1',
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      });

      gsap.fromTo('h2', {
        opacity: 0,
        x: -30,
        filter: 'blur(8px)'
      }, {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'h2',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      gsap.fromTo('h3', {
        opacity: 0,
        y: 22,
        filter: 'blur(5px)'
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: 'h3',
          start: 'top 87%',
          toggleActions: 'play none none none'
        }
      });

      // --- Paragraphes : apparition avec un blur qui se dissipe doucement ---
      document.querySelectorAll('p').forEach((p, i) => {
        gsap.fromTo(p, {
          opacity: 0,
          y: 18,
          filter: 'blur(6px)'
        }, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          delay: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: p,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        });
      });

      // --- Images : zoom léger depuis un état flou, avec un décalage stagger si multiples ---
      document.querySelectorAll('img').forEach((img, i) => {
        gsap.fromTo(img, {
          opacity: 0,
          scale: 1.08,
          filter: 'blur(12px)'
        }, {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 86%',
            toggleActions: 'play none none none'
          }
        });
      });
    }

   
    function init() {
      loadGSAP(function () {
        animateEllipses();
        animateDOM();
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

  })();

});