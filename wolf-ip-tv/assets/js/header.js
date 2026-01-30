document.addEventListener('DOMContentLoaded', function () {
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









  // ========================= Décoration ================================ //
  // (function () {
  //   const ellipses = [
  //     {
  //       class: 'elipse-1',
  //       styles: {
  //         position: 'absolute',
  //         width: '672px',
  //         height: '672px',
  //         left: '156px',
  //         top: '5%',
  //         background: '#D90713',
  //         mixBlendMode: 'lighten',
  //         opacity: '0.39',
  //         filter: 'blur(290.35px)',
  //         pointerEvents: 'none',
  //         zIndex: '-1'
  //       }
  //     },
  //     {
  //       class: 'elipse-2',
  //       styles: {
  //         position: 'absolute',
  //         width: '672px',
  //         height: '672px',
  //         left: '880px',
  //         top: '0%',
  //         background: '#025D87',
  //         mixBlendMode: 'plus-lighter',
  //         opacity: '0.39',
  //         filter: 'blur(290.35px)',
  //         pointerEvents: 'none',
  //         zIndex: '-1'
  //       }
  //     },
  //     {
  //       class: 'elipse-3',
  //       styles: {
  //         position: 'absolute',
  //         width: '672px',
  //         height: '672px',
  //         left: '0px',
  //         top: '1.5%',
  //         background: '#025D87',
  //         opacity: '0.39',
  //         filter: 'blur(290.35px)',
  //         transform: 'rotate(-138.82deg)',
  //         pointerEvents: 'none',
  //         zIndex: '-1'
  //       }
  //     },
  //     {
  //       class: 'elipse-4',
  //       styles: {
  //         position: 'absolute',
  //         width: '629.94px',
  //         height: '616.47px',
  //         left: '623.68px',
  //         top: '50%',
  //         background: '#D90713',
  //         opacity: '0.39',
  //         filter: 'blur(290.35px)',
  //         transform: 'matrix(-0.8, -0.6, 0.72, -0.7, 0, 0)',
  //         pointerEvents: 'none',
  //         zIndex: '-1'
  //       }
  //     },
  //     {
  //       class: 'elipse-5',
  //       styles: {
  //         position: 'absolute',
  //         width: '600.35px',
  //         height: '664.01px',
  //         left: '-3px',
  //         top: '68%',
  //         background: '#D90713',
  //         opacity: '0.39',
  //         filter: 'blur(290.35px)',
  //         transform: 'matrix(0.34, 0.94, -0.97, 0.25, 0, 0)',
  //         pointerEvents: 'none',
  //         zIndex: '-1'
  //       }
  //     },
  //     {
  //       class: 'elipse-6',
  //       styles: {
  //         position: 'absolute',
  //         width: '579.62px',
  //         height: '664.01px',
  //         left: '390.28px',
  //         top: '81%',
  //         background: '#025D87',
  //         opacity: '0.39',
  //         filter: 'blur(290.35px)',
  //         transform: 'matrix(0.34, 0.94, -0.97, 0.25, 0, 0)',
  //         pointerEvents: 'none',
  //         zIndex: '-1'
  //       }
  //     },
  //     {
  //       class: 'elipse-7',
  //       styles: {
  //         position: 'absolute',
  //         width: '579.62px',
  //         height: '664.01px',
  //         left: '16px',
  //         top: '93%',
  //         background: '#D90713',
  //         opacity: '0.39',
  //         filter: 'blur(290.35px)',
  //         transform: 'matrix(0.34, 0.94, -0.97, 0.25, 0, 0)',
  //         pointerEvents: 'none',
  //         zIndex: '-1'
  //       }
  //     }
  //   ];

  //   function createEllipses() {
  //     const body = document.body;

  //     ellipses.forEach(ellipse => {
  //       const div = document.createElement('div');
  //       div.className = ellipse.class;

  //       Object.assign(div.style, ellipse.styles);

  //       body.appendChild(div);
  //     });
  //   }

  //   if (document.readyState === 'loading') {
  //     document.addEventListener('DOMContentLoaded', createEllipses);
  //   } else {
  //     createEllipses();
  //   }
  // })();
});


