// DOM Performance Optimization Script
(function() {
  'use strict';
  
  // Fonction pour simplifier le DOM sur mobile
  function optimizeMobileDOM() {
    if (window.innerWidth <= 768) {
      // Supprimer les éléments décoratifs non essentiels
      const decorativeElements = document.querySelectorAll('.absolute, .decoration-element, [class*="blur"]');
      decorativeElements.forEach(el => {
        if (!el.classList.contains('essential')) {
          el.remove();
        }
      });
      
      // Simplifier les structures de grille complexes
      const complexGrids = document.querySelectorAll('[class*="grid-cols-"]:not([class*="grid-cols-1"])');
      complexGrids.forEach(grid => {
        grid.className = grid.className.replace(/grid-cols-\d+/g, 'grid-cols-1');
      });
      
      // Réduire les transformations CSS
      const transformedElements = document.querySelectorAll('[style*="transform"]');
      transformedElements.forEach(el => {
        el.style.transform = '';
      });
    }
  }
  
  // Lazy loading amélioré pour les images
  function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Optimiser les performances d'interaction
  function optimizeInteractions() {
    // Débouncer les événements de scroll
    let scrollTimer;
    window.addEventListener('scroll', function() {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(function() {
        // Actions à exécuter après le scroll
      }, 10);
    }, { passive: true });
    
    // Optimiser les hover effects sur mobile
    if ('ontouchstart' in window) {
      document.body.classList.add('touch-device');
    }
  }
  
  // Réduire les reflows et repaints
  function minimizeReflows() {
    // Regrouper les lectures/écritures DOM
    const elements = document.querySelectorAll('.dynamic-element');
    const measurements = [];
    
    // Phase de lecture
    elements.forEach(el => {
      measurements.push({
        element: el,
        width: el.offsetWidth,
        height: el.offsetHeight
      });
    });
    
    // Phase d'écriture
    measurements.forEach(data => {
      if (data.width < 300) {
        data.element.classList.add('compact');
      }
    });
  }
  
  // Initialisation au chargement de la page
  function init() {
    optimizeMobileDOM();
    setupLazyLoading();
    optimizeInteractions();
    minimizeReflows();
  }
  
  // Démarrer l'optimisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Re-optimiser lors du redimensionnement
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(optimizeMobileDOM, 250);
  });
  
})();