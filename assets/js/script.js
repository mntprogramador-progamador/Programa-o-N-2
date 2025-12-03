// Script minimal: atualiza ano e alterna tema.
// Você pode editar este arquivo para adicionar interatividade.

document.addEventListener('DOMContentLoaded', function(){
  // Atualiza ano no rodapé
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Tema: guarda preferência em localStorage
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const stored = localStorage.getItem('theme') || 'light';
  if(stored === 'dark') root.setAttribute('data-theme','dark');
  else root.removeAttribute('data-theme');

  btn.addEventListener('click', function(){
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    if(next === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });

  // Ajusta ícone inicial
  btn.textContent = (localStorage.getItem('theme') === 'dark') ? '☀️' : '🌙';
});
