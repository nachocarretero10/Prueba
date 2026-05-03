document.getElementById('year').textContent = new Date().getFullYear();

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.15 });
document.querySelectorAll('.section, .card').forEach(el => io.observe(el));
