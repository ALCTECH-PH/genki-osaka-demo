/* accordion.js — FAQ アコーディオン */
(function () {
  'use strict';

  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.setAttribute('aria-expanded', 'false');

    btn.addEventListener('click', function () {
      const item = this.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('is-open');
      const list = item.closest('.faq-list');

      // close all siblings first (accordion behavior)
      if (list) {
        list.querySelectorAll('.faq-item.is-open').forEach(function (open) {
          if (open !== item) {
            open.classList.remove('is-open');
            open.querySelector('.faq-question')
              .setAttribute('aria-expanded', 'false');

            const openAnswer = open.querySelector('.faq-answer');
            if (openAnswer) openAnswer.style.maxHeight = null;
          }
        });
      }

      // toggle current item
      if (isOpen) {
        // CLOSE
        item.classList.remove('is-open');
        this.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.maxHeight = null;
      } else {
        // OPEN
        item.classList.add('is-open');
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}());