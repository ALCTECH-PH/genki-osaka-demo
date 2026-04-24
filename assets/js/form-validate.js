/* form-validate.js — お問い合わせフォームバリデーション */
(function () {
  'use strict';

  const form = document.querySelector('.contact-form');
  if (!form) return;

  const rules = {
    contact_type:    { required: true },
    company:         { required: true, maxlength: 100 },
    name:            { required: true, maxlength: 50 },
    email:           { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    tel:             { required: false, pattern: /^[\d\-\+\(\)\s]{10,15}$/ },
    message:         { required: true, minlength: 10, maxlength: 2000 },
    privacy:         { required: true }
  };

  const messages = {
    required:  'この項目は必須です',
    maxlength: function (n) { return n + '文字以内で入力してください'; },
    minlength: function (n) { return n + '文字以上で入力してください'; },
    pattern:   {
      email:   '正しいメールアドレスを入力してください',
      tel:     '正しい電話番号を入力してください'
    }
  };

  function showError(field, msg) {
    field.classList.add('is-error');
    const err = form.querySelector('[data-error="' + field.name + '"]');
    if (err) { err.textContent = msg; err.classList.add('is-visible'); }
  }

  function clearError(field) {
    field.classList.remove('is-error');
    const err = form.querySelector('[data-error="' + field.name + '"]');
    if (err) { err.textContent = ''; err.classList.remove('is-visible'); }
  }

  function validateField(field) {
    const rule = rules[field.name];
    if (!rule) return true;

    const val = field.type === 'checkbox' ? field.checked : field.value.trim();

    if (rule.required && !val) {
      showError(field, messages.required);
      return false;
    }

    if (typeof val === 'string' && val.length > 0) {
      if (rule.maxlength && val.length > rule.maxlength) {
        showError(field, messages.maxlength(rule.maxlength));
        return false;
      }
      if (rule.minlength && val.length < rule.minlength) {
        showError(field, messages.minlength(rule.minlength));
        return false;
      }
      if (rule.pattern && !rule.pattern.test(val)) {
        const msg = messages.pattern[field.name] || 'フォーマットが正しくありません';
        showError(field, msg);
        return false;
      }
    }

    clearError(field);
    return true;
  }

  // real-time validation on blur
  form.querySelectorAll('input, select, textarea').forEach(function (field) {
    field.addEventListener('blur', function () { validateField(this); });
    field.addEventListener('input', function () {
      if (this.classList.contains('is-error')) validateField(this);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      if (!validateField(field)) valid = false;
    });

    if (!valid) {
      const firstError = form.querySelector('.is-error');
      if (firstError) firstError.focus();
      return;
    }

    // static preview: redirect to thanks
    window.location.href = 'thanks.html';
  });
}());
