(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function isDark() {
      var t = root.getAttribute('data-theme');
      if (t) return t === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    function update() {
      btn.textContent = isDark() ? '☀️' : '🌙';
      btn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
    }
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      update();
    });
    update();
  });
})();

document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!menuBtn || !nav) return;
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.textContent = open ? 'Close' : 'Menu';
  });
});