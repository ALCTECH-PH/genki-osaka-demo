/* scroll-anim.js — [data-anim] IntersectionObserver */
(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-anim]').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el    = entry.target;
        const delay = el.dataset.animDelay;
        if (delay) el.style.transitionDelay = delay;
        el.classList.add('is-visible');
        observer.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-anim]').forEach(function (el) {
    observer.observe(el);
  });
}());
