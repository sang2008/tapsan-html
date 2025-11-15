

// Dark mode toggle
const dmToggle = document.getElementById('darkModeToggle');
dmToggle && dmToggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  dmToggle.textContent = isDark ? '☀️' : '🌙';  
});

// Title marquee cực mượt
const baseTitle = "Tây Thạnh express - Tin tức mới nhất cập nhật liên tục";