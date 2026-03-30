// Script para alternar entre dark e light mode
(function () {
  const KEY = 'site-theme';
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    btn.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  // Inicializa tema: localStorage -> preferência do sistema -> padrão 'dark'
  const saved = localStorage.getItem(KEY);
  if (saved) {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Alterna e salva
  btn.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(KEY, next);
  });
})();
