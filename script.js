// 모바일 메뉴 토글
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// 다크모드 토글 (localStorage에 저장)
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  themeIcon.textContent = isDark ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeToggle.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  applyTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 스크롤 시 섹션 페이드인
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
